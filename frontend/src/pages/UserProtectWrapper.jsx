import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState ,useContext } from 'react';
import { UserDataContext } from '../context/UserContext';


const UserProtectWrapper = ({children}) => {
    const{user,setUser}=useContext(UserDataContext);
    const [isLoading,setIsloading]=useState(true); 
    const token=localStorage.getItem('token');
    const navigate=useNavigate();
   useEffect(() => {
    if(!token){
      navigate('/login');
  }
   }, [token]);
    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    }).then((response)=>{
        if(response.status=== 200){
            const data=response.data;
            setUser(data.user);
            setIsloading(false); 
        }
        
    }).catch((error)=>{
        console.log(error);
        localStorage.removeItem('token');
        navigate('/login');
    })
   
    if(isLoading){
        return (
            <div>
                Loading...
            </div>
        )
    }
    
  return (
    <>
    {children}
    </>
  )
}

export default UserProtectWrapper