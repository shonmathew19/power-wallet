import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'

function Billing() {
    return (
        <>
            <Header />
            <div className="container mt-5">
                <h2 className="mb-4 text-center text-primary">Billing</h2>
                <form className="d-flex flex-column align-items-center">
                    <h4 className="mb-3">Billing Information</h4>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="billNumber" className="mb-1">Bill Number</label>
                        <input type="text" className="form-control" id="billNumber" placeholder="Enter Bill Number" required />
                    </div>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="totalAmount" className="mb-1">Total Amount Due</label>
                        <input type="number" className="form-control" id="totalAmount" placeholder="Enter Total Amount" required />
                    </div>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="dueDate" className="mb-1">Due Date</label>
                        <input type="date" className="form-control" id="dueDate" required />
                    </div>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="paymentMethod" className="mb-1">Select Payment Method</label>
                        <select className="form-control" id="paymentMethod" required>
                            <option value="">Choose...</option>
                            <option value="creditCard">Credit/Debit Card</option>
                            <option value="netBanking">Net Banking</option>
                            <option value="upi">UPI</option>
                            <option value="cash">Cash</option>
                        </select>
                    </div>

                    <h4 className="mt-4 mb-3">Payment Details</h4>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="cardNumber" className="mb-1">Card Number</label>
                        <input type="text" className="form-control" id="cardNumber" placeholder="Enter Card Number" maxLength="16" required />
                    </div>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="expiry" className="mb-1">Expiry Date</label>
                        <input type="month" className="form-control" id="expiry" required />
                    </div>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="cvv" className="mb-1">CVV</label>
                        <input type="text" className="form-control" id="cvv" placeholder="Enter CVV" maxLength="3" required />
                    </div>

                    <h4 className="mt-4 mb-3">Payment Summary</h4>

                    <div className="w-50 mb-3 text-start">
                        <label htmlFor="amountToPay" className="mb-1">Amount to Pay</label>
                        <input type="text" className="form-control" id="amountToPay" placeholder="Amount to Pay" readOnly />
                    </div>

                    <button type="submit" className="btn btn-primary mt-4 w-50 login-second-col-btn rounded-5 mb-3">Pay Now</button>
                </form>
            </div>
            <Footer />
        </>

    );
}

export default Billing;
