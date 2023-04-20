import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const navigate=useNavigate();

// Define a function to handle form submission
const handleSubmit = (event) => {
  event.preventDefault();

  // Send a POST request to the login API with Axios
  axios.post('http://127.0.0.1:8000/users/login', {
    email: email,
    password: password
  })
    .then((response) => {
      // Handle the successful response from the API
      // Save the access token to local storage
      localStorage.setItem('access_token', response.data.access_token);
      // Set the access token in local storage
      Object.defineProperty(localStorage, 'access_token', {
        value: response.data.access_token,
        writable: false // make the property non-writable
      });
      // Set the expiration time to 2 minutes from now
      const expirationTime = new Date().getTime() + 2 * 60 * 1000;
      localStorage.setItem('expiration_time', expirationTime);
      navigate('/');
    })
    .catch((error) => {
      // Handle the error response from the API
      setToastMessage(error.response.data.message);
      toast(toastMessage);
    });
};

  return (
    <div className='googlesans'>
      <section className='py-4 py-md-5 my-5'>
        <div className='container py-md-5'>
          <div className='row'>
            <div className='col-md-6 text-center'>
              <img className='img-fluid w-100' src='./login.svg' alt='login' />
            </div>
            <div className='col-md-5 col-xl-4 text-start'>
              <h2 className='display-6 fw-bold mb-4 mx-2 mb-md-5'>
                <span className='underline pb-1'>
                  <strong>Login</strong>
                  <br />
                </span>
              </h2>
              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <input
                    className='shadow form-control'
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <input
                    className='shadow form-control'
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <div className='mb-4 mb-md-5'>
                  <button className='btn btn-primary shadow' type='submit'>
                    Log in
                  </button>
                </div>
                <p className='text-muted'>
                  <Link to='/forgot_password'>Forgot your password?</Link>
                </p>
              </form>
              <Toaster/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginForm