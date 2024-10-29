import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart } from '@mui/x-charts/LineChart';

import { PieChart } from '@mui/x-charts/PieChart';

const Dashboard = () => {
  const totalUnitsConsumed = sessionStorage.getItem('totalunitsconsumed')
  return (
    <div className="container-fluid">
      <div className="row mt-3">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar mt-5  "  >
          <div className="position-sticky">
            <ul className="nav flex-column dashboard-sidebar " >
              <li className="nav-item">
                <Link className="nav-link active" to={'/all-consumers'}>
                  <span className='text-success fw-bolder'>All CONSUMERS</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={'/new-connection-requests'}>
                  New connection requests
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={'/set-unit-prices'} >
                  Add Unit Prices
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Manage Fees
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Modify Consumer Details
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">


          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Dashboard</h1>

            <button className="btn btn-primary">Add New</button>
          </div>
          <div className='d-flex'>
            <div className='d-flex flex-column m-3'>
              <h3 className='text-center'>Total units consumed</h3>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [100,200,300,totalUnitsConsumed],
                  },
                ]}
                width={500}
                height={300}
              />
            </div>
            <div className='d-flex flex-column m-3'>
              <h3 className='text-center'>Total number of consumers</h3>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: sessionStorage.getItem('totalnumberofconsumers'), label: 'All consumers' },
                      { id: 1, value: 5, label: 'Deactivated' },
                      // { id: 2, value: 20, label: 'series C' },
                    ],
                  },
                ]}
                width={400}
                height={200}
              />
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Unit Price Management</h5>
                    <p className="card-text">
                      Easily manage your unit prices for different services.
                    </p>

                    <Link to={'/set-unit-prices'} className='btn btn-success'> Go to Unit Prices</Link>

                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Fee Management</h5>
                    <p className="card-text">
                      Oversee all fees related to services and payments.
                    </p>
                    <a href="#" className="btn btn-warning">
                      Manage Fees
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Consumer Details</h5>
                    <p className="card-text">
                      Modify consumer details and keep records up to date.
                    </p>
                    <a href="#" className="btn btn-info">
                      Update Details
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Reports</h5>
                    <p className="card-text">
                      Generate reports for your account management.
                    </p>
                    <a href="#" className="btn btn-secondary">
                      View Reports
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;
