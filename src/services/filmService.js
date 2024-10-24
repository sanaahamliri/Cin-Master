import axios from 'axios';

const API_URL = 'http://localhost:4000/api/films';

export const createFilm = async (filmData, token) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, filmData, config);
  return response.data;
};

export const updateFilm = async (id, filmData, token) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    },
  };

  const response = await axios.put(`${API_URL}/${id}`, filmData, config);
  return response.data;
};

export const deleteFilm = async (id, token) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${API_URL}/${id}`, config);
  return response.data;
};

export const getFilms = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
