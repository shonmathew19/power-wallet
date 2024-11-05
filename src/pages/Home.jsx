
import { Link, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import AdminDashboard from '../pages/AdminDashboard';
import UserDashboard from './UserDashboard';


function Home() {

    const activeRole = sessionStorage.getItem('role')
    console.log('role in home page*********', activeRole)
    return (
        <>
            <div class="marquee-container">
                <div class="marquee-content">
                    <span>Investing in renewable energy is investing in a sustainable tomorrow, where clean power fuels innovation and progress. </span>
                    <span>Green energy initiatives are key to reducing carbon footprints and fostering a healthier planet. </span>
                    <span>Join the movement for sustainable energy and contribute to a greener future for all. </span>

                </div>
            </div>

            <Row className="home-row">
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <div className="position-relative">
                        <div className="bg-overlay" />
                        <div className="d-flex justify-content-center align-items-center p-5 m-4 border shadow-lg mt-5 text-light rounded-4 bg-dark position-relative z-index-1">
                            <h2 className="text-center" style={{ fontStyle: 'italic', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                                "Green energy is not just the future; it's the key to preserving our planet's present for generations to come."
                            </h2>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqlS3yeC7_qSu3s4zBWG2U3vidCCVYLDX3pw&s" alt="Energy Icon" className="icon-position" />
                        </div>
                    </div>
                </Col>





                <Col md={6} className="glass-container rounded-5" style={{ padding: '25px',marginTop:'10px',marginBottom:'10px' }}>
                    {
                        activeRole == null && (
                            <div className="glass-card">
                                <h2>Welcome to Power Wallet</h2>
                                <p>Manage your electricity bills and account with ease.</p>
                                <p>
                                    Already a user? Click here to
                                    <Link to={'/login'} className='link ms-1'>Login</Link>
                                </p>
                                <p>
                                    New here? Explore and
                                    <Link to={'/register'} className='link ms-1' style={{ color: '#28a745' }}>Register</Link> to start managing your bills.
                                </p>
                            </div>
                        )
                    }
                    {
                        activeRole == 'admin' ? (
                            <div className="glass-card">

                                <AdminDashboard />
                            </div>
                        ) : activeRole == 'user' ? (
                            <div className="glass-card">

                                <UserDashboard />
                            </div>
                        ) : null
                    }
                </Col>

            </Row>
        </>
    );
}

export default Home;
