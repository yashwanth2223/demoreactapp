import React from 'react'
import { Route,Routes,Link,useNavigate } from 'react-router-dom'

import PushNotification from './PushNotification';
import AdminHome from './AdminHome';
import Results from './Results';
import AddRecruiter from './AddRecruiter';

import './css/AdminNav.css'
import AddEvent from './AddEvent';




export default function AdminNav() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };
  return (
    <div>

      <ul className='admin-navbar'>
        <Link to='/admin_home'>Home</Link>
        <Link to='/pushnotification'>Add Notifications</Link>
        <Link to='/addrecruiters'>Add Recruiter</Link>
        <Link to='/add_events'>Event</Link>
        <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </ul>
      <Routes>
        <Route path='/admin_home' Component={AdminHome}></Route>
        <Route path='/pushnotification' Component={PushNotification}></Route>
        <Route path='/results' Component={Results}></Route>
        <Route path='/addrecruiters' Component={AddRecruiter}></Route>
        <Route path='/add_events' Component={AddEvent}></Route>
      </Routes>

    </div>
  )
}
        
        
        
       
        
       
        
       
       
        
       

      
    
