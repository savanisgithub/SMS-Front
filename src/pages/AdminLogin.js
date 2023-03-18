'./login.css';
import React from 'react'
import { Link } from 'react-router-dom';


export default function AdminLogin() {
  return (
  <div>
    <div className= 'bgimg1 pt-80'></div>
    <div className="login stuff">

        <h1 className="text-center pt-5">Admin Login</h1>
        
        <div className="container1 center">
        <form className="needs-validation">
            <div className="form-group was-validated">
                <label className="form-label" for="username">Username</label>
                <input className="form-control" type="" id="username" required/>
                <div className="invalid-feedback pb-4">
                    Please enter the username
                </div>
            </div>
            <div className="form-group was-validated">
                <label className="form-label" for="password">Password</label>
                <input className="form-control" type="password" id="password" required/>
                <div className="invalid-feedback pb-4">
                    Please enter your password
                </div>
            </div>
            <Link className="btn btn-success w-100" type="submit" to="/admin"> SIGN IN</Link>
        </form>
       </div>
    </div>
    </div>
  )
}
