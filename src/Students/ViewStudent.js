import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewStudent() {
    const[student,setStudents] = useState({
        firstName: "",
        lastName: "",
        address: "",
        birthday: "",
        degreeProgram: "",
        course: ""

    });

    const {id} = useParams();

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const result = await axios.get(`http://localhost:8080/students/${id}`);
        setStudents(result.data);
      };

  return (
    <div className="container" >
        <div className="row">
        <h2 className=" text-center m-6 py-3">Add Students</h2>
            <div className=" container2 col-md-5 offset-md-6 border rounded p-4 mt-1 shadow " >
            
                <div className="card">
                    <div className="card-header">
                        Details of student id: {[]} {student.id}
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>First Name:</b>
                                {student.firstName}
                            </li>
                            <li className="list-group-item">
                                <b>Last Name:</b>
                                {student.lastName}
                            </li>
                            <li className="list-group-item">
                                <b>Address:</b>
                                {student.address}
                            </li>
                            <li className="list-group-item">
                                <b>Date of birth:</b>
                                {student.birthday}
                            </li>
                            <li className="list-group-item">
                                <b>Degree:</b>
                                {student.degreeProgram}
                            </li>
                            <li className="list-group-item">
                                <b>Courses:</b>
                                {student.course}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/student"} >
                    Back 
                </Link>
            </div>
        </div>
    </div>
  );
}
