import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UserLogin = () => {
  const [email, setemail] = useState('');
  const[password, setpassword] = useState('');
  const[userData,setUserData]=useState({});
  const {user,setUser}=React.useContext(UserDataContext);
  const navigate=useNavigate();

  const submitHandler = async function(e)
  {
  e.preventDefault();
  const userData={
    email:email,
    password:password
  }
  console.log("userdata is",userData)
  const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
  if(response.status === 200){
    const data = await response.data;
    // console.log("in login response data is",data);
    localStorage.setItem('token',data.token);
    setUser(data.user);
    navigate('/home');
  }
  setemail('');
  setpassword('');
  }

  return (
    <div className='p-7 border-[1px]  h-screen  flex-col flex  justify-between' >
       <div>
       <img  className="w-16 mb-10" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
       
       <form action="" onSubmit={submitHandler}>
         <h3 className='text-lg mb-2 font-medium'>what's your email</h3>
         <input 
         value={email}
         onChange={function(e){
         setemail(e.target.value);
         }}
         type="email"
          required 
          placeholder='emai@example.com'
          className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
          />
         <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
         <input 
         type="password" 
         required  placeholder='password' 
         className='bg-[#eeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
         value={password}
         onChange={function(e){
          setpassword(e.target.value);
         }
        }
         />
         <button className='bg-[#111] mb-3 rounded px-4 py-2 border w-full text-white placeholder:text-base font-semibold'>Login</button>
        
       </form>
       <p className='text-center'>New here?<Link className='text-blue-600 ' to='/signup'>Create new Account</Link></p>
       </div>

       <div>
        <Link to='/captain-login' className= ' bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base flex items-center justify-center'>Sign in as captain</Link>
       
       </div>
    </div>
  )
}

export default UserLogin