import React, { useState } from 'react'
import LeadDetails from './LeadDetails'
import LeadServices from '../leadServices'
import ServiceRequirment from './ServiceRequirment'
import LeadFollowDisplay from './LeadFollowDisplay/LeadFollowDisplay'
import { NavLink, Navigate, useParams } from 'react-router-dom'
import LeadUpdateModel from '../../Models/LeadUpdateModel/LeadUpdateModel'

const LeadStatus = () => {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id } = useParams();

  return (
    <>
    <LeadUpdateModel myProps={{
        modalIsOpen: modalIsOpen, 
        setModalIsOpen: setModalIsOpen,
        leadId: id
          //  modalFilterData:modalFilterData,
          // templateId: templateId,
          // myResetForm: myResetForm,
          // templateMessage: templateMessage,
          // templateSubject: templateSubject,
          // modalExcludedList: modalExcludedList
        }}/>
    <div className='grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 m-8 gap-5'>
      <LeadDetails className="col-span-1" setModalIsOpen={setModalIsOpen}/>
<div className='col-span-1'>
    <LeadServices />
</div>
<div className='col-span-3 border-2 rounded border-solid border-black'>
  <ServiceRequirment />
</div>

    </div>
<div className='text-center flex items-center justify-center space-x-5 border-b border-solid border-black '>
  
    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Close Lead
    </button>
 
    
 <NavLink to={`/message`}>
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        SMS
    </button>
 </NavLink>
    <br />
    <br />
    <br />
  </div>    


  {/* Lead FollowUp display */}
  
  <LeadFollowDisplay />
  
    </>
  )
}

export default LeadStatus
