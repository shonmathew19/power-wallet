import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';

function Header({ role, setRole, isLogin, setIsLogin }) {
  const navigate = useNavigate();
  console.log('value inside header', role)
  const handleLogout = () => {
    localStorage.removeItem('role');
    setRole('');
    setIsLogin(false)
    navigate('/login');
  };

  return (
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
          <span style={{ textAlign: 'center' }}>POWER WALLET</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={'/'} className='navbar-items'>Home</Nav.Link>
            {role !== 'admin' ? (
              <>
                {role === 'user' && (
                  <>
                  <Nav.Link as={Link} to={'/consumer-info'} className='navbar-items'>Payment</Nav.Link>
                  <Nav.Link as={Link} to={'/complaint-form'} className='navbar-items'>Register Complaint/Service</Nav.Link>
                  </>
                )}
               

                <Nav.Link as={Link} className='navbar-items'>Complaint Status</Nav.Link>
                <Nav.Link as={Link} to={'/new-connection'} className='navbar-items'>New Connection</Nav.Link>
                <Nav.Link as={Link} className='navbar-items'>User Guide</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to={'/dashboard'} className='navbar-items'>Dashboard</Nav.Link>
                <Nav.Link as={Link} className='navbar-items'>Complaint Status</Nav.Link>
                <Nav.Link as={Link} to={'/new-connection'} className='navbar-items'>New Connection</Nav.Link>
                <Nav.Link as={Link} to={'/admin-page-consumer-info'} className='navbar-items'>Consumer Info</Nav.Link>
              </>
            )}
            {role ? (
              <Nav.Link className='navbar-items border rounded' onClick={handleLogout}>
                <i className="fa-solid fa-power-off"></i>
              </Nav.Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
