import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="container mt-4">
      <h3 className="text-center" style={{ color: '#ff5722', backgroundColor: 'lavender', padding: '10px', borderRadius: '5px' }}>
        Admin Dashboard
      </h3>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Manage Users</h5>
              <p className="card-text">Add, edit, or remove users from the system.</p>
              <Link to="/manage-users" className="btn btn-primary mt-auto">Manage Users</Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Set Unit Prices</h5>
              <p className="card-text">Modify electricity unit prices and other fees.</p>
              <Link to="/set-unit-prices" className="btn btn-secondary mt-auto">Set Prices</Link>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">View Reports</h5>
              <p className="card-text">Generate reports on payments, users, and system performance.</p>
              <Link to="/view-reports" className="btn btn-danger mt-auto">View Reports</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
