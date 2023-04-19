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
        <div className="Reg-container">
            <div className="Reg-link">
                <h1>Registro de Farmácias e Medicamentos</h1>
                <nav className="Reg-nav-link">
                <Link to="/addstore"><button>Registro de Farmácias</button></Link>
                <Link to="/addmedication"><button>Registro de Medicamentos</button></Link>
                </nav>
            </div>
        

            {/*<p>{String(authenticated)}</p>*/}
            <button className="Reg-btn-logout" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default RegisterPage;