import React, { useState,useEffect } from 'react';
import axios from 'axios';

import './css/AddJob.css'
import config from '../config'

//in here we will be adding jobs for the jobholders by the jobhead and it will be processed by using an form
export default function AddJob() {

    const [recruiterData, setRecruiterData] = useState("");

    useEffect(() => {
        const storedRecruiterData = localStorage.getItem('recruiter');
        if (storedRecruiterData) {
          const parsedRecruiterData = JSON.parse(storedRecruiterData);
          setRecruiterData(parsedRecruiterData)
        }
      }, []);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    company: '',
    roles: [], 
    location: '',
    salary: '',
    jobtype: '', 
    educationqualifications: '', 
    requirements: '',
    email: '',
    deadline: '',
    recruiter:''
  });

  // message state variable
  const [message, setMessage] = useState('');
  // error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleRolesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({ ...formData, roles: selectedOptions});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/addjob`,{ ...formData, recruiter: recruiterData,company: recruiterData.company,});
      if (response.status === 200) {
        setFormData({
          title: '',
          description: '',
          company: '',
          roles: [],
          location: '',
          salary: '',
          jobtype: '',
          educationqualifications: '',
          requirements: '',
          email: '',
          deadline: '',
          recruiter: ''
        });
      }
      setMessage(response.data);
      setError("");
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };
  

  return (
    
    <div className='add-job'>
      
      {message ? <h4 style={{ textAlign: "center" }}>{message}</h4> : <h4 style={{ textAlign: "center", color: "red" }}>{error}</h4>}

      <form onSubmit={handleSubmit}>
        <div>
        <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Post a New Job</h3>

          <h3>Title</h3>
          <input type="text" id="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <span>Description</span>
          <textarea id="description" value={formData.description} onChange={handleChange} required />
        </div>

        
        <div>
          <span>Roles</span>
          <select id="roles" value={formData.roles} onChange={handleRolesChange} multiple required>
            <option value="Software Engineer">Software Engineer</option>
            <option value="System Engineer">System Engineer</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Testing">Testing</option>
            <option value="System Architect">System Architect</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Graphic Designer">Graphic Designer</option>
            <option value="Network Engineer">Network Engineer</option>

            <option value="Others">Others</option>
          </select>
        </div>
        <div>
          <span>Job Type</span>
          <select id="jobtype" value={formData.jobtype} onChange={handleChange} required>
            <option value="">---Select---</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div>
          <span>Location</span>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
          <span>Salary</span>
          <input type="number" id="salary" value={formData.salary} onChange={handleChange} required />
        </div>
        <div>
          <span>Education Qualifications</span>
          <textarea id="educationqualifications" value={formData.educationqualifications} onChange={handleChange} required />
        </div>
        <div>
          <span>Requirements(Skills)</span>


<textarea id="requirements" value={formData.requirements} onChange={handleChange} required />
        </div>
        <div>
          <span>Contact Email</span>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <span>Deadline</span>
          <input type="date" id="deadline" value={formData.deadline} onChange={handleChange} required />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
