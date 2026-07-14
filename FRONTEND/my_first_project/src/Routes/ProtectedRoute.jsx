import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () =>{
 const[isloggedin , setIsLoggedIn] = useState(null);
 useEffect(()=>{
  const fetchLogin = async ()=>{
    try {
     let resp = await axios.get('http://localhost:4000/api/auth/user/me',{
        withCredentials : true
     })
     console.log(resp.data.message);
     if(resp.data.message == 'Token not found'){
        setIsLoggedIn(false);
     }
     if(resp.data.message == 'User logged in'){
        setIsLoggedIn(true);
     }
    } catch (error) {
      setIsLoggedIn(false)
       console.log("error : ", error); 
    }
  }
  fetchLogin();
 },[])
   if(isloggedin == null) {
   return <h2>Loading...</h2>;
  }

  return (
    <>
    {
        isloggedin ? (
        <>
          <Outlet/>    
        </>
        ) : (
        <>
         <Navigate to='/user/login' replace /> 
        </>
        )
    }
    </>
  )
}
export default ProtectedRoute