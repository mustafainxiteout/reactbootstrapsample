import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import Forgotpassword from './components/Forgotpassword';
import Updatedeletecourse from './components/Updatedeletecourse';
import Courseform from './components/Courseform';
import PrivateRoute from './PrivateRoute';
import AdminDash from './components/AdminDash';
import StaffDash from './components/StaffDash';
import AddStaff from './components/AddStaff';
import UserDetails from './components/UserDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
const isAdmin = false;
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route exact path="/" element={<PrivateRoute/>}><Route exact path="/add_courses" element={<Courseform/>}/></Route>
      <Route exact path="/" element={<PrivateRoute/>}><Route exact path="/edit/:id/"  element={<Updatedeletecourse/>}/></Route>
      <Route exact path="/" element={<PrivateRoute/>}><Route exact path="/dashboard" element={isAdmin ? <AdminDash /> : <StaffDash />} isAdmin={isAdmin}/></Route>
      <Route exact path="/" element={<PrivateRoute/>}><Route exact path="/add_staff" element={isAdmin ? <AddStaff/> : <Navigate to="/" />} isAdmin={isAdmin}/></Route>
      <Route exact path="/" element={<PrivateRoute/>}><Route exact path="/user_details" element={isAdmin ? <UserDetails/> : <UserDetails/>} isAdmin={isAdmin}/></Route>
      <Route exact path="/signup" element={<RegisterForm/>}></Route>
      <Route exact path="/signin" element={<LoginForm/>}></Route>
      <Route exact path="/forgot_password" element={<Forgotpassword/>}></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
