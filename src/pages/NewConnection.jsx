import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'

function NewConnection() {
    const [premise, setPremise] = useState('')
    const [purpose, setPurpose] = useState('')

    const handlePremise = (e) => {
        setPremise(e.target.value)
    }
    const handlePurpose=(e)=>{
        setPurpose(e.target.value)
    }
    return (
        <>
            <Header />
            <Container>

                <div className='border shadow rounded-3 m-3' >
                    <h2 className='text-center mt-3' style={{ color: '#004B73' }}>New Connection Application Form</h2>
                    <h5 className=' text-center mt-4' style={{ color: '#005C99' }}>Applicant Information</h5>
                    <div className='ms-3 me-3'>
                        <div className='form-group mt-2 mb-3'>
                            <label class="form-check-label"> Name of the applicant</label>
                            <input type="text" className='form-control w-100' placeholder='Enter your name' />
                        </div>
                        <div className='form mt-2 mb-3'>
                            <label class="form-check-label" > Contact Number</label>
                            <input type="tel" pattern="[0-9]{10}" className='form-control w-100' placeholder='Enter your contact number' />
                        </div>
                        <div className='form-group mt-2 mb-3'>
                            <label class="form-check-label"> Email ID</label>
                            <input type="email" className='form-control w-100' placeholder='Enter your Email-id' />
                        </div>
                        <div className='form-group mt-2 mb-3'>
                            <label class="form-check-label"> Permanent Address</label>
                            <textarea name="" id="" className='form-control w-100' placeholder='Enter your Permanent Address'></textarea>
                        </div>
                        <div className='form-check text-danger mt-2 mb-3'>
                            <input type="checkbox" class="form-check-input" id="sameAddress" />
                            <label class="form-check-label" htmlFor="sameAddress">Check this if temporary address is the same as permanent address.</label>
                        </div>

                        <div className='form-group mt-2 mb-3'>
                            <label class="form-check-label"> Temporary Address</label>
                            <textarea name="" id="" className='form-control w-100' placeholder='Enter your Temporary Address'></textarea>

                        </div>
                        <h5 className='text-center' style={{ color: '#005C99' }}>Property Details</h5>
                        <div>
                            <label class="form-check-label">Type of Premises:</label>
                            <select name="" id="" className='form-select  mt-2 mb-3' value={premise} onChange={handlePremise}>
                                <option value="" disabled selected>Select type of premise</option>
                                <option value="residential">Residential</option>
                                <option value="commercial">Commercial</option>
                                <option value="industrial">Industrial</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        {
                            premise === 'others' ?
                                <>
                                    <div className=' form-group mt-2 mb-3'>
                                        <label class="form-check-label text-danger"> Mention the type of premise : *</label>
                                        <input type="email" className='form-control w-100' placeholder='Enter your premise type' />
                                    </div>
                                </> :
                                <></>
                        }
                        <div>
                            <label class="form-check-label">Connection purpose:</label>
                            <select class="form-select mt-2 mb-3" id="" value={purpose} onChange={handlePurpose}>
                                <option value="" disabled selected>Select purpose of connection</option>
                                <option value="residential">Residential</option>
                                <option value="commercial">Commercial</option>
                                <option value="industrial">Industrial</option>
                                <option value="agricultural">Agricultural</option>
                                <option value="institutional">Institutional</option>
                                <option value="temporary">Temporary</option>
                                <option value="construction">Construction</option>
                                <option value="others">Other</option>
                            </select>
                            {
                                purpose ==='others'?
                                <>
                                <div className=' form-group mt-2 mb-3'>
                                    <label class="form-check-label text-danger"> Mention the type of connection : *</label>
                                    <input type="email" className='form-control w-100' placeholder='Enter your connection type' />
                                </div>
                            </> :
                            <></>
                            }
                        </div>
                    </div>



                </div>
            </Container>
        </>
    )
}

export default NewConnection