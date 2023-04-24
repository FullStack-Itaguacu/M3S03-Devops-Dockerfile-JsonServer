import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import PharmaList from "./PharmaList";

const PharmacyPage = () => {
    //recuperar o callback do logout do contexto
    const { authenticated, logout } = useContext(AuthContext);

    // chamo o logout na função abaixo
    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <h1 className="row mx-4">
                Lista de Farmácias
            </h1>
            <PharmaList />
            <button 
                type="button"
                className="btn btn-danger mx-3 my-2"
                onClick={handleLogout}>Logout</button>
        </>
    );
}

export default PharmacyPage;