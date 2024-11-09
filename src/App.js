import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PhotoPage from "./PhotoPage";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
        <Container>
          <Navbar.Brand href="/">Birthday Girl</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/photo">Memories</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo" element={<PhotoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
