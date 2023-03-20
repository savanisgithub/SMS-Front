import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Course() {

    const [courses,setCourses] = useState([]);

    const {id}=useParams();

    useEffect(()=> {
        console.log("savani");
        loadCourses();
    },[]);

    const loadCourses=async()=>{
        const result=await axios.get("http://localhost:8080/course");
        setCourses(result.data);
    };

    const deleteCourses=async (id)=>{
        await axios.delete(`http://localhost:8080/courses/${id}`);
        loadCourses();
    };

    return (
        <div className="container center">
          <div className="py-4">
          <table className="table table-primary table-striped border shadow">
            <thead>
                <tr>
                    <th scope="col" >#</th>
                    <th scope="col">Course_ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>

                {courses.map((course,index)=>(
                        <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{course.course_id}</td>
                        <td>{course.title}</td>
                        <td>{course.description}</td>
                        <td>
                            <Link  className="btn btn-outline-primary mx-2" to={`/editcourse/${course.id}`}>Edit</Link>
                            <button className="btn btn-danger mx-2" onClick={()=>deleteCourses(course.id)}>Delete</button>
                        </td>
                    </tr>
                    ))
                }
               
            </tbody>
          </table>

          </div>
        
          <Link  className="btn  btn-dark mx-3 my-2" to={'/admin'}>Back</Link>
          
        </div>      
    );
}
