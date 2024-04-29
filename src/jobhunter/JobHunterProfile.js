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
        <Link to="/updatejobseeker_profile">Update Profile</Link>
        <Routes>
      <Route path='/updatejobseeker_profile' Component={UpdateJobHunterProfile}></Route>
    </Routes>
      </div>
    ) : (
      <p>No Job Seeker Data Found</p>
    )
  );
}
