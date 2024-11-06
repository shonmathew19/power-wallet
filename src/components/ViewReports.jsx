
import { Table } from 'react-bootstrap';

const ViewReports = () => {
  const payments = [
    { id: 1, consumerName: 'Anil Kumar', amount: 500, date: '2024-11-01', status: 'Paid' },
    { id: 2, consumerName: 'Sreelakshmi Nair', amount: 750, date: '2024-11-02', status: 'Unpaid' },
    { id: 3, consumerName: 'Rajesh Pillai', amount: 1000, date: '2024-11-03', status: 'Paid' },
    { id: 4, consumerName: 'Shon Mathew', amount: 1200, date: '2024-11-04', status: 'Paid' },
  ];

  const consumers = [
    { id: 1, name: 'Anil Kumar', unitPrice: 25, totalAmount: 500, status: 'Active' },
    { id: 2, name: 'Sreelakshmi Nair', unitPrice: 30, totalAmount: 750, status: 'Inactive' },
    { id: 3, name: 'Rajesh Pillai', unitPrice: 40, totalAmount: 1000, status: 'Active' },
    { id: 4, name: 'Shon Mathew', unitPrice: 50, totalAmount: 1200, status: 'Active' },
  ];

  const fees = [
    { id: 1, feeType: 'Service Charge', amount: 50, date: '2024-11-01' },
    { id: 2, feeType: 'Late Fee', amount: 100, date: '2024-11-02' },
    { id: 3, feeType: 'Service Charge', amount: 50, date: '2024-11-03' },
    { id: 4, feeType: 'Service Charge', amount: 50, date: '2024-11-04' },
  ];

  return (
    <div className="container">
      <h1 className='text-center text-primary mt-4'>Power Wallet Reports</h1>

      <div className="report-section">
        <h2>Payments Report</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Consumer Name</th>
              <th>Amount (INR)</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map(payment => (
              <tr key={payment.id}>
                <td>{payment.consumerName}</td>
                <td>{payment.amount}</td>
                <td>{payment.date}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="report-section">
        <h2>Consumer Information Report</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Consumer Name</th>
              <th>Unit Price (INR)</th>
              <th>Total Amount (INR)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {consumers.map(consumer => (
              <tr key={consumer.id}>
                <td>{consumer.name}</td>
                <td>{consumer.unitPrice}</td>
                <td>{consumer.totalAmount}</td>
                <td>{consumer.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <div className="report-section">
        <h2>Fees Report</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fee Type</th>
              <th>Amount (INR)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {fees.map(fee => (
              <tr key={fee.id}>
                <td>{fee.feeType}</td>
                <td>{fee.amount}</td>
                <td>{fee.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ViewReports;
