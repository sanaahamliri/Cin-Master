import axios from "axios";

const API_URL = "http://localhost:4000/api/auth"; 

export const register = async (username, email, password) => {
  const response = await axios.post(`http://localhost:4000/api/auth/register`, { username, email, password },{
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true, 
  });
  return response.data; 
};

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
};