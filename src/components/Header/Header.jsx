import React from 'react';
import './Header.css';
import logo1 from '../../imagens/logo1.jpg';

const Header = () => {

    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">
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
                        <a href="/products" className="header__nav-link">
                            Medicamentos
                        </a>
                    </li>
                    <li className="header__nav-item">
                        <a href="/add" className="header__nav-link">
                            Cadastro
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;