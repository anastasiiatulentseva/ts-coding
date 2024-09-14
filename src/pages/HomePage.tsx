import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container>
      <Row>
        <Col sm={10} lg={7}>
          <h2>Tasks list</h2>
          <h3>Todo List Components</h3>
           <ul>
            <li><Link to="/todo1">Simple TODO list</Link></li>
            <li><Link to="/page2">Future Page 2</Link></li>
          </ul>
          <h3>Subcategory 2</h3>
          <ul>
            <li><Link to="/page3">Future Page 3</Link></li>
            <li><Link to="/page4">Future Page 4</Link></li>
          </ul>
          <h3>Subcategory 3</h3>
          <ul>
            <li><Link to="/page5">Future Page 5</Link></li>
            <li><Link to="/page6">Future Page 6</Link></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
