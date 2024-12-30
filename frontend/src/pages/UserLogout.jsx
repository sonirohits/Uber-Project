import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const UserLogout = () => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
        headers:{
            Authorization: `Bearer ${token}`
        }
    }).then(function(res){
       if(res.status === 200){
           localStorage.removeItem('token');
           navigate('/login');
       }
    }).catch(function(err){

    })
  return (
    <div>userLogout</div>
  )
}

export default UserLogout