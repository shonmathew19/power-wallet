import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { getConsumerInfoById } from '../../services/allApi';

function ConsumerInfoForm() {
    const [consumerData, setConsumerData] = useState(null);

    const fetchConsumerInfo = async () => {
        const id = sessionStorage.getItem('id');
        const result = await getConsumerInfoById(id);
        setConsumerData(result.data.consumer); 
    }

    useEffect(() => {
        fetchConsumerInfo();
    }, []);

    if (!consumerData) return <div>Loading...</div>;

    return (
        <>
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
                                <tr>
                                    <td>Consumer Number</td>
                                    <td>{consumerData.consumerNumber}</td>
                                </tr>
                                <tr>
                                    <td>Name of the Consumer</td>
                                    <td>{consumerData.consumerName}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{consumerData.consumerAddress}</td>
                                </tr>
                                <tr>
                                    <td>Bill Period</td>
                                    <td>From: {new Date(consumerData.dateOfBillGeneration).toLocaleDateString()} To: {new Date(consumerData.dueDate).toLocaleDateString()}</td>
                                </tr>
                                <tr>
                                    <td>Bill Number</td>
                                    <td>{consumerData.billNumber}</td>
                                </tr>
                                <tr>
                                    <td>Date of Bill Generation</td>
                                    <td>{new Date(consumerData.dateOfBillGeneration).toLocaleDateString()}</td>
                                </tr>
                                <tr>
                                    <td>Meter Number</td>
                                    <td>{consumerData.meterNumber}</td>
                                </tr>
                                <tr>
                                    <td>Previous Meter Reading</td>
                                    <td>{consumerData.previousMeterReading}</td>
                                </tr>
                                <tr>
                                    <td>Current Meter Reading</td>
                                    <td>{consumerData.currentMeterReading}</td>
                                </tr>
                                <tr>
                                    <td>Type of Meter</td>
                                    <td>{consumerData.meterType}</td>
                                </tr>
                                <tr>
                                    <td>Units Consumed (in kWh)</td>
                                    <td>{consumerData.unitsConsumed}</td>
                                </tr>
                                <tr>
                                    <td>Tariff Rate (cost per unit)</td>
                                    <td>₹{consumerData.tariffRate}</td>
                                </tr>
                                <tr>
                                    <td>Fixed Charges</td>
                                    <td>₹{consumerData.fixedCharges}</td>
                                </tr>
                                <tr>
                                    <td>Variable Charges</td>
                                    <td>₹{consumerData.variableCharges}</td>
                                </tr>
                                <tr>
                                    <td>Additional Charges</td>
                                    <td>₹{consumerData.additionalCharges}</td>
                                </tr>
                                <tr>
                                    <td>Taxes</td>
                                    <td>₹{consumerData.taxes}</td>
                                </tr>
                                <tr>
                                    <td>Total Amount Payable</td>
                                    <td>₹{consumerData.totalAmountPayable}</td>
                                </tr>
                                <tr>
                                    <td>Due Date for Payment</td>
                                    <td>{new Date(consumerData.dueDate).toLocaleDateString()}</td>
                                </tr>
                                <tr>
                                    <td>Payment Methods Available</td>
                                    <td>Credit Card, Debit Card, Online Banking</td>
                                </tr>
                                <tr>
                                    <td>Payment Instructions</td>
                                    <td>Visit our website or use the app to make a payment.</td>
                                </tr>
                                <tr>
                                    <td>Customer Service Contact</td>
                                    <td>{consumerData.contactNumbers.join(', ')}</td>
                                </tr>
                                <tr>
                                    <td>Support Website & Email</td>
                                    <td>{consumerData.websiteOrEmail}</td>
                                </tr>
                                <tr>
                                    <td>Additional Notes</td>
                                    <td>{consumerData.additionalNotes}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='d-flex justify-content-center mb-3'>
                    <Link to={'/billing'} className='btn text-light login-second-col-btn rounded-5 w-50'> Continue to payment page</Link>
                </div>
            </div>
        </>
    );
}

export default ConsumerInfoForm;
