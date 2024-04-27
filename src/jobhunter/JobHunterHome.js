import React, { useState, useEffect } from 'react';

export default function JobHunterHome() {
  
  const [jobseekerData, setJobSeekerData] = useState("");
  useEffect(() => {
  const storedJobSeekerData = localStorage.getItem('jobhunter');
    if (storedJobSeekerData) {
      const parsedJobSeekerData = JSON.parse(storedJobSeekerData);
      setJobSeekerData(parsedJobSeekerData);
    }
  }, []);

  const flashcardData = [
    {
      title: 'Apply for the Jobs',
      description: 'Find the perfect job match and showcase your skills to employers.',
      
      
    },
    {
      title: 'Get Your Dream Job',
      description: 'Tailor your resume and ace interviews to land your desired career.',
     
    },
    {
      title: 'Enlighten Your Skills',
      description: 'Explore courses and resources to enhance your skillset and become more competitive.',
     
    },
    {
      title: 'Increase Your Communication Skills',
      description: 'Improve your communication skills to impress employers and land the interview.',
     
    },
    // Add more flashcards as needed
  ];

  return (
    <div className="job-hunter-home">
      <h4>Welcome {jobseekerData.fullname}</h4>
      <div className="flashcard-container">
        {flashcardData.map((card, index) => (
          <div className="flashcard" key={index}>
            
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      <footer className="about-us__footer">
        <span>Created By <a href="#">Team Find You??</a> | © 2024 All Rights Reserved</span>
        </footer>
    </div>
  );
}
