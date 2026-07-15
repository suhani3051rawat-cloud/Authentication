import React from 'react'
import { Register } from './Register'
import { useState } from 'react';
import axios from 'axios';
import '../style/App.css';
import { Dashboard } from './Dashboard';
import { useNavigate, Link  } from 'react-router-dom';
import { userLogin } from '../Store/userLoginSlice';
import { useDispatch, useSelector } from 'react-redux';
// import {userloginValidation} from '../utils/userloginValidation';
export function LoginRoute() {
  let [loginform, setUserLogin] = useState({
                                  email:"",
                                  password:""
  });
  let[error, setError] = useState({});
  let[showMessage, setShowMessage] = useState([]);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let submitForm = async (e)=>{
    e.preventDefault();
    let result = await dispatch(userLogin(loginform));
    console.log(result.payload)
    console.log(result.type);
  //   try {
  //     let response = await axios.post("http://localhost:4000/api/auth/user/login", userLogin, { 
  //     withCredentials: true 
  //     });  
  //   if(response.data.message == "User not found"){
  //       setShowMessage(response.data.message); 
  //       return;
  //     }
  //   if(response.data.message == "Incorrect password"){
  //       setShowMessage(response.data.message);
  //       return;
  //     }
  //   console.log(response.data.User[0].username);
  //   localStorage.setItem('username',response.data.User[0].username)
  //   navigate('/user/dashboard')
  //   } catch (error) {
  //      console.log("something went wrong",error);
  //   }
  // }
    if(userLogin.rejected.match(result)){
      setShowMessage(result.payload.message);
    }  
  else{
      localStorage.setItem('userName', result.payload.User[0].username);
      navigate('/user/dashboard')
    }
  }
  let handleData = (e)=>{
   setUserLogin({...loginform, [e.target.name]:e.target.value});
  }

  return(
      <div>
        <h3 className='showMessage'>{showMessage}</h3>
        <form className='loginform' onSubmit={submitForm}>
        <h3>LOGIN FORM</h3><br/>
        <img src='/user.svg'/><p></p>
        <div className='remaining'>
        <div className='field'><input type='email' placeholder='Enter Your email' name='email' value={loginform.email} onChange={handleData} required/></div> 
        < div className='field'><input type='password' placeholder='Enter Your Password' name='password' value={loginform.password} onChange={handleData} required/></div>
        <br/>
        </div>
        <button type='submit'>Submit</button>
        <p style={{width : '500px', border : '1px solid white'}}></p>
        <Link to='/'>
        <button className='loginBtn'>User register </button>
        </Link>
        </form> 
    </div>
)
}