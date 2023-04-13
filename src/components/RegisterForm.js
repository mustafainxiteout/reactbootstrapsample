import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
      const [confirmPassword, setConfirmPassword] = useState('');
      const [toastMessage, setToastMessage] = useState('');
      
      const navigate=useNavigate();
    
      const handleInputChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      }
    
      const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
      }
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (formData.password !== confirmPassword) {
          setToastMessage('Passwords do not match!');
          toast(toastMessage);
          return;
        }
        
        try {
          await axios.post('http://127.0.0.1:8000/users', formData);
          setToastMessage('Signup successful. Please Verify in email to continue.');
          toast(toastMessage);
          setFormData({
            name: '',
            email: '',
            password: ''
          });
          setConfirmPassword('');
          navigate('/signin')
        } catch (error) {
          setToastMessage(error.response.data.message);
          toast(toastMessage);
        }
      }

  return (
    <div className='googlesans'>
        <section className="py-4 py-md-5 my-5">
        <div className="container py-md-5">
            <div className="row">
                <div className="col-md-6 text-center"><img className="img-fluid w-100" src="./register.svg" alt="404"/></div>
                <div className="col-md-5 col-xl-4 text-center text-md-start">
                    <h2 className="display-6 fw-bold mb-4"><span className="underline pb-1"><strong>Sign up</strong></span></h2>
                    <form onSubmit={handleSubmit} method="post">
                        <div className="mb-3"><input className="shadow-sm form-control" type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Name"/></div>
                        <div className="mb-3"><input className="shadow-sm form-control" type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Email"/></div>
                        <div className="mb-3"><input className="shadow-sm form-control" type="password" name="password" value={formData.password} onChange={handleInputChange} required  placeholder="Password"/></div>
                        <div className="mb-3"><input className="shadow-sm form-control" type="password" name="password_repeat" value={confirmPassword} onChange={handleConfirmPasswordChange} required placeholder="Repeat Password"/></div>
                        <div className="mb-5"><button className="btn btn-primary shadow" type="submit">Create account</button></div>
                        <p className="text-muted">Have an account? <Link to='/signin'>Log in&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <line x1="15" y1="16" x2="19" y2="12"></line>
                                    <line x1="15" y1="8" x2="19" y2="12"></line>
                                </svg></Link>&nbsp;</p>
                    </form>
                    <Toaster />
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default RegisterForm