import React from 'react';
import { Link} from 'react-router-dom';

export default function Home() {
  return (

<div>
    <div className="bgimg pt-80"></div>
    
    <div className="text mt-5 ">
         <h1>Student Management System</h1>
         <h3>Department of Software Engineering</h3>
         <br></br>
         <br></br>
         <Link to="/login" className="btn btn-primary" >Login </Link>
    </div> 
        
 </div>
  )
}
