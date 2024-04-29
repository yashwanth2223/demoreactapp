import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/SignIn.css'
import config from '../config'
export default function SignIn({onJobHunterLogin}) 
{
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message,setMessage] = useState("")
  const [error,setError] = useState("")

  const navigate = useNavigate();
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkjobhunterlogin`, formData);
      if (response.data != null) 
      {
        onJobHunterLogin();

        localStorage.setItem('jobhunter', JSON.stringify(response.data));

        navigate("/jobhunterhome");
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  return (
    <div className='signin'>
      
      {message ? <h4 style={{ textAlign: "center" }}>{message}</h4> : <h4 style={{ textAlign: "center" }}>{error}</h4>}

      <form onSubmit={handleSubmit}>
        <div>
        <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Sign-In</h3>

          <span>Email</span>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <span>Password</span>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>

        <footer className="about-us__footer">
        <span>Created By <a href="#">Team Find You??</a> | © 2024 All Rights Reserved</span>
        </footer>
      </form>

        
    </div>
  );
}
