import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

export function PharmaFormStore() {
    const history = useNavigate();
    const { register, formState: { errors }, handleSubmit, setValue } = useForm();
    const [endereco, setEndereco] = useState();
    const [formulario, setFormulario] = useState({
        cep: '',
        latitude: '',
        longitude: '',
    });

    const atualizarCep = (campo, valor) => {
        const novoFormulario = { ...formulario, [campo]: valor };
        setFormulario(novoFormulario);
        console.log(novoFormulario);
    };

    const buscarCep = () => {
        if (formulario.cep.length !== 8) {
            alert('CEP inválido');
            return;
        }

        fetch(`https://viacep.com.br/ws/${formulario.cep}/json/`)
            .then((response) => response.json())
            .then((data) => {
                setEndereco(data)

                setValue('cep', data.cep);
                setValue('logradouro', data.logradouro);
                setValue('unidade', data.unidade);
                setValue('bairro', data.bairro);
                setValue('complemento', data.complemento);
                setValue('localidade', data.localidade);
                setValue('uf', data.uf);

                console.log(data);

                const { logradouro, localidade, uf } = data;
                const enderecoCompleto = `${logradouro}, ${localidade}, ${uf}`

                fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${enderecoCompleto}`)
                    .then((response) => response.json())
                    .then((data) => {
                        const { lat, lon } =data[0];

                        setValue('latitude', lat);
                        setValue('longitude', lon);

                        const pharmacyData = {
                            ...pharmadata,
                            latitude: lat,
                            longitude: lon,
                          };

                        fetch('http:localhost:5000/pharmacys', {
                            method: 'POST',
                            body: JSON.stringify(pharmacyData),
                            headers: {
                                'Content-Type': 'aplication/jso; charset=UTF-8',
                            },
                        })
                        .then(() => console.log(pharmacyData))
                        .then(() => {
                            if(formulario) {
                                alert("Cadastro realizado com Sucesso!!");
                            }
                        })
                        .cath((error) => console.log(error));
                    })
                    .cath((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    };

    const onSubmit = (pharmadata) => {
        //debugger;
        fetch('http://localhost:5000/pharmacys', {
            method: 'POST',
            body: JSON.stringify(pharmadata),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
        
            .then(() => console.log(pharmadata))
            .then(() => {
                if (formulario) {
                    alert('Cadastrado com sucesso');
                }
            })
           };

    function handleGoBack() {
        history(-1);
    }

    return (
        <div className="med-container mx-3 mt-1" >
            <h2>
                Cadastrar nova Farmácia
            </h2>

            <form className="row g-3 mt-1 ps-4 pe-4 pt-2"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h5 className="row md-1">
                    Dados Empresa
                </h5>
                <fieldset className="col-md-6 col-lg-4 mt-3">
                    <label htmlFor="razaosocial" className="form-med-label">
                        Razão Social
                    </label>
                    <input type="tect"
                        className="form-control"
                        placeholder="Razão Social"
                        {...register("razaosocial", { required: true })}
                        aria-invalid={errors.razaosocial ? "true" : "false"}
                    />
                    {errors.razaosocial?.type === 'required' && <p role="alert">Razão Social Obrigatório</p>}
                </fieldset>
                <fieldset className="col-md-6 col-lg-4 mt-3">
                    <label htmlFor="CNPJ" className="form-med-label">
                        CNPJ
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="CNPJ"
                        {...register("CNPJ", { required: "CNPJ Obrigatório" })}
                        aria-invalid={errors.CNPJ ? "true" : "false"}
                    />
                    {errors.cnpj && <p role="alert">{errors.CNPJ?.message}</p>}
                </fieldset>
                <fieldset className="col-md-6 col-lg-4 mt-3">
                    <label htmlFor="nomefantasia" className="form-med-label">Nome Fantasia</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome Fantasia"
                        {...register("fantasia", { required: true })}
                        aria-invalid={errors.fantasia ? "true" : "false"}
                    />
                    {errors.fantasia?.type === 'required' && <p role="alert">Nome Obrigatório</p>}
                </fieldset>
                <fieldset className="col-md-6 col-lg-4 mt-3">
                    <label htmlFor="email" className="form-med-label">
                        E-mail
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                        {...register("email", { required: "email Obrigatório" })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <p role="alert">{errors.email?.message}</p>}
                </fieldset>
                <fieldset className="col-md-6 col-lg-4 mt-3">
                    <label htmlFor="phone" className="form-med-label">
                        Telefone
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Telefone"
                        {...register("phone")}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                </fieldset>
                <fieldset className="col-md-6 col-lg-4 mt-3">
                    <label htmlFor="celular" className="form-med-label">
                        Celular
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Celular"
                        {...register("celular", { required: "Celular Obrigatório" })}
                        aria-invalid={errors.celular ? "true" : "false"}
                    />
                    {errors.celular && <p role="alert">{errors.celular?.message}</p>}
                </fieldset>
                <fieldset className="row col-2 mt-3">
                    <label htmlFor="cep" className="form-lg-label mx-2">
                        CEP
                    </label>
                    {/*<p>{ `CEP: ${formulario.cep}` }</p>*/}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="CEP"
                        value={formulario.cep}
                        onChange={(e) => atualizarCep('cep', e.target.value)}
                    />
                    <div className="mt-2">
                        <button 
                            type="button"
                            className="btn btn-outline-dark btn-sm" 
                            onClick={buscarCep}>
                                Buscar CEP
                        </button>
                    </div>
                </fieldset>
                <fieldset className="col-lg-10 mt-3">
                    <label htmlFor="" className="form-lg-label mx-2">
                        Endereço
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Endereço"
                        value={endereco?.logradouro} {...register("logradouro")}
                    />
                </fieldset>
                <fieldset className="col-lg-2 mt-3">
                    <label htmlFor="numero" className="form-med-label mx-2">
                        Número
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Número"
                        value={endereco?.numero} {...register("numero")}
                    />
                </fieldset>
                <fieldset className="col-lg-3 mt-3">
                    <label htmlFor="bairro" className="form-med-label mx-2">
                        Bairro
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Bairro"
                        value={endereco?.bairro} {...register("bairro")}
                    />
                </fieldset>
                <fieldset className="col-lg-7 mt-3">
                    <label htmlFor="complemento" className="form-med-label mx-2">
                        Complemento
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Complemento"
                        value={endereco?.complemento} {...register("complemento")}
                    />
                </fieldset>
                <fieldset className="col-lg-3 mt-3">
                    <label htmlFor="localidade" className="form-med-label mx-2">
                        Cidade
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Cidade"
                        value={endereco?.localidade} {...register("localidade")}
                    />
                </fieldset>
                <fieldset className="col-lg-1 mt-3">
                    <label htmlFor="uf" className="form-med-label mx-2">
                        Estado
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="UF"
                        value={endereco?.uf} {...register("uf")}
                    />
                </fieldset>
                <fieldset className="col-lg-4 mt-3">
                    <label htmlFor="latitude" className="form-med-label mx-2">
                        Latitude
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Latitude"
                        value={endereco?.latitude} {...register("latitude")}
                    />
                </fieldset>
                <fieldset className="col-lg-4 mt-3">
                    <label htmlFor="longitude" className="form-med-label mx-2">
                        Longitude
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Longitude"
                        value={endereco?.longitude} {...register("longitude")}
                    />
                </fieldset>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-3">
                    <input 
                        type="button"
                        className="btn btn-outline-info me-md-1" 
                        value="Voltar" 
                        onClick={handleGoBack} 
                    />
                    <input
                        id="reset"
                        value="Limpar"
                        type="reset"
                        className="btn btn-secondary me-md-1"
                        onClick={() => {
                            setFormulario({
                                razaosocial: "",
                                CNPJ: "",
                                fantasia: "",
                                email: "",
                                phone: "",
                                celular: "",
                                cep: "",
                                logradouro: "",
                                numero: "",
                                bairro: "",
                                complemento: "",
                                localidade: "",
                                uf: "",
                                latitude: "",
                                longitude: ""
                            });
                        }}
                    />
                    <input className="btn btn-success"
                        type="submit"
                        value="Cadastrar"
                    />
                    
                </div>
            </form >
        </div >
    );
}