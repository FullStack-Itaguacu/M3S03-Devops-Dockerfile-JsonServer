import React, { useContext } from "react";
import { AuthContext } from "../../contexts/auth";
import { RegisterCard } from "../../components/Register/RegisterCard";


const RegisterPage = () => {
    //recuperar o callback do logout do contexto
    const { authenticated, logout } = useContext(AuthContext);

    // chamo o logout na função abaixo
    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <RegisterCard />
            <button 
                type="button"
                className="btn btn-danger mx-3 my-2"
                onClick={handleLogout}>Logout</button>
        </>
    );
}

export default RegisterPage;