import { useState,useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainNav from "./main/MainNav";
import AdminNav from "./admin/AdminNav";
import JobHunterNav from "./jobhunter/JobHunterNav";
import JobHeadNav from './jobhead/JobHeadNav';




export default function App() {
  const [isAdminLoggedIn,setIsAdminLoggedIn]=useState(false);
  const [isJobHunterLoggedIn,setIsJobHunterLoggedIn]=useState(false);
  const [isJobHeadLoggedIn,setIsJobHeadLoggedIn]=useState(false);


  useEffect(()=> {
    const adminLoggedIn=localStorage.getItem('isAdminLoggedIn')==='true';
    const jobHunterLoggedIn=localStorage.getItem('isJobHunterLoggedIn')==='true';
    const jobHeadLoggedIn=localStorage.getItem('isJobHeadLoggedIn')==='true';

    setIsAdminLoggedIn(adminLoggedIn);
    setIsJobHunterLoggedIn(jobHunterLoggedIn);
    setIsJobHeadLoggedIn(jobHeadLoggedIn);
  },[]);


  const onAdminLogin=()=> {
    localStorage.setItem('isAdminLoggedIn','true');
    setIsAdminLoggedIn(true);
  };

  const onJobHunterLogin=()=> {
    localStorage.setItem('isJobHunterLoggedIn','true');
    setIsJobHunterLoggedIn(true);
  }

  const onJobHeadLogin=()=> {
    localStorage.setItem('isJobHeadLoggedIn','true')
    setIsJobHeadLoggedIn(true);
  }


  return (
    <div className="App">
     <Router>
      {
        isAdminLoggedIn ? (
          <AdminNav />
        ): isJobHunterLoggedIn ? (
          <JobHunterNav/>
        ):isJobHeadLoggedIn ?(
          <JobHeadNav/>
        ):(           
          <MainNav   onJobHunterLogin={onJobHunterLogin} onJobHeadLogin={onJobHeadLogin} onAdminLogin={onAdminLogin}  />
        )}
      
     </Router>
   
    </div>
  );
}


