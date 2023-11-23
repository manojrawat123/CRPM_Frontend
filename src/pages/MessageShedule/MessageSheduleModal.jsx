import Modal from 'react-modal';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import API_BASE_URL from "../../config";
import MessageExcludedSupport from './MessageExcludedSupport';
import MessageSheduleSupport from './MessageSheduleSupport';


const MessageSheduleModal = (props) => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [myEmailContainer , setMyEmailContainer] = useState();
  const [excludedEmailContainerList, setExcludexEmailContainer] = useState();
  const token = localStorage.getItem('token');
  

  useEffect(() => {
    setMyEmailContainer(props.myProps.modalFilterData);
    setExcludexEmailContainer(props.myProps.modalExcludedList);
    console.log(myEmailContainer);
    console.log(props.myProps.modalFilterData);
  }, [props.myProps.modalFilterData]);

  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleSendEmailConfirmation = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmSendEmail = () => {
    // Logic of sending Email
    setIsLoading(true); // Start loading animation
    const phone_lis = myEmailContainer?.map((element, index) => {
      return element.LeadPhone
    });

    const customer_id = myEmailContainer?.map((element, index)=>{
      return element.id
    })
    console.log("customer_id",customer_id)

axios.post(`${API_BASE_URL}/messageshedule/`, {
              template_id: props.myProps.templateId,
              phone: phone_lis,
              body: props.myProps.templateMessage,
              CompanyID: customer_id
            }, {
              headers: {
                "Authorization": `Bearer ${token}`
              }
            }).then((value) => {
              console.log(value.data);
            //   axios.post("http://localhost:8000/savemessage/",{
            //     template_id: props.myProps.templateId,
            //     CompanyID: customer_id
            //   }, {
            //     headers: {
            //       "Authorization": `Bearer ${token}`
            //     }
            //   }).then((values2)=>{
            //     console.log(values2.data)
            //     props.myProps.myResetForm();
            //     props.myProps.setModalIsOpen(false);    
            //     alert("Email Send Successfully!!");
            //   }).catch((err)=>{
            //     console.log(err)
            //   })
            }).catch((err) => {
              alert("Some Error Occured");
              console.log(err);
            }).finally(() => {
              setIsLoading(false); // Stop loading animation when the request is complete
            });
            setShowConfirmModal(false);
  };

  const handleCancelSendEmail = () => {
    // If the user cancels, simply close the confirm modal
    setShowConfirmModal(false);
  };
  
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

 <div className="flex justify-center mt-10 ">
      <div className="w-full lg:w-3/4">
        
      <h1 className='text-center font-bold underline my-4'>Message Recipients</h1>
      <table className="min-w-full">
          <thead className="bg-purple-500 text-white hidden md:table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Phone Number</th>
              <th className="px-4 py-2 border">Course</th>
              <th className="px-4 py-2 border">Scource</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Remove</th>
            </tr>
          </thead>
          <thead className="bg-purple-500 text-white md:hidden table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Message Lead Details</th>
            </tr>
          </thead>
            {/* Replace the following data with your actual data */}
            {myEmailContainer?.map((element, index)=>{
              return <MessageSheduleSupport element={element} myEmailContainer={myEmailContainer} setMyEmailContainer={setMyEmailContainer} index={index}/>
            })}
        </table>
      </div>
      
    </div>
{/* Excluded List */}

<div className="flex justify-center mt-10 ">
      <div className="w-full lg:w-3/4">
        
<div className='mt-4'>
  <h1 className='text-center underline text-red-500'>Excluded list</h1>
</div>
<table className="min-w-full">
          <thead className="bg-purple-500 text-white hidden md:table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Course</th>
              <th className="px-4 py-2 border">Scource</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>

          <thead className="bg-purple-500 text-white md:hidden table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Exclued Lead Details</th>
            </tr>
          </thead>
            {/* Replace the following data with your actual data */}
            {excludedEmailContainerList?.map((element, index)=>{
              return <MessageExcludedSupport element={element} index={index} excludedEmailContainerList={excludedEmailContainerList} setMyEmailContainer={setMyEmailContainer}/>
            })}
        </table>
        </div>
        </div>


{/* End Of Excluded List */}
    <br />
    <div className="w-full max-w-screen-md mx-auto p-4 border rounded-lg bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{props?.myProps.templateSubject}</h1>
      <div className="text-gray-600">
        <p>{props?.myProps.templateMessage}</p>
      </div>
    
    </div>
    <br />

    {/* Email Template */}
    {/* Email Template End */}
    <div className="text-center">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleSendEmailConfirmation}
        >
          Send Message
        </button>
      </div>

      {/* Confirm Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
          <div className="bg-white p-4 rounded-lg">
            <p>Are you sure you want to send the email?</p>
            <div className="text-center mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mx-2"
                onClick={handleConfirmSendEmail}
              >
                Confirm
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mx-2"
                onClick={handleCancelSendEmail}
              >
                Cancel
              </button>
            </div>
          </div>
        </div> )}
        </Modal>
    </>
  )
}

export default MessageSheduleModal;
