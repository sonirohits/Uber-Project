import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import { CaptaiDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const CaptainSignup = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const[password, setpassword] = useState('');
  const[firstname,setFirstname]=useState('');
  const[lastname,setLastname]=useState('');
  const[userData,setUserData]=useState({});

  const[vehicleColor,setVehicleColor]=useState('');
  const[vehiclePlate,setVehiclePlate]=useState('');
  const[vehicleCapacity,setVehicleCapacity]=useState('');
  const[vehicleType,setVehicleType]=useState(''); 

const {captain,setCaptain}=useContext(CaptaiDataContext);

  const submitHandler= async function(e){
   e.preventDefault();
   const captainData ={
    fullname:{
      firstname:firstname,
      lastname:lastname
    },
    email:email,
    password:password,
    vehicle:{
      color:vehicleColor,
      plate:vehiclePlate,
      capacity:vehicleCapacity,
      vehicleType:vehicleType
    }
   }
   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData);
   if(response.status===201){
    const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token',data.token);
      navigate('/captain-home');
   }
   setFirstname('');
    setLastname('');
    setemail('');
    setpassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  }
  return (
    <div className='p-7 border-[1px]  h-screen  flex-col flex  justify-between' >
    <div>
    <img  className="w-20 mb-2" src="data:image/png;base64,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" alt="" />
    
    <form action="" onSubmit={submitHandler}>

      <h3 className='text-base mb-2 font-medium'>what's our Captains's name</h3>
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
      <h3 className='text-base mb-2 font-medium'>what's our Captains's name email</h3>
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
      <h3 className='text-base mb-2 font-medium'>Vehicle Information</h3>
      <div className='flex gap-4 mb-5'>
        <input 
          type="text"
          required 
          placeholder='Vehicle Color'
          className='bg-[#eeeee] rounded px-4 py-2 border text-base placeholder:text-sm w-1/2'
          value={vehicleColor}
          onChange={function(e){
            setVehicleColor(e.target.value);
          }}
        />
        <input 
          type="text"
          required 
          placeholder='Vehicle Plate'
          className='bg-[#eeeee] rounded px-4 py-2 border text-base placeholder:text-sm w-1/2'
          value={vehiclePlate}
          onChange={function(e){
            setVehiclePlate(e.target.value);
          }}
        />
      </div>
      <div className='flex gap-4 mb-5'>
        <input 
          type="number"
          required 
          placeholder='Vehicle Capacity'
          className='bg-[#eeeee] rounded px-4 py-2 border text-base placeholder:text-sm w-1/2'
          value={vehicleCapacity}
          onChange={function(e){
            setVehicleCapacity(e.target.value);
          }}
        />
        <select 
          required 
          className='bg-[#eeeee] rounded px-4 py-2 border text-base placeholder:text-sm w-1/2'
          value={vehicleType}
          onChange={function(e){
            setVehicleType(e.target.value);
          }}
        >
          <option value="" disabled>Select Vehicle Type</option>
          <option value="car">Car</option>
          <option value="auto">Auto</option>
          <option value="motorcycle">Motorcycle</option>
        </select>
      </div>
      <button className='bg-[#111] mb-3 rounded px-4 py-2 border w-full text-white placeholder:text-sm font-semibold'>Create Captain Account</button>
     
    </form>
    <p className='text-center'>Already have an account?<Link className='text-blue-600 ' to='/captain-login'>Login here</Link></p>
    </div>

    <div>
    <p className='text-[10px] leading-tight '>
    Thi site is protected by reCAPTCHA and the<span className='underline'> Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
    </p>
   
    </div>
 </div>
  )
}

export default CaptainSignup