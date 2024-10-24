import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FilmsTable() {
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
    } catch (error) {
      console.error("Error fetching films:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this film?")) {
      try {
        await axios.delete(`http://localhost:4000/api/films/${id}`, {
          headers: { 
            Authorization: `Bearer ${token}`,   
            'Content-Type': 'application/json' 
          },
        });
        setFilms(films.filter(film => film._id !== id));
      } catch (error) {
        console.error("Error deleting film:", error);
      }
    }
  };

  if (loading) {
    return <div>Loading films...</div>;
  }

  return (
    <>
      <div className="flex justify-end mb-4 mr-10">
        <Link to="/admin/filmForm">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Film
          </button>
        </Link>
      </div>

      <div className="relative ml-64 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Movie Title</th>
              <th scope="col" className="px-6 py-3">Movie Director</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Release Date</th>
              <th scope="col" className="px-6 py-3">Comments</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {films.map((film) => (
              <tr
                key={film._id}
                className="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-900 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {film.title}
                </th>
                <td className="px-6 py-4">{film.director}</td>
                <td className="px-6 py-4">{film.genre}</td>
                <td className="px-6 py-4">{new Date(film.releaseDate).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  {film.comments.map((comment) => (
                    <p key={comment._id}>
                      <strong>{comment.userId.username}:</strong> {comment.text}
                    </p>
                  ))}
                </td>
                <td className="px-6 py-4 flex space-x-4">
                  <Link
                    to={`/admin/filmForm/${film._id}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <Link
                    to="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    onClick={() => handleDelete(film._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
