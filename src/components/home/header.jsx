import React from 'react';

export default function Header() {
  return (
    <header className="relative bg-gray-900 text-white h-screen">
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            CinéManager
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-400">Home</a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-400">Favoris</a>
            </li>
            <li>
              <a href="/Register" className="hover:text-gray-400">Register</a>
            </li>
            <li>
              <a href="/Login" className="hover:text-gray-400">Login</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("../../../public/assets/images/3.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenue sur CinéManager</h1>
          <p className="text-xl mb-8">Gérez vos films, réservations et profitez de notre cinéma en ligne</p>
          
        </div>
      </div>
    </header>
  );
}
