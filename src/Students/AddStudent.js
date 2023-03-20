import axios from "axios";
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function AddStudent() {

    let navigate=useNavigate()

    const [student,setStudents]=useState({
        firstName:"",
        lastName:"",
        address:"",
        birthday:"",
        degreeProgram:""
    });

    const{firstName,lastName,address,birthday,degreeProgram}=student;
    const onInputChange=(e)=>{
        setStudents({...student,[e.target.name]:e.target.value});
    };

    //post data in DB and Display in Homepg
    const onSubmit=async (e)=>{
        e.preventDefault();//to get rid from the weird url when click submit
        await axios.post("http://localhost:8080/students",student)
        navigate("/student");
    }

  return (
    <div className="container" >
    <div className="row">
    <h2 className=" text-center m-6">Add Students</h2>
      <div className=" container2 col-md-5 offset-md-6 border rounded p-4 mt-2 shadow " >
        <form onSubmit={(e)=> onSubmit(e)}>
          <div className="mb-2">
            <label htmlFor="fdirstName" className="form-label">
              First Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your first name"
              name="firstName"
              value={firstName} 
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your last name"
              name="lastName" 
              value={lastName}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="birthday" className="form-label">
              Date of Birth
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your dob"
              name="birthday"
              value={birthday}
              onChange={(e)=>onInputChange(e)}
             />
          </div>
          <div className="mb-2">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your address"
              name="address"
              value={address}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="degreeProgram" className="form-label">
              Degree Program
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your degree"
              name="degreeProgram"
              value={degreeProgram}
              onChange={(e)=>onInputChange(e)}
             />
          </div>
          <button type="submit" className="btn btn-outline-dark">Submit</button>
          <Link to='/admin' className="btn btn-outline-danger mx-2">Cancel</Link>
        </form>
      </div>
    </div>
  </div>
  );
}
