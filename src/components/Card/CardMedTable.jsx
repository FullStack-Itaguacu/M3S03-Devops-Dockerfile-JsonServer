import React, { Component } from "react";

export class CardMedTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MedicationList: [],
        };
    }

    componentDidMount() {
        this.apiMedicationList();
    }

    async apiMedicationList() {
        fetch("http://localhost:5000/medications")
        .then(response => response.json())
        .then(response => this.setState({MedicationList: response,}));
    }

    renderMedicationList() {
        return this.state.MedicationList.map((index) => {
            return (
                <tr>    
                    <td>{index.id}</td>
                    <td>{index.medicamentos}</td>
                    <td>{index.laboratorio}</td>
                    <td>{index.dosagem}</td>
                    <td>{index.preco}</td>
                    <td>{index.tipo}</td>
                    <td>{index.descricao}</td>
                </tr>
            );
        });
    }


    render() 
    {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Medicamento</th>
                        <th>Laboratório</th>
                        <th>Dosagem</th>
                        <th>Preço</th>
                        <th>Tipo</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderMedicationList()}
                </tbody>
            </table>
        );
    }
}