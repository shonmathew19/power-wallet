import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getConsumerInfoById } from '../../services/allApi';

function ConsumerInfoForm() {
    const [paymentButtonStatus, setPaymentButtonStatus] = useState(false);
    const [totalAmountPayable, setTotalAmountPayable] = useState();
    const currentDate = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
    });
    const [consumerData, setConsumerData] = useState(null);
    const navigate = useNavigate();
    const [fetchCurrentPaymentStatus, setfetchCurrentPaymentStatus] = useState('');

    const fetchConsumerInfo = async () => {
        const id = sessionStorage.getItem('id');

        if (!id) {
            console.error("No consumer ID found in session storage.");
            return;
        }

        try {
            const response = await getConsumerInfoById(id);
            setConsumerData(response.data.consumer);
            console.log(response.data.consumer);
            setfetchCurrentPaymentStatus(response.data.consumer.paymentStatus);
            setTotalAmountPayable(response.data.consumer.totalAmountPayable);
        } catch (error) {
            console.error("Failed to fetch consumer information:", error);
        }
    };

    useEffect(() => {
        fetchConsumerInfo();
    }, []);
  
    useEffect(() => {
        if (totalAmountPayable === 0) {
            setPaymentButtonStatus(true);
        } else {
            setPaymentButtonStatus(false);
        }
    }, [totalAmountPayable]);
   

    if (!consumerData) {
        return (
            <div>
                <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <div className="spinner-border text-light" style={{ width: '5rem', height: '5rem' }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="text-light mt-3 fs-4">Please wait, loading...</p>
                    </div>
                </div>
            </div>
        );
    }

    const handleNavigate = () => {
        navigate('/billing', {
            state: {
                billNumber: consumerData.billNumber,
                dueDate: consumerData.dueDate,
                totalAmount: consumerData.totalAmountPayable,
            }
        });
    };

    return (
        fetchCurrentPaymentStatus === 'Not done' ? (
            <div className="container-fluid mt-5">
                <h2 className="mb-4 text-center text-primary">Consumer Information Summary</h2>

                <div className="card mb-4">
                    <div className="card-body">
                        <h4 className="card-title">Consumer Information Summary</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Consumer Number</td><td>{consumerData.consumerNumber}</td></tr>
                                <tr><td>Name of the Consumer</td><td>{consumerData.consumerName}</td></tr>
                                <tr><td>Address</td><td>{consumerData.consumerAddress}</td></tr>
                                <tr><td>Bill Period</td><td>From: {new Date(consumerData.dateOfBillGeneration).toLocaleDateString()} To: {new Date(consumerData.dueDate).toLocaleDateString()}</td></tr>
                                <tr><td>Bill Number</td><td>{consumerData.billNumber}</td></tr>
                                <tr><td>Date of Bill Generation</td><td>{new Date(consumerData.dateOfBillGeneration).toLocaleDateString()}</td></tr>
                                <tr><td>Meter Number</td><td>{consumerData.meterNumber}</td></tr>
                                <tr><td>Previous Meter Reading</td><td>{consumerData.previousMeterReading}</td></tr>
                                <tr><td>Current Meter Reading</td><td>{consumerData.currentMeterReading}</td></tr>
                                <tr><td>Type of Meter</td><td>{consumerData.meterType}</td></tr>
                                <tr><td>Units Consumed (in kWh)</td><td>{consumerData.unitsConsumed}</td></tr>
                                <tr><td>Tariff Rate (cost per unit)</td><td>₹{consumerData.tariffRate}</td></tr>
                                <tr><td>Fixed Charges</td><td>₹{consumerData.fixedCharges}</td></tr>
                                <tr><td>Variable Charges</td><td>₹{consumerData.variableCharges}</td></tr>
                                <tr><td>Additional Charges</td><td>₹{consumerData.additionalCharges}</td></tr>
                                <tr><td>Taxes</td><td>₹{consumerData.taxes}</td></tr>
                                <tr><td>Total Amount Payable</td><td>₹{consumerData.totalAmountPayable}</td></tr>
                                <tr><td>Due Date for Payment</td><td>{new Date(consumerData.dueDate).toLocaleDateString()}</td></tr>
                                <tr><td>Payment Methods Available</td><td>Credit Card, Debit Card, Online Banking</td></tr>
                                <tr><td>Payment Instructions</td><td>Visit our website or use the app to make a payment.</td></tr>
                                <tr><td>Customer Service Contact</td><td>{consumerData.contactNumbers.join(', ')}</td></tr>
                                <tr><td>Support Website & Email</td><td>{consumerData.websiteOrEmail}</td></tr>
                                <tr><td>Additional Notes</td><td>{consumerData.additionalNotes}</td></tr>
                                <tr><td>Payment Status</td><td>{consumerData.paymentStatus}</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='d-flex justify-content-center mb-3'>
                    <button disabled={paymentButtonStatus} onClick={handleNavigate} className='btn text-light login-second-col-btn rounded-5 w-50'>
                        Continue to payment page
                    </button>
                </div>
            </div>
        ) : (
            <div className="container m-5">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <h4>Bills Already Paid</h4>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Electricity Bill - {currentDate}
                                        <span className="badge bg-success fs-4">Paid <span className='ms-2'>₹{consumerData.totalAmountPayable}</span></span>
                                    </li>
                                </ul>
                                <div>
                                    <p>Consumer Number: {consumerData.consumerNumber}</p>
                                    <p>Name of the Consumer: {consumerData.consumerName}</p>
                                    <p>Bill Number: {consumerData.billNumber}</p>
                                    <p>Total Amount Payable: ₹{consumerData.totalAmountPayable}</p>
                                    <p>Payment Status: <span style={{ color: 'green' }}>Paid</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default ConsumerInfoForm;
