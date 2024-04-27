import React from 'react'
import { Routes,Route,Link,useNavigate } from 'react-router-dom'
import PushNotification from './PushNotification';
import JobHeadHome from './JobHeadHome';
import AddJob from './AddJob';
import JobHeadProfile from './JobHeadProfile';
import ViewJobs from './ViewJobs';

import './css/JobHeadNav.css'


export default function JobHeadNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isJobHeadLoggedIn');
    localStorage.removeItem('jobhead');

    navigate('/jobheadsignin');
    window.location.reload()
  }
  return (
    <div>
      <ul className='navbar'>
        <Link to='/jobheadhome'>Home</Link>
        <Link to='/addjob'>Add a job</Link>
        <Link to='/viewjobs'>View Jobs</Link>
        <Link to='/jobheadprofile'>View Your Profile</Link>
        <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
      </ul>
        <Routes>
          <Route path='/jobheadhome' Component={JobHeadHome}></Route>
          <Route path='/addjob' Component={AddJob}></Route>
          <Route path='/jobheadprofile' Component={JobHeadProfile}></Route>
          <Route path='/viewjobs' Component={ViewJobs}></Route>
        </Routes>
    </div>
  )
}
