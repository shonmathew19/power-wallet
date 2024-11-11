import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { json, Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { roleContext } from '../context/RoleContext';
import { loginApi, registerApi } from '../../services/allApi';

function Login({ register }) {

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { role, setRole } = useContext(roleContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        const { username, email, password } = userData;

        if (!username || !email || !password) {
            Swal.fire({
                title: "Incomplete Form",
                text: "Please fill all fields.",
                icon: "warning"
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                title: "Invalid Email",
                text: "Please enter a valid email address.",
                icon: "warning"
            });
            return;
        }

        try {
            setLoading(true);
            const result = await registerApi(userData);
            setLoading(false);

            if (result.status === 201) {
                setUserData({
                    username: '',
                    email: '',
                    password: ''
                });
                Swal.fire({
                    title: "Registration Successful",
                    text: `"${result.data.data.username}" registered successfully`,
                    icon: "success"
                });
                navigate('/login');
            } else if (result.status === 401) {
                Swal.fire({
                    title: "Error",
                    text: "Something went wrong. Please try again.",
                    icon: "error"
                });
            } else {
                Swal.fire({
                    title: "Unexpected Error",
                    text: "An unexpected error occurred. Please try again later.",
                    icon: "error"
                });
            }
        } catch (error) {
            setLoading(false);
            Swal.fire({
                title: "Error",
                text: `An error occurred: ${error.message}`,
                icon: "error"
            });
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = userData;

        if (!email || !password) {
            Swal.fire({
                title: "Incomplete Form",
                text: "Please fill out both email and password fields.",
                icon: "warning"
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            Swal.fire({
                title: "Invalid Email",
                text: "Please enter a valid email address.",
                icon: "warning"
            });
            return;
        }

        try {
            setLoading(true);
            const result = await loginApi(userData);
            console.log('login result',result);

            setLoading(false);

            if (result.status === 201) {
                const { _id, username, accountType } = result.data.data;
                

                sessionStorage.setItem('loggedUser',JSON.stringify(result.data.data))
                sessionStorage.setItem('id', _id);
                sessionStorage.setItem('role', accountType || null);
                sessionStorage.setItem('token',result.data.token)

                setUserData({
                    username: '',
                    email: '',
                    password: ''
                });

                Swal.fire({
                    title: "",
                    text: `${username} logged in successfully`,
                    icon: "success"
                });

                navigate('/home');
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Username or password is incorrect",
                    icon: "error"
                });
            }
        } catch (error) {
            setLoading(false);
            Swal.fire({
                title: "Error",
                text: "An unexpected error occurred. Please try again later.",
                icon: "error"
            });
        }
    };

    return (
        <div>
            <div className='bar'></div>
            <Row className="vh-100">
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
                        {
                            register ? (
                                <>
                                    <h1>Register Your Account</h1>
                                    <input
                                        type="text"
                                        placeholder='Username'
                                        className='form-control'
                                        value={userData.username}
                                        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
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
                            value={userData.email}
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        />
                        <input
                            type="password"
                            className="form-control mt-3"
                            placeholder="Password"
                            value={userData.password}
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        />
                        {
                            register ? (
                                <>
                                    <button
                                        className="btn btn-success mt-4 mb-3 w-50 rounded-5 login-second-col-btn"
                                        onClick={handleRegister}
                                        disabled={loading}
                                    >
                                        {loading ? "Signing Up..." : "Sign Up"}
                                    </button>
                                    <p className='mt-3 text-center'>Already a user? Click here to <Link style={{ textDecoration: 'none', color: '#ff5722' }} className='ms-1' to={'/login'}>Login</Link></p>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="btn btn-success mt-4 mb-3 w-50 rounded-5 login-second-col-btn"
                                        onClick={handleLogin}
                                        disabled={loading}
                                    >
                                        {loading ? "Signing In..." : "Sign In"}
                                    </button>
                                    <p className='mt-3 text-center'>Not registered? Click here to <Link style={{ textDecoration: 'none', color: '#ff5722' }} className='ms-1' to={'/register'}>Register</Link></p>
                                </>
                            )
                        }
                    </div>
                </Col>

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
