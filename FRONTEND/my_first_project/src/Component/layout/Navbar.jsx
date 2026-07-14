import {useState} from 'react';
import {Register} from '../../Pages/Register';
import {LoginRoute} from '../../Pages/LoginRoute';
import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import {Dashboard} from '../../Pages/Dashboard';
import testImage from '../../assets/csir.png';
import '../../style/App.css'
import {PublicRoute} from '../../Routes/PublicRoute'
import {ProtectedRoute} from '../../Routes/ProtectedRoute';
function Navbar() {
  return ( 
   <>
   <BrowserRouter>
    <nav>
      <Link to='/'></Link>
      <Link to='/user/login'></Link> 
      <Link to='/user/dashboard'></Link>
    </nav>
    <Routes>
      <Route element={<PublicRoute/>}>
           <Route path="/" element={<Register/>} />
           <Route path="/user/login" element={<LoginRoute/>}/>
      </Route>
      <Route element ={<ProtectedRoute/>}>
          <Route path="/user/dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default Navbar