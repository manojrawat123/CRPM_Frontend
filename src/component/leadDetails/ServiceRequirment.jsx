import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context';
// import ServiceForm from '../serviceForm/ServiceForm';
import ServiceForm from '../serviceForm/OnCunstruction';
import { useParams } from 'react-router-dom';



const ServiceRequirment = () => {

  const { id } = useParams();
  const [selectedServiceArr, setSelectedServiceArr] = useState();
  const [leadFollowUpServiceId, setLeadFollowUpServiceId] = useState();

  const { service, leadGetById, leadByIdObj, serviceFunc } = useContext(DataContext);

  const filterFunc = () => {
    // leadGetById(id)
    if (leadByIdObj) {
      const filteredServices = service?.filter((element) => leadByIdObj?.LeadServiceInterested?.includes(element.id));
      setSelectedServiceArr(filteredServices);
      console.log(filteredServices);
      console.log(service);
      console.log(leadByIdObj);
      if (filteredServices) {
        setLeadFollowUpServiceId(filteredServices[0]?.id);
      }
    }
  }

  const fetchData = async () => {
    await leadGetById(id);
    serviceFunc();
    const filteredServices = service?.filter((element) => leadByIdObj?.LeadServiceInterested?.includes(element.id));
    setSelectedServiceArr(filteredServices);
  };


  useEffect(() => {
    fetchData();
    filterFunc();
  }, [])

  return (

    <>
      <div>
        <div className='text-center'>
          <h1 className=" text-2xl  font-bold p-2 w-[rem] col-span-3 text-center underline text-green-500 inline-block">Service Requirments.</h1>
          {!service ? <>
            Loading...
          </> : <select
            className="outline-green-500 border-black border-solid border col-span-2"
            // value={leadFollowUpServiceId}
            onChange={(e) => {
              setLeadFollowUpServiceId(e.target.value);
            }}
          >
            {(!selectedServiceArr || selectedServiceArr?.length == 0 ? filterFunc() : null) /* Call filterFunc if selectedServiceArr is undefined */}
            {selectedServiceArr?.map((option, index) => {
              return <option key={index} value={option?.id}>
                {option?.ServiceName} ({option?.serviceMode})
              </option>
            })}
          </select>}
        </div>
        <div className="rounded-xl my-4 py-8 bg-gray-100 shadow-xl">
          <ServiceForm leadFollowUpServiceId={leadFollowUpServiceId} />
        </div>
      </div>
    </>
  )
}

export default ServiceRequirment
