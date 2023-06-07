import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HouseForm from './components/HouseForm';
import HouseDetails from './components/houseDetails';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/addHouse" element={<HouseForm />} />
          <Route path="/house/:id" element={<HouseDetails/>} />
        </Routes>
    </Router>
  );
}

export default App;
