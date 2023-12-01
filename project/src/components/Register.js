import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CourseTARegistration = () => {
  const navigate = useNavigate();

  const [facultyCourses, setFacultyCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState(0);
  const [studentId, setStudentId] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch the list of courses associated with the logged-in faculty member
    const fetchFacultyCourses = async () => {
      try {
        // Replace 'http://localhost:8080/get_faculty_courses' with your backend endpoint
        const response = await axios.get('http://localhost:8080/get_all_courses/'+String(sessionStorage.id));
        setFacultyCourses(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching faculty courses:', error);
      }
    };

    // Fetch faculty courses when the component mounts
    fetchFacultyCourses();
    const isAuthenticated = sessionStorage.getItem('IsAuthenticated');
    if (! isAuthenticated) {
      sessionStorage.clear();
      navigate('/login');
    } 
  }, []);

  const handleInputChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleCourseChange = (e) => {
    let course_id;
    facultyCourses.map(course=>{
        if(course.course_name === e.target.value){
            course_id = course.course_id;
            return;
        }
    })
    setSelectedCourse(e.target.value);
    setSelectedCourseId(course_id)
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      // Ensure the endpoint matches your backend API
      await axios.post('http://localhost:8080/post_course_ta', {
        "student": {
            "student_id": studentId
        },
        "course": {
            "course_id": selectedCourseId
        }
      });
      alert("successfully submitted");
      // Handle success, e.g., show a success message or redirect
      navigate('/Register'); // Redirect to faculty dashboard after successful registration
    } catch (error) {
      // Handle error, e.g., display an error message to the user
      console.error('TA Registration error:', error);
      setError('Error registering TA. Please try again.');
    }
  };
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear session storage and redirect to the login page
    const isAuthenticated = sessionStorage.getItem('IsAuthenticated');
    if (true) {
      sessionStorage.clear();
      navigate('/login');
    } 
  };
  

  return (
    <div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <h2>Course TA Registration</h2>
      <form onSubmit={handleRegistration}>
        <div>
          <label>Select Course:</label>
          <select value={selectedCourse} onChange={handleCourseChange}>
            <option value="">Select a Course</option>
            {facultyCourses.map((course) => (
              <option key={course.course_id} value={course.course_name}>
                {course.course_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Student ID:</label>
          <input type="text" value={studentId} onChange={handleInputChange} />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Register TA</button>
      </form>
    </div>
  );
};

export default CourseTARegistration;
