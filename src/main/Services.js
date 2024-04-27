import React, { useState } from 'react';
import './css/Services.css'
const servicesData = [
  {
    title: 'Mock Interviews: Practice Makes Perfect',
    description:
      'Ace your next interview with realistic mock interview sessions! We provide experienced interviewers to simulate real-world scenarios, helping you refine your response skills and build confidence for the big day.',
  },
  {
    title: 'Free Resume/CV Templates: Make a Great First Impression',
    description:
      'Craft a compelling resume or CV that showcases your skills and experiences with our professionally designed templates. They are easy to customize and highlight your qualifications in a clear and professional manner.',
  },
  {
    title: 'Stay Ahead with Current Skills for 2024',
    description:
      'Future-proof your career by identifying and acquiring the most in-demand skills for the current year (2024). We provide resources and guidance to help you master these skills and increase your employability.',
  },
  {
    title: 'Find Your Path with Trending Jobs in 2024',
    description:
      'Explore the hottest job opportunities in 2024! We curate lists of trending jobs across various industries, allowing you to discover exciting career options aligned with your interests and skills.',
  },
];

export default function Services() {
  const [currentService, setCurrentService] = useState(0);

  const handleNext = () => {
    setCurrentService((currentService + 1) % servicesData.length);
  };

  const handlePrev = () => {
    setCurrentService((currentService - 1 + servicesData.length) % servicesData.length);
  };

  return (
    <section className="services">
      <h2>Our Services: Help You Land Your Dream Job</h2>
      <p>
        We understand the challenges of navigating the job market. At Find You??,
        we offer a range of services to help you stand out from the crowd and
        secure the perfect opportunity.
      </p>
      <div className="flashcard-container">
        <div className="flashcard">
          <h3>{servicesData[currentService].title}</h3>
          <p>{servicesData[currentService].description}</p>
        </div>
        <div className="controls">
          <button onClick={handlePrev} disabled={currentService === 0}>
            Previous
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
      <footer className="about-us__footer">
        <span>Created By <a href="#">Team Find You??</a> | © 2024 All Rights Reserved</span>
        </footer>
    </section>
  );
}
