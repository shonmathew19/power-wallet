import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import { useNavigate,Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import Footer from '../components/Footer'


function NewConnection() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        contactNumber: '',
        email: '',
        premise: '',
        purpose: '',
        permanentAddress: '',
        temporaryAddress: '',
        isCheckedAddress: false,
        load: '',
        aadharNumber: '',
        declaration: false
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });

        if (name === 'permanentAddress' && formData.isCheckedAddress) {
            setFormData({
                ...formData,
                permanentAddress: value,
                temporaryAddress: value,
            });
        }
    };

    const handleAddressCheckbox = (e) => {
        const { checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            isCheckedAddress: checked,
            temporaryAddress: checked ? prevFormData.permanentAddress : '',
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (!formData.declaration) {
            Swal.fire({
                title: "OOPS!!!",
                text: "Please accept the declaration to submit the form!",
                icon: "warning"
            });
        } else {
            Swal.fire({
                title: "Thank you!!!",
                text: "Your application is submitted!",
                icon: "success"
            });
            console.log("Form submitted with data: ", formData);
            setFormSubmitted(true);
            navigate('/home')
        }



    };

    const { name, contactNumber, email, premise, purpose, permanentAddress, temporaryAddress, isCheckedAddress, load, aadharNumber, declaration } = formData;

    return (
        <>
            
            <Container>
            <h2 className='text-center mt-3' style={{ color: '#004B73' }}>New Connection Application Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className='border shadow rounded-3 m-3'>
                        
                        <h5 className='text-center mt-4' style={{ color: '#005C99' }}>Applicant Information</h5>
                        <div className='ms-3 me-3'>

                            <div className='form-group mt-2 mb-3'>
                                <label className="form-check-label"> Name of the applicant</label>
                                <input
                                    type="text"
                                    name="name"
                                    className='form-control w-100'
                                    placeholder='example: Shon Mathew'
                                    value={name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form mt-2 mb-3'>
                                <label className="form-check-label"> Contact Number</label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    pattern="[0-9]{10}"
                                    className='form-control w-100'
                                    placeholder='example: +91 9876543210'
                                    value={contactNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group mt-2 mb-3'>
                                <label className="form-check-label"> Email ID</label>
                                <input
                                    type="email"
                                    name="email"
                                    className='form-control w-100'
                                    placeholder='example: shon@gmail.com'
                                    value={email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='form-group mt-2 mb-3'>
                                <label className="form-check-label"> Permanent Address</label>
                                <textarea
                                    name="permanentAddress"
                                    className='form-control w-100'
                                    placeholder='Enter Address'
                                    value={permanentAddress}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className='form-check text-danger mt-2 mb-3'>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="sameAddress"
                                    checked={isCheckedAddress}
                                    onChange={handleAddressCheckbox}
                                />
                                <label className="form-check-label" htmlFor="sameAddress">Check this if temporary address is the same as permanent address.</label>
                            </div>
                            <div className='form-group mt-2 mb-3'>
                                <label className="form-check-label"> Temporary Address</label>
                                <textarea
                                    name="temporaryAddress"
                                    className='form-control w-100'
                                    placeholder='Enter Address'
                                    value={temporaryAddress}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className='form-group mt-2 mb-3'>
                                <label className="form-check-label">Aadhar Number</label>
                                <input
                                    type="text"
                                    name="aadharNumber"
                                    className='form-control w-100'
                                    placeholder='Enter Aadhar Number'
                                    value={aadharNumber}
                                    onChange={handleChange}
                                />
                            </div>

                            <h5 className='text-center' style={{ color: '#005C99' }}>Property Details</h5>

                            <div>
                                <label className="form-check-label">Type of Premises:</label>
                                <select
                                    name="premise"
                                    className='form-select  mt-2 mb-3'
                                    value={premise}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select type of premise</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="industrial">Industrial</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                            {premise === 'others' && (
                                <div className='form-group mt-2 mb-3'>
                                    <label className="form-check-label text-danger"> Mention the type of premise : *</label>
                                    <input
                                        type="text"
                                        className='form-control w-100'
                                        placeholder='Enter your premise type'
                                    />
                                </div>
                            )}
                            <div>
                                <label className="form-check-label">Connection purpose:</label>
                                <select
                                    name="purpose"
                                    className="form-select mt-2 mb-3"
                                    value={purpose}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select purpose of connection</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="industrial">Industrial</option>
                                    <option value="agricultural">Agricultural</option>
                                    <option value="institutional">Institutional</option>
                                    <option value="temporary">Temporary</option>
                                    <option value="construction">Construction</option>
                                    <option value="others">Other</option>
                                </select>
                            </div>
                            {purpose === 'others' && (
                                <div className='form-group mt-2 mb-3'>
                                    <label className="form-check-label text-danger"> Mention the type of connection : *</label>
                                    <input
                                        type="text"
                                        className='form-control w-100'
                                        placeholder='Enter your connection type'
                                    />
                                </div>
                            )}
                            <div className='form-group mt-2 mb-3'>
                                <label className="form-check-label"> Address of premise for connection</label>
                                <textarea
                                    name="premiseAddress"
                                    className='form-control w-100'
                                    placeholder='Enter Address'
                                ></textarea>
                            </div>
                            <div className='form mt-2 mb-3'>
                                <label className="form-check-label"> Expected Load (in kW)</label>
                                <input
                                    type="number"
                                    name="load"
                                    className='form-control w-100'
                                    placeholder='example: 2kW'
                                    value={load}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='form-check text-danger mt-2 mb-3'>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="declaration"
                                    name="declaration"
                                    checked={declaration}
                                    onChange={handleChange}
                                />
                                <label  className="form-check-label" htmlFor="declaration">I hereby declare that the information provided above is true to the best of my knowledge. I understand that any false information may lead to the rejection of my application.</label>
                               
                            </div>

                            <div className="text-center mb-4 d-flex flex-column justify-content-center align-items-center">
                            <Link to={'/terms-and-conditions'} target='_blank' className='ms-1 mb-2' style={{color:'blue', fontStyle:'italic',textDecoration:'none'}}>click to see :"terms & conditions apply"</Link>
                                <button type="submit" className="btn btn-primary login-second-col-btn rounded-5 w-50">
                                    Submit
                                </button>
                            </div>


                        </div>
                    </div>
                </form>
            </Container>
            
        </>
    );
}

export default NewConnection;
