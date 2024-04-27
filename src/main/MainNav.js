import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import about from './about'
import SignIn from './../jobhunter/SignIn';
import JobHeadSignin from '../jobhead/JobHeadSignIn'
import AdminSignin from '../admin/AdminSignin'
import Contact from './Contact';
import Home from './Home';
import SignUp from './../jobhunter/SignUp';
import Services from './Services';

import './Nav.css'






export default function MainNav({onJobHunterLogin,onJobHeadLogin,onAdminLogin}) {
  return (
    <div>
      
      <ul className='navbar'>
        
        <h2>Find You??</h2>
      <Link to='/'>Home</Link>
      <Link to='/signup'>Sign-Up</Link>
      <Link to='/signin'>Sign-In</Link>
      <Link to='/adminsignin'>Admin</Link>
      <Link to='/jobheadsignin'>JobHead</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact-Us</Link>
      <Link to='/services'>Services</Link>
      </ul>
      

      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/signup' Component={SignUp}></Route>
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/about' Component={about}></Route>
        <Route path='/signin' element={<SignIn onJobHunterLogin={onJobHunterLogin}/>} exact/>
        <Route path='/adminsignin' element={<AdminSignin onAdminLogin={onAdminLogin}/>} exact/>
        <Route path='/jobheadsignin'  element={<JobHeadSignin onJobHeadLogin={onJobHeadLogin}/>} exact/>
        <Route path='/services' Component={Services}></Route>
        
        
      </Routes>
      
     
      
    </div>
  )
}
