import React, { useEffect, useState } from 'react';

export default function JobHeadHome() {

  const [recruiterData, setRecruiterData] = useState("");

  useEffect(() => {
    const storedRecruiterData = localStorage.getItem('headhunter');
    if (storedRecruiterData) {
      const parsedRecruiterData = JSON.parse(storedRecruiterData);
      setRecruiterData(parsedRecruiterData)
    }
  }, []);
  return (
    <h4>Welcome {recruiterData.fullname}</h4>
  )
}
