import React, {useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import PharmaFormMed from "../../components/Pharma/PharmaFormMed";

const AddMedicationPage = () => {
    //recuperar o callback do logout do contexto
    const { authenticated, logout} = useContext(AuthContext);
    
    // chamo o logout na função abaixo
    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <PharmaFormMed />
            <button 
                type="button"
                className="btn btn-danger mx-3 my-2"
                onClick={handleLogout}>Logout</button>
        </>
    );
}

export default AddMedicationPage;