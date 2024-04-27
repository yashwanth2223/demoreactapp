import { Link,Route,Routes } from 'react-router-dom'

import './Home.css'
import Logo from './images/logo.jpg'

import SignIn from '../jobhunter/SignIn';

export default function Home() {
  

  return (
    <div className="home">
     
      {/* <img src={logo} alt="profile" width="100%" /> */}
      
      <div className="txt">
        <h1 class="cam_hd_1"  >Hey, welcome to Find You??</h1>
        <p class="cam_para_1"> Welcome to Find You, your ultimate destination for campus recruitment! We connect talented students with leading companies, creating meaningful career opportunities for the next generation of professionals. Whether you're a student searching for your dream job or a company looking to hire top talent, Find You is here to help you succeed. Join us today and discover endless possibilities for your future!!!
       <br/>
       Use the leading online campus recruitment software to surface top talent.
      </p>

    <Link className='signup'to='/signup'>Sign-Up For More</Link>
    <Routes>
      <Route path='/signup' Component={SignIn}></Route>
    </Routes>
    <div className='logo=container'>

    {/* <img src={Logo} alt="My Logo"/> */}
    </div>
    </div>
    </div>
    
       
      
  );
}
