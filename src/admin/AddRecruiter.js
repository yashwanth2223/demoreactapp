import React, { useState } from 'react';
import axios from 'axios';

import './css/AddRecruiter.css'

import config from '../config'

export default function AddRecruiter() 
{
  //formData state variable
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    company: '',
    username: '',
    email: '',
    address: '',
    contact: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    const newValue = id === 'fullname' ? value.toUpperCase() : value;
    setFormData({ ...formData, [id]: newValue });
  };
  

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/addheadhunter`, formData);
      if (response.status === 200) 
      {
        setFormData({
          fullname: '',
          gender: '',
          dateofbirth: '',
          company: '',
          username: '',
          email: '',
          address: '',
          contact: ''
        });
      }
      setMessage(response.data);
      setError('');
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  return (
    <div className='add-recruiter'>
  
  {message ? <h4 style={{ textAlign: "center" }}>{message}</h4> : <h4 style={{ textAlign: "center", color: "red" }}>{error}</h4>}

      <form onSubmit={handleSubmit}>
      <h3 style={{ textAlign: "center" }}>Add Headhunter</h3>

      <h6>Note:Headhunter is a person who is going to hire for Jobs</h6>
        <div>
          <spam>Full Name</spam>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} onKeyUp={handleChange} required />
        </div>
        <div>
          <spam>Gender</spam>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <spam>Date of Birth</spam>
          <input type="date" id="dateofbirth" value={formData.dateofbirth} onChange={handleChange} required />
        </div>
        <div>
          <spam>Company Name</spam>
          <input type="text" id="company" value={formData.company} onChange={handleChange} required />
        </div>
        <div>
          <spam>Username</spam>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <spam>Email</spam>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <spam>Address</spam>
          <textarea type="text" id="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <spam>Contact</spam>
          <input type="number" id="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}