import React, { useState, useEffect } from "react";
import { CardMed } from "../../components/Card/CardMed";//
//import { CardMedTable } from "../../components/Card/CardMedTable";

// para usar no modo Card, retire o comentário da linha 2, comente com // a linha 3 
// e o código abaixo que inicia na linha 41 ( no início coloque ({/*)
// até a linha 45 no final coloque(*/})

  export function MedicationList() {
    const [medications, setMedications] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/medications")
        .then((response) => response.json())
        .then((response) => setMedications(response));
    }, []);
    
    return (
        <div className="row">
        {medications.map((medication) => (
            <CardMed
            key={medication.id}
            id={medication.id}
            medicamentos={medication.medicamentos}
            laboratorio={medication.laboratorio}
            tipo={medication.tipo}
            dosagem={medication.dosagem}
            preco={medication.preco}
            descricao={medication.descricao}
            />
        ))}
        </div>
        );

// para usar no modo Table, retire o comentário abaixo (inicia e termina com {/* ..*/}) e
// da linha 3, comente com // a linha 2 
// e o código acima a partir da linha 10, no início coloque ({/*)
// até a linha 31 no final coloque (*/})
     {/*return (
         <div className="row">
             <CardMedTable />
         </div>
     );*/}
}