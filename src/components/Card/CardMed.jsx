import { useEffect, useState } from "react";
import Modal from "react-modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

Modal.setAppElement("#root");

export function CardMed({
  id,
  medicamentos,
  laboratorio,
  tipo,
  dosagem,
  preco,
  descricao,
  excluir,
}) {
 

  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="container col-2 col-md-2 col-sm-12 bg">
      <div className="card mb-3" style={{ height: "12rem"}}>
        <div className="card-body"
              data-bs-toggle="modal"
              data-bs-target={Card} >
          <h5 className="card-title">{medicamentos}</h5>
          <h6 className="card-subtitle md-1 text-muted">{dosagem}</h6>
          <p className="card-text">
            {descricao ? descricao.substring(0, 50) : null}...
          </p>
          <div className="d-grid col-6">
            <button type="button" 
            className="btn btn-outline-info btn-sm mt-4" 
            data-bs-toggle="modal" 
            data-bs-target="#exampleModa4"
              onClick={() => setModalIsOpen(true)}
            >
              Detalhes
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(164,90,250,0.5)",
          },
          content: {
            color: "black",
          },
        }}
      >
        <h2>Detalhes do medicamento:</h2>
        <p>
          <strong>Medicamento: </strong>
          {medicamentos}
        </p>
        <p>
          <strong>Laboratório: </strong>
          {laboratorio}
        </p>
        <p>
          <strong>Tipo: </strong>
          {tipo}
        </p>
        <p>
          <strong>Dosagem: </strong>
          {dosagem}
        </p>
        <p>
          <strong>Preço: </strong>
          {preco}
        </p>
        <p>
          <strong>Descrição: </strong>
          {descricao}
        </p>
        <button type="button" 
          className="btn btn-secondary me-2" 
          data-bs-dismiss="modal"  
          onClick={() => setModalIsOpen(false)}
        >
          Fechar
        </button>
        <button type="button" 
        className="btn btn-danger"
        data-bs-dismiss="modal" 
        >Excluir</button>
      </Modal>
    </div>
  );
  }