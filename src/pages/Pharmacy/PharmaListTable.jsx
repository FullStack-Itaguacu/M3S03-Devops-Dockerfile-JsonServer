import React, { Component } from "react";

class PharmaListTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
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

    renderPharmaList() {
        return this.state.data.map((pharma) => {
            return (
                <tr key={pharma.id}>
                    <td>{pharma.id}</td>
                    <td>{pharma.cep}</td>
                    <td>{pharma.razaosocial}</td>
                    <td>{pharma.CNPJ}</td>
                    <td>{pharma.fantasia}</td>
                    <td>{pharma.email}</td>
                    <td>{pharma.phone}</td>
                    <td>{pharma.celular}</td>
                    <td>{pharma.logradouro}</td>
                    <td>{pharma.numero}</td>
                    <td>{pharma.bairro}</td>
                    <td>{pharma.complemento}</td>
                    <td>{pharma.localidade}</td>
                    <td>{pharma.uf}</td>
                </tr>
            );
        }
        );
    }

    render() {

        return (
            <div className="container">
                <table className="table table-hover pointer-event">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>CEP</th>
                            <th>Razão Social</th>
                            <th>CNPJ</th>
                            <th>Nome Fantasia</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Celular</th>
                            <th>Logradouro</th>
                            <th>Número</th>
                            <th>Bairro</th>
                            <th>Complemento</th>
                            <th>Localidade</th>
                            <th>UF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPharmaList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PharmaListTable;