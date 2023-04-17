import React from 'react';
import './Footer.css';
import logo1 from '../../imagens/logo1.jpg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h1 className="footer-logo">
                    {<img src={logo1} alt="logo" width={75}/>}
                </h1>
                <p className="copyright">&copy; Copyright Pharmacy Central System - 2023</p>
            </div>
        </footer>
    );
}

export default Footer;