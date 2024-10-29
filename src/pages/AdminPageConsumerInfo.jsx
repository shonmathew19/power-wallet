import React from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react';
import { consumerInfoApi } from '../../services/allApi';


function AdminPageConsumerInfo() {

    const [consumerInfo, setConsumerInfo] = useState({
        consumerNumber: "",
        consumerName:"",
        consumerAddress:"",
        billNumber:"",
        dateOfBillGeneration:"",
        meterNumber:"",
        previousMeterReading:"",
        currentMeterReading:"",
        meterType:"",
        unitsConsumed:"",
        tariffRate:"",
        fixedCharges:"",
        variableCharges:"",
        additionalCharges:"",
        taxes:"",
        totalAmountPayable:"",
        dueDate:"",
        contactNumbers:"",
        websiteOrEmail:"",
        additionalNotes:""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(consumerInfo);
        const result = await consumerInfoApi(consumerInfo)

        console.log('handle submit', result)


    };



    return (

        <>
            <Container>
                <h2 class="mb-2 mt-3 text-center" style={{ color: '#004B73' }}>Admin Consumer Information Form</h2>
                <div class="border shadow rounded-3 m-3 ">


                    <form className="w-75 mx-auto" onSubmit={handleSubmit}>
                        <h4 className="text-center mt-2" style={{ color: '#005C99' }}>Consumer Information</h4>

                        <div className="form-group">
                            <label htmlFor="consumerNumber">Consumer Number</label>
                            <input type="text" className="form-control" id="consumerNumber" placeholder="Enter Consumer Number"
                                value={consumerInfo.consumerNumber} onChange={(e) => setConsumerInfo({ ...consumerInfo, consumerNumber: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="consumerName">Name of the Consumer</label>
                            <input type="text" className="form-control" id="consumerName" placeholder="Enter Name"
                            value={consumerInfo.consumerName} onChange={(e) => setConsumerInfo({ ...consumerInfo, consumerName: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="consumerAddress">Address of the Consumer</label>
                            <input type="text" className="form-control" id="consumerAddress" placeholder="Enter Address" 
                            value={consumerInfo.consumerAddress} onChange={(e) => setConsumerInfo({ ...consumerInfo, consumerAddress: e.target.value })}/>
                        </div>

                        {/* Billing Information Section */}
                        <h4 className="mt-4 text-center" style={{ color: '#005C99' }}>Billing Information</h4>

                        <div className="form-group">
                            <label htmlFor="billNumber">Bill Number</label>
                            <input type="text" className="form-control" id="billNumber" placeholder="Enter Bill Number" 
                            value={consumerInfo.billNumber} onChange={(e) => setConsumerInfo({ ...consumerInfo, billNumber: e.target.value })}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="billDate">Date of Bill Generation</label>
                            <input type="date" className="form-control" id="billDate"
                            value={consumerInfo.dateOfBillGeneration} onChange={(e) => setConsumerInfo({ ...consumerInfo, dateOfBillGeneration: e.target.value })}/>
                        </div>

                        {/* Meter Details Section */}
                        <h4 className="mt-4 text-center" style={{ color: '#005C99' }}>Meter Details</h4>

                        <div className="form-group">
                            <label htmlFor="meterNumber">Meter Number</label>
                            <input type="text" className="form-control" id="meterNumber" placeholder="Enter Meter Number"
                            value={consumerInfo.meterNumber} onChange={(e) => setConsumerInfo({ ...consumerInfo, meterNumber: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="previousReading">Previous Meter Reading</label>
                            <input type="number" className="form-control" id="previousReading" placeholder="Enter Previous Reading"
                            value={consumerInfo.previousMeterReading} onChange={(e) => setConsumerInfo({ ...consumerInfo, previousMeterReading: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="currentReading">Current Meter Reading</label>
                            <input type="number" className="form-control" id="currentReading" placeholder="Enter Current Reading"
                            value={consumerInfo.currentMeterReading} onChange={(e) => setConsumerInfo({ ...consumerInfo, currentMeterReading: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="meterType">Type of Meter</label>
                            <select className="form-control" id="meterType" value={consumerInfo.meterType} onChange={(e) => setConsumerInfo({ ...consumerInfo, meterType: e.target.value })}>
                                <option>Choose...</option>
                                <option value="digital">Digital</option>
                                <option value="analog">Analog</option>
                            </select>
                        </div>

                        {/* Usage Details Section */}
                        <h4 className="mt-4 text-center" style={{ color: '#005C99' }}>Usage Details</h4>

                        <div className="form-group">
                            <label htmlFor="unitsConsumed">Units Consumed (in kWh)</label>
                            <input type="number" className="form-control" id="unitsConsumed" placeholder="Enter Units Consumed"
                            value={consumerInfo.unitsConsumed} onChange={(e) => setConsumerInfo({ ...consumerInfo, unitsConsumed: e.target.value })} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="tariffRate">Tariff Rate (cost per unit)</label>
                            <input type="number" className="form-control" id="tariffRate" placeholder="Enter Tariff Rate"
                            value={consumerInfo.tariffRate} onChange={(e) => setConsumerInfo({ ...consumerInfo, tariffRate: e.target.value })}/>
                        </div>

                        {/* Charges Section */}
                        <h4 className="mt-4 text-center" style={{ color: '#005C99' }}>Charges</h4>

                        <div className="form-group">
                            <label htmlFor="fixedCharges">Fixed Charges</label>
                            <input type="number" className="form-control" id="fixedCharges" placeholder="Enter Fixed Charges" 
                            value={consumerInfo.fixedCharges} onChange={(e) => setConsumerInfo({ ...consumerInfo, fixedCharges: e.target.value })}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="variableCharges">Variable Charges</label>
                            <input type="number" className="form-control" id="variableCharges" placeholder="Enter Variable Charges"
                            value={consumerInfo.variableCharges} onChange={(e) => setConsumerInfo({ ...consumerInfo, variableCharges: e.target.value })}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="additionalCharges">Additional Charges</label>
                            <input type="number" className="form-control" id="additionalCharges" placeholder="Enter Additional Charges" 
                            value={consumerInfo.additionalCharges} onChange={(e) => setConsumerInfo({ ...consumerInfo, additionalCharges: e.target.value })}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="taxes">Taxes</label>
                            <input type="number" className="form-control" id="taxes" placeholder="Enter Taxes"
                            value={consumerInfo.taxes} onChange={(e) => setConsumerInfo({ ...consumerInfo, taxes: e.target.value })} />
                        </div>

                        {/* Total Amount Due Section */}
                        <h4 className="mt-4 text-center" style={{ color: '#005C99' }}>Total Amount Due</h4>

                        <div className="form-group">
                            <label htmlFor="totalAmount">Total Amount Payable</label>
                            <input type="number" className="form-control" id="totalAmount" placeholder="Enter Total Amount" 
                            value={consumerInfo.totalAmountPayable} onChange={(e) => setConsumerInfo({ ...consumerInfo, totalAmountPayable: e.target.value })}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="dueDate">Due Date</label>
                            <input type="date" className="form-control" id="dueDate"
                            value={consumerInfo.dueDate} onChange={(e) => setConsumerInfo({ ...consumerInfo, dueDate: e.target.value })} />
                        </div>

                        {/* Contact Information Section */}
                        <h4 className="mt-4 text-center" style={{ color: '#005C99' }}>Contact Information</h4>

                        <div className="form-group">
                            <label htmlFor="contactNumbers">Contact Numbers</label>
                            <input type="text" className="form-control" id="contactNumbers" placeholder="Enter Contact Numbers" 
                            value={consumerInfo.contactNumbers} onChange={(e) => setConsumerInfo({ ...consumerInfo, contactNumbers: e.target.value })}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="websiteEmail">Website/Email</label>
                            <input type="email" className="form-control" id="websiteEmail" placeholder="Enter Website/Email" 
                            value={consumerInfo.websiteOrEmail} onChange={(e) => setConsumerInfo({ ...consumerInfo, websiteOrEmail: e.target.value })}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="additionalNotes">Additional Notes</label>
                            <textarea className="form-control" id="additionalNotes" rows="3" placeholder="Enter Additional Notes"
                            value={consumerInfo.additionalNotes} onChange={(e) => setConsumerInfo({ ...consumerInfo, additionalNotes: e.target.value })}></textarea>
                        </div>
                        <div className='d-flex align-items-center justify-content-center  mb-3'>
                            <button type="submit" className="btn btn-primary rounded-5 login-second-col-btn w-50">Submit</button>
                        </div>

                    </form>

                </div>

            </Container>

        </>
    )

}

export default AdminPageConsumerInfo