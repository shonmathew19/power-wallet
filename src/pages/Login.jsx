import React, { useContext, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { roleContext } from '../context/RoleContext';
import { loginApi, registerApi } from '../../services/allApi';

function Login({ register }) {
   

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    })

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
        } else {
            const result = await registerApi(userData)

            if (result.status === 201) {
                setUserData({
                    username: '',
                    email: '',
                    password: ''
                })
                Swal.fire({
                    title: "",
                    text: `"${result.data.data.username}" registered successfully`,
                    icon: "success"
                });
                navigate('/login')
            }else if(result.status = 401){
                Swal.fire({
                    title: "SORRY",
                    text: `Something went wrong`,
                    icon: "error"
                });
            }


        }
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        const { username, email, password } = userData;
        if (!email || !password) {
            Swal.fire({
                title: "Incomplete Form",
                text: "Please fill out both username and password fields.",
                icon: "warning"
            });
            return;
        } else {
            const result = await loginApi(userData);
            console.log(result.data.data._id,'*****************************************')
            sessionStorage.setItem('id',result.data.data._id)
            if (result.status === 201) {
                setUserData({
                    username: '',
                    email: '',
                    password: ''
                })
                const role = result.data.data.accountType;
                if (role === 'user') {
                    sessionStorage.setItem('role', role)
                } else if (role === 'admin') {
                    sessionStorage.setItem('role', role)
                } else {
                    sessionStorage.setItem('role', null)
                }
                Swal.fire({
                    title: "",
                    text: `"${result.data.data.username}" logged in successfully`,
                    icon: "success"
                });

                navigate('/home')
            } else {
                Swal.fire({
                    title: "error",
                    text: "Username or password is incorrect",
                    icon: "error"
                });
            }

        }

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
                                    <button className="btn btn-success mt-4 mb-3 w-50 rounded-5 login-second-col-btn" onClick={handleRegister}>Sign Up</button>
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
