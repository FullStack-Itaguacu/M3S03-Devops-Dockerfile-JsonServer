import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

const PharmacyPage = () => {
    //recuperar o callback do logout do contexto
    const { authenticated, logout } = useContext(AuthContext);

    // chamo o logout na função abaixo
    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <h1>Lista de Farmácias</h1>
            
            {/*<p>{String(authenticated)}</p>*/}
            <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </>
    );
}

export default PharmacyPage;