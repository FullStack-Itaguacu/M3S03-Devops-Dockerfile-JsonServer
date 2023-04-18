import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import "./Register.css";

const RegisterPage = () => {
    //recuperar o callback do logout do contexto
    const { authenticated, logout } = useContext(AuthContext);

    // chamo o logout na função abaixo
    const handleLogout = () => {
        logout();
    };

    return (
        <div className="container">
            <div className="link-container">
                <h1>Registro de Farmácias e Medicamentos</h1>
                <nav className="nav-link">
                <Link to="/addstore"><button>Registro de Farmácias</button></Link>
                <Link to="/addmedication"><button>Registro de Medicamentos</button></Link>
                </nav>
            </div>
        

            {/*<p>{String(authenticated)}</p>*/}
            <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default RegisterPage;