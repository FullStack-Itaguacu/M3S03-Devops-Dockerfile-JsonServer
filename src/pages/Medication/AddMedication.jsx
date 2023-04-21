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
            {/*<p>{String(authenticated)}</p>*/}
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default AddMedicationPage;