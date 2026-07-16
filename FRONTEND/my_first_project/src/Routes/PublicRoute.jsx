import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../Store/getCurrentUserSlice';

export const PublicRoute = ()=>{
 const[isloggedin , setIsLoggedIn] = useState(null);
 let dispatch = useDispatch();
 useEffect(()=>{
  const fetchLogin = async ()=>{
    try {
      let result = await dispatch(getCurrentUser());
      if(result.payload.message == 'User logged in'){
        setIsLoggedIn(true)
      }
      else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
    }
    // try {
    //  let resp = await axios.get('http://localhost:4000/api/auth/user/me',{
    //     withCredentials : true
    //  })
    //  if(resp.data.message == 'User logged in'){
    //     setIsLoggedIn(true);
    //  }
    //  else{
    //   setIsLoggedIn(false);
    //  }
    // } catch (error){
    //    console.log("error : ", error); 
    //    setIsLoggedIn(false);
    // }
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