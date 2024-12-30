import React from 'react'

const LocationSearchPanel = (props) => {
    // sample array for locatuin
    const locations =[
        "24B,Near Kapoor's cafe,Sheriyan Coding School,Bhopa",
        "22c,Near Malholtra's cafe,Sheriyan Coding School,Bhopa",
        "20B,Near Singhai's cafe,Sheriyan Coding School,Bhopa",
        "18A,Near Soni's cafe,Sheriyan Coding School,Bhopa"
    ]
  return (
    <div>
        {/* this is  just a sample data */}
        {
            locations.map(function(location,index){
                return <div key={index} 
                  onClick={function(){
                  props.setvehiclePanelOpen(true);
                  props.setPanelOpen(false);
                }}
                 className=' border-2 p-3 rounded-xl border-gray-50 active:border-black flex items-center justify-start gap-4 my-2'>
                <h2 className=' bg-[#eee]  rounded-full w-12 h-8 flex
                items-center justify-center'><i className="ri-map-pin-fill "></i></h2>
                <h4 className='font-medium'>{location}</h4>
              </div>
            })
        }
    </div>
  )
}

export default LocationSearchPanel