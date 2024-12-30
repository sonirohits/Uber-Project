import React from 'react'

const WaitForDriverPanel = (props) => {
  return (
    <div >
      <h5 className="p-3 text-center absolute top-0 w-[93%]" onClick={
        function()
        {
            props.setConfirmRidePanel(false);
        }
      }>
        <i className="ri-arrow-down-wide-line text-3xl text-gray-900"></i>
      </h5>
     <div className='flex items-center justify-between'>
     <img
          className="h-12  "
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <div>
          <h2 className='text-lg font-medium'>Sarthak</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
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
       
      </div>
    </div>
  )
}

export default WaitForDriverPanel