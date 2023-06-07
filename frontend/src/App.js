import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import HouseForm from './components/HouseForm';
import HouseDetails from './components/houseDetails';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/addHouse" element={<HouseForm />} />
        <Route path="/house/:id" element={<HouseDetails />} />
      </Routes>
      <Link to={`/addHouse`}>
        <button>Add House</button>
      </Link>
    </Router>
  );
}

export default App;
