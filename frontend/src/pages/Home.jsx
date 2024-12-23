import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div className=' bg-center bg-cover bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full  flex justify-between flex-col pt-8 ' >
         <img  className="w-16 ml-8" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
         <div className='bg-white py-4 px-4 pb-7'>
            <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
            <Link className='w-full bg-black text-white py-3 rounded-lg mt-5 flex items-center justify-center' to='/login'>continue</Link>
         </div>
        </div>
    </div>
  )
}

export default Home