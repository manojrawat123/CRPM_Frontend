import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context';
// import ServiceForm from '../serviceForm/ServiceForm';
import ServiceForm from '../serviceForm/OnCunstruction';
import { useParams } from 'react-router-dom';



const ServiceRequirment = () => {

  const { id } = useParams();
  const [selectedServiceArr, setSelectedServiceArr] = useState();
    
    const { service,leadGetById, leadByIdObj, serviceFunc } = useContext(DataContext);

    const dummyFunc = ()=>{
      leadGetById(id);
      serviceFunc();
    }
   


    useEffect(() => {
      const fetchData = async () => {
        await dummyFunc();
        console.log(service);
        console.log(leadByIdObj);
      };
    
      fetchData();
    }, []); 
    
      
    

    
  return (
    <>
    <div>
        <h1 className=" text-2xl  font-bold p-2 w-[rem] col-span-3 text-center underline text-green-500 ">Service Requirments.</h1>
        <select
      className="outline-green-500 border-black border-solid border  col-span-2 "
      onChange={()=>{

    }}
    >
      <option value="">Select Service</option>
      {service?.map((option, index) => (
        <option key={index} value={option.id}>
          {option.ServiceName} ({option.serviceMode})
        </option>
      ))}
    </select>
    <div  className="rounded-xl my-4 py-8 bg-gray-100 shadow-xl">
<ServiceForm/>
    </div>
    </div>


    </>
  )
}

export default ServiceRequirment
