import React from 'react';
import './css/Interview.css'; // Import the CSS file

export default function Interviews() {
  const youtubeLinks = [
    {
      title: 'Placement Preparation Step 1',
      url: 'https://www.youtube.com/watch?v=IJjtXmawat',
    },
    {
      title: 'How to Crack a Campus Placement Interview',
      url: 'https://www.youtube.com/watch?v=4sJlBdnEVY',
    },
    {
      title: 'College Placement Preparation - Job Interview Questions & Answers',
      url: 'www.youtube.com/watch?v=WEJLQkKVJbY',
    },
  ];

  const handleScheduleMockInterview = () => {
    // Implement logic to handle scheduling a mock interview
    // This could involve redirecting to a different page, opening a form, etc.
    alert('Mock interview scheduling initiated!');
  };

  return (
    <div className="interviews-container">
      <h1>Campus Interview Preparation</h1>
      <p>Here are some helpful YouTube links to get you started with your interview preparation:</p>
      <ul className="video-list">
        {youtubeLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={handleScheduleMockInterview}>Schedule Mock Interview</button>
    </div>
  );
}
