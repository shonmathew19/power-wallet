import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'




function Home() {

    return (
        <>

            <Header />
            <Row className='home-row' >
                <Col md={6}>
                    <div className='d-flex justify-content-center align-items-center p-5 m-4'>
                        
                        
                    </div>
                </Col>
                <Col md={6}>

                </Col>
            </Row>
            <Footer />
        </>
    )
}

export default Home