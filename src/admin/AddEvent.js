import React, { useState,useRef } from 'react';
import axios from 'axios';

import './css/Event.css'
import config from '../config'

export default function AddEvent() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    date: '',
    location: '',
    file: null
  });
 
  const fileInputRef = useRef(null); // Ref for the file input element

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('category', formData.category);
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('file', formData.file); // Append the file object

      const response = await axios.post(`${config.url}/createevent`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });

      if (response.status === 200) {
        setFormData({
          category: '',
          title: '',
          description: '',
          date: '',
          location: '',
          file: null
        });
        fileInputRef.current.value = '';
      }
      setMessage(response.data);
      setError('');
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Add Event</h3>

      {message ? <h4 style={{ textAlign: "center" }}>{message}</h4> : null}
      {error ? <h4 style={{ textAlign: "center", color: 'red' }}>{error}</h4> : null}

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <spam>Category</spam>
          <input type="text" id="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          <spam>Title</spam>
          <input type="text" id="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <spam>Description</spam>
          <textarea id="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <spam>Date</spam>
          <input type="date" id="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <span>Location</span>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
          <spam>Image</spam>
          <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
