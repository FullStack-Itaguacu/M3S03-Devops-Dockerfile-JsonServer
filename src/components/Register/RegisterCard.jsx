import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./RegisterCard.css";

export const RegisterCard = () => {

    return (
        <div className="register-container">
            <h1>Cadastro</h1>
            <div className="register-link">
                <nav className="register-nav-link">
                    <Link to="/addstore"><button>Cadastro de Farmácias</button></Link>
                    <Link to="/addmedication"><button>Cadastro de Medicamentos</button></Link>
                </nav>
            </div>
            
        </div>
        
        

    );
}