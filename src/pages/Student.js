import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Student() {

    const [students,setStudents] = useState([]);

    //const {id}=useParams();

    useEffect(()=> {
        console.log("savani");
        loadStudents();
    },[]);

    const loadStudents=async()=>{
        const result=await axios.get("http://localhost:8080/student");
        setStudents(result.data);
    };

    const deleteStudents=async (id)=>{
        await axios.delete(`http://localhost:8080/students/${id}`);
        loadStudents();
    };

    return (
        <div className="container center">
          <div className="py-4">
          <table className="table table-primary table-striped border shadow">
            <thead>
                <tr>
                    <th scope="col">Student_ID</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">Address</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>

                {students.map((student,index)=>(
                        <tr>
                        <th scope="row" key={index}>{student.id}</th>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.address}</td>
                        <td>{student.birthday}</td>
                        <td>{student.degreeProgram}</td>
                        <td>
                            <Link className="btn btn-primary mx-2" to={`/viewstudent/${student.id}`} >View</Link>
                            <Link  className="btn btn-outline-primary mx-2" to={`/editstudent/${student.id}`}>Edit</Link>
                            <button className="btn btn-danger mx-2" onClick={()=>deleteStudents(student.id)}>Delete</button>
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
