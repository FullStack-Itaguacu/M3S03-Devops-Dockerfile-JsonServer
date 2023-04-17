import React, {useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import { PharmaFormStore } from "../../components/Pharma/PharmaFormStore";

const AddPharmacyStorePage = () => {
    //recuperar o callback do logout do contexto
    const { authenticated, logout} = useContext(AuthContext);
    
    // chamo o logout na função abaixo
    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <h1>Registros</h1>
            <PharmaFormStore />
            {/*<p>{String(authenticated)}</p>*/}
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default AddPharmacyStorePage;