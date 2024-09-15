import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.scss";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import HomePage from "./pages/HomePage.tsx";
import Footer from "./components/shared/Footer.tsx";
import DummyPage from "./pages/DummyPage.tsx";
import SimpleTodoListPage from "./pages/SimpleTodoListPage.tsx";
import TodoListPage from "./pages/TodoListPage.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            React App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="custom-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<DummyPage />} />
          <Route path="/privacy" element={<DummyPage />} />
          <Route path="/terms" element={<DummyPage />} />
          <Route path="/todo1" element={<SimpleTodoListPage />} />
          <Route path="/todo2" element={<TodoListPage />} />
          <Route path="*" element={<DummyPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
