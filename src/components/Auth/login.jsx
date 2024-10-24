import React, { useState } from "react";
import "./auth.css"
import { login } from "../../services/authService";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await login(formData.email, formData.password);
      console.log(response);
    } catch (error) {
      setErrorMessage('Failed to login.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;