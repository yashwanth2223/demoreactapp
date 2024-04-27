import React, { useEffect, useState } from 'react';
import { Link,Route,Routes } from 'react-router-dom';
import UpdateJobHunterProfile from './UpdateJobHunterProfile';

import './css/JobHunterProfile.css'

export default function JobHunterProfile() {

    const [jobseekerData, setJobSeekerData] = useState(null);

  useEffect(() => {
    const storedJobSeekerData = localStorage.getItem('jobhunter');
    if (storedJobSeekerData) {
      const parsedJobSeekerData = JSON.parse(storedJobSeekerData);
      setJobSeekerData(parsedJobSeekerData);
    }
  }, []);
  return (
    jobseekerData ? (
      <div className='profile-card'>
        <p><strong>Full Name:</strong> {jobseekerData.fullname}</p>
        <p><strong>Gender:</strong> {jobseekerData.gender}</p>
        <p><strong>Date of Birth:</strong> {jobseekerData.dateofbirth}</p>
        <p><strong>Email:</strong> {jobseekerData.email}</p>
        <p><strong>Location:</strong> {jobseekerData.location}</p>
        <p><strong>Contact:</strong> {jobseekerData.contact}</p>
        <Link to="/updatejobseekerprofile">Update Profile</Link>
        <Routes>
      <Route path='/updatejobseekerprofile' Component={UpdateJobHunterProfile}></Route>
    </Routes>
      </div>
    ) : (
      <p>No Job Seeker Data Found</p>
    )
  );
  <footer className="about-us__footer">
  <span>Created By <a href="#">Team Find You??</a> | © 2024 All Rights Reserved</span>
  </footer>
}
