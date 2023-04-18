import { useState } from "react";
import Modal from "react-modal";

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
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{medicamentos}</h5>
          <h6 className="card-subtitle">{dosagem}</h6>
          <div className="col-6 mx-auto">
            <button
              className="btn btn-outline-sucess btn-sm mt-4"
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
            backgroundColor: "grey",
          },
          content: {
            color: "orange",
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
        <button onClick={() => setModalIsOpen(false)}>Fechar</button>
        <button onClick={() => excluir(id)}>Excluir</button>
      </Modal>
    </div>
  );
}