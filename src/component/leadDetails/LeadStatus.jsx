import React from 'react'
import LeadDetails from './LeadDetails'
import LeadServices from '../leadServices'
import ServiceRequirment from './ServiceRequirment'
import LeadFollowDisplay from './LeadFollowDisplay/LeadFollowDisplay'

const LeadStatus = () => {
  return (

    <>
    <div className='grid xl:grid-cols-3 md:grid-cols-2 m-8 gap-5'>
      <LeadDetails className="col-span-1"/>
<div className='col-span-1'>
    <LeadServices />
</div>
  <ServiceRequirment />
    </div>
<div className='text-center flex items-center justify-center space-x-5 border-b border-solid border-black '>
<button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Close Lead
    </button>
    
    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        SMS
    </button>
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
