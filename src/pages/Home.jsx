
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
                <Col md={6} className="d-flex justify-content-center align-items-center flex-column">
                
                    <div>
                        <div className="d-flex justify-content-center align-items-center p-2 m-2 border shadow-lg mt-5 text-light rounded-4 bg-dark">
                            <h2 className="text-center" style={{ fontStyle: 'italic', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                                "Join the movement for sustainable energy and contribute to a greener future for all."
                            </h2>
                            <img
                                src='https://assets-us-01.kc-usercontent.com/7dd6b71d-d672-0004-6a4d-7043e1d0db33/e4b1bf32-684f-431c-883b-23adb4df93b5/Energy%20usage.gif'
                                alt="Energy Icon"
                                className="icon-image"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-center align-items-center p-2 m-2 border shadow-lg mt-5 text-light rounded-4 bg-dark">
                            <h2 className="text-center" style={{ fontStyle: 'italic', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
                                "Green energy is not just the future; it's the key to preserving our planet's present for generations to come."
                            </h2>
                            <img
                                src="https://img.freepik.com/premium-photo/esg-green-energy-sustainable-industry-with-windmills-solar-energy-panels-ai-generation_201606-4871.jpg"
                                alt="Energy Icon"
                                className="icon-image"
                            />
                        </div>
                    </div>
                </Col>


                <Col md={6} className="glass-container rounded-5 d-flex justify-content-center align-items-center" style={{}}>
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
