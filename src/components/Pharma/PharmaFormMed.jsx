import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AddMedicamentos() {
    const [medicamentos, setMedicamentos] = useState([]);

    useEffect(() => {
        const getMedicamentos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setMedicamentos(response.data);
                localStorage.setItem('medicamentos', JSON.stringify(response.data));
            } catch (error) {
                console.error(error);
            }
        };

        getMedicamentos();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/products', {
                nome,
                dosagem,
            });

            setMedicamentos([...medicamentos, response.data]);
            setNome('');
            setDosagem('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Lista de Medicamentos</h1>
            {/*<ul>
                {medicamentos.map((medicamentos) => (
                    <li key={medicamentos.id}>{medicamentos.nome}</li>
                ))}
                </ul>*/}
            <h2>Cadastrar Novo Medicamento</h2>
            <form onSubmit={handleSubmit}>
                <fieldset className="col-md-6">
                    <label htmlFor="inputMedicamento" className="form-label">
                        Medicamento
                    </label>
                    <input
                        value={medicamentos.medicamentos || ""}
                        type="text"
                        className="form-control"
                        id="inputMedicamento"
                        placeholder="Informe o nome do medicamentos"
                        required
                        onChange={(e) =>
                            setMedicamentos({ ...medicamentos, medicamentos: e.target.value })
                        }
                    />
                </fieldset>
                <fieldset className="col-md-6">
                    <label htmlFor="inputLaboratorio" className="form-label">
                        Laboratório
                    </label>
                    <input
                        value={medicamentos.laboratorio || ""}
                        type="text"
                        className="form-control"
                        id="inputLaboratorio"
                        placeholder="Informe o laboratório"
                        required
                        onChange={(e) =>
                            setMedicamentos({ ...medicamentos, laboratorio: e.target.value })
                        }
                    />
                </fieldset>
                <fieldset className="col-md-4">
                    <label htmlFor="inputDosagem" className="form-label">
                        Dosagem
                    </label>
                    <input
                        value={medicamentos.dosagem || ""}
                        type="text"
                        className="form-control"
                        id="inputDosagem"
                        placeholder="Informe a dosagem"
                        required
                        onChange={(e) =>
                            setMedicamentos({ ...medicamentos, dosagem: e.target.value })
                        }
                    />
                </fieldset>
                <fieldset className="col-md-4">
                    <label htmlFor="inputPreco" className="form-label">
                        Preço Unitário
                    </label>
                    <input
                        value={medicamentos.preco || ""}
                        type="text"
                        className="form-control"
                        id="inputPreco"
                        placeholder="Informe o preço unitário"
                        required
                        onChange={(e) =>
                            setMedicamentos({ ...medicamentos, preco: e.target.value })
                        }
                    />
                </fieldset>
                <fieldset className="col-md-4">
                    <label htmlFor="inputTipo" className="form-label">
                        Tipo de medicamentos
                    </label>
                    <select
                        id="inputTipo"
                        className="form-select"
                        aria-label="Selecione o tipo do medicamentos"
                        required
                        onChange={(e) =>
                            setMedicamentos({ ...medicamentos, tipo: e.target.value })
                        }
                    >
                        <option defaultValue></option>
                        <option value="Medicamento controlado">
                            Medicamento controlado
                        </option>
                        <option value="Medicamento comum">Medicamento comum</option>
                    </select>
                </fieldset>
                <fieldset className="col-md-12">
                    <label htmlFor="inputDescricao" className="form-label">
                        Descrição
                    </label>
                    <textarea
                        value={medicamentos.descricao || ""}
                        className="form-control"
                        id="inputDescricao"
                        rows="5"
                        maxLength={870}
                        onChange={(e) =>
                            setMedicamentos({ ...medicamentos, descricao: e.target.value })
                        }
                    ></textarea>
                </fieldset>
                <div className="d-grid gap-1 d-md-flex justify-content-md-end">
                    <input
                        id="reset"
                        value="Limpar"
                        type="reset"
                        className="btn btn-secondary me-md-1"
                        onClick={() => {
                            setMedicamentos({
                                medicamentos: "",
                                laboratorio: "",
                                dosagem: "",
                                preco: "",
                                tipo: "",
                                descricao: "",
                            });
                        }}
                    />
                    <input
                        value="Cadastrar"
                        type="submit"
                        className="btn btn-success"
                    />
                </div>
            </form>
        </div>



    );
}

export default AddMedicamentos;

