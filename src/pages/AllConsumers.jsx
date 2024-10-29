import React, { useEffect, useState } from 'react';
import { allConsumersApi } from '../../services/allApi';

const AllConsumers = () => {
    const [consumers, setConsumers] = useState([]);

    const fetchAllConsumers = async () => {
        try {
            const consumersData = await allConsumersApi();
            console.log(consumersData.data);
            setConsumers(consumersData.data);
        } catch (error) {
            console.error('Error fetching consumers:', error);
        }
    };

    useEffect(() => {
        fetchAllConsumers();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Consumers List</h2>
            <div className="table-responsive" style={{ overflowX: 'auto' }}>
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th>Consumer Number</th>
                            <th>Consumer Name</th>
                            <th>Consumer Address</th>
                            <th>Bill Number</th>
                            <th>Date of Bill Generation</th>
                            <th>Meter Number</th>
                            <th>Previous Meter Reading</th>
                            <th>Current Meter Reading</th>
                            <th>Meter Type</th>
                            <th>Units Consumed</th>
                            <th>Tariff Rate</th>
                            <th>Fixed Charges</th>
                            <th>Variable Charges</th>
                            <th>Additional Charges</th>
                            <th>Taxes</th>
                            <th>Total Amount Payable</th>
                            <th>Due Date</th>
                            <th>Contact Numbers</th>
                            <th>Website or Email</th>
                            <th>Additional Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consumers.length > 0 ? (
                            consumers.map((consumer, index) => (
                                <tr key={index}>
                                    <td>{consumer.consumerNumber}</td>
                                    <td>{consumer.consumerName}</td>
                                    <td>{consumer.consumerAddress}</td>
                                    <td>{consumer.billNumber}</td>
                                    <td>{consumer.dateOfBillGeneration}</td>
                                    <td>{consumer.meterNumber}</td>
                                    <td>{consumer.previousMeterReading}</td>
                                    <td>{consumer.currentMeterReading}</td>
                                    <td>{consumer.meterType}</td>
                                    <td>{consumer.unitsConsumed}</td>
                                    <td>{consumer.tariffRate}</td>
                                    <td>{consumer.fixedCharges}</td>
                                    <td>{consumer.variableCharges}</td>
                                    <td>{consumer.additionalCharges}</td>
                                    <td>{consumer.taxes}</td>
                                    <td>{consumer.totalAmountPayable}</td>
                                    <td>{consumer.dueDate}</td>
                                    <td>{consumer.contactNumbers}</td>
                                    <td>{consumer.websiteOrEmail}</td>
                                    <td>{consumer.additionalNotes}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="20" className="text-center">No consumers found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllConsumers;
