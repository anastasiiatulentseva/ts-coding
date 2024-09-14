import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto py-3 bg-light">
      <Container>
        <Row>
          <Col>
            <span>&copy; {currentYear} React App</span>
          </Col>
          <Col className="text-end">
            <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
