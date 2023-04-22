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
            <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </>
    );
}

export default RegisterPage;