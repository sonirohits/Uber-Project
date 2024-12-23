import React, { useContext } from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import UserLogin from './pages/UserLogin';
import Captainlogin from './pages/Captainlogin';
import UserSignUp from './pages/UserSignUp';
import CaptainSignup from './pages/CaptainSignup';
import { UserDataContext } from './context/UserContext';
const App = () => {
 
 
  return (
    <div>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<UserLogin/>}/>
       <Route path='signup' element={<UserSignUp/>}/>
       <Route path='/captain-login' element={<Captainlogin/>}/>
       <Route path='/captain-signup' element={<CaptainSignup/>}/>
     </Routes>
    </div>
  )
}

export default App