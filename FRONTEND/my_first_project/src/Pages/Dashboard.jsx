import {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';
import {Route, useNavigate} from 'react-router-dom';
import { userLogout } from '../Store/userLogoutSlice';
import { useDispatch } from 'react-redux';

export const Dashboard = ()=>{
    let username = localStorage.getItem("userName");
    let navigate = useNavigate();
    let dispatch = useDispatch(); 
    let logout = async () =>{
    let result = await dispatch(userLogout());
      // let response = await axios.post('http://localhost:4000/api/auth/user/logout',{},
      // {
      //   withCredentials : true
      // }) 
      if(userLogout.fulfilled.match(result)){
         localStorage.removeItem("userName")
         navigate('/user/login', {replace : true});
       } 
      else {
        console.log(result.payload);
      }
  }
  return (
    <>
    <div style={{ 
     height      : "50px",
     width       : "200px",
     display     : "flex", 
     marginLeft  : "auto",
     marginRight : "auto",
    }}><h3>welcome,</h3><h3 style={{marginLeft: '10px'}}>{username || "Guest"}</h3>
    </div>
    <button className='dashboardBtn'onClick={logout}> Logout</button>
    </>
  )
}