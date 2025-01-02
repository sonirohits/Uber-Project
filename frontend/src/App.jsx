import React, { useContext } from 'react'
import {Route,Routes} from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import Captainlogin from './pages/Captainlogin';
import CaptainSignup from './pages/CaptainSignup';
import { UserDataContext } from './context/UserContext';
import Home from './pages/Home.jsx';
import Start from './pages/Start.jsx';
import UserSignUp from './pages/UserSignup.jsx';
import UserProtectWrapper  from './pages/UserProtectWrapper.jsx';  
import UserLogout from './pages/UserLogout.jsx';
import CaptainHome from './pages/CaptainHome.jsx';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper.jsx';
import CaptainLogout from './pages/CaptainLogout.jsx';
import Riding from './pages/Riding.jsx';
import CaptainRiding from './pages/CaptainRiding.jsx';
const App = () => {
 
 
  return (
    <div>
     <Routes>
       <Route path='/' element={<Start/>}/>
       <Route path='/login' element={<UserLogin/>}/>
       <Route path='signup' element={<UserSignUp/>}/>
       <Route path='/captain-login' element={<Captainlogin/>}/>
       <Route path='/captain-signup' element={<CaptainSignup/>}/>
       <Route path='/home' element={
        <UserProtectWrapper>
          <Home/>
        </UserProtectWrapper>
      }/>
      <Route path='/users/logout' element={
        <UserProtectWrapper>
          <UserLogout/>
        </UserProtectWrapper>
      }/>
      <Route path='/captain-home' element={ 
        <CaptainProtectWrapper>
           <CaptainHome/>
        </CaptainProtectWrapper>
      }/>
      <Route path='/captains/logout' element={
        <CaptainProtectWrapper>
          <CaptainLogout/>
        </CaptainProtectWrapper>
      }/>
      <Route path='/riding' element={<Riding/>}/>
      <Route path='/captain-riding'element={<CaptainRiding/>}/>
     </Routes>
    </div>
  )
}

export default App