import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
        const response = await axios.get(`http://localhost:4000/api/films`, {
            headers: { 
              Authorization: `Bearer ${token}`,   
              'Content-Type': 'application/json' 
            },
          });
      setFilms(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching films:", error);
    }
  };

  if (loading) {
    return <div>Loading films...</div>;
  }

  return (
    <div className="container mx-auto px-4 ">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to CinéManager</h1>
        <p className="text-lg text-gray-600">
          Discover the latest films, watch trailers, and reserve your seats!
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {films.map((film) => (
          <div
            key={film._id}
            className="bg-white rounded-lg shadow-md p-4 transform hover:scale-105 transition duration-300"
          >
            <img
              src={film.coverImage}
              alt={film.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-gray-800">{film.title}</h2>
              <p className="text-gray-600">Directed by: {film.director}</p>
              <p className="text-gray-600">Genre: {film.genre}</p>
              <p className="text-gray-600">
                Release Date: {new Date(film.releaseDate).toLocaleDateString()}
              </p>
              <a
                href={`/film/${film._id}`}
                className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
