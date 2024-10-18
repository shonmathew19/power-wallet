import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login({ register, setRole}) {
    // Define state variables for username, password, and email
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
   
    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Username: ", username);
        console.log("Password: ", password);
        console.log("Email: ", email);
        if (!email || !password) {
            Swal.fire({
                title: "Incomplete Form",
                text: "Please fill out both username and password fields.",
                icon: "warning"
            });
            return;
        }

        let role = null;
        if (email === 'admin' && password === 'admin') {
            role = 'admin';
            Swal.fire({
                title: "",
                text: "Successfully logged in as admin!",
                icon: "success"
            });
            navigate('/home');
            
        } else if(email === 'user' && password === 'user') {
            role = 'user';
            Swal.fire({
                title: "",
                text: "Successfully logged in as user!",
                icon: "success"
            });
            navigate('/home');
    
        }else{
            Swal.fire({
                title: "",
                text: "Please check the email and password!",
                icon: "warning"
            });
        }

        setRole(role);
        localStorage.setItem('role', role);

        console.log(role);
    };

    return (
        <div>
            <div className='bar'></div>
            <Row className="vh-100">
                {/* First Column (Login Form) */}
                <Col md={7} className="d-flex flex-column align-items-center justify-content-center">
                    <Navbar>
                        <Container>
                            <Navbar.Brand as={Link} to={'/home'} className='d-flex'>
                                <img
                                    alt=""
                                    src="/images/logo.jpg"
                                    width="40"
                                    height="40"
                                    className="d-inline-block align-top rounded-4 shadow"
                                />{' '}
                                <h4 className='fw-bold mt-2 ms-2'>Power Wallet</h4>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                    <div className="d-flex flex-column align-items-center justify-content-center text-center w-75 mt-4">
                        {/* for creating new account */}
                        {
                            register ? (
                                <>
                                    <h1>Register Your Account</h1>
                                    <input 
                                        type="text" 
                                        placeholder='Username' 
                                        className='form-control' 
                                        value={username} 
                                        onChange={(e) => setUsername(e.target.value)} 
                                    />
                                </>
                            ) : (
                                <>
                                    <h1>Login to Your Account</h1>
                                </>
                            )
                        }
                        <input
                            type="email"
                            className="form-control mt-3"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="form-control mt-3"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {
                            register ? (
                                <>
                                    <button className="btn btn-success mt-4 mb-3 w-50 rounded-5 login-second-col-btn">Sign Up</button>
                                    <p className='mt-3 text-center'>Already a user? Click here to <Link style={{ textDecoration: 'none', color: '#ff5722' }} className='ms-1' to={'/login'}>Login</Link></p>
                                </>
                            ) : (
                                <>
                                    <button className="btn btn-success mt-4 mb-3 w-50 rounded-5 login-second-col-btn" onClick={handleLogin}>Sign In</button>
                                    <p className='mt-3 text-center'>Not registered? Click here to <Link style={{ textDecoration: 'none', color: '#ff5722' }} className='ms-1' to={'/register'}>Register</Link></p>
                                </>
                            )
                        }
                    </div>
                </Col>

                {/* Second Column (Sign Up Info) */}
                <Col md={5} className="d-flex flex-column justify-content-center align-items-center text-center text-light p-3 login-second-col-btn p-5">
                    <div className="d-flex flex-column align-items-center">
                        <h1 className="fw-bold new-here">New Here?</h1>
                        <h3 className="mt-3 text-center">
                            Sign up to explore more and pay your bills online
                        </h3>
                        {
                            register ? (
                                <div className='d-flex align-items-center'>
                                    <i className="fa-solid fa-arrow-left fa-bounce fa-3x me-3"></i>
                                    <span className='red-yellow-white-gradient'> Enter your details and create an account</span>
                                </div>
                            ) : (
                                <Link to={'/register'} className="btn btn-light rounded-5 mt-3">
                                    Get Started
                                </Link>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Login;
