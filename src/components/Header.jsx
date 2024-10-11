import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function Header() {
  return (
    <div>
      <Navbar style={{ backgroundColor: '#001F3F' }} expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src="src\assets\images\logo.jpg"
              width="35"
              height="35"
              className="d-inline-block align-top rounded-4 shadow me-2"
            />{' '}
            <span style={{textAlign:'center'}}>POWER WALLET</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className='navbar-items' href="/home">Home</Nav.Link>
              <Nav.Link className='navbar-items' href="/login">Quick Pay</Nav.Link>
              <Nav.Link className='navbar-items' href="#register-complaint">Register Complaint/Service</Nav.Link>
              <Nav.Link className='navbar-items' href="#complaint-status">Complaint Status</Nav.Link>
              <Nav.Link className='navbar-items' href="/new-connection">New Connection</Nav.Link>
              <Nav.Link className='navbar-items' href="#user-guide">User Guide</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
