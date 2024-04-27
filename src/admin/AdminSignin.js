import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/AdminSign.css'
import config from '../config'


export default function AdminSignin({onAdminLogin}) 
{
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkadminlogin`, formData);
      if (response.data != null) 
      {
        onAdminLogin();

        localStorage.setItem('admin', JSON.stringify(response.data));
        
        navigate("/adminhome");
      } 
      else 
      {
        setMessage("Login Failed");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  return (
    <div className='admin-signin'>
      
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
        <h3 align="center">Admin Portal</h3>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>
        <footer className="about-us__footer">
        <span>Created By <a href="#">Team Find You??</a> | © 2024 All Rights Reserved</span>
        </footer>
      </form>
    </div>
  );
}