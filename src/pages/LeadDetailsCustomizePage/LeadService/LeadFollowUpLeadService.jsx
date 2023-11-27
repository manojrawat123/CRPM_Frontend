import { Modal } from '@mui/material';
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom';

const LeadFollowUpLeadService = (props) => {

    const brand = localStorage.getItem("brand");
    const { id } = useParams();



  return (
    <>
     <div className="mx-4">

     <div className=" grid sm:grid-cols-2 grid-cols-1 text-center bg-gray-200 border border-solid border-green-500 my-4 rounded-xl">
            <h1 className="text-xl font-bold p-2 ">
            Lead Id: {id}
            </h1>
            <div className=" text-xl font-bold p-2">
            Brand Id: <span>{brand}</span> 
            </div>
          </div>


          <div className=' grid grid-cols-5 gap-10 border border-green-600 p-2 text-left font-semibold text-xl rounded-t-xl'>
              <div className='col-span-2 font-bold'> Selected Course</div>
              <div className='col-span-3 text-gray-700 overflow-auto font-bold'>Course Mode</div>
            </div>
          {props.leadObj?.LeadServiceInterested?.map((element, index)=>{
        return (
          <div className={`${index == props?.leadObj?.LeadServiceInterested.length-1 ? `rounded-b-xl`: null}` + ' grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold '}>
              <div className='col-span-2 font-bold'>  {element?.ServiceName}</div>
              <div className='col-span-3 text-gray-700 overflow-auto'>{element.serviceMode}</div>
            </div>
    )
})}

    <div className='text-xl font-bold border-2 border-solid  border-green-500 rounded-xl my-4'>
    <div className=" text-center bg-gray-200 rounded-t-xl">
    <h1 className="text-xl font-bold p-2 text-center">
        Actions
    </h1>
    </div>

    <div className='grid sm:grid-cols-2 grid-cols-1'>
        <NavLink to={`/convertlead/${id}`}>
        <button
              type="button"
              className="bg-green-500 mx-auto text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300 w-[90%] block my-2"
              >
              Convert Lead
        </button>
              </NavLink>
        <NavLink to={`/payment/${id}`}>
        <button
              type="button"
              className="bg-green-500  text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300 w-[90%] mx-auto block my-2"
              >
              Add Payment
        </button>

       
              </NavLink>

              <button
        onClick={()=>{
          setAddCourseModal(true);
        }} 
              type="button"
              className="bg-green-500 mx-auto text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300 w-[90%] block my-2"
              >
              Add Course
        </button>
              {/* <Modal
              isOpen={addCourseModal}
            
              onRequestClose={() => 
                setAddCourseModal(false)
            }
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
              },
              content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '60%', // Adjust the width as needed
      height: '60%', // Adjust the height as needed
              },
            }}>
              <AddCourseForm />
              </Modal>
              */}
       </div>

    </div>
    </div> 
    </>
  )
}

export default LeadFollowUpLeadService