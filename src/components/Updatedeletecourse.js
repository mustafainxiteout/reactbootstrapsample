import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Updatedeletecourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    courseID: '',
    title: '',
    description: '',
    credits: '',
    term: ''
  });

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const expirationTime = localStorage.getItem('expiration_time');
    axios.get(`http://127.0.0.1:8000/courses/${id}`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  })
      .then(response => {
        const data = response.data[0];
        setFormData({
          courseID: data.courseID,
          title: data.title,
          description: data.description,
          credits: data.credits,
          term: data.term
        });
      })
      .catch(error => {
        navigate('/');
      });

      if (expirationTime && Date.now() < Number(expirationTime)) {
        // Token is valid
        const timeRemaining = Number(expirationTime) - Date.now();
  
        // Set a timeout to remove the token when it expires
        const timeoutId = setTimeout(() => {
          navigate('/');
        }, timeRemaining);
  
        // Clean up the timeout when the component unmounts or the token changes
        return () => clearTimeout(timeoutId);
      }
  }, [id,navigate]);

  const handleUpdate = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("access_token");
    axios.put(`http://127.0.0.1:8000/courses/${id}`, formData, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  })
      .then(response => {
        navigate('/');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = (event) => {
    event.preventDefault();
    const token = localStorage.getItem("access_token");
    axios.delete(`http://127.0.0.1:8000/courses/${id}`, {
      headers: {
          Authorization: `Bearer ${token}`
      }
  })
      .then(response => {
        navigate('/');
      })
      .catch(error => {
        console.error(error);
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
    <div className="isolate bg-white px-6 py-12 lg:px-8 googlesans">
    <div
      className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      aria-hidden="true"
    >
      <div
        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
    <div className="mx-auto max-w-2xl text-center my-5">
      <h2 className="text-3xl font-bold tracking-wider text-gray-900 sm:text-4xl">Update Course</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600">
      Unlock your potential by updating courses - Update up now!
      </p>
    </div>
    <form onSubmit={handleUpdate} className="card p-4 container mt-8 shadow bg-muted rounded-4">
      <div>
        <div> 
          <label className="my-1 fw-semibold">
            Course ID
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="courseID"
              onChange={handleChange} 
              value={formData.courseID}
              className="small-shadow form-control"
            />
          </div>
        </div>
        <div >
          <label className="my-1 fw-semibold">
            Credits
          </label>
          <div className="mt-2.5">
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
          <div className="mt-2.5">
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
            <div className="mt-2.5">
              <select
                id="term"
                name="term"
                value={formData.term} 
                onChange={handleChange}
                className="small-shadow form-control"
              >
                <option value="Spring">Spring</option>
                <option value="Fall">Fall</option>
                <option value="Summer">Summer</option>
              </select>
            </div>
          </div>
        <div className="sm:col-span-2">
          <label className="my-1 fw-semibold">
            Description
          </label>
          <div className="mt-2.5">
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
      <div className="d-flex gap-3 mt-4">
        <button
          type="submit"
          className="button rounded-4 py-1 px-3 fs-6 fw-semibold text-white border border-success p-1 ml-2 bg-success small-shadow"
        >
          Update Course
        </button>
          <button
          className="button rounded-4 py-1 px-3 fs-6 fw-semibold text-white border border-success p-1 ml-2 bg-danger small-shadow" 
          onClick={handleDelete}>
            Delete Course
            </button>
      </div>
    </form>
  </div>
)
}      

export default Updatedeletecourse;