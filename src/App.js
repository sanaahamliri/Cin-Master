
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/admin/DashBoard'; 
import Films from './pages/admin/MoviesManage';
import Seances from './pages/admin/SeancesManage';
import Rooms from './pages/admin/RoomsManage';
import Users from './pages/admin/UsersManage';



function App() {
  return (
    <Router>
      <div className="flex">
        
        <div className="flex-grow">
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/filmsTable" element={<Films />} />
            <Route path="/admin/roomsTable" element={<Rooms />} />
            <Route path="/admin/seancesTable" element={<Seances />} />
            <Route path="/admin/usersTable" element={<Users />} />



          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
