import React from 'react';
import './Header.css';
import logo1 from '../../imagens/logo1.jpg';

const Header = () => {

    return (
        <header className="header">
            <div className="header-container">
                <h1 className="header-logo">
                    <img src={logo1} alt="logo" width={200} /></h1>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <a href="/pharmacy" className="header__nav-link">
                            Farmácias
                        </a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/medication" className="header__nav-link">
                            Medicamentos
                        </a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/register" className="header__nav-link">
                            Cadastro
                        </a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/faq" className="header__nav-link">
                            FAQ
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;