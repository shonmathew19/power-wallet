import React, { useEffect, useState, useRef } from 'react';
import { allConsumersApi, deleteConsumerById } from '../../services/allApi';
import Swal from 'sweetalert2';

const AllConsumers = () => {
    const [consumers, setConsumers] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const consumersPerPage = 10;
    const tableRef = useRef(null);

    const fetchAllConsumers = async () => {
        try {
            const consumersData = await allConsumersApi();
            const allConsumers = consumersData.data.allConsumers;

            setConsumers(allConsumers);

            const totalUnitsConsumed = allConsumers.reduce((total, consumer) => {
                return total + (consumer.unitsConsumed || 0);
            }, 0);

            sessionStorage.setItem('totalunitsconsumed', totalUnitsConsumed);
            sessionStorage.setItem('totalnumberofconsumers', allConsumers.length);
        } catch (error) {
            console.error('Error fetching consumers:', error);
        }
    };

    useEffect(() => {
        fetchAllConsumers();
    }, []);

    const totalPages = Math.ceil(consumers.length / consumersPerPage);

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const startIndex = currentPage * consumersPerPage;
    const endIndex = startIndex + consumersPerPage;
    const currentConsumers = consumers.slice(startIndex, endIndex);

    const scrollLeft = () => {
        if (tableRef.current) {
            tableRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (tableRef.current) {
            tableRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const deleteConsumer = async (data) => {
        try {
            const response = await deleteConsumerById(data.userId);
    
            if (response.status === 200) {
                Swal.fire({
                    title: "",
                    text: `${data.consumerName} deleted successfully`,
                    icon: "success"
                });
                // Refresh the consumer list after a successful deletion
                fetchAllConsumers();
            }
        } catch (error) {
            console.error("Error deleting consumer:", error);
            Swal.fire({
                title: "Error",
                text: "Failed to delete the consumer",
                icon: "error"
            });
        }
    }

    return (
        <div className="container mt-4" style={{ position: 'relative' }}>
            <h2 className="text-center mb-4">Consumers List</h2>
            <div className="fixed-left-button" style={{ position: 'fixed', left: '10px', top: '200px', zIndex: 1000 }}>
                <button className="btn btn-secondary" onClick={scrollLeft} style={{ backgroundColor: 'orange' }}>
                    <i className="fa-solid fa-angles-left"></i>
                </button>
            </div>
            <div className="fixed-right-button" style={{ position: 'fixed', right: '10px', top: '200px', zIndex: 1000 }}>
                <button className="btn btn-secondary" onClick={scrollRight} style={{ backgroundColor: 'orange' }}>
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
            <div className="table-responsive" style={{ overflowX: 'auto' }} ref={tableRef}>
                <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th>ID</th>
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
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentConsumers.length > 0 ? (
                            currentConsumers.map((consumer, index) => (
                                <tr key={index}>
                                    <td>{index + startIndex + 1}</td>
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
                                    <td>
                                        <div className="d-flex justify-content-between">
                                            <button className='btn btn-outline-primary w-100 me-1' title="Edit">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                            <button className='btn btn-danger w-100 ms-1' title="Delete"
                                                onClick={() => deleteConsumer(consumer)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="21" className="text-center">No consumers found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="d-flex justify-content-between mt-3">
                <button
                    className="btn btn-secondary m-3 w-25"
                    onClick={handlePrevious}
                    disabled={currentPage === 0}>
                    Previous
                </button>
                <button
                    className="btn btn-secondary m-3 w-25"
                    onClick={handleNext}
                    disabled={currentPage === totalPages - 1}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default AllConsumers;
