import React, {useContext} from "react";
import { AuthContext } from "../../contexts/auth";
import { PharmaForm } from "../../components/PharmaForm/PharmaForm";

const PharmaListPage = () => {
    //recuperar o callback do logout do contexto
    const { authenticated, logout} = useContext(AuthContext);
    
    // chamo o logout na função abaixo
    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <h1>Cadastro de Farmácia</h1>
            <PharmaForm />
            <p>{/*String(authenticated)*/}</p>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default PharmaListPage;