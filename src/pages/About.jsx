import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Power Wallet</h1>
      <div className="row">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            At Power Wallet, we strive to provide a seamless and efficient online payment solution for electricity bills and related services. Our mission is to empower consumers with the tools they need to manage their energy payments conveniently and securely.
          </p>
        </div>
        <div className="col-md-6">
          <h3>What We Offer</h3>
          <ul>
            <li>Easy online payments for electricity bills</li>
            <li>Access to new connection services</li>
            <li>User-friendly dashboard for managing accounts</li>
            <li>Secure storage of account and user data</li>
          </ul>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Contact Us</h3>
          <p>
            For inquiries or support, please reach out to us at <a href="mailto:support@powerwallet.com">support@powerwallet.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
