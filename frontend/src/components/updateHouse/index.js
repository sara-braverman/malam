import React, { useState } from 'react';
import houseService from '../../services/houseService'

import './updateHouse.css';

function UpdateHouse({ data, setData }) {
    const [formData, setFormData] = useState({ ...data });

    // Define a function to update the form data when the user changes an input field
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    // Define a function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        // Use the houseService module to update the house record with the new data
        async function fetchData() {
            const response = await houseService.updateHouseById(formData, data.id);
            if (response) setData({ ...response })
        }
        fetchData();
    };

    // Render the update form with input fields for the house data
    return (
        <form onSubmit={handleSubmit} className="update-form">
            <label htmlFor="address">Address:</label>
            <input required type="text" id="address" name="address" value={formData.address} defaultValue={formData.address} onChange={handleChange} />

            <label htmlFor="currentValue">Current Value:</label>
            <input required type="number" id="currentValue" name="currentValue" value={formData.currentValue} defaultValue={formData.currentValue} onChange={handleChange} />

            <label htmlFor="loanAmount">Loan Amount:</label>
            <input required type="number" id="loanAmount" name="loanAmount" value={formData.loanAmount} defaultValue={formData.loanAmount} onChange={handleChange} />

            <button type="submit">Submit</button>
        </form>
    );
}

export default UpdateHouse;
