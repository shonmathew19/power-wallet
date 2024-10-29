import React, { useEffect, useState } from 'react';
import { viewAllNewConnectionsApi } from '../../services/allApi';

const NewConnectionRequests = () => {
    const [applicantsData, setApplicantsData] = useState({ data: [] });

    const fetchAllNewConnections = async () => {
        try {
            const newConnectionData = await viewAllNewConnectionsApi();
            setApplicantsData(newConnectionData);
        } catch (err) {
            console.log('Error fetching new connections', err);
        }
    };

    useEffect(() => {
        fetchAllNewConnections();
    }, []);

    useEffect(() => {
        console.log(applicantsData.data);
        // const applicationDataLength = applicantsData.data ? applicantsData.data.length : 0;
        
    }, [applicantsData]);

    return (
        <div className="container mt-4">
            <h2>Applicants Information</h2>
            <table className="table table-striped table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th>Applicant Name</th>
                        <th>Contact Number</th>
                        <th>Email ID</th>
                        <th>Permanent Address</th>
                        <th>Temporary Address</th>
                        <th>Aadhar Number</th>
                        <th>Type of Premises</th>
                        <th>Connection Purpose</th>
                        <th>Address of Premise</th>
                        <th>Expected Load</th>
                    </tr>
                </thead>
                <tbody>
                    {applicantsData.data.length > 0 ? (
                        applicantsData.data.map((applicant, index) => (
                            <tr key={index}>
                                <td>{applicant.applicantName}</td>
                                <td>{applicant.contactNumber}</td>
                                <td>{applicant.emailId}</td>
                                <td>{applicant.permanentAddress}</td>
                                <td>{applicant.temporaryAddress}</td>
                                <td>{applicant.aadharNumber}</td>
                                <td>{applicant.typeOfPremises}</td>
                                <td>{applicant.connectionPurpose}</td>
                                <td>{applicant.addressOfPremise}</td>
                                <td>{applicant.expectedLoad}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10" className="text-center">No new connections found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default NewConnectionRequests;
