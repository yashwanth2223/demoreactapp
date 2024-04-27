import React, { useEffect, useState } from 'react';

export default function JobHeadProfile() {

    const [recruiterData, setRecruiterData] = useState(null);

    useEffect(() => {
        const storedRecruiterData = localStorage.getItem('headhunter');
        if (storedRecruiterData) {
          const parsedRecruiterData = JSON.parse(storedRecruiterData);
          setRecruiterData(parsedRecruiterData);
        }
      }, []);
  return (
    recruiterData ? (
      <div className='profile-card'>
        <p><strong>Full Name:</strong> {recruiterData.fullname}</p>
        <p><strong>Gender:</strong> {recruiterData.gender}</p>
        <p><strong>Date of Birth:</strong> {recruiterData.dateofbirth}</p>
        <p><strong>Company:</strong> {recruiterData.company}</p>
        <p><strong>Email:</strong> {recruiterData.email}</p>
        <p><strong>Address:</strong> {recruiterData.address}</p>
        <p><strong>Contact:</strong> {recruiterData.contact}</p>
      </div>
    ) : (
      <p>No Recruiter Data Found</p>
    )
  )
}
