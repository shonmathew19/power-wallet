
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from './UserDashboard';


function Home() {

    const activeRole = sessionStorage.getItem('role')
    console.log('role in home page*********', activeRole)
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
                    {
                        activeRole == null &&
                        <>
                            <div className='border border-2 p-4'>

                            <p className='mt-3 text-center'style={{fontSize:"2em"}}>Already a user? Click here to <Link style={{ textDecoration: 'none', color: '#ff5722' }} className='ms-1' to={'/login'}>Login</Link></p>
                            </div>
                        </>
                    }
                    {
                        activeRole == 'admin' ?
                            <AdminDashboard />
                            :
                            activeRole == 'user' ?
                                <UserDashboard />
                                :
                                null

                    }


                </Col>
            </Row>
        </>
    );
}

export default Home;
