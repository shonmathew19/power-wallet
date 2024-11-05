import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
import { roleContext } from '../context/RoleContext';
import Swal from 'sweetalert2';



function Header() {
  const { role, setRole } = useContext(roleContext)
  const activeRole= sessionStorage.getItem('role',role)

  const navigate = useNavigate();

  const handleLogout = () => {
    setRole(null)
    sessionStorage.removeItem('role',role)
   
    Swal.fire({
      title: "",
      text: "Successfully logged out!",
      icon: "success"
  });
  navigate('/login');

  };

  return (
    <Navbar style={{ backgroundColor: '#001F3F' }} expand="lg" data-bs-theme="dark">
      <Container >
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

            <>
              {
                activeRole == "user" &&
                <>
                  <Nav.Link as={Link} to={'/consumer-info'} className='navbar-items'>Payment</Nav.Link>
                  <Nav.Link as={Link} to={'/complaint-form'} className='navbar-items'>Register Complaint/Service</Nav.Link>
                  <Nav.Link as={Link} disabled className='navbar-items'>Complaint status</Nav.Link>
                </>
              }

              {
                activeRole == 'admin' &&
                <>
                  <Nav.Link as={Link} to={'/dashboard'}  className='navbar-items'>Dashboard</Nav.Link>
                  <Nav.Link as={Link} disabled className='navbar-items'>Complaint requests</Nav.Link>
                
                  <Nav.Link as={Link} to={'/admin-page-consumer-info'} className='navbar-items'>Consumer Info</Nav.Link>
                </>
              }
              <Nav.Link as={Link} to={'/new-connection'} className='navbar-items'>New Connection</Nav.Link>
              {
                (activeRole == "admin" || activeRole == "user") &&
                <Nav.Link className='navbar-items border rounded' onClick={handleLogout}>
                  <i className="fa-solid fa-power-off"></i>
                </Nav.Link>
              }



            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
