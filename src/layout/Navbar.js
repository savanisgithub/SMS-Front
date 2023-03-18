import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark btn3" >
         <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.png"  alt="Logo" width="70" height="60"  /> {' '}General Sir John Kotelawala Defence University
          </Link>


          </div>
     </div>
  );
}
