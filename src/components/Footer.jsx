import React from 'react';
import '../App.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-center text-lg-start text-white pt-4" style={{backgroundColor:'black'}}>
      <div className="container p-4 d-flex justify-content-center align-items-center">
        <Row className=''>
          <Col lg={3} md={6} className="mb-4 mb-md-0">
            <h5 className="text-uppercase footer-heading">Power Wallet</h5>
            <p>
              Secure and powerful wallet to manage your financial assets. Trust your wallet with us.
            </p>
          </Col>

          <Col  className="mb-4 mb-md-0">
            <h5 className="text-uppercase footer-heading">Useful Links</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to={'/about'} className="text-white">About Us</Link></li>
              <li><Link to={'/privacy-policy'} className="text-white">Privacy Policy</Link></li>
              <li><Link to={'terms-and-conditions'} className="text-white">Terms of Service</Link></li>
            </ul>
          </Col>

          <Col  className="mb-4 mb-md-0">
            <h5 className="text-uppercase footer-heading">Support</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="#!" className="text-white">Contact Us</a></li>
              <li ><a href="#!" className="text-white">Help Center</a></li>
              <li><a href="#!" className="text-white">FAQs</a></li>
            </ul>
          </Col>

          <Col  className="mb-4 mb-md-0">
            <h5 className="text-uppercase footer-heading">Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#!" className="text-white">Facebook</a></li>
              <li><a href="#!" className="text-white">Twitter</a></li>
              <li><a href="#!" className="text-white">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: '#00334D' }}>
        © 2024 Power Wallet. All rights reserved <span className='ms-1' style={{color:'#ff5722'}}>-SHON MATHEW</span>
      </div>
    </footer>
  );
}

export default Footer;
