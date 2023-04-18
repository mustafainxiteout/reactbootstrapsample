import React,{ useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Courses() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [courses, setCourses] = useState([]);

  // check if access token is set in local storage
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsLoggedIn(true);
      getCourses();
    }
  }, []);
  
  const handleLogout = () => {
    // remove access token from local storage
    localStorage.removeItem("access_token");
    setIsLoggedIn(false);
  };

  const getCourses = () => {
    const token = localStorage.getItem("access_token");
    axios.get('http://127.0.0.1:8000/courses',{
      headers: {
          Authorization: `Bearer ${token}`
      }
  })
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="w-full m-5 mt-2 px-6 lg:px-8">
      {isLoggedIn ? (
        <div className='d-flex justify-content-end gap-3 px-8 py-4'>
          <Link to='/dashboard' className='button rounded-4 py-1 px-3 fs-6 fw-semibold text-black border border-success p-1 ml-2 btn shadow'>Dashboard</Link>
        <Link to='/add_courses' className='button rounded-4 py-1 px-3 fs-6 fw-semibold text-black border border-success p-1 ml-2 btn shadow'>Add Course</Link>
        <button onClick={handleLogout} className='rounded-4 py-1 px-3 fs-6 fw-semibold text-white border border-success p-1 ml-2 btn btn-success shadow-lg'>Signout</button>
        </div>
      ) : (
        <div className='d-flex justify-content-end gap-3 px-8 py-4'>
        <Link to='/signup' className='button rounded-4 py-1 px-3 fs-6 fw-semibold text-white border border-success p-1 ml-2 btn btn-success shadow-lg'>Register</Link>
        </div>
        )}
        {isLoggedIn ? (
        <div className="w-full text-sm-start text-lg-center">
          <h2 className="display-6 fw-bold sm:text-4xl">Get All your Courses here</h2>
          <p className="mt-6">
          Upgrade your skills by reading courses - Read up now!
          </p>
        </div>
        ):(
          <div className="w-full text-sm-start text-lg-center">
          <h2 className="display-6 fw-bold sm:text-4xl">Log-in to Get All your Courses</h2>
          <p className="mt-6">
          Upgrade your skills by reading courses - Read up now!
          </p>
        </div>
        )}
      </div>
      {isLoggedIn ? (
      <section className='m-5 w-full'>
      {courses.map(course => (
        <div key={course.courseID} className="mx-auto mt-5 card max-w-2xl rounded-4 mt-sm-20 mx-lg-0 d-flex max-w-none">
          <div className="p-4">
            <h3 className="h5 text-success">{course.title}</h3>
            <p className="mt-6 text-muted">
            {course.term} Batch
            </p>
            <div className="mt-10 d-flex items-center gap-x-4">
              <h4 className="flex-none h6 fw-semibold text-success">Description</h4>
              <div className="h-px flex-auto text-muted" />
            </div>
            <ul
              className="mt-8 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
                <li className="flex gap-x-3">
                {course.description}
                </li>
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Total Credits</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">{course.credits}</span>
                </p>
                <Link to={`/edit/${course.courseID}/`}
                  className="text-black"
                >
                  Edit Course
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
        </section>
        ) : (
          <section className="py-5 mt-5">
          <div className="container">
              <div className="row row-cols-1 d-flex justify-content-center align-items-center">
                  <div className="col-md-10 text-center"><img className="img-fluid w-50" src="./register.svg" alt="404"/></div>
                  <div className="col text-center">
                      <h2 className="display-3 fw-bold mb-4">You're Welcome</h2>
                      <p className="fs-4 text-muted">Find Courses and Certifications from top universities and leading companies like InxiteOut, Google and IBM.</p>
                  </div>
              </div>
          </div>
      </section>
        )}
        </div>
  )
}

export default Courses