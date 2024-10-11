import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Header />
            <Link to={'/home'} className='mb-3 mt-3'><button className=' login-second-col-btn text-light rounded-5'> Back to <i class="fa-solid fa-house ms-2"></i></button></Link>
            <Footer />
        </>
    )
}

export default Home