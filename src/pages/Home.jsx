import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { Col, Row, Container, Navbar } from 'react-bootstrap'




function Home() {

    return (
        <>

           
            <marquee behavior="scroll" direction="left" scrollamount="5">
                Investing in renewable energy is investing in a sustainable tomorrow, where clean power fuels innovation and progress.
            </marquee>
            <Row className='home-row' >
                <Col md={6} className='d-flex justify-content-center align-items-center'>
                    <div className='d-flex justify-content-center align-items-center p-5 m-4 border shadow mt-5 opacity-75 text-light rounded-4 bg-dark'>
                        <h2>
                            "Green energy is not just the future; it's the key to preserving our planet's present for generations to come."
                        </h2>

                    </div>

                </Col>
                <Col md={6} className='d-flex justify-content-center align-items-center'>
                    <div className='mt-3 border border-3 rounded-3 shadow p-5 '>
                        <div className="d-flex flex-column align-items-center justify-content-center text-center">
                            <h1 className=' rounded-2  p-2 ' style={{ backgroundColor: 'lightblue', color: '#001F3F' }}>Login to Your Account</h1>
                            <input type="text" placeholder='Username' className='form-control mt-3 w-100' />
                            <input type="password" className="form-control mt-3 w-100" placeholder="Password" />
                            <button className="btn btn-light text-light mt-4 mb-3 w-50 rounded-5 login-second-col-btn">Sign In</button>


                            <div className='ms-1 text-light'>
                               Not registered? Click<Link  style={{ textDecoration: 'none',color:'#ff5722' }} to={'/register'}> <span> "here"</span> </Link> to register.

                            </div>

                        </div>
                    </div>
                </Col>

            </Row>

          

        </>
    )
}

export default Home