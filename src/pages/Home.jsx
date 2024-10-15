import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { Col, Row, Container, Navbar } from 'react-bootstrap'




function Home({ register }) {

    return (
        <>

            <Header />
            <Row className='home-row' >
                <Col md={6}>
                    <div className='d-flex justify-content-center align-items-center p-5 m-4 border shadow mt-5 opacity-75 text-light rounded-4 bg-dark'>
                        <h2>
                            "Green energy is not just the future; it's the key to preserving our planet's present for generations to come."
                        </h2>

                    </div>

                </Col>
                <Col md={6}>
                    <div className='mt-3'>
                        <div className="d-flex flex-column align-items-center justify-content-center text-center">
                            <h1 className=' rounded-2 text-light p-2  bg-dark opacity-75   '>{register ? "Register Your Account" : "Login to Your Account"}</h1>
                            <input type="text" placeholder={register ? 'Username' : 'Email'} className='form-control mt-3 w-75' />
                            <input type="password" className="form-control mt-3 w-75" placeholder="Password" />
                            <button className="btn btn-light text-light mt-4 mb-3 w-50 rounded-5 login-second-col-btn">{register ? "Sign Up" : "Sign In"}</button>
                            <p className='text-light bg-dark opacity-75 rounded-3 p-2'>
                                {register ? "Already a user? Click here to " : "Not registered? Click here to "}
                                <Link className='ms-1' to={register ? '/login' : '/register'}>
                                    {register ? "Login" : "Register"}
                                </Link>
                            </p>
                        </div>
                    </div>
                </Col>
                <Footer />
            </Row>

        </>
    )
}

export default Home