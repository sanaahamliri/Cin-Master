import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function FilmDetails() {
  const  { id }  = useParams();
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  console.log(id);
  
  


  const fetchFilmDetails = async () => {
    try {
        const response = await axios.get(`http://localhost:4000/api/films/${id}`, {
            headers: { 
              Authorization: `Bearer ${token}`,   
              'Content-Type': 'application/json' 
            },
          });      setFilm(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching film details:", error);
    }
  };
  useEffect(() => {
    fetchFilmDetails();
  }, [id]);
  if (loading) {
    return <div>Loading film details...</div>;
  }

  if (!film) {
    return <div>Film not found!</div>;
  }
console.log('image' , film.coverImage);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={film.coverImage}
            alt={film.title}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold text-gray-900 mt-4 md:mt-0">{film.title}</h1>
          <p className="mt-2 text-gray-600">
            <span className="font-semibold">Director:</span> {film.director}
          </p>
          <p className="mt-2 text-gray-600">
            <span className="font-semibold">Genre:</span> {film.genre}
          </p>
          <p className="mt-2 text-gray-600">
            <span className="font-semibold">Release Date:</span>{" "}
            {new Date(film.releaseDate).toLocaleDateString()}
          </p>
          <p className="mt-4 text-gray-700">{film.description}</p>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Watch Trailer</h2>
            <video controls className="w-full h-64 mt-4 rounded-lg shadow-lg">
              <source src={film.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <div className="mt-4">
          {film.comments && film.comments.length > 0 ? (
            film.comments.map((comment) => (
              <div key={comment._id} className="border-b border-gray-200 py-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">{comment.userId.username}</span>:
                </p>
                <p className="text-gray-700 mt-1">{comment.content}</p>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
}
