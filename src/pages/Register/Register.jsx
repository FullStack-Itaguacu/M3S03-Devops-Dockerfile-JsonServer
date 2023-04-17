import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

const RegisterPage = () => {
    //recuperar o callback do logout do contexto
    const { authenticated, logout } = useContext(AuthContext);

    // chamo o logout na função abaixo
    const handleLogout = () => {
        logout();
    };

    return (
        <>
            <h1>Registro de Farmácias e Medicamentos</h1>
            <Link to="/addstore"><button>Registro de Farmácias</button></Link>
            <Link to="/addmedication"><button>Registro de Medicamentos</button></Link>

            {/*<p>{String(authenticated)}</p>*/}
            <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </>
    );
}

export default RegisterPage;