import Modal from 'react-modal';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import API_BASE_URL from "../../config";


const EmailSheduleModal = (props) => {
  
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
    const email_lis = myEmailContainer?.map((element, index) => {
      return element.LeadEmail
    });

    const customer_id = myEmailContainer?.map((element, index)=>{
      return element.id
    })
    console.log("customer_id",customer_id)

axios.post(`${API_BASE_URL}/emailshedule/`, {
              template_id: props.myProps.templateId,
              emails: email_lis,
              subject: props.myProps.templateSubject,
              body: props.myProps.templateMessage,
              CompanyID: customer_id
            }, {
              headers: {
                "Authorization": `Bearer ${token}`
              }
            }).then((value) => {
              console.log(value.data);
              axios.post(`${API_BASE_URL}/saveemail/`,{
                template_id: props.myProps.templateId,
                CompanyID: customer_id
              }, {
                headers: {
                  "Authorization": `Bearer ${token}`
                }
              }).then((values2)=>{
                console.log(values2.data)
                props.myProps.myResetForm();
                props.myProps.setModalIsOpen(false);    
                alert("Email Send Successfully!!");
              }).catch((err)=>{
                console.log(err)
              })
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

 <div className="flex justify-center mt-20 ">
      <div className="w-full lg:w-3/4">
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Course</th>
              <th className="px-4 py-2 border">Scource</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace the following data with your actual data */}
            {myEmailContainer?.map((element, index)=>{
              return <tr key={index}>
              <td className="border px-4 py-2">{element?.LeadName}</td>
              <td className="border px-4 py-2">{element?.LeadEmail}</td>
              <td className="border px-4 py-2">{element?.CourseName}</td>
              <td className="border px-4 py-2">{element?.LeadSource}</td>
              <td className="border px-4 py-2">{element?.LeadStatus}</td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded"
                type='button'
                onClick={() => {
                  const newEmailContainer = myEmailContainer?.filter((element2) => {
                    return element.LeadEmail !== element2?.LeadEmail;
                  });
                  setMyEmailContainer(newEmailContainer);
                  console.log("My Email Container!!",myEmailContainer)
                }}
              >
                  Remove
                </button>
              </td>
            </tr>
            })}
          </tbody>
        </table>
      </div>
      
    </div>
{/* Excluded List */}
<div className='mt-4'>
  <h1 className='text-center underline text-red-500'>Excluded list</h1>
</div>
<table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Course</th>
              <th className="px-4 py-2 border">Scource</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Remove</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace the following data with your actual data */}
            {excludedEmailContainerList?.map((element, index)=>{
              return <tr key={index}>
              <td className="border px-4 py-2">{element?.LeadName}</td>
              <td className="border px-4 py-2">{element?.LeadEmail}</td>
              <td className="border px-4 py-2">{element?.CourseName}</td>
              <td className="border px-4 py-2">{element?.LeadSource}</td>
              <td className="border px-4 py-2">{element?.LeadStatus}</td>
              <td className="border px-4 py-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded"
                type='button'
                onClick={() => {
                  const newEmailContainer = excludedEmailContainerList?.filter((element2) => {
                    return element.LeadEmail !== element2?.LeadEmail
                  });
                  setExcludexEmailContainer(newEmailContainer)
                  let newContainer = myEmailContainer;
                  newContainer = newContainer?.concat(element)
                  setMyEmailContainer(newContainer);
                  console.log("My New Container!!",newContainer)
                }}
              >
                  Add
                </button>
              </td>
            </tr>
            })}
          </tbody>
        </table>



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
          Send Email
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

export default EmailSheduleModal;
