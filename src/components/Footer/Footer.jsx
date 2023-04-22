import React, {useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import './Footer.css;

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
    <footer className="bg-light py-1">
      <Container>
        <Row>
          <Col className="text-center">
            <p>Desenvolvido por Ricardo Werner &copy; {new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;