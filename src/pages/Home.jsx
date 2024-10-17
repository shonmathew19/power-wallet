import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';
import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from './UserDashboard';

function Home({ setRole }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const storedRole = localStorage.getItem('role');

    const handleLogin = (e) => {
        e.preventDefault();
        let userRole = null;
        if (!username || !password) {
            Swal.fire({
                title: "Incomplete Form",
                text: "Please fill out both username and password fields.",
                icon: "warning"
            });
            return;
        }
        if (username === 'admin@123' && password === 'admin') {
            userRole = 'admin';
            Swal.fire({
                title: "",
                text: "Successfully logged in as admin!",
                icon: "success"
            });
            localStorage.setItem('role', userRole);
            navigate('/home');
            setIsLogin(true)
        } else {
            userRole = 'user';
            Swal.fire({
                title: "",
                text: "Successfully logged in as user!",
                icon: "success"
            });
            localStorage.setItem('role', userRole);
            navigate('/home');
            setIsLogin(true)
        }

        setRole(userRole);
    };

    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        if (storedRole) {
            setRole(storedRole);
        }
    }, [storedRole]);

    return (
        <>
            <marquee behavior="scroll" direction="left" scrollamount="5">
                Investing in renewable energy is investing in a sustainable tomorrow, where clean power fuels innovation and progress.
            </marquee>

            <Row className="home-row">
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center p-5 m-4 border shadow mt-5 opacity-75 text-light rounded-4 bg-dark">
                        <h2>
                            "Green energy is not just the future; it's the key to preserving our planet's present for generations to come."
                        </h2>
                    </div>
                </Col>

                <Col md={6} className="d-flex justify-content-center align-items-center">
                    {storedRole === null ? (
                        <div className="mt-3 border border-3 rounded-3 shadow p-5">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center">
                                <h1 className="rounded-2 p-2" style={{ backgroundColor: 'lightblue', color: '#001F3F' }}>
                                    Login to Your Account
                                </h1>
                                <div className='w-100'>
                                    <form onSubmit={handleLogin}>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            className="form-control mt-3 w-100"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <input
                                            type="password"
                                            className="form-control mt-3 w-100"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button type="submit" className="btn btn-light text-light mt-4 mb-3 w-50 rounded-5 login-second-col-btn">
                                            Sign In
                                        </button>
                                    </form>
                                </div>

                                <div className="ms-1 text-light">
                                    Not registered? Click
                                    <Link to="/register" style={{ textDecoration: 'none', color: '#ff5722' }}>
                                        <span> here</span>
                                    </Link>
                                    {' '}to register.
                                </div>
                            </div>
                        </div>
                    ) : storedRole === 'admin' ? (
                        <AdminDashboard />
                    ) : (
                        <UserDashboard />
                    )}
                </Col>
            </Row>
        </>
    );
}

export default Home;
