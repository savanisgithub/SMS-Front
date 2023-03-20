import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Student from './pages/Student';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import AddStudent from './Students/AddStudent';
import EditStudent from './Students/EditStudent';
import AdminLogin from './pages/AdminLogin'; 
import ViewStudent from './Students/ViewStudent';
import Admin from './pages/Admin';
import Course from './pages/Course';
import AddCourse from './Courses/AddCourse';
import EditCourse from './Courses/EditCourse';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/> 

      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<AdminLogin/>}/>
        <Route exact path="/admin" element={<Admin/>}/>
        <Route exact path="/student" element={<Student/>}/>
        <Route exact path="/course" element={<Course/>}/>
        <Route exact path="/addstudent" element={<AddStudent/>}/>
        <Route exact path="/addcourse" element={<AddCourse/>}/>
        <Route exact path="/editcourse/:id" element={<EditCourse/>}/>
        <Route exact path="/editstudent/:id" element={<EditStudent/>}/>
        <Route exact path="/viewstudent/:id" element={<ViewStudent/>}/>
      </Routes>
      </Router>
    </div>
  );

}

export default App;
