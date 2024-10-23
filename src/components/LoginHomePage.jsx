import React, { useContext, useState } from 'react'
import { roleContext } from '../context/RoleContext'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function LoginHomePage() {
    const { setRole } = useContext(roleContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            Swal.fire({
                title: "Incomplete Form",
                text: "Please fill out both username and password fields.",
                icon: "warning"
            });
            return;
        }
        if (email === 'admin@123' && password === 'admin') {

            Swal.fire({
                title: "",
                text: "Successfully logged in as admin!",
                icon: "success"
            });
            setRole('admin')
            sessionStorage.setItem('rolesssss', role)
            console.log('role--------------', role);
            setEmail('')
            setPassword('')

        } else if (email === 'user@123' && password === 'user') {

            Swal.fire({
                title: "",
                text: "Successfully logged in as user!",
                icon: "success"
            });
            setRole("user")

            setEmail('')
            setPassword('')
        } else {
            Swal.fire({
                title: "SORRY",
                text: "Please check the email and password!",
                icon: "warning"
            });
        }


        sessionStorage.setItem('role', role)

    };
    return (
        <>
            <div className="mt-3 border border-3 rounded-3 shadow p-5">
                <div className="d-flex flex-column align-items-center justify-content-center text-center">
                    <h1 className="rounded-2 p-2" style={{ backgroundColor: 'lightblue', color: '#001F3F' }}>
                        Login to Your Account
                    </h1>
                    <div className='w-100'>
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                placeholder="Email"
                                className="form-control mt-3 w-100"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
        </>
    )
}

export default LoginHomePage