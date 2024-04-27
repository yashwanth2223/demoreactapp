import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/JobHunterProfile.css';

import config from '../config'

export default function UpdateJobHunterProfile() {
  const [jobhunterData, setJobHunterData] = useState({
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
  const [initialJobhunterData, setInitialJobhunterData] = useState({});

  useEffect(() => {
    const storedJobHunterData = localStorage.getItem('jobhunter');
    if (storedJobHunterData) {
      const parsedJobHunterData = JSON.parse(storedJobHunterData);
      setJobHunterData(parsedJobHunterData);
      setInitialJobhunterData(parsedJobHunterData); // Store initial job seeker data
    }
  }, []);

  const handleChange = (e) => {
    setJobHunterData({ ...jobhunterData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const updatedData = {};
      for (const key in jobhunterData) {
        if (jobhunterData[key] !== initialJobhunterData[key] && initialJobhunterData[key] !== '') {
          updatedData[key] = jobhunterData[key]; 
        }
      }
      if (Object.keys(updatedData).length !== 0) {
        // There are changes
        updatedData.email = jobhunterData.email;
        const response = await axios.put(`${config.url}/updatejobhunterprofile`, updatedData);
        setMessage(response.data);
        setError('');
        const res = await axios.get(`${config.url}/jobhunterprofile/${jobhunterData.email}`, updatedData)
        localStorage.setItem("jobhunter",JSON.stringify(res.data))
      } else {
        // No changes
        setMessage("No Changes in Job Hunter Profile");
        setError("");
      }
    } 
    catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  
  return (
    <div>
      <h3 align="center"><u>Update Profile</u></h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center" color='red'>{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={jobhunterData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender</label>
          <input type="text" id="gender" value={jobhunterData.gender} readOnly />
        </div>
        <div>
          <label>Date of Birth</label>
          <input type="date" id="dateofbirth" value={jobhunterData.dateofbirth} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={jobhunterData.email} readOnly />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={jobhunterData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Location</label>
          <input type="text" id="location" value={jobhunterData.location} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact</label>
          <input type="number" id="contact" value={jobhunterData.contact} onChange={handleChange} required />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}