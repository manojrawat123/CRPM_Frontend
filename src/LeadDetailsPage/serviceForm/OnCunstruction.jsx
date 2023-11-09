import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { DataContext } from '../../context';
import API_BASE_URL from "../../config";
import YesModal from './YesShowModal/YesModal';
import NoModal from './NoShowModal/NoModal';
import VisitDemoModal from './VisitDemoHappned/VisitDemo';


const ServiceForm = (props) => {

  const [yesModalOpen, setYesModalOpen] = useState(false);
  const [noModalOpen, setNoModalOpen] = useState(false);
  const [yesNoButton, setYesNoButton] = useState(false);
  const [visitDemoButton, setVisitDemoButton] = useState(false);
  const [visitDemoModalOpen, setVisitDemoModalOpen ] = useState(false)

  return (
    <>
      <div className='mx-4 pt-3 rounded'>
        <button onClick={() => {
         if (yesNoButton === true){
          setYesNoButton(false);
         }
         else{
          setYesNoButton(true)
         }
        }} className={`rounded py-2 px-4 w-[49%] mx-[.5%] bg-gray-200 ${yesNoButton? 'bg-gray-400': 'bg-gray-200'}`}>Did You talk to Customer</button>

        {/* Update Status Button */}
        <button className={`my-4  rounded py-2 px-4 w-[49%] mx-[.5%] bg-gray-200`} onClick={() => {
          setYesNoButton(false)
          setVisitDemoModalOpen(true);
        }}>Update Visit & Demo Happened</button>
        {/* Here is the code of did you talk to customer */}
        {/* Buttons of Yes & no */}
        <div className={`${yesNoButton? 'block': 'hidden'}`}>
          <button className={`px-4 py-2 rounded-lg text-white bg-green-500 hover:bg-green-600  w-[4rem] mt-5 mx-8`} onClick={() => { setYesModalOpen(true) }}>Yes</button>
          &nbsp;&nbsp;&nbsp;&nbsp; <button className='px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600 mx-auto w-[4rem] ' onClick={() => {  setNoModalOpen(true) }} >No</button>
        </div>
      </div>
      {/* End of button of yes & no */}

        {/* Yes Modal */}
      <YesModal
        yesModalOpen={yesModalOpen}
        setYesModalOpen={setYesModalOpen}
        leadFollowUpServiceId={props?.leadFollowUpServiceId}
      />

        {/* No Modal */}
      <NoModal
        noModalOpen={noModalOpen}
        setNoModalOpen={setNoModalOpen}
        leadFollowUpServiceId={props?.leadFollowUpServiceId}
      />
 
      <VisitDemoModal 
      visitDemoModalOpen={visitDemoModalOpen}
      setVisitDemoModalOpen={setVisitDemoModalOpen}
      leadFollowUpServiceId={props?.leadFollowUpServiceId}
      />
      {/* Here Is YesShow Code End */}

      {/* Here is end code of did you talk to customer */}

    </>
  )
}

export default ServiceForm
