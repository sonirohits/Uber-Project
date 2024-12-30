import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CaptaiDataContext } from '../context/CaptainContext';
import { useContext } from 'react';
import axios from 'axios';
const CaptainProtectWrapper = ({children}) => {

    const token=localStorage.getItem('token');
    const navigate=useNavigate();
    const {captain,setCaptain}=useContext(CaptaiDataContext);
    const [isLoading,setIsloading]=useState(true);

   useEffect(() => {
    if(!token){
      // console.log("token is not present in captain protect wrapper");
      navigate('/captain-login');
  }
   }, [token]);
   axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`,{
    headers:{
      Authorization:`Bearer ${token}`
    }}).then((response)=>{
      if(response.status===200){
        // console.log("respnse is in captain protect wrapper",response);
        const data = response.data;
        setCaptain(data.captain);
        setIsloading(false);
      }
        
        }).catch((error)=>{
            console.log(error);
            localStorage.removeItem('token');
            navigate('/captain-login');
        })
   if(isLoading){
        return 
        <div>
            Loading..
        </div>
   }
   
   
    
  return (
    <>
    {children}
    </>
  )
}

export default CaptainProtectWrapper