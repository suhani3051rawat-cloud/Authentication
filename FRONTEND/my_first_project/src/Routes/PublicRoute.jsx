import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = ()=>{
 const[isloggedin , setIsLoggedIn] = useState(null);
 console.log(isloggedin);
 useEffect(()=>{
  const fetchLogin = async ()=>{
    try {
     let resp = await axios.get('http://localhost:4000/api/auth/user/me',{
        withCredentials : true
     })
     console.log(resp.data.message);
     if(resp.data.message == 'User logged in'){
        setIsLoggedIn(true);
     }
     else{
      setIsLoggedIn(false);
     }
    } catch (error) {
       console.log("error : ", error); 
       setIsLoggedIn(false)
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
         <Navigate to = '/user/dashboard' replace />
        </>
        ) : (
        <>
          <Outlet/>  
        </>
        )
    }
    </>
  )
}
export default PublicRoute