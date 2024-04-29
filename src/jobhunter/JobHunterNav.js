import React  from 'react'
import { Routes,Route,Link,useNavigate } from 'react-router-dom'
import ApplyJobs from './ApplyJobs';
import TrendingJobs from './TrendingJobs';
import TrendingSkills from './TrendingSkill';

import './css/Home.css';
import Interviews from '../main/Interviews';
import JobHunterHome from './JobHunterHome';
import JobHunterProfile from './JobHunterProfile';


export default function JobHunterNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isJobHunterLoggedIn');
    localStorage.removeItem('jobhunter');

    navigate('/jobhunterlogin');
    window.location.reload()
  };
  return (
    <div>
      <ul className='navbar'>
      <h2>Find You??</h2>
      <Link to='/jobhunterhome'>Home</Link>
      <Link to='/apply'>Apply Here!</Link>
      <Link to='/trend_jobs'>Trending-Jobs</Link>
      <Link to='/trend_skills'>Skills</Link>
      <Link to ='/interviews'>Interview</Link>
      <Link to='/jobhunter_profile'>Profile</Link>
      <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
      
      </ul>
        <Routes>
          <Route path='/jobhunterhome' Component={JobHunterHome}></Route>
           <Route path='/apply' Component={ApplyJobs}></Route>
           <Route path='/trend_jobs' Component={TrendingJobs}></Route>
           <Route path='/trend_skills' Component={TrendingSkills}></Route>
           <Route path='/interviews' Component={Interviews}></Route>
           <Route path='/jobhunter_profile' Component={JobHunterProfile}></Route>
           
           
      </Routes>
    </div>
  )
}
