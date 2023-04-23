import React from "react";
import Accordion from "react-bootstrap/Accordion";

export function Doubts() {
    return (
        <Accordion defaultActiveKey="" flush className="container pt-1">
            <Accordion.Item eventKey="0" className="mt-3 p-4">
                <Accordion.Header>Problema para realizar o login?</Accordion.Header>
                <Accordion.Body>
                    <span>
                        Para realizar login no Pharmacy Central System o usuário deverá
                        preencher um e-mail válido (obrigatório ter o '@') e da extensão
                        '.com' ou '.com.br' (ou outra da sua organização).
                        Além disso, no campo "Senha" é necessário informar uma senha
                        com no mínimo 8 caracteres.
                        Para sua segurança utilize letras, números e evite dados pessoais
                        (como nome, data de nascimento, etc.).
                    </span>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="mt-3 p-4">
                <Accordion.Header>Problema relacionado ao cadastro de nova Farmácia?</Accordion.Header>
                <Accordion.Body>
                    <span>
                        No Pharmacy Central System, para o cadastro correto de uma nova farmácia,
                        o usuário deverá preencher todos os campos do formulário disponível em "Cadastro",
                        clicar na opção "Cadastro de Farmácia", preencher todos dados referente à da nova farmácia
                        (com exceção apenas do "Telefone" e "Complemento" que não são obrigatórios ),
                        preencher o campo CEP (apenas números, sem caracteres especiais) e clicar em buscar CEP
                        (os principais campos serão preenchidos automaticamente), completar com o número '('se necessário o complemento')'
                        e clicar em "Cadastrar".
                        Poderá existir casos em que os dados relacionados ao CEP não serão preenchidos automáticamente,
                        como logradouro e bairro, isso se da pelo fato de que alguns CEP's são únicos para uma determinada região,
                        com diferentes ruas  e bairros. Nessa situação o usuário deverá realizar o
                        preenchimento manual desses campos.
                    </span>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="mt-3 mb-6 p-4">
                <Accordion.Header>Problema relacionado ao cadastro de novo medicamento?</Accordion.Header>
                <Accordion.Body>
                    <span>
                        No Pharmacy Central System, para o cadastro correto de um novo medicamento,
                        todos os campos deverão ser preenchidos (com exceção da descrição que não é
                        obrigatório).
                        Importante se atentar para o campo "Tipo de Medicamento", neste campo o usuario
                        deverá selecionar uma das opções que já estão pré preenchidos (Medicamento Controlado ou de uso Comum)
                        e sendo esta uma informação importante relacionada ao medicamento a ser cadastrado.
                    </span>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}



