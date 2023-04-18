import { useMedication } from "../../contexts/MedContext";
import { CardMed } from "../Card/CardMed";

export const CardGrid = () => {
    const context = useMedication();

    return (
        <section className="container">
            <div className="card-grid">
                {context.medications.map((medication) => {
                    return <CardMed medication={medication} />;
                })}
            </div>
        </section>  
    );
}