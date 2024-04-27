import React from 'react';
import './css/TrendingJobs.css';

const jobs = [
    { title: 'Software Engineer', qualifications: 'Bachelor\'s degree in Computer Science or related field' },
    { title: 'Data Scientist', qualifications: 'Bachelor\'s degree in Data Science, Statistics, or related field' },
    { title: 'AI/Machine Learning Engineer', qualifications: 'Bachelor\'s degree in Computer Science, AI, or related field' },
    { title: 'Cybersecurity Analyst', qualifications: 'Bachelor\'s degree in Cybersecurity or related field' },
    { title: 'Cloud Engineer', qualifications: 'Bachelor\'s degree in Computer Science or related field' },
    { title: 'Full Stack Developer', qualifications: 'Bachelor\'s degree in Computer Science or related field' },
    { title: 'Robotics Engineer', qualifications: 'Bachelor\'s degree in Robotics or related field' },
    { title: 'Environmental Engineer', qualifications: 'Bachelor\'s degree in Environmental Engineering or related field' },
    { title: 'Civil Engineer', qualifications: 'Bachelor\'s degree in Civil Engineering or related field' },
    { title: 'Electrical Engineer', qualifications: 'Bachelor\'s degree in Electrical Engineering or related field' },
    { title: 'Mechanical Engineer', qualifications: 'Bachelor\'s degree in Mechanical Engineering or related field' },
    { title: 'Chemical Engineer', qualifications: 'Bachelor\'s degree in Chemical Engineering or related field' },
    // Add more jobs
    { title: 'Aerospace Engineer', qualifications: 'Bachelor\'s degree in Aerospace Engineering or related field' },
    { title: 'Biomedical Engineer', qualifications: 'Bachelor\'s degree in Biomedical Engineering or related field' },
    { title: 'Materials Engineer', qualifications: 'Bachelor\'s degree in Materials Engineering or related field' },
    { title: 'Petroleum Engineer', qualifications: 'Bachelor\'s degree in Petroleum Engineering or related field' },
    { title: 'Nuclear Engineer', qualifications: 'Bachelor\'s degree in Nuclear Engineering or related field' },
    { title: 'Industrial Engineer', qualifications: 'Bachelor\'s degree in Industrial Engineering or related field' },
    { title: 'Mining Engineer', qualifications: 'Bachelor\'s degree in Mining Engineering or related field' },
    { title: 'Marine Engineer', qualifications: 'Bachelor\'s degree in Marine Engineering or related field' },
    { title: 'Computer Hardware Engineer', qualifications: 'Bachelor\'s degree in Computer Engineering or related field' },
    { title: 'Network Engineer', qualifications: 'Bachelor\'s degree in Network Engineering or related field' },
    { title: 'Systems Engineer', qualifications: 'Bachelor\'s degree in Systems Engineering or related field' },
    { title: 'Telecommunications Engineer', qualifications: 'Bachelor\'s degree in Telecommunications Engineering or related field' },
    { title: 'Automotive Engineer', qualifications: 'Bachelor\'s degree in Automotive Engineering or related field' },
    { title: 'Civil Engineering Technician', qualifications: 'Associate\'s degree in Civil Engineering Technology or related field' },
    { title: 'Electrical Engineering Technician', qualifications: 'Associate\'s degree in Electrical Engineering Technology or related field' },
    { title: 'Mechanical Engineering Technician', qualifications: 'Associate\'s degree in Mechanical Engineering Technology or related field' },
  ];
  

export default function TrendingJobs() {
  return (
    <div className="trending-jobs" align="center">
      <h2>Trending Jobs in 2024</h2>
      <div className="jobs-container">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.qualifications}</p>
          </div>
        ))}
         <footer className="about-us__footer">
        <span>Created By <a href="#">Team Find You??</a> | © 2024 All Rights Reserved</span>
        </footer>
      </div>
    </div>
  );
}
