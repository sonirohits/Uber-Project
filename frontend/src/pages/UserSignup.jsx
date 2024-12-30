import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import {UserDataContext} from '../context/UserContext';

const UserSignUp = () => {
  const [email, setemail] = useState('');
  const[password, setpassword] = useState('');
  const[firstname,setFirstname]=useState('');
  const[lastname,setLastname]=useState('');
  const[userData,setUserData]=useState({});

  const navigate=useNavigate();
  const {user,setUser}=React.useContext(UserDataContext);

  const submitHandler= async function(e){
   e.preventDefault();
   const newUser={
    fullname:{
      firstname:firstname,
      lastname:lastname
    },
    email:email,
    password:password
 }
 const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser);
 if(response.status ==201){
  const data = response.data;
  // console.log(" in signup response data is",data);
  setUser(data.user);
  localStorage.setItem('token',data.token);
  navigate('/home');
 }
  
  //  console.log(userData);
   setFirstname('');
    setLastname('');
    setemail('');
    setpassword('');
  }
  return (
    <div className='p-7 border-[1px]  h-screen  flex-col flex  justify-between' >
       <div>
       <img  className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
       
       <form action="" onSubmit={submitHandler}>

         <h3 className='text-base mb-2 font-medium'>what's your name</h3>
         <div className='flex gap-4  mb-5'>
         <input 
        type="text"
         required 
         placeholder='Firstname'
         className='bg-[#eeeee]  rounded px-4 py-2 border text-base placeholder:text-sm w-1/2'
         value={firstname}
         onChange={function(e){
          setFirstname(e.target.value);
         }}
         />
         <input 
        type="text"
         required 
         placeholder='Lastname'
         className='bg-[#eeeee]  rounded px-4 py-2 border  text-base placeholder:text-sm w-1/2'
          value={lastname}
          onChange={function(e){
           setLastname(e.target.value);
          }}
         />
         </div>
         <h3 className='text-base mb-2 font-medium'>what's your email</h3>
         <input 
        
         type="email"
          required 
          placeholder='emai@example.com'
          className='bg-[#eeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
          value={email}
          onChange={function(e){
            setemail(e.target.value);
          }}
          />
         <h3 className='text-base mb-2 font-medium'>Enter Password</h3>
         <input 
         type="password" 
         required  placeholder='password' 
         className='bg-[#eeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
         value={password}
          onChange={function(e){
            setpassword(e.target.value);
          }}
       
         />
         <button className='bg-[#111] mb-3 rounded px-4 py-2 border w-full text-white placeholder:text-sm font-semibold'>Create Account</button>
        
       </form>
       <p className='text-center'>Already have an account?<Link className='text-blue-600 ' to='/login'>Login here</Link></p>
       </div>

       <div>
       {/* <p className='text-[10px] leading-tight '>
        By proceeding,you consent to getcalls,whatsApp or SMS messages,including by automated means,from Uber and its affilates to the  number provided.
       </p> */}
        <p className='text-[10px] leading-tight '>
    Thi site is protected by reCAPTCHA and the<span className='underline'> Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
    </p>
       
       </div>
    </div>
  )
}

export default UserSignUp