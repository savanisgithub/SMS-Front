import { Link } from "react-router-dom";

export default function() {
    return (
      <div className="container" >
      <div className="row">
      <h2 className=" text-center m-6 py-5">Admin Dashboard</h2>
        <div className=" container2  col-md-7 offset-md-6 border rounded p-4 mt-2 shadow " >
        <div class="container text-center">
          <div class="row row-cols-4">
          <div class="col">
          <img src="/images/add.png" alt="" width="100" height="100"  />
          </div>
          <div class="col">
          <img src="/images/addCourse.png" alt="" width="100" height="100"  />
          </div>
          <div class="col">
          <img src="/images/updateCourse.png" alt="" width="100" height="100"  />
          </div>
          <div class="col">
          <img src="/images/stu.png" alt="" width="150" height="150"  />
          </div>
          <div class="col">
          <Link className="btn btn-success w-60" type="submit" to="/addstudent"> Add Student</Link>
          </div>
          <div class="col">
          <Link className="btn btn-success w-60" type="submit" to="/addcourse"> Add Courses</Link>
          </div>
          <div class="col">
          <Link className="btn btn-success w-60" type="submit" to="/course"> Update Courses</Link>
          </div>
          <div class="col">
          <Link className="btn btn-success w-80" type="submit" to="/student"> View/Edit/Delete Student</Link>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    );
  }