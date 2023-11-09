import Modal from 'react-modal';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import API_BASE_URL from "../../../config";
import VisitDemoForm from './VisitDemoForm';


const VisitDemoModal = (props) => {  
  return (
    <>
     <Modal
        isOpen=
        {            
            props?.visitDemoModalOpen
        } 
        onRequestClose={() => 
            props.setVisitDemoModalOpen(false)
        }
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          content: {
            
          },
        }}
      >
        {/* Modal content goes here */}
        <div
  className={`fixed`}
  style={{ top: '2.53rem', right: '2.53rem' }}
>
  <button
    className="hover:bg-red-500 text-red-500 hover:text-white p-4 text-4xl font-extrabold"
    onClick={() => props.setVisitDemoModalOpen(false)}> X </button>
</div>

 <div className='mt-10'>
        <h1 className='text-center text-2xl font-bold underline my-4'><span className='font-extrabold'>Update Visit</span> & <span className='font-extrabold'>Demo Happned</span></h1>     
 </div>
 <VisitDemoForm leadFollowUpServiceId={props?.leadFollowUpServiceId} />
        </Modal>
    </>
  )
}

export default VisitDemoModal;
