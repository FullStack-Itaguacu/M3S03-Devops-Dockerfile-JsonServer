export const CardMed = ({medication}) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{medication.medicamentos}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {medication.laboratorio}
                </h6>
                <p className="card-text">
                    <strong>Medicamento: </strong>
                    {medication.medicamento}
                </p>
                <p className="card-text">
                    <strong>Fabricante: </strong>
                    {medication.fabricante}
                </p>
                <p className="card-text">
                    <strong>Dosagem: </strong>
                    {medication.dosagem}
                </p>
                <p className="card-text">
                    <strong>Preço: </strong>
                    {medication.preco}
                </p>
                <p className="card-text">
                    <strong>Tipo: </strong>
                    {medication.tipo}
                </p>
                <p className="card-text">
                    <strong>Descrição: </strong>
                    {medication.descricao}
                </p>
            </div>
        </div>
    );
}