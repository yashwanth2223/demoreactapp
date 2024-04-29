import React from 'react'
import { Routes,Route,Link,useNavigate } from 'react-router-dom'
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
    //this the Navbar code for the JobHead page.
    <div>
      <ul className='navbar'>
        <Link to='/jobhead_home'>Home</Link>
        <Link to='/addjob'>Add a job</Link>
        <Link to='/view_jobs'>View Jobs</Link>
        <Link to='/jobhead_profile'>View Your Profile</Link>
        <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
      </ul>
        <Routes>
          <Route path='/jobhead_home' Component={JobHeadHome}></Route>
          <Route path='/addjob' Component={AddJob}></Route>
          <Route path='/jobhead_profile' Component={JobHeadProfile}></Route>
          <Route path='/view_jobs' Component={ViewJobs}></Route>
        </Routes>
    </div>
  )
}
