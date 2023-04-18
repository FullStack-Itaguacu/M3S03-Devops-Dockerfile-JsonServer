import React, {useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import { CardGrid } from "../../components/Card/CardGrid";

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
            {/*<p>{String(authenticated)}</p>*/}
            <CardGrid />
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default MedicationPage;