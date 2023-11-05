import Modal from 'react-modal';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import API_BASE_URL from "../../../config";
import NoModalForm from './NoModalForm';
// import YesModalForm from './YesModalForm';


const NoModal = (props) => {  
  return (
    <>
     <Modal
        isOpen=
        {            
            props?.noModalOpen
        } 
        onRequestClose={() => 
            props.setNoModalOpen(false)
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
    onClick={() => props.setNoModalOpen(false)}
  >
    X
  </button>
</div>

 <div className='mt-10'>
        <h1 className='text-center text-2xl font-bold underline my-4'>Phone Picked --: <span className='font-extrabold'>No</span></h1>
        <NoModalForm leadFollowUpServiceId={props?.leadFollowUpServiceId}/>
 </div>
        </Modal>
    </>
  )
}

export default NoModal;
