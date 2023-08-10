import React from 'react'
import LeadDetails from './LeadDetails'
import LeadServices from '../leadServices'

const LeadStatus = () => {
  return (

    <>
    <div className='grid xl:grid-cols-3 md:grid-cols-2 m-8 gap-10'>
      <LeadDetails className="col-span-1"/>
<div className='col-span-1'>
    <LeadServices />
</div>
    </div>
    </>
  )
}

export default LeadStatus
