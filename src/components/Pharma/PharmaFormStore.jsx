import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

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

                setValue('logradouro', data.logradouro);
                setValue('unidade', data.unidade);
                setValue('bairro', data.bairro);
                setValue('complemento', data.complemento);
                setValue('localidade', data.localidade);
                setValue('uf', data.uf);

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
                onSubmit={handleSubmit}>
                <div className="form-group row">
                    <Form.Group className="col-9">
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
                            aria-invalid={errors.CNPJ ? "true" : "false"} />
                            {errors.cnpj && <p role="alert">{errors.CNPJ?.message}</p>}
                        </Form.Group>

                        <Form.Group className="col-8" >
                        <Form.Label>Nome Fantasia</Form.Label>
                        <Form.Control type="textarea"
                        {...register("fantasia", { required: true })}
                        aria-invalid={errors.fantasia ? "true" : "false"}
                        />
                        {errors.fantasia?.type === 'required' && <p role="alert">Nome Obrigatório</p>}
                    </Form.Group>
                </div>
            </Form>
        </Container>        
    );
}