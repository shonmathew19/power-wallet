// ComplaintForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    complaintType: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Complaint Submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <h2>Complaint Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="complaintType" className="form-label">Complaint Type</label>
          <select
            className="form-select"
            id="complaintType"
            name="complaintType"
            value={formData.complaintType}
            onChange={handleChange}
            required
          >
            <option value="">Select a type</option>
            <option value="service">Service Issue</option>
            <option value="product">Product Issue</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className='d-flex align-items-center justify-content-center '>
        <button type="submit" className="btn text-light login-second-col-btn mb-3 w-50 rounded-5">Submit Complaint</button>
        </div>
      </form>
    </div>
  );
};

export default ComplaintForm;
