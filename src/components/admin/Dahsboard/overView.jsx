import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CinemaStats = () => {
  const [activeTab, setActiveTab] = useState('stats');
  const [stats, setStats] = useState({
    totalFilms: 0,
    totalSeances: 0,
    totalUsers: 0,
    totalReservations: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/admin/statistics');
        setStats(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des statistiques', error);
      }
    };

    fetchStats();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-full mx-4 py-6 sm:mx-auto sm:px-6 lg:px-8">
      <div className="sm:flex sm:space-x-4">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
          <div className="bg-white p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="text-sm leading-6 font-medium text-gray-400">Total Films</h3>
                <p className="text-3xl font-bold text-black">{stats.totalFilms}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
          <div className="bg-white p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="text-sm leading-6 font-medium text-gray-400">Total Sessions</h3>
                <p className="text-3xl font-bold text-black">{stats.totalSeances}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
          <div className="bg-white p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="text-sm leading-6 font-medium text-gray-400">Total Users</h3>
                <p className="text-3xl font-bold text-black">{stats.totalUsers}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow transform transition-all mb-4 w-full sm:w-1/3 sm:my-8">
          <div className="bg-white p-5">
            <div className="sm:flex sm:items-start">
              <div className="text-center sm:mt-0 sm:ml-2 sm:text-left">
                <h3 className="text-sm leading-6 font-medium text-gray-400">Total Reservations</h3>
                <p className="text-3xl font-bold text-black">{stats.totalReservations}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CinemaStats;
