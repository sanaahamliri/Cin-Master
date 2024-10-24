
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/admin/DashBoard'; 
import Films from './pages/admin/MoviesManage';
import Seances from './pages/admin/SeancesManage';
import Rooms from './pages/admin/RoomsManage';
import Users from './pages/admin/UsersManage';
import FilmsForm from './components/admin/movies/FilmsForm';
import FilmsFormEdit from './components/admin/movies/EditFilmForm';
import Home from './pages/client/Home'
import Details from './components/home/Detail'

import Login from "./components/Auth/login";
import Register from "./components/Auth/register";


function App() {
  return (
    <Router>
     
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/film/:id" element={<Details />} />

            <Route path="/admin/dashboard" element={<Dashboard />} />

            <Route path="/admin/filmsTable" element={<Films />} />
            <Route path="/admin/roomsTable" element={<Rooms />} />
            <Route path="/admin/seancesTable" element={<Seances />} />
            <Route path="/admin/usersTable" element={<Users />} />
            <Route path="/admin/filmForm" element={<FilmsForm />} />
            <Route path="/admin/filmFormEdit/:id" element={<FilmsFormEdit />} />

            <Route path="/login" element={<Login />} /> 
            <Route path="/register" element={<Register />} />



          </Routes>
       
    </Router>
  );
}

export default App;
