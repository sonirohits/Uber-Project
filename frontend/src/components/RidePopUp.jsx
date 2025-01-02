import React from "react";

const RidePopUp = (props) => {
  return (
    <div >
      <h5
        className="p-3 text-center absolute top-0 w-[93%]"
        onClick={function () {
         props.setRidePopupPanel(false);
        }}
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-900"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5 text-center">
        New Ride Available
      </h3>
      <div className="flex items-center p-3 justify-between mt-4 bg-yellow-400">
        <div className="flex items-center gap-3 rounded-lg  ">
            <img  className='h-10 w-10 rounded-full object-cover'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOb8LMM7G1bQg-Q_oJX0_rDMgYLEM1o_bD-w&s" alt="" />
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
       <div className="flex  items-center justify-between w-full">
       <div className="flex items-center  justify-between w-full " > 
       <button
          className=" bg-green-600 font-semibold rounded-lg  mt-1 cursor-pointer text-white p-3 px-10"
          onClick={function () {
            props.setConfirmRidePopupPanel(true);
            
          }}
        >
          Accept
        </button>
        <button
          className=" bg-gray-300 font-semibold p-3 rounded-lg  mt-1 cursor-pointer text-gray-700 px-10"
          onClick={function () {
           props.setRidePopupPanel(false);
          }}
        >
          Ignore
        </button>
       </div>
       </div>
      </div>
    </div>
  );
};

export default RidePopUp;
