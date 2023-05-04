import React, { useContext } from 'react';
import './Header.css';
import logo1 from '../../imagens/logo1.jpg';

const Header = () => {


    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-logo">
                    <img src={logo1} alt="logo" width={150} /></h1>
            </div>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-item">
                        <a href="/pharmacy" className="header-nav-link">
                            Farmácias
                        </a>
                    </li>
                    <li className="header-nav-item">
                        <a href="/pharmamap" className="header-nav-link">
                            Mapa
                        </a>
                    </li>
                    <li className="header-nav-item">
                        <a href="/medication" className="header-nav-link">
                            Medicamentos
                        </a>
                    </li>
                    <li className="header-nav-item">
                        <a href="/register" className="header-nav-link">
                            Cadastro
                        </a>
                    </li>
                    <li className="header-nav-item">
                        <a href="/faq" className="header-nav-link">
                            FAQ
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;