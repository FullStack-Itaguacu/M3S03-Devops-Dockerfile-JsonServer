import React, { Component } from "react";
import Modal from "react-modal";
import Table from "react-bootstrap/Table";


Modal.setAppElement("#root");

class PharmaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            modalIsOpen: false,
            selectedPharma: null
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.apiPharmaList();
    }

    async apiPharmaList() {
        const res = await fetch("http://localhost:5000/pharmacys");
        const res_1 = await res.json();
        return this.setState({
            data: res_1,
        });
    }

    openModal(pharma) {
        this.setState({
            modalIsOpen: true,
            selectedPharma: pharma
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            selectedPharma: null
        });
    }

    renderPharmaList() {
        return this.state.data.map((pharma) => {
            return (
                <tr key={pharma.id}>
                    <td>{pharma.id}</td>
                    <td>{pharma.cep}</td>
                    <td>{pharma.razaosocial}</td>
                    <td>{pharma.CNPJ}</td>
                    <td>{pharma.localidade}</td>
                    <td>{pharma.uf}</td>
                    <td>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm mt-1"
                            onClick={() => this.openModal(pharma)}
                        >
                            Detalhes
                        </button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        const { modalIsOpen, selectedPharma } = this.state;

        return (
            <div className="container">
                <Table className="table table-hover pointer-event">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>CEP</th>
                            <th>Razão Social</th>
                            <th>CNPJ</th>
                            <th>Localidade</th>
                            <th>UF</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>{this.renderPharmaList()}</tbody>
                </Table>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={{
                        overlay: {
                            backgroundColor: "rgba(164,90,250,0.5)",
                        },
                        content: {
                            color: "black",
                        },
                    }}
                >
                    {selectedPharma && (
                        <div>
                            <h3>Detalhes da Farmácia:</h3>
                            <div className="d-flex collumn">
                                <p className="row text-muted  mx-3">
                                    <strong>CEP: </strong>
                                    {selectedPharma.cep}
                                </p>
                                <p className="row text-muted  mx-3">
                                    <strong>Razão Social: </strong>
                                    {selectedPharma.razaosocial}
                                </p>
                                <p className="row text-muted  mx-3">
                                    <strong>CNPJ: </strong>
                                    {selectedPharma.CNPJ}
                                </p>
                                <p className="row text-muted  mx-3">
                                    <strong>Nome Fantasia: </strong>
                                    {selectedPharma.fantasia}
                                </p>
                            </div>
                            <div className="d-flex collumn">
                                <p className="row text-muted  mx-3">
                                    <strong>Email:</strong>
                                    {selectedPharma.email}
                                </p>
                                <p className="row text-muted  mx-3">
                                    <strong>Telefone:</strong>
                                    {selectedPharma.telefone}
                                </p>
                                <p className="row text-muted  mx-3">
                                    <strong>Celular:</strong>
                                    {selectedPharma.celular}
                                </p>
                            </div>
                            <div className="d-flex collumn    ">
                                <p className="row text-muted  mx-3">
                                    <strong>Logradouro:</strong>
                                    {selectedPharma.logradouro}
                                </p>
                                <p className="row text-muted  mx-3">
                                    <strong>Número:</strong>
                                    {selectedPharma.numero}
                                </p>
                                <p className="row text-muted  mx-3">
                                    <strong>Complemento:</strong>
                                    {selectedPharma.complemento}
                                </p>
                                <p className="row text-muted  mx-3">
                                    <strong>Bairro:</strong>
                                    {selectedPharma.bairro}
                                </p>
                            </div>
                            <div className="d-flex collumn">
                                <p className="row text-muted  mx-3">
                                    <strong>Localidade:</strong>
                                    {selectedPharma.localidade}
                                </p>
                                <p className="row text-muted  mx-3">
                                    <strong>UF:</strong>
                                    {selectedPharma.uf}
                                </p>
                                <p className="row text-muted  mx-3">
                                    <strong>Latitude:</strong>
                                    {selectedPharma.latitude}
                                </p>
                                <p className="row text-muted  mx-3">
                                    <strong>Longitude:</strong>
                                    {selectedPharma.longitude}
                                </p>
                            </div>
                            <button
                                type="button"
                                className="btn btn-secondary me-2"
                                onClick={this.closeModal}
                            >
                                Fechar
                            </button>
                        </div>
                    )}
                </Modal>
            </div>
        );
    }
}

export default PharmaList;
