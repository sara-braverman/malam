import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import houseService from '../../services/houseService'

import './houseForm.css'

function HouseForm() {

    // Define state variables for the form data and the ID of the newly created house
    const [dataId, setDataId] = useState();
    const [formData, setFormData] = useState({
        "address": null,
        "currentValue": null,
        "loanAmount": null,
        "risk": "0"
    });

    // Handle changes to the form input fields
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        async function fetchData() {
            // Call the houseService addHouse function to create a new house with the form data
            const data = await houseService.addHouse(formData);
            if (data?.id) setDataId(data.id)
        }
        fetchData();
    };

    return (
        <form onSubmit={handleSubmit} className="update-form">
            <label htmlFor="address">Address:</label>
            <input required type="text" id="address" name="address" value={formData.address} onChange={handleChange} />

            <label htmlFor="currentValue">Current Value:</label>
            <input required type="number" id="currentValue" name="currentValue" value={formData.currentValue} onChange={handleChange} />

            <label htmlFor="loanAmount">Loan Amount:</label>
            <input required type="number" id="loanAmount" name="loanAmount" value={formData.loanAmount} onChange={handleChange} />

            <button type="submit">Submit</button>

            {/* Render the ID of the newly created house and a link to view its details */}
            {dataId && <> House No. {dataId}
                <Link to={`/house/${dataId}`}>
                    <button>show ditails</button>
                </Link>
            </>}
        </form>
    );
}

export default HouseForm;
