import React from 'react';
import { useState } from 'react';

function SetUnitPrices() {
    const [unitPrice, setUnitPrice] = useState('');
    const [adminFee, setAdminFee] = useState('');
    const [serviceCharge, setServiceCharge] = useState('');
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Unit Price:', unitPrice);
        console.log('Admin Fee:', adminFee);
        console.log('Service Charge:', serviceCharge);
        setUpdateSuccess(true);
        setUnitPrice('');
        setAdminFee('');
        setServiceCharge('');
    };

    return (
        <div className="container mt-5 mb-3 w-50">
            <div className="card shadow-lg">
                <div className="card-body">
                    <h2 className="card-title text-center mb-4" style={{ color: '#004B73' }}>Update Unit Price & Fees</h2>
                    {updateSuccess && (
                        <div className="alert alert-success" role="alert">
                            Prices updated successfully!
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label>Unit Price (per kWh)</label>
                            <input
                                type="number"
                                className="form-control"
                                value={unitPrice}
                                onChange={(e) => setUnitPrice(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Admin Fee</label>
                            <input
                                type="number"
                                className="form-control"
                                value={adminFee}
                                onChange={(e) => setAdminFee(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label>Service Charge</label>
                            <input
                                type="number"
                                className="form-control"
                                value={serviceCharge}
                                onChange={(e) => setServiceCharge(e.target.value)}
                                required
                            />
                        </div>
                        <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn text-light login-second-col-btn w-50">
                            Update
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SetUnitPrices;
