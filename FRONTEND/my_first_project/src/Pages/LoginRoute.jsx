import React from 'react'
import { Register } from './Register'
import { useState } from 'react';
import axios from 'axios';
import { replace, useNavigate, Link} from 'react-router-dom';
import '../style/App.css';
import { Dashboard } from './Dashboard';
// import {userloginValidation} from '../utils/userloginValidation';
export function LoginRoute() {
  let [userLogin, setUserLogin] = useState({
                                  email:"",
                                  password:""
  });
  let[error, setError] = useState({});
  let[showMessage, setShowMessage] = useState([]);
  let navigate = useNavigate();

  let submitForm = async (e)=>{
    e.preventDefault();
    try {
      let response = await axios.post("http://localhost:4000/api/auth/user/login", userLogin, { 
      withCredentials: true 
      });  
    if(response.data.message == "User not found"){
        setShowMessage(response.data.message); 
        return;
      }
    if(response.data.message == "Incorrect password"){
        setShowMessage(response.data.message);
        return;
      }
    console.log(response.data.User[0].username);
    localStorage.setItem('username',response.data.User[0].username)
    navigate('/user/dashboard')
    } catch (error) {
       console.log("something went wrong",error);
    }
  }

  let handleData = (e)=>{
   setUserLogin({...userLogin, [e.target.name]:e.target.value});
  }

  return(
      <div>
        <h3 className='showMessage'>{showMessage}</h3>
        <form className='loginform' onSubmit={submitForm}>
        <h3>LOGIN FORM</h3><br/>
        <img src='/user.svg'/><p></p>
        <div className='remaining'>
        <div className='field'><input type='email' placeholder='Enter Your email' name='email' value={userLogin.email} onChange={handleData} required/></div> 
        < div className='field'><input type='password' placeholder='Enter Your Password' name='password' value={userLogin.password} onChange={handleData} required/></div>
        <br/>
        </div>
        <button type='submit'>Submit</button>
        <p style={{width : '500px', border : '1px solid white'}}></p>
        <Link to='/'>
        <button className='loginBtn'>User register </button>
        </Link>
        </form> 
    </div>
)}