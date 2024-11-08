import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { consumerInfoApi, editConsumerInfoApi } from '../../services/allApi';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';

function AdminPageConsumerInfo() {
    const navigate = useNavigate();
    const location = useLocation();

    const [loading, setLoading] = useState();
    const consumerData = location.state?.consumer || {};

    const [consumerInfo, setConsumerInfo] = useState({
        consumerNumber: "",
        consumerName: "",
        consumerAddress: "",
        billNumber: "",
        dateOfBillGeneration: "",
        meterNumber: "",
        previousMeterReading: "",
        currentMeterReading: "",
        meterType: "",
        unitsConsumed: "",
        tariffRate: "",
        fixedCharges: "",
        variableCharges: "",
        additionalCharges: "",
        taxes: "",
        totalAmountPayable: "",
        dueDate: "",
        contactNumbers: "",
        websiteOrEmail: "",
        additionalNotes: "",
        paymentStatus: ""
    });

    useEffect(() => {
        if (consumerData) {
            setConsumerInfo(consumerData);
        }
    }, [consumerData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setConsumerInfo((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true)
            const result = await editConsumerInfoApi(consumerInfo.userId, consumerInfo);
            setLoading(false)


            if (result.status === 200) {
                Swal.fire({
                    text: 'Consumer information updated successfully',
                    icon: "success"
                });
                navigate('/all-consumers');
            } else {
                Swal.fire({
                    title: "OOPS",
                    text: 'Something went wrong',
                    icon: "warning"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error",
                text: 'Could not update consumer information',
                icon: "error"
            });
        }
    };


    return (
        <Container>
            {
                loading&&
                <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <div className="spinner-border text-light" style={{ width: '5rem', height: '5rem' }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="text-light mt-3 fs-4">Please wait, SAVING...</p>
                    </div>
                </div>

            }
            <h2 className="mb-2 mt-3 text-center" style={{ color: '#004B73' }}>
                Admin Consumer Information Form
            </h2>
            <div className="border shadow rounded-3 m-3">
                <form className="w-75 mx-auto" onSubmit={handleSubmit}>
                    <h4 className="text-center mt-2" style={{ color: '#005C99' }}>
                        Consumer Information
                    </h4>

                    {[
                        { label: "Consumer Number", name: "consumerNumber", type: "text", value: consumerInfo.consumerNumber },
                        { label: "Consumer Name", name: "consumerName", type: "text", value: consumerInfo.consumerName },
                        { label: "Consumer Address", name: "consumerAddress", type: "text", value: consumerInfo.consumerAddress },
                        { label: "Bill Number", name: "billNumber", type: "text", value: consumerInfo.billNumber },
                        { label: "Date of Bill Generation", name: "dateOfBillGeneration", type: "text", value: consumerInfo.dateOfBillGeneration },
                        { label: "Meter Number", name: "meterNumber", type: "text", value: consumerInfo.meterNumber },
                        { label: "Previous Meter Reading", name: "previousMeterReading", type: "text", value: consumerInfo.previousMeterReading },
                        { label: "Current Meter Reading", name: "currentMeterReading", type: "text", value: consumerInfo.currentMeterReading },
                        { label: "Meter Type", name: "meterType", type: "text", value: consumerInfo.meterType },
                        { label: "Units Consumed", name: "unitsConsumed", type: "text", value: consumerInfo.unitsConsumed },
                        { label: "Tariff Rate", name: "tariffRate", type: "text", value: consumerInfo.tariffRate },
                        { label: "Fixed Charges", name: "fixedCharges", type: "text", value: consumerInfo.fixedCharges },
                        { label: "Variable Charges", name: "variableCharges", type: "text", value: consumerInfo.variableCharges },
                        { label: "Additional Charges", name: "additionalCharges", type: "text", value: consumerInfo.additionalCharges },
                        { label: "Taxes", name: "taxes", type: "text", value: consumerInfo.taxes },
                        { label: "Total Amount Payable", name: "totalAmountPayable", type: "text", value: consumerInfo.totalAmountPayable },
                        { label: "Due Date", name: "dueDate", type: "text", value: consumerInfo.dueDate },
                        { label: "Contact Numbers", name: "contactNumbers", type: "text", value: consumerInfo.contactNumbers },
                        { label: "Additional Notes", name: "additionalNotes", type: "text", value: consumerInfo.additionalNotes },
                        { label: "Payment Status", name: "paymentStatus", type: "select", value: consumerInfo.paymentStatus },
                    ].map(({ label, name, type, value }) => (
                        <div key={name} className="form-group">
                            <label htmlFor={name}>{label}</label>
                            {type === "select" ? (
                                <select
                                    className="form-control"
                                    id={name}
                                    name={name}
                                    value={value}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Payment Status</option>
                                    <option value="Not done">Not done</option>
                                    <option value="done">done</option>


                                </select>
                            ) : (
                                <input
                                    type={type}
                                    className="form-control"
                                    id={name}
                                    name={name}
                                    placeholder={`Enter ${label.toLowerCase()}`}
                                    value={value}
                                    onChange={handleInputChange}
                                />
                            )}
                        </div>
                    ))}

                    <div className='d-flex justify-content-center m-4'>
                        <button type="submit" className="btn btn-primary w-50 mt-3 login-second-col-btn rounded-5">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    );
}

export default AdminPageConsumerInfo;
