import React from 'react'
import { Container } from 'react-bootstrap'

function AdminPageConsumerInfo() {


    return (
        <>
       <Container>
       <h2 class="mb-2 mt-3 text-center" style={{ color: '#004B73' }}>Admin Consumer Information Form</h2>
            <div class="border shadow rounded-3 m-5 ">
                
               
                <form className=' w-75 mx-auto'>
                    <h4 class="text-center mt-2" style={{ color: '#005C99' }}>Consumer Information</h4>
                    <div class="form-group">
                        <label for="consumerNumber">Consumer Number</label>
                        <input type="text" class="form-control " id="consumerNumber" placeholder="Enter Consumer Number" />
                    </div>
                    <div class="form-group">
                        <label for="consumerName">Name of the Consumer</label>
                        <input type="text" class="form-control" id="consumerName" placeholder="Enter Name" />
                    </div>
                    <div class="form-group">
                        <label for="consumerAddress">Address of the Consumer</label>
                        <input type="text" class="form-control" id="consumerAddress" placeholder="Enter Address" />
                    </div>

                    <h4 class="mt-4 text-center" style={{ color: '#005C99' }}>Billing Information</h4>
                    <div class="form-group">
                        <label for="billPeriodFrom">Bill Period From</label>
                        <input type="date" class="form-control" id="billPeriodFrom" />
                    </div>
                    <div class="form-group">
                        <label for="billPeriodTo">Bill Period To</label>
                        <input type="date" class="form-control" id="billPeriodTo" />
                    </div>
                    <div class="form-group">
                        <label for="billNumber">Bill Number</label>
                        <input type="text" class="form-control" id="billNumber" placeholder="Enter Bill Number" />
                    </div>
                    <div class="form-group">
                        <label for="billDate">Date of Bill Generation</label>
                        <input type="date" class="form-control" id="billDate" />
                    </div>

                    <h4 class="mt-4 text-center" style={{ color: '#005C99' }}>Meter Details</h4>
                    <div class="form-group">
                        <label for="meterNumber">Meter Number</label>
                        <input type="text" class="form-control" id="meterNumber" placeholder="Enter Meter Number" />
                    </div>
                    <div class="form-group">
                        <label for="previousReading">Previous Meter Reading</label>
                        <input type="number" class="form-control" id="previousReading" placeholder="Enter Previous Reading" />
                    </div>
                    <div class="form-group">
                        <label for="currentReading">Current Meter Reading</label>
                        <input type="number" class="form-control" id="currentReading" placeholder="Enter Current Reading" />
                    </div>
                    <div class="form-group">
                        <label for="meterType">Type of Meter</label>
                        <select class="form-control" id="meterType">
                            <option>Choose...</option>
                            <option value="digital">Digital</option>
                            <option value="analog">Analog</option>
                        </select>
                    </div>

                    <h4 class="mt-4 text-center" style={{ color: '#005C99' }}>Usage Details</h4>
                    <div class="form-group">
                        <label for="unitsConsumed">Units Consumed (in kWh)</label>
                        <input type="number" class="form-control" id="unitsConsumed" placeholder="Enter Units Consumed" />
                    </div>
                    <div class="form-group">
                        <label for="tariffRate">Tariff Rate (cost per unit)</label>
                        <input type="number" class="form-control" id="tariffRate" placeholder="Enter Tariff Rate" />
                    </div>

                    <h4 class="mt-4 text-center" style={{ color: '#005C99' }}>Charges</h4>
                    <div class="form-group">
                        <label for="fixedCharges">Fixed Charges</label>
                        <input type="number" class="form-control" id="fixedCharges" placeholder="Enter Fixed Charges" />
                    </div>
                    <div class="form-group">
                        <label for="variableCharges">Variable Charges</label>
                        <input type="number" class="form-control" id="variableCharges" placeholder="Enter Variable Charges" />
                    </div>
                    <div class="form-group">
                        <label for="additionalCharges">Additional Charges</label>
                        <input type="number" class="form-control" id="additionalCharges" placeholder="Enter Additional Charges" />
                    </div>
                    <div class="form-group">
                        <label for="taxes">Taxes</label>
                        <input type="number" class="form-control" id="taxes" placeholder="Enter Taxes" />
                    </div>

                    <h4 class="mt-4 text-center" style={{ color: '#005C99' }}>Total Amount Due</h4>
                    <div class="form-group">
                        <label for="totalAmount">Total Amount Payable</label>
                        <input type="number" class="form-control" id="totalAmount" placeholder="Enter Total Amount" />
                    </div>
                    <div class="form-group">
                        <label for="dueDate">Due Date for Payment</label>
                        <input type="date" class="form-control" id="dueDate" />
                    </div>

                    <h4 class="mt-4 text-center" style={{ color: '#005C99' }}>Customer Service Information</h4>
                    <div class="form-group">
                        <label for="contactNumbers">Contact Numbers</label>
                        <input type="text" class="form-control" id="contactNumbers" placeholder="Enter Contact Numbers" />
                    </div>
                    <div class="form-group">
                        <label for="websiteEmail">Website and Email for Customer Support</label>
                        <input type="text" class="form-control" id="websiteEmail" placeholder="Enter Website and Email" />
                    </div>

                    <h4 class="mt-4 text-center" style={{ color: '#005C99' }}>Additional Notes</h4>
                    <div class="form-group">
                        <label for="additionalNotes">Any Notices or Additional Information</label>
                        <textarea class="form-control" id="additionalNotes" rows="3" placeholder="Enter Additional Notes"></textarea>
                    </div>
                    <div className='text-center mt-3 mb-4 d-flex flex-column justify-content-center align-items-center'>
                        <button type="submit" className="btn btn-primary login-second-col-btn rounded-5 w-50">Submit</button>
                    </div>

                </form>
                </div>

       </Container>

        </>
    )

}

export default AdminPageConsumerInfo