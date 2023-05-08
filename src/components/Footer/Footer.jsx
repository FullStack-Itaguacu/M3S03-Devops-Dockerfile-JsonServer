import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer-container">
      <div>
          <h6 className='copy'>
            &copy; Copyright Pharmacy Central System - 
            {new Date().getFullYear()}
          </h6>
      </div>
      <div>    
          <h6 className='dev'>
            Desenvolvido por Ricardo Werner - LAB365-FullStack-Itaguaçu 
            {new Date().getFullYear()}
          </h6>
      </div>
    </footer>
  );
};

export default Footer;