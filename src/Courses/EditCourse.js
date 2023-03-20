import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditCourse() {

    let navigate = useNavigate();

    const {id}=useParams();

    const [course,setCourses]=useState({
      course_id:"",
      title:"",
      description:""
    });

    const{course_id,title,description}=course;
    const onInputChange=(e)=>{
        setCourses({...course, [e.target.name]: e.target.value});
    };

    useEffect(()=>{
      loadCourses();
    }, []);

    //post data in DB and Display in Homepg
    const onSubmit=async (e)=>{
        e.preventDefault();//to get rid from the weird url when click submit
        await axios.put(`http://localhost:8080/courses/${id}`,course);
        navigate("/course");
    };

    const loadCourses =async ()=> {
      const result=await axios.get(`http://localhost:8080/courses/${id}`);
      setCourses(result.data);
    };

  return (
    <div className="container" >
    <div className="row">
    <h2 className=" text-center m-6 py-3">Edit Courses</h2>
      <div className=" container2 col-md-5 offset-md-6 border rounded p-4 mt-1 shadow " >
        <form onSubmit={(e)=> onSubmit(e)}>
          <div className="mb-2">
            <label htmlFor="course_id" className="form-label">
              Course ID
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter course id"
              name="course_id"
              value={course_id} 
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter the title"
              name="title" 
              value={title}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter description"
              name="description"
              value={description}
              onChange={(e)=>onInputChange(e)}
             />
          </div>
          <button type="submit" className="btn btn-outline-dark">Submit</button>
          <Link to='/' className="btn btn-outline-danger mx-2">Cancel</Link>
        </form>
      </div>
    </div>
  </div>
  );
}
 