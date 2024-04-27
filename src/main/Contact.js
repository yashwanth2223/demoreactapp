import React, { useState } from 'react';
import './Contact.css';
import config from '../config'
export default function Contact() {
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${config.url}/contactus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, issue }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setEmail('');
        setIssue('');
      } else {
        setMessage('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>
        Have questions, feedback, or need help with an issue? Fill out the form
        below and we'll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="issue">Issue:</label>
        <textarea
          id="issue"
          name="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
          rows="5"
        ></textarea>
        <button type="submit">Submit</button>
        {message && <p className="message">{message}</p>}
        <footer className="about-us__footer">
        <span>Created By <a href="#">Team Find You??</a> | © 2024 All Rights Reserved</span>
        </footer>
      </form>
    </div>
  );
}
