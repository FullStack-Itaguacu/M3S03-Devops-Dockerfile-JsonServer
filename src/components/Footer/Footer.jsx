import React, {useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {

//Função para ajustar o footer conforme a altura da página
    {/*useEffect(() => {
    const pageContent = document.getElementById('page-content');
    const footer = document.querySelector('.footer');
    const windowHeight = window.innerHeight;

    if (pageContent?.clientHeight > windowHeight) {
      footer.style.position = 'relative';
    } else {
      footer.style.position = 'fixed';
    }
  }, []);*/}

  return (
    <footer className="footer-container">
      <div>
          <h6>&copy; Copyright Pharmacy Central System - {new Date().getFullYear()}</h6>
          <h6>Desenvolvido por Ricardo Werner {new Date().getFullYear()}</h6>
      </div>
    </footer>
  );
};

export default Footer;