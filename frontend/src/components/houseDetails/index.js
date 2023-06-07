import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import houseService from '../../services/houseService'
import UpdateHouse from '../updateHouse'

import './houseDetails.css'

function HouseDetails() {
    const [data, setData] = useState();
    const [showupdate, setShowupdate] = useState();

    // Get the ID parameter from the URL using the useParams hook
    const { id } = useParams();

    // Use the useEffect hook to fetch the house data when the component mounts or the ID parameter changes
    useEffect(() => {
        async function getData() {
            const response = await houseService.getHouseById(id);
            if (response) {
                setData({
                    "id": response?.id,
                    "address": response?.address,
                    "currentValue": response?.currentValue,
                    "loanAmount": response?.loanAmount,
                    "risk": response?.risk,
                })
            }
        }
        getData();
    }, [id]);

    // Render the house details and update form
    return (<div className="house-details">
        {data && <div>
            <h2>Details for House {id}</h2>
            <p>Address: {data?.address}</p>
            <p>currentValue: {data?.currentValue}</p>
            <p>loanAmount: {data?.loanAmount}</p>
            <p>risk: {data?.risk}</p>
            <button onClick={() => { setShowupdate(!showupdate) }}>
                {!showupdate ? 'update' : 'cancel'}
            </button>
            {showupdate && <UpdateHouse data={data} setData={setData} />}
        </div>}
    </div>
    );
}


export default HouseDetails;
