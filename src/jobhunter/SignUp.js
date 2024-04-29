import React, { useState } from 'react';
import axios from 'axios';
 import './css/SignUp.css';

import { useNavigate } from 'react-router-dom';
import config from '../config'
export default function SignUp() 
{

  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    location: '',
    contact: ''
  });
  
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'contact') {
      if (/^\d{0,10}$/.test(value)) {
        setFormData({ ...formData, [id]: value });
      }
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };


  
  
  const handleSubmit = async (e) => 
  {
    
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/insertjobhunter`, formData);
      if (response.status === 200) 
      {
        //It will set all fields to ""
        setFormData({
          fullname: '',
          gender: '',
          dateofbirth: '',
          email: '',
          password: '',
          location: '',
          contact: ''
        });
      }
      setMessage(response.data);
      setError('');
      navigate("/signin") 
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };

  
  return (
    
    <div className='signupform'>
      
      
     
   
      {message ? <h4 style={{ textAlign: "center" }}>{message}</h4> : <h4 style={{ textAlign: "center" }}>{error}</h4>}


      <form onSubmit={handleSubmit}>
      <h3 style={{ textAlign: "center" }}>Find You?? Welcomes You</h3>
      <h2 style={{ textAlign: "center" }}>Register Here!!</h2>

        <div>
          <span>Full Name</span>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <span>Gender</span>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Genderqueer">Genderqueer</option>
            <option value="Genderfluid">Genderfluid</option>
            <option value="Bigender">Bigender</option>
            <option value="Agender">Agender</option>
            <option value="Demiboy">Demiboy</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <span>Date of Birth</span>
          <input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
        </div>
        <div>
          <span>Email</span>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <span>Password</span>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <span>Location</span>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
          <span>Contact</span>
          <input type="number" id="contact" value={formData.contact} pattern='[6789][0-9]{9}' onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>

        <footer className="about-us__footer">
        <span>Created By <a href="#">Team Find You??</a> | © 2024 All Rights Reserved</span>
        </footer>
      </form>
     
    </div>
  );
}