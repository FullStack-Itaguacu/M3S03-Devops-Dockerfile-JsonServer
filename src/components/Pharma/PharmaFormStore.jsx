import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import {IMaskInput} from "react-imask";

export function PharmaFormStore() {
    const history = useNavigate();
    const { register, formState: { errors }, handleSubmit, setValue } = useForm();
    const [endereco, setEndereco] = useState();
    const [formulario, setFormulario] = useState({
        cep: '',
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
                {/*setValue('latitude', data.latitude);
            setValue('longitude', data.longitude);*/}

                console.log(data);
            });
    };

    const onSubmit = (pharmadata) => {
        fetch('http://localhost:5000/pharmacys', {
            method: 'POST',
            body: JSON.stringify(pharmadata),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => console.log(pharmadata))
            .catch((err) => console.log(err));
    };

    function handleGoBack() {
        history(-1);
    }

    return (
        <Container className="container">
            <h2>Cadastrar nova Farmácia </h2>
            <Form className="FormCadastro"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row">
                    <Form.Group className="col-12">
                        <Form.Label>Razão Social</Form.Label>
                        <Form.Control
                            type="text"
                            {...register("razaosocial", { required: true })}
                            aria-invalid={errors.razaosocial ? "true" : "false"}
                        />
                            {errors.razaosocial?.type === 'required' && <p role="alert">Razão Social Obrigatório</p>}
                    </Form.Group>
                </div>

                <div className="form-group row">
                    <Form.Group className="col-4" >
                        <Form.Label>CNPJ</Form.Label>
                        <Form.Control
                            as={IMaskInput}
                            mask="00.000.000/0000-00"
                            inputMode="numeric"
                            {...register("CNPJ", { required: "CNPJ Obrigatório" })}
                            aria-invalid={errors.CNPJ ? "true" : "false"} 
                        />
                            {errors.cnpj && <p role="alert">{errors.CNPJ?.message}</p>}
                    </Form.Group>

                    <Form.Group className="col-8" >
                        <Form.Label>Nome Fantasia</Form.Label>
                        <Form.Control 
                            type="textarea"
                            {...register("fantasia", { required: true })}
                            aria-invalid={errors.fantasia ? "true" : "false"}
                        />
                            {errors.fantasia?.type === 'required' && <p role="alert">Nome Fantasia obrigatório</p>}
                    </Form.Group>
                </div>
                <div className="form-group row">
                    <Form.Group className="col-4" >
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type="email" 
                            {...register("email", { required: true })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                            {errors.email?.type === 'required' && <p role="alert">E-mail obrigatório</p>}
                    </Form.Group>
                
                    <Form.Group className="col-4" >
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control 
                            type="textarea"
                            {...register("phone")}
                            aria-invalid={errors.phone ? "true" : "false"}
                        />
                    </Form.Group>
                    <Form.Group className="col-4" >
                        <Form.Label>Celular</Form.Label>
                        <Form.Control
                            type="textarea"
                            {...register("celular", { required: true })}
                            aria-invalid={errors.celular ? "true" : "false"}
                        />
                            {errors.celular?.type === 'required' && <p role="alert">Celular obrigatório</p>}
                    </Form.Group>
                </div>
                <div className="form-group row">
                    <Form.Group className="col-3" >
                        <Form.Label>CEP</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="00000-000"
                            value={formulario.cep}
                            onChange={(e) => atualizarCep('cep', e.target.value)}
                        />
                        <Button variant="primary" onClick={buscarCep}>Buscar</Button>
                    </Form.Group>
                    <Form.Group className="col-7" >
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control
                            type="text"
                            value={endereco?.logradouro} { ...register("logradouro")}
                        />                           
                    </Form.Group>
                    <Form.Group className="col-2" >
                        <Form.Label>Número</Form.Label>
                        <Form.Control
                            type="text"
                            value={endereco?.numero} { ...register("numero")}
                        />
                    </Form.Group>
                </div>               
                <div className="form-group row">
                    <Form.Group className="col-4" >
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control
                            type="text"
                            value={endereco?.bairro} { ...register("bairro")}
                        />                            
                    </Form.Group>
                    <Form.Group className="col-8" >
                        <Form.Label>Complemtento</Form.Label>
                        <Form.Control
                            type="text"
                            value={endereco?.complemento} { ...register("complemento")}
                        />
                    </Form.Group>
                </div>
                <div className="form-group row">
                    <Form.Group className="col-3" >
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control
                            type="text"
                            value={endereco?.localidade} { ...register("localidade")}
                        />                            
                    </Form.Group>
                    <Form.Group className="col-1" >
                        <Form.Label>Estado</Form.Label>
                        <Form.Control
                            type="text"
                            value={endereco?.uf} { ...register("uf")}
                        />    
                    </Form.Group>
                    <Form.Group className="col-2" >
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control
                            type="text"
                            value={endereco?.latitude} { ...register("latitude")}
                        />                            
                    </Form.Group>
                    <Form.Group className="col-2" >
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control
                            type="text"
                            value={endereco?.longitude} { ...register("longitude")}                            
                        />
                    </Form.Group>
                </div>
                <input type="button" value="Voltar" onClick={handleGoBack} />
                <input type="submit" value="Cadastrar" /> 
             </Form>
        </Container>        
    );
}