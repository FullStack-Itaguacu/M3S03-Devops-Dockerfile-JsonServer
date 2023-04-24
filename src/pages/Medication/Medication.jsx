import React, {useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import { MedicationList } from "./MedicationList";

const MedicationPage = () => {
    //recuperar o callback do logout do contexto
    const { authenticated, logout} = useContext(AuthContext);
    
    // chamo o logout na função abaixo
    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <h1>Lista de Medicamentos</h1>
            <MedicationList />
            <button 
                type="button"
                className="btn btn-danger me-md-1"
                onClick={handleLogout}>Logout</button>
        </>
    );
}

export default MedicationPage;