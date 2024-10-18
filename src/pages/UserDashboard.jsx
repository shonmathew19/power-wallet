import React from 'react';

const UserDashboard = () => {
  return (
    <div className="container mt-4">
      <h3 className='text-center' style={{color:'#ff5722',backgroundColor:'lavender'}}>User Dashboard</h3>
      <div className="card-row">
        <div className="card shadow-sm mb-4"> 
          <div className="card-body">
            <h5 className="card-title">Account Summary</h5>
            <p className="card-text">View your account details and recent activities.</p>
            <ul className="list-group list-group-flush">
              {/* <li className="list-group-item">Total Bills Paid: 12</li> */}
              <li className="list-group-item">Last Payment: 15th October 2024</li>
              <li className="list-group-item">Outstanding Balance: 0.00</li>
            </ul>
            <a href="/user/account" className="btn btn-primary mt-3 disabled">View Account</a>
          </div>
        </div>

        <div className="card shadow-sm mb-4"> 
          <div className="card-body">
            <h5 className="card-title">Payment History</h5>
            <p className="card-text">Review your payment history and download receipts.</p>
            <a href="/user/payments" className="btn btn-secondary mt-3 disabled">View Payments</a>
          </div>
        </div>

        <div className="card shadow-sm mb-4"> 
          <div className="card-body">
            <h5 className="card-title">Support</h5>
            <p className="card-text">Contact support if you need help with your account or payments.</p>
            <a href="/user/support" className="btn btn-danger disabled" >Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
