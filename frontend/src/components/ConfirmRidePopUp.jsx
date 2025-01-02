import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const ConfirmRidePopUp = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const [otp, setOtp] = useState('')
  return (
    <div className="h-screen">
      <h5
        className="p-3 text-center absolute top-0 w-[93%]"
        onClick={function () {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-900"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 text-center">
        Confirm This Ride To Start
      </h3>
      <div className="flex items-center p-3 justify-between mt-4 bg-yellow-400">
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
          <form
            
            className="w-full"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              className="bg-gray-100 px-4 py-2 text-lg rounded-md w-full mt-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 font-mono"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={function(e){
                setOtp(e.target.value)
              }}
            />
            <Link
              to="/captain-riding"
              className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-md mt-4 transition duration-200 ease-in-out"
            >
              Confirm
            </Link>
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-md mt-3 w-full transition duration-200 ease-in-out"
              onClick={() => {
                props.setConfirmRidePopupPanel(false)
                props.setRidePopupPanel(false)
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
