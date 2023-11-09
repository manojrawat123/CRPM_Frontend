import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { DataContext } from '../context'
import axios from 'axios';
import Modal from 'react-modal';
import AddCourseForm from './AddCourse/AddCourse';
import API_BASE_URL from "../config";


const LeadServices = () => {
    
    const { id } = useParams();
    const [myId, setMyId] = useState(id);
    const { brand ,leadGetById, leadByIdObj} = useContext(DataContext);
    const [addCourseModal, setAddCourseModal] = useState(false);

    useEffect(()=>{
        
      leadGetById(id);
      
    },[])

  return (
    <>
    <div className='text-xl font-bold border border-solid py-2 border-green-500'>
    <span className='mr-10 ml-2'>  Lead Id: <span>{myId}</span> </span>
    <span className='mr-10 ml-2'> Brand Id: <span>{brand}</span> </span>
        <NavLink to={`/convertlead/${id}`}>
        <button
              type="button"
              className="bg-green-500 mx-2 text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300"
              >
              Convert Lead
        </button>
              </NavLink>
        <NavLink to={`/payment/${id}`}>
        <button
              type="button"
              className="bg-green-500 mx-2 text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300"
              >
              Add Payment
        </button>
              </NavLink>

              
              <Modal
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
        <button
        onClick={()=>{
          setAddCourseModal(true);
        }}
              type="button"
              className="bg-green-500 mx-2 text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300 mt-4"
              >
              Add Course
        </button>

    </div>

    <div>

    <table className=' w-full border-collapse rounded rounded-corners'>
    <tbody>
      <tr>
        <td className="p-2"></td>
        <td className="p-2"></td>
      </tr>

      {leadByIdObj?.LeadServiceInterested?.map((element, index)=>{
        return (
          <tr key={index}>
          <td className='mr-8 w-[13rem]  border border-solid py-2 border-green-500 px-2'>{element?.ServiceName}</td>          
          <td className='ml-8  border border-solid py-2 border-green-500 px-2'>{element.serviceMode}</td> 
          </tr>          
          )
      })}
       </tbody>
    </table>
    </div>   
    </>
  )
}

export default LeadServices
