import React from 'react';
import { useState, useEffect} from 'react'
import { LoginRoute } from './LoginRoute';
import  axios  from 'axios';
import '../style/App.css';
import { UserRegisterValidation } from '../utils/UserRegisterValidation';
import { useNavigate, Link } from 'react-router-dom';
export function Register() {
  let [formData , setFormData] = useState({
                                  name :"",
                                  username :"",
                                  email :"",
                                  password :"",
                                  phone_number :"", 
                                  address :""
  });
  let [error, setError] = useState({});
  let [showMessage, setShowMessage] = useState([]);
  let navigate = useNavigate();
  let fromSubmit = async (e)=>{
    e.preventDefault(); 
    let validtionResult = UserRegisterValidation(formData);
    if(Object.keys(validtionResult).length > 0){
      setError(validtionResult);
      console.log(error);
      return;
    }
     try {  
      let response  = await axios.post("http://localhost:4000/api/auth/user/register",
       formData
      )
      if(!response.data.message){
        if(!response.data.err){
         alert('User register successfully');
          navigate('/user/login');
        }
      }
      else {
        setShowMessage(response.data.message || response.data.err); 
        console.log(showMessage);
      }
     } catch (error){
      console.log("something went wrong",error);
     }
    } 

  let DataChange = (e)=>{
     setFormData({...formData,[e.target.name] : e.target.value});
  }
  return (
    <div>
        <h3 className='showMessage'>{showMessage}</h3>
   < form  className='registerForm' onSubmit={fromSubmit}>
     <h3>USER REGISTRATION</h3><br/>
     <div className='userLogo'><img src='/registerUser.svg'/></div>   
     <div className='nameAndUsername'>
     <div className=''><input type='text' name='name' value={formData.name} placeholder='Enter your name' onChange={DataChange} required/></div>
     <div className=''><input type='text' name='username' placeholder='username' value={formData.username} onChange={DataChange} required   /></div>
     </div>
     <div className='remaining'>
     <div className='field'><img src='/email.svg'/><input type='email' name = 'email' placeholder='Email' value={formData.email} onChange={DataChange}/></div><p>{error.email}</p>
     <div className='field'><img src='/password.svg'/><input type='password' name='password' placeholder='Password' value = {formData.password} onChange={DataChange}/></div><p>{error.password}</p>
     </div>
     <div className='remaining'>
     <div className='field'><img src='/call.svg'/><input type='tel' name='phone_number' placeholder = 'Phone Number'  onChange={DataChange}/></div><p>{error.phone_number}</p>
     <div className='field'><img src='/address.svg'/><input type='text' name='address' placeholder='Address' value={formData.address} onChange={DataChange} /></div><p>{error.address}</p>
     </div>
     <button type='submit'>Submit</button>
     <p style={{width : '500px', border : '1px solid white'}}></p>
    <Link to='/user/login'>
        <button className='loginBtn'>User Login</button>
    </Link>
    </form> 
    </div>
  ) 
}