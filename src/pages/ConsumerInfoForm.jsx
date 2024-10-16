import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'

function ConsumerInfoForm() {
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
                                {/* Consumer information rows */}
                                <tr>
                                    <td>Consumer Number</td>
                                    <td>123456789</td>
                                </tr>
                                <tr>
                                    <td>Name of the Consumer</td>
                                    <td>John Doe</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>123 Elm Street, Springfield, IL</td>
                                </tr>
                                <tr>
                                    <td>Bill Period</td>
                                    <td>From: 2024-01-01 To: 2024-01-31</td>
                                </tr>
                                <tr>
                                    <td>Bill Number</td>
                                    <td>BIL123456</td>
                                </tr>
                                <tr>
                                    <td>Date of Bill Generation</td>
                                    <td>2024-01-15</td>
                                </tr>
                                <tr>
                                    <td>Meter Number</td>
                                    <td>MTR987654</td>
                                </tr>
                                <tr>
                                    <td>Previous Meter Reading</td>
                                    <td>2500</td>
                                </tr>
                                <tr>
                                    <td>Current Meter Reading</td>
                                    <td>2600</td>
                                </tr>
                                <tr>
                                    <td>Type of Meter</td>
                                    <td>Digital</td>
                                </tr>
                                <tr>
                                    <td>Units Consumed (in kWh)</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>Tariff Rate (cost per unit)</td>
                                    <td>₹0.12</td>
                                </tr>
                                <tr>
                                    <td>Fixed Charges</td>
                                    <td>₹10.00</td>
                                </tr>
                                <tr>
                                    <td>Variable Charges</td>
                                    <td>₹12.00</td>
                                </tr>
                                <tr>
                                    <td>Additional Charges</td>
                                    <td>₹5.00</td>
                                </tr>
                                <tr>
                                    <td>Taxes</td>
                                    <td>₹1.50</td>
                                </tr>
                                <tr>
                                    <td>Total Amount Payable</td>
                                    <td>₹28.50</td>
                                </tr>
                                <tr>
                                    <td>Due Date for Payment</td>
                                    <td>2024-02-01</td>
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
                                    <td>1-800-555-0199</td>
                                </tr>
                                <tr>
                                    <td>Support Website & Email</td>
                                    <td>www.example.com / support@example.com</td>
                                </tr>
                                <tr>
                                    <td>Additional Notes</td>
                                    <td>Please make sure to pay by the due date to avoid late fees.</td>
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
