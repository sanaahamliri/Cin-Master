import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditFilmForm() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [filmData, setFilmData] = useState({
    title: "",
    director: "",
    genre: "",
    releaseDate: "",
    duration: "",
    description: "",
    coverImage: null,
    video: null,
  });
  const token = localStorage.getItem('token');
  const [coverImagePreview, setCoverImagePreview] = useState(null); 
  const [videoPreview, setVideoPreview] = useState(null);

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/films/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setFilmData(data);
        setCoverImagePreview(data.coverImage);
        setVideoPreview(data.video);
      } catch (error) {
        console.error("Erreur lors de la récupération du film:", error);
      }
    };

    fetchFilmData();
  }, [id, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilmData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFilmData((prevData) => ({
      ...prevData,
      coverImage: file,
    }));
    setCoverImagePreview(URL.createObjectURL(file)); 
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setFilmData((prevData) => ({
      ...prevData,
      video: file,
    }));
    setVideoPreview(URL.createObjectURL(file)); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", filmData.title);
    formData.append("director", filmData.director);
    formData.append("genre", filmData.genre);
    formData.append("releaseDate", filmData.releaseDate);
    formData.append("duration", filmData.duration);
    formData.append("description", filmData.description);
    if (filmData.coverImage) {
      formData.append("coverImage", filmData.coverImage);
    }
    if (filmData.video) {
      formData.append("video", filmData.video);
    }

    try {
      const response = await fetch(`http://localhost:4000/api/films/${id}`, {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        navigate("/admin/filmsTable"); 
      } else {
        console.error("Erreur lors de la modification du film");
      }
    } catch (error) {
      console.error("Erreur lors de la soumission:", error);
    }
  };

  return (
    <div className="relative ml-64 overflow-x-auto shadow-md sm:rounded-lg">
      <h2 className="text-xl font-bold mb-4">Modifier le film</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium">
            Titre
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={filmData.title}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="director" className="block font-medium">
            Réalisateur
          </label>
          <input
            type="text"
            name="director"
            id="director"
            value={filmData.director}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="genre" className="block font-medium">
            Genre
          </label>
          <input
            type="text"
            name="genre"
            id="genre"
            value={filmData.genre}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Ex: Action, Comédie"
          />
        </div>

        <div>
          <label htmlFor="releaseDate" className="block font-medium">
            Date de sortie
          </label>
          <input
            type="date"
            name="releaseDate"
            id="releaseDate"
            value={filmData.releaseDate}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="duration" className="block font-medium">
            Durée (en minutes)
          </label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={filmData.duration}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-medium">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={filmData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            rows="5"
          ></textarea>
        </div>

        <div>
          <label htmlFor="coverImage" className="block font-medium">
            Image de couverture
          </label>
          <input
            type="file"
            name="coverImage"
            id="coverImage"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full"
          />
          {coverImagePreview && (
            <img
              src={coverImagePreview}
              alt="Aperçu de l'image de couverture"
              className="mt-2 w-40 h-40 object-cover"
            />
          )}
        </div>

        <div>
          <label htmlFor="video" className="block font-medium">
            Vidéo
          </label>
          <input
            type="file"
            name="video"
            id="video"
            accept="video/*"
            onChange={handleVideoChange}
            className="block w-full"
          />
          {videoPreview && (
            <video controls className="mt-2 w-40 h-40 object-cover">
              <source src={videoPreview} type="video/mp4" />
            </video>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Modifier
        </button>
      </form>
    </div>
  );
}
