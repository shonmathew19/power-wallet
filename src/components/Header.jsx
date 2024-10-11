import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar style={{ backgroundColor: '#001F3F' }} expand="lg" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>
            <img
              alt=""
              src="/images/logo.jpg"
              width="35"
              height="35"
              className="d-inline-block align-top rounded-4 shadow me-2"
            />{' '}
            <span style={{textAlign:'center'}}>POWER WALLET</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            
              <Nav.Link as={Link} to={'/'} className='navbar-items' >Home</Nav.Link>
              <Nav.Link as={Link} to={'/login'} className='navbar-items' >Quick Pay</Nav.Link>
              <Nav.Link as={Link} to={'/'}className='navbar-items' >Register Complaint/Service</Nav.Link>
              <Nav.Link as={Link} to={'/'}className='navbar-items' >Complaint Status</Nav.Link>
              <Nav.Link as={Link} to={'/new-connection'}className='navbar-items' >New Connection</Nav.Link>
              <Nav.Link as={Link} to={'/'}className='navbar-items' >User Guide</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
