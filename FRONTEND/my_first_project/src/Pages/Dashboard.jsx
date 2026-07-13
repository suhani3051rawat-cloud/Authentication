import {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';

export const Dashboard = ()=>{
    let username = localStorage.getItem("username");
    let logout = async () =>{
    try {
      let response = await axios.post('http://localhost:4000/api/auth/user/logout',{},
      {
        withCredentials : true
      }) 
      localStorage.removeItem("username")
     } 
     catch (error) {
        console.log('error : ', error);     
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
    <button className='dashboardBtn' onClick={logout}> Logout</button>
    </>
  )
}