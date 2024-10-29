import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';
import { createNewConnectionApi } from '../../services/allApi';
import { Link } from 'react-router-dom';

function NewConnection() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        applicantName: '',
        contactNumber: '',
        emailId: '',
        typeOfPremises: '',
        connectionPurpose: '',
        permanentAddress: '',
        temporaryAddress: '',
        isCheckedAddress: false,
        expectedLoad: '',
        aadharNumber: '',
        declaration: false,
        addressOfPremise: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });

        if (name === 'permanentAddress' && formData.isCheckedAddress) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                temporaryAddress: value,
            }));
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.declaration) {
            Swal.fire({
                title: "OOPS!!!",
                text: "Please accept the declaration to submit the form!",
                icon: "warning"
            });
            return; 
        }

        try {
            const newConnection = await createNewConnectionApi(formData);
            console.log(formData);
            console.log(newConnection, '............');

            if (newConnection.status === 201) {
                Swal.fire({
                    title: "Thank you!!!",
                    text: "Your application is submitted!",
                    icon: "success"
                });
                navigate('/home');
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "There was a problem submitting your application. Please try again.",
                    icon: "error"
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            Swal.fire({
                title: "Error!",
                text: "There was a problem submitting your application. Please try again later.",
                icon: "error"
            });
        }
    };

    return (
        <>
            <Container>
                <h2 className='text-center mt-3' style={{ color: '#004B73' }}>New Connection Application Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className='border shadow rounded-3 m-3'>
                        <h5 className='text-center mt-4' style={{ color: '#005C99' }}>Applicant Information</h5>
                        <div className='ms-3 me-3'>
                            <div className='form-group mt-2 mb-3'>
                                <label className="form-check-label">Name of the applicant</label>
                                <input
                                    type="text"
                                    name="applicantName" 
                                    className='form-control w-100'
                                    placeholder='example: Shon Mathew'
                                    value={formData.applicantName} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form mt-2 mb-3'>
                                <label className="form-check-label">Contact Number</label>
                                <input
                                    type="tel"
                                    name="contactNumber" 
                                    pattern="[0-9]{10}"
                                    className='form-control w-100'
                                    placeholder='example: +91 9876543210'
                                    value={formData.contactNumber} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group mt-2 mb-3'>
                                <label className="form-check-label">Email ID</label>
                                <input
                                    type="email"
                                    name="emailId" 
                                    className='form-control w-100'
                                    placeholder='example: shon@gmail.com'
                                    value={formData.emailId} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='form-group mt-2 mb-3'>
                                <label className="form-check-label">Permanent Address</label>
                                <textarea
                                    name="permanentAddress"
                                    className='form-control w-100'
                                    placeholder='Enter Address'
                                    value={formData.permanentAddress} 
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className='form-check text-danger mt-2 mb-3'>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="sameAddress"
                                    checked={formData.isCheckedAddress}
                                    onChange={handleAddressCheckbox}
                                />
                                <label className="form-check-label" htmlFor="sameAddress">Check this if temporary address is the same as permanent address.</label>
                            </div>
                            <div className='form-group mt-2 mb-3'>
                                <label className="form-check-label">Temporary Address</label>
                                <textarea
                                    name="temporaryAddress" 
                                    className='form-control w-100'
                                    placeholder='Enter Address'
                                    value={formData.temporaryAddress}
                                    onChange={handleChange}
                                    required={!formData.isCheckedAddress} 
                                ></textarea>
                            </div>

                            <div className='form-group mt-2 mb-3'>
                                <label className="form-check-label">Aadhar Number</label>
                                <input
                                    type="text"
                                    name="aadharNumber" 
                                    className='form-control w-100'
                                    placeholder='Enter Aadhar Number'
                                    value={formData.aadharNumber} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <h5 className='text-center' style={{ color: '#005C99' }}>Property Details</h5>

                            <div>
                                <label className="form-check-label">Type of Premises:</label>
                                <select
                                    name="typeOfPremises" 
                                    className='form-select  mt-2 mb-3'
                                    value={formData.typeOfPremises} 
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select type of premise</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="industrial">Industrial</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                            {formData.typeOfPremises === 'others' && (
                                <div className='form-group mt-2 mb-3'>
                                    <label className="form-check-label text-danger">Mention the type of premise: *</label>
                                    <input
                                        type="text"
                                        className='form-control w-100'
                                        placeholder='Enter your premise type'
                                        required
                                    />
                                </div>
                            )}
                            <div>
                                <label className="form-check-label">Connection purpose:</label>
                                <select
                                    name="connectionPurpose" 
                                    className="form-select mt-2 mb-3"
                                    value={formData.connectionPurpose} 
                                    onChange={handleChange}
                                    required
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
                            {formData.connectionPurpose === 'others' && (
                                <div className='form-group mt-2 mb-3'>
                                    <label className="form-check-label text-danger">Mention the type of connection: *</label>
                                    <input
                                        type="text"
                                        className='form-control w-100'
                                        placeholder='Enter your connection type'
                                        required
                                    />
                                </div>
                            )}
                            <div className='form-group mt-2 mb-3'>
                                <label className="form-check-label">Address of premise for connection</label>
                                <textarea
                                    name="addressOfPremise"
                                    className='form-control w-100'
                                    placeholder='Enter Address'
                                    value={formData.addressOfPremise} 
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className='form mt-2 mb-3'>
                                <label className="form-check-label">Expected Load (in kW)</label>
                                <input
                                    type="number"
                                    name="expectedLoad"
                                    className='form-control w-100'
                                    placeholder='example: 2kW'
                                    value={formData.expectedLoad} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='form-check text-danger mt-2 mb-3'>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="declaration"
                                    name="declaration" 
                                    checked={formData.declaration}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="form-check-label" htmlFor="declaration">I hereby declare that the information provided above is true to the best of my knowledge. I understand that any false information may lead to the rejection of my application.</label>
                            </div>

                            <div className="text-center mb-4 d-flex flex-column justify-content-center align-items-center">
                                <Link to={'/terms-and-conditions'}  className='ms-1 mb-2' style={{color:'blue', fontStyle:'italic',textDecoration:'none'}}>click to see :"terms & conditions apply"</Link>
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
