import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context';
import ServiceForm from '../serviceForm/OnCunstruction';
import { useParams } from 'react-router-dom';



const ServiceRequirment = () => {

  const { id } = useParams();
  const [leadFollowUpServiceId, setLeadFollowUpServiceId] = useState();

  const { leadGetById, leadByIdObj } = useContext(DataContext);


  useEffect(() => {
    leadGetById(id);
    setLeadFollowUpServiceId(leadByIdObj?.LeadServiceInterested[0]?.id);
  }, [])

  return (

    <>
      <div>
        <div className='text-center'>
          <h1 className=" text-2xl  font-bold p-2 w-[rem] col-span-3 text-center underline text-green-500 inline-block">Service Requirments.</h1>
         <select
            className="outline-green-500 border-black border-solid border col-span-2"
            value={leadFollowUpServiceId}
            onChange={(e) => {
              setLeadFollowUpServiceId(e.target.value);
            }}
          >
            {leadByIdObj?.LeadServiceInterested.map((option, index) => {
              return <option key={index} value={option?.id}>
                {option?.ServiceName} ({option?.serviceMode})
              </option>
            })}
          </select>
        </div>
        <div className="rounded-xl my-4 py-8 bg-gray-100 shadow-xl">
          {!leadFollowUpServiceId ? <ServiceForm leadFollowUpServiceId={leadByIdObj?.LeadServiceInterested[0]?.id} />:  <ServiceForm leadFollowUpServiceId={leadFollowUpServiceId} />}
        </div>
      </div>
    </>
  )
}

export default ServiceRequirment
