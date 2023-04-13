import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Courseform() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const [termvalue, setTermvalue] = useState('Spring');
    const [formData, setFormData] = useState({
        courseID: '',
        title: '',
        description: '',
        credits: '',
        term: termvalue
    });

    const navigate=useNavigate();

    // check if access token is set in local storage
    useEffect(() => {
      if (localStorage.getItem("access_token")) {
      setIsLoggedIn(true);
      }
    }, []);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newFormData = { ...formData, term: termvalue };
        axios.post('http://127.0.0.1:8000/courses', newFormData)
          .then(response => {
            navigate('/');
            // do something with the response
          })
          .catch(error => {
            console.error(error);
            // handle the error
          });
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

  return (
    <div className="googlesans isolate bg-white px-6 py-12 lg:px-8">
      <div>
      {isLoggedIn ? (
      <div className="mx-auto max-w-2xl text-center">
        <div className='flex justify-end px-8 py-8'>
        <Link to='/' className='rounded-lg text-xs font-bold cursor-none lg:cursor-pointer text-gray-400 border border-gray-400 p-1 ml-2'>Go to Courses</Link>
        </div>
        <h2 className="text-3xl font-bold tracking-wider text-gray-900 sm:text-4xl">Create Course</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Unlock your potential by adding courses - Create up now!
        </p>
      </div>
      ):(
        <p className="mt-5 text-center">
        Sorry!
        </p>
      )}
      </div>
      {isLoggedIn ? (
      <form onSubmit={handleSubmit} className="card p-1 container mt-8 shadow bg-muted rounded-4">
        <div className="m-5">
          <div>
            <label className="my-1 fw-semibold">
              Course ID
            </label>
            <div className="mt-2 mb-3">
              <input
                type="text"
                name="courseID"
                onChange={handleChange} 
                value={formData.courseID}
                className="small-shadow form-control"
              />
            </div>
          </div>
          <div>
            <label className="my-1 fw-semibold">
              Credits
            </label>
            <div className="mt-2 mb-3">
              <input
                type="number"
                name="credits"
                onChange={handleChange} 
                value={formData.credits}
                className="small-shadow form-control"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="my-1 fw-semibold">
              Course Title
            </label>
            <div className="mt-2 mb-3">
              <input
                type="text"
                name="title"
                onChange={handleChange} 
                value={formData.title}
                className="small-shadow form-control"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="term" className="my-1 fw-semibold">
                Term
              </label>
              <div className="mt-2 mb-3">
                <select
                  id="term"
                  name="term"
                  value={termvalue}
                  onChange={(event)=>setTermvalue(event.target.value)}
                  className="small-shadow form-control"
                >
                  <option value="Spring">Spring</option>
                  <option value="Fall">Fall</option>
                  <option value="Summer">Summer</option>
                </select>
              </div>
            </div>
          <div className="sm:col-span-2">
            <label className="my-2 fw-semibold">
              Description
            </label>
            <div className="mt-2">
              <textarea
                name="description"
                onChange={handleChange} 
                value={formData.description}
                rows={4}
                className="small-shadow form-control"
              />
            </div>
          </div>
        </div>
        <div className="m-5 mt-0">
          <button
            type="submit"
            className="btn btn-success small-shadow"
          >
            Submit Course
          </button>
        </div>
      </form>
      ):(
        <section className="py-5 mt-5">
          <div className="container">
              <div className="row row-cols-1 d-flex justify-content-center align-items-center">
                  <div className="col-md-10 text-center"><img className="img-fluid w-50" src="./register.svg" alt="404"/></div>
                  <div className="col text-center">
                      <h2 className="display-3 fw-bold mb-4">Access Denied!</h2>
                      <Link to='/signin' className="fs-4 text-muted">Login to continue</Link>
                  </div>
              </div>
          </div>
      </section>
      )}
    </div>
  )
}

export default Courseform;