import axios from 'axios';

// Define the API URL for the houses endpoint
const API_URL = 'http://localhost:3200/api/houses';

// Function to add a new house to the database
async function addHouse(houseData) {
    return axios.post(API_URL, houseData)
        .then(response => response.data)
        .catch(error => console.log(error));
}

// Function to get a house by its ID
async function getHouseById(id) {
    return axios.get(`${API_URL}/${id}`)
        .then(response => response.data)
        .catch(error => console.log(error));
}

// Function to update a house by its ID
async function updateHouseById(houseData, id) {
    return axios.put(`${API_URL}/${id}`,houseData)
        .then(response => response.data)
        .catch(error => console.log(error));
}

export default {
    addHouse,
    getHouseById,
    updateHouseById
};
