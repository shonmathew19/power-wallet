import React, { useState } from 'react';

function SetUnitPrices() {
    const [formData, setFormData] = useState({
        unitPrice: '',
        additionalCharges: '',
        taxes: ''
    });
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Unit Price:', formData.unitPrice);
        console.log('Additional Charges:', formData.additionalCharges);
        console.log('Taxes:', formData.taxes);
        setUpdateSuccess(true);
        setFormData({
            unitPrice: '',
            additionalCharges: '',
            taxes: ''
        });
    };

    return (
        <div className="container mt-5 mb-3">
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
                                name="unitPrice"
                                className="form-control"
                                value={formData.unitPrice}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label>Additional Charges</label>
                            <input
                                type="number"
                                name="additionalCharges"
                                className="form-control"
                                value={formData.additionalCharges}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label>Taxes</label>
                            <input
                                type="number"
                                name="taxes"
                                className="form-control"
                                value={formData.taxes}
                                onChange={handleChange}
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
