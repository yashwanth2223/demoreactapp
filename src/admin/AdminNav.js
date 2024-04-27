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
        
        <Link to='/adminhome'>Home</Link>
        <Link to='/pushnotifications'>Add Notifications</Link>
        <Link to='/addrec'>Add Recruiter</Link>
        <Link to='/addevent'>Event</Link>

       
        
       
       
        <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        
       
        </ul>

      
      <Routes>
        <Route path='/adminhome' Component={AdminHome}></Route>
        <Route path='/pushnotifications' Component={PushNotification}></Route>
        <Route path='/results' Component={Results}></Route>
        <Route path='/addrec' Component={AddRecruiter}></Route>
        <Route path='/addevent' Component={AddEvent}></Route>
        
        
       
        
      </Routes>
    
    </div>
  )
}
