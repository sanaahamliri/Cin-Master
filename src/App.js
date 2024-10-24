
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/admin/DashBoard'; 

function App() {
  return (
    <Router>
      <div className="flex">
        
        <div className="flex-grow">
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
