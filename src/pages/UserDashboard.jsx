import React from 'react';

const UserDashboard = () => {
  const paymentDate = new Date();
  const month = paymentDate.toLocaleString('default', { month: 'long' });
  const year = paymentDate.getFullYear();
  const formattedDate = `${month} ${year}`;

  return (
    <div className="container mt-4">
      <h3 className='text-center' style={{ color: '#ff5722', backgroundColor: 'lavender' }}>User Dashboard</h3>
      <div className="card-row">
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title text-primary fw-bolder">Account Summary</h5>
            <p className="card-text">View your account details and recent activities.</p>
            <ul className="list-group list-group-flush">
              {/* <li className="list-group-item">Total Bills Paid: 12</li> */}
              <li className="list-group-item">Last Payment:{formattedDate}</li>
              {/* <li className="list-group-item">Outstanding Balance: 0.00</li> */}
            </ul>
            <button className="btn btn-primary disabled mt-3 w-100 mt-auto">View Account</button>
            
          </div>
        </div>

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title">Payment History</h5>
            <p className="card-text">Review your payment history and download receipts.</p>
             <button className="btn btn-secondary w-100 mt-3 disabled mt-auto">View Payments</button>
          </div>
        </div>

        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <h5 className="card-title">Support</h5>
            <p className="card-text">Contact support if you need help with your account or payments.</p>
            <button className="btn btn-danger mt-3  w-100 disabled mt-auto">Contact Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
