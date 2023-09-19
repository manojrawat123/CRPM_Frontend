import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../context';
import ServiceForm from '../serviceForm/ServiceForm';


const ServiceRequirment = () => {
    
    const { service } = useContext(DataContext)
    useEffect(()=>{
        console.log(service)
    },[])
   
  return (
    <>
    <div>
        <div className='grid grid-cols-5 border border-green-600  rounded'>
        <h1 className=" text-xl  font-bold p-2 text-left w-[rem] col-span-3">Service Requirments
        
        </h1>
        <select
      className="outline-green-500 border-black border-solid border  col-span-2 "
      onChange={()=>{console.log("hello")}}
    >
      <option value="">Select Service</option>
      {service?.map((option, index) => (
        <option key={index} value={option.id}>
          {option.ServiceName} ({option.serviceMode})
        </option>
      ))}
    </select>

    </div>

    <div  className="rounded-xl my-4 py-8 bg-gray-100 shadow-xl">
<ServiceForm/>

    </div>
    </div>


    </>
  )
}

export default ServiceRequirment
