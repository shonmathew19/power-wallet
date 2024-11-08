import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { editConsumerInfoApi } from '../../services/allApi';

function Billing() {
    const id = sessionStorage.getItem('id');
    const [consumerInfo, setConsumerInfo] = useState({
        paymentStatus: ""
    })

    const location = useLocation();
    const { billNumber, dueDate, totalAmount, userId } = location.state || {};
    
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        paymentMethod: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { paymentMethod, cardNumber, expiry, cvv } = formData;
    
        if (!paymentMethod || !cardNumber || !expiry || !cvv) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill all the fields before proceeding!',
            });
            return;
        }

        if (!billNumber || !totalAmount || !dueDate) {
            Swal.fire({
                icon: 'error',
                title: 'CONTACT ADMIN',
                text: 'Contact Admin to fill the billing details',
            });
            return;
        }
    
        const result = await editConsumerInfoApi(id, { ...consumerInfo, paymentStatus: 'done' });
    
        if (result) {
            setConsumerInfo((prevState) => ({
                ...prevState, 
                paymentStatus: 'done'
            }));
            
            Swal.fire({
                icon: 'success',
                title: 'WOW!!...',
                text: 'PAYMENT PROCESSED SUCCESSFULLY',
            });
            
            navigate('/');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'There was an error processing the payment.',
            });
        }
    };
    

    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4 text-center text-primary">Billing</h2>
                <form className="d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                    <h4 className="mb-3">Billing Information</h4>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="billNumber" className="mb-1">Bill Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="billNumber"
                            value={billNumber || ''}
                            readOnly
                        />
                    </div>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="totalAmount" className="mb-1">Total Amount Due</label>
                        <input
                            type="number"
                            className="form-control"
                            id="totalAmount"
                            value={totalAmount || ''}
                            readOnly
                        />
                    </div>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="dueDate" className="mb-1">Due Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dueDate"
                            value={dueDate ? new Date(dueDate).toISOString().split('T')[0] : ''}
                            readOnly
                        />
                    </div>

                

                    <h4 className="mt-4 mb-3">Payment Details</h4>
                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="paymentMethod" className="mb-1">Select Payment Method</label>
                        <select
                            className="form-control"
                            id="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Choose...</option>
                            <option value="creditCard">Credit/Debit Card</option>
                            <option value="netBanking">Net Banking</option>
                            <option value="upi">UPI</option>
                            <option value="cash">Cash</option>
                        </select>
                    </div>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="cardNumber" className="mb-1">Card Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="Enter Card Number"
                            maxLength="16"
                            required
                        />
                    </div>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="expiry" className="mb-1">Expiry Date</label>
                        <input
                            type="month"
                            className="form-control"
                            id="expiry"
                            value={formData.expiry}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="cvv" className="mb-1">CVV</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            placeholder="Enter CVV"
                            maxLength="3"
                            required
                        />
                    </div>

                    <h4 className="mt-4 mb-3">Payment Summary</h4>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="amountToPay" className="mb-1">Amount to Pay</label>
                        <input
                            type="text"
                            className="form-control"
                            id="amountToPay"
                            value={totalAmount || ''}
                            readOnly
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary mt-4 w-50 login-second-col-btn rounded-5 mb-3"
                    >
                        Pay Now
                    </button>
                </form>
            </div>
        </>
    );
}

export default Billing;
