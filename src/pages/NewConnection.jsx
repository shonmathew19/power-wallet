import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'

function NewConnection() {
    return (
        <>
        <Header/>
            <Container>

                <div className='border shadow m-3' >
                    <h2 className='text-center mt-2'>New Connection Application Form</h2>
                    <h5 className='ms-3'>Applicant Information</h5>
                    <div className='ms-5 me-5'>
                        <div className='form-group mt-2 mb-3'>
                            <label htmlFor="Name"> Name of the applicant</label>
                            <input type="text" className='form-control w-100' placeholder='Enter your name' />
                        </div>
                        <div className='form mt-2 mb-3'>
                            <label htmlFor="Name"> Contact Number</label>
                            <input type="text" className='form-control w-100' placeholder='Enter your contact number' />
                        </div>
                        <div className='form-group mt-2 mb-3'>
                            <label htmlFor="Name"> Email ID</label>
                            <input type="text" className='form-control w-100' placeholder='Enter your Email-id' />
                        </div>
                        <div className='form-group mt-2 mb-3'>
                            <label htmlFor="Name"> Permanent Address</label>
                            <input type="text" className='form-control w-100' placeholder='Enter your Permanent Address' />
                        </div>
                        <div className='form-group'>
                            <input type="checkbox" id="sameAddress" />
                            <label htmlFor="sameAddress">Check this if temporary address is the same as permanent address</label>
                        </div>

                        <div className='form-group mt-2 mb-3'>
                            <label htmlFor="Name"> Temporary Address</label>
                            <input type="text" className='form-control w-100' placeholder='Enter your Temporary Address' />
                        </div>


                    </div>

                </div>
            </Container>
        </>
    )
}

export default NewConnection