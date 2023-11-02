import Modal from 'react-modal';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import API_BASE_URL from "../../config";


const NoModal = (props) => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [myEmailContainer , setMyEmailContainer] = useState();
  const [excludedEmailContainerList, setExcludexEmailContainer] = useState();
  const token = localStorage.getItem('token');
  

  useEffect(() => {
    console.log(props.myProps.modalFilterData);
  }, [props.myProps.modalFilterData]);

  
  return (
    <>
     <Modal
        isOpen={
            props?.myProps.modalIsOpen
        } 
        onRequestClose={() => 
            props.myProps.setModalIsOpen(false)
        }
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          content: {
            // top: '50%',
            // left: '50%',
            // right: 'auto',
            // bottom: 'auto',
            // marginRight: '-50%',
            // transform: 'translate(-50%, -50%)',
            

          },
        }}
      >
        <div className="progress-container ">
    <div className={`progress-bar ${isLoading ? 'animate-progress' : ''}`}></div>
  </div>
        {/* Modal content goes here */}
        <div
  className={`fixed ${props.myProps.modalIsOpen ? 'block' : 'hidden'}`}
  style={{ top: '2.53rem', right: '2.53rem' }}
>
  <button
    className="hover:bg-red-500 text-red-500 hover:text-white p-4 text-4xl font-extrabold"
    onClick={() => props.myProps.setModalIsOpen(false)}
  >
    X
  </button>
</div>

 <div>Content Of NO show Modal</div>

      
        </Modal>
    </>
  )
}

export default NoModal;
