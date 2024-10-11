import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Login({ register }) {
    return (
        <>
            <div>
                <div className='bar' ></div>
                <Row className="vh-100">


                    {/* First Column (Login Form) */}

                    <Col
                        md={7}
                        className="d-flex flex-column align-items-center justify-content-center"
                    >

                        <div className="d-flex " >
                            <Navbar >
                                <Container>
                                    <Navbar.Brand href='/home' className='d-flex'>
                                        <img
                                            alt=""
                                            src="src\assets\images\logo.jpg"
                                            width="40"
                                            height="40"
                                            className="d-inline-block align-top rounded-4 shadow"
                                        />{' '}
                                        <h4 className='fw-bold mt-2 ms-2 '>Power Wallet</h4>
                                    </Navbar.Brand>
                                </Container>
                            </Navbar>

                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center text-center w-75 mt-4">


                            {/* for creating new account */}
                            {
                                register ?
                                    <>
                                        <h1>Register Your Account</h1>
                                        <input type="text" placeholder='Username' className='form-control' />
                                    </>
                                    :
                                    <>
                                        <h1>Login to Your Account</h1>
                                    </>
                            }
                            <input
                                type="email"
                                className="form-control mt-3"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                className="form-control mt-3"
                                placeholder="Password"
                            />
                            {
                                register ?
                                    <>
                                        <button className="btn btn-success mt-4 mb-3 w-50 rounded-5 login-second-col-btn" >Sign Up</button>
                                        <p className='mt-3 text-center'>Already a user? Click here to <Link className='ms-1' to={'/login'}>Login</Link></p>
                                    </>
                                    :
                                    <>
                                        <button className="btn btn-success mt-4 mb-3 w-50 rounded-5 login-second-col-btn" >Sign In</button>
                                        <p className='mt-3 text-center'>Not a registered? Click here to <Link className='ms-1' to={'/register'}>Register</Link></p>
                                    </>

                            }
                        </div>
                        <Link to={'/home'} className='mb-3 mt-3'><button className=' login-second-col-btn text-light rounded-5'> Back to <i class="fa-solid fa-house ms-2"></i></button></Link>
                    </Col>

                    {/* Second Column (Sign Up Info) */}
                    <Col
                        md={5}
                        className="d-flex flex-column justify-content-center align-items-center text-center text-light p-3 rounded-3 login-second-col-btn"

                    >
                        <div className="d-flex flex-column align-items-center">
                            <h1 className="fw-bold">New Here?</h1>
                            <h3 className="mt-5 text-center">
                                Sign up to explore more and pay your bills online
                            </h3>
                            <Link to={'/register'}>
                                <button className="btn btn-light rounded-5 mt-3">
                                    Get Started
                                </button>
                            </Link>
                        </div>

                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Login;


