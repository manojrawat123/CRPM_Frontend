import Modal from 'react-modal';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import API_BASE_URL from "../../../config";
import YesModalForm from './YesModalForm';


const YesModal = (props) => {

  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    console.log(props.yesModalOpen);
  }, [props.yesModalOpen]);


  return (
    <>
      <Modal
        isOpen=
        {
          props?.yesModalOpen
        }
        onRequestClose={() =>
          props.setYesModalOpen(false)
        }
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          content: {
            
          },
        }}
      >
        <div className="progress-container ">
          <div className={`progress-bar ${isLoading ? 'animate-progress' : ''}`}></div>
        </div>
        {/* Modal content goes here */}
        <div
          className={`fixed ${props.yesModalOpen ? 'block' : 'hidden'}`}
          style={{ top: '2.53rem', right: '2.53rem' }}
        >
          <button
            className="hover:bg-red-500 text-red-500 hover:text-white p-4 text-4xl font-extrabold"
            onClick={() => props.setYesModalOpen(false)}
          >
            X
          </button>
        </div>

        <div className='mt-10'>
          <h1 className='text-center text-2xl font-bold underline my-4'>Phone Picked --: <span className='font-extrabold'>Yes</span></h1>
          <YesModalForm leadFollowUpServiceId={props?.leadFollowUpServiceId} />
        </div>
      </Modal>
    </>
  )
}

export default YesModal;
