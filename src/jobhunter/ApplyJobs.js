import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './css/ApplyJobs.css'; // Import the CSS file
import config from '../config'
export default function ApplyJobs() {
  const [jobseekerData, setJobSeekerData] = useState("");

  useEffect(() => {
    const storedJobSeekerData = localStorage.getItem('jobhunter');
    if (storedJobSeekerData) {
      const parsedJobSeekerData = JSON.parse(storedJobSeekerData);
      setJobSeekerData(parsedJobSeekerData);
    }
  }, []);

  const [jobs, setJobs] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${config.url}/viewjobsbyjobhunter/`);
      setJobs(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const applyJob = async (jobid, jobseekeremail) => {
    try {
      const response = await axios.post(`${config.url}/applyjobs`, { jobid, jobseekeremail });
      fetchJobs();
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  return (
    <div className="flashcard-container">
      <h3>Posted Jobs</h3>
      {message ? <h4 style={{ textAlign: "center" }}>{message}</h4> : <h4 style={{ textAlign: "center", color: 'red' }}>{error}</h4>}

      {Array.isArray(jobs) && jobs.length > 0 ? (
        jobs.map((job, index) => (
          <div className="flashcard" key={index}>
            {/* Job Title */}
            <h3>{job.title}</h3>
            {/* Company and Location */}
            <p>
              <span className="company">{job.company}</span> - <span className="location">{job.location}</span>
            </p>
            {/* Salary and Deadline */}
            <p>
              <span className="salary">Salary: {job.salary}</span> - <span className="deadline">Deadline: {job.deadline}</span>
            </p>
            {/* Posted By and Posted Time */}
            <p>
              <span className="posted-by">Posted By: {job.recruiter.fullname}</span> - <span className="posted-time">Posted Time: {job.postedtime}</span>
            </p>
            {/* Apply Button */}
            <button className="apply-button" onClick={() => applyJob(job.jobid, jobseekerData.email)}>Apply</button>
          </div>
        ))
      ) : (
        <div className="no-data">Data Not Found</div>
      )}
       <footer className="about-us__footer">
        <span>Created By <a href="#">Team Find You??</a> | © 2024 All Rights Reserved</span>
        </footer>
    </div>
  );
}
