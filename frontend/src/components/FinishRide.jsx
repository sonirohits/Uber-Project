import React from 'react'
import { Link } from 'react-router-dom';
const FinishRide = (props) => {
 
  return (
    <div className="h-screen">
    <h5
      className="p-3 text-center absolute top-0 w-[93%]"
      onClick={function () {
       props.setFinishRidePanel(false);
      }}
    >
      <i className="ri-arrow-down-wide-line text-3xl text-gray-900"></i>
    </h5>
    <h3 className="text-2xl font-semibold mb-5 text-center">
      Finish This Ride 
    </h3>
    <div className="flex items-center p-3 justify-between mt-4 rounded-md border-yellow-400 border-2">
      <div className="flex items-center gap-3 rounded-lg  ">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOb8LMM7G1bQg-Q_oJX0_rDMgYLEM1o_bD-w&s"
          alt=""
        />
        <h2 className="text-lg font-medium">Harshita Patel</h2>
      </div>
      <h5 className="text-xl font-medium">2.2 KM</h5>
    </div>

    <div className="flex flex-col justify-between items-center gap-2">
      <div className="w-full mt-5 ">
        <div className="flex items-center  gap-5 p-3 border-b-2">
          <i className="ri-map-pin-2-fill text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm text-gray-600 -mt-1">
              Kankariya Talab,Bhopal
            </p>
          </div>
        </div>
        <div className="flex items-center  gap-5 p-3 border-b-2">
          <i className="ri-map-pin-2-fill text-lg"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm text-gray-600 -mt-1">
              Kankariya Talab,Bhopal
            </p>
          </div>
        </div>
        <div className="flex items-center  gap-5 p-3 ">
          <i className="ri-currency-line"></i>
          <div>
            <h3 className="text-lg font-medium">193.20</h3>
            <p className="text-sm text-gray-600 -mt-1">Cash</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between w-full px-6 py-4 bg-white shadow-md rounded-lg">
        
          <Link
            to="/captain-home"
            className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md mt-4 transition duration-200 ease-in-out w-full"
          >
            Finish Ride
          </Link>
          
          <p className=' mt-6 text-xs '>Click on finish ride button if you have completed the payment.</p>
      </div>
    </div>
  </div>
  )
}

export default FinishRide