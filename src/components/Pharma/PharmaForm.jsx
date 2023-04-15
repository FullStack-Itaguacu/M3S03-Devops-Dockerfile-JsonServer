import React, { useState } from "react";
import { useForm } from "react-hook-form";

export function PharmaForm() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [ endereco, setEndereco ] = useState();
    const [ formulario, setFormulario ] = useState({
        cep: '',
    });

    const atualizarCep = (campo, valor) => {
        const novoFormulario = { ...formulario, [campo]: valor };
        setFormulario(novoFormulario);
        console.log(novoFormulario);
    };

    const buscarCep = () => {
        if(formulario.cep.length !== 8) {
            alert('CEP inválido');
            return;
        }
        fetch(`https://viacep.com.br/ws/${formulario.cep}/json/`)
        .then((response) => response.json())
        .then((data) => setEndereco(data));
        console.log(endereco);
};

    const onSubmit = (data) => {
        fetch('http://localhost:5000/pharmacys', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(data);
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p>Dados Empresa</p>
                <label>Razão Social</label>
                <input
                    {...register("razaosocial", { required: true })}
                    aria-invalid={errors.razaosocial ? "true" : "false"}
                />
                {errors.razaosocial?.type === 'required' && <p role="alert">Razão Social Obrigatório</p>}

                <label>CNPJ</label>
                <input
                    {...register("CNPJ", { required: "CNPJ Obrigatório" })}
                    aria-invalid={errors.cnpj ? "true" : "false"}
                />
                {errors.cnpj && <p role="alert">{errors.cnpj?.message}</p>}

                <label>Nome Fantasia</label>
                <input
                    {...register("fantasia", { required: true })}
                    aria-invalid={errors.fantasia ? "true" : "false"}
                />
                {errors.fantasia?.type === 'required' && <p role="alert">Nome Obrigatório</p>}
            </div>

            <div>
                <label>E-mail</label>
                <input
                    {...register("email", { required: "email Obrigatório" })}
                    aria-invalid={errors.email? "true" : "false"}
                />
                {errors.email && <p role="alert">{errors.email?.message}</p>}

                <label>Telefone</label>
                <input
                    {...register("phone")}
                    aria-invalid={errors.email? "true" : "false"}
                />
                <label>Celular</label>
                <input
                    {...register("celular", { required: "Celular Obrigatório" })}
                    aria-invalid={errors.celular? "true" : "false"}
                />
                {errors.celular && <p role="alert">{errors.celular?.message}</p>}
            </div>

            <div>   
                <p>Endereço</p>
                    {/*<p>{ `CEP: ${formulario.cep}` }</p>*/}
                    <input 
                        type="text"
                        value={formulario.cep}
                        onChange={(e) => atualizarCep('cep', e.target.value)}
                     />
                <div>
                    <button type="button" onClick={buscarCep}>Buscar CEP</button>
                    
                </div>
                    <div>
                    <label>Endereço</label>
                    <input type="text" value={endereco?.logradouro} {...register("logradouro")} readOnly />
                    <label>Número</label>
                    <input type="text" value={endereco?.numero} {...register("numero")} />
                    <label>Bairro</label>
                    <input type="text" value={endereco?.bairro} {...register("bairro")} readOnly />
                    <label>Complemento</label>
                    <input type="text" value={endereco?.complemento} {...register("complemento")} />
                    <label>Cidade</label>
                    <input type="text" value={endereco?.localidade} {...register("localidade")} readOnly />
                    <label>Estado</label>         
                    <input type="text" value={endereco?.uf} {...register("uf")}readOnly />
                </div>
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    );
}