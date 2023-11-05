import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context';
 
const LeadDetails = (props) => {

  const {leadGetById, leadByIdObj} = useContext(DataContext);
  const { id } = useParams()
  const [myId, setMyId ] = useState(id)
  const [errorStatus, setErrorStatus] = useState(false)
  const [lead, setLead] = useState()
  const dateString = "2023-08-07T12:50:00Z";
const formattedDate = new Date(dateString).toLocaleString('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
});

 useEffect(()=>{
  leadGetById(id);
 },[])

  if (errorStatus){
    return (<>
    <h1 className='text-2xl text-center font-bold mt-10 text-red-500'>No data Found Of given Id {myId}</h1>
    </>)
  }
  return (
    <> 
      <div className="w-full overflow-x-auto">
      <table className=" w-full border-collapse rounded rounded-corners">
  <tbody >
    <tr className="bg-gray-100 text-gray-900 border border-solid border-black rounded-xl ">
      <th className=" text-xl font-bold p-2 text-left">{leadByIdObj?.LeadName}</th>
      <td className=" p-2">
        <span className='bg-white '>
          +91 
        </span>&nbsp; 
        <span className='bg-white '>
          {leadByIdObj?.LeadPhone}&nbsp;
        </span>
      </td>
    </tr>

    <tr >
      <td className='p-2'></td>
      <td className='p-2'></td>
    </tr>

    <tr className=" text-gray-700">
      <td className=" border border-green-600 p-2 text-left text-green-600 font-semibold">Email</td>
      <td className=" border border-green-600 p-2">{leadByIdObj?.LeadEmail}</td>
    </tr>
    <tr className=" text-gray-700">
      <td className=" border border-green-600 p-2 text-left  text-green-600 font-semibold">Update Details</td>
      <td className=" border border-green-600 p-2">
        
      <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
            onClick={()=>{
              props?.setModalIsOpen(true)
            }}
            >
          Update Details
        </button>
      </td>
    </tr>
    <tr className=" text-gray-700">
      <td className=" border border-green-600 p-2 text-left  text-green-600 font-semibold">Lead Status</td>
      <td className=" border border-green-600 p-2">{leadByIdObj?.LeadStatus}</td>
    </tr>
    <tr className=" text-gray-700">
      <td className=" border border-green-600 p-2 text-left  text-green-600 font-semibold">Lead Source</td>
      <td className=" border border-green-600 p-2"> {leadByIdObj?.LeadSource}</td>
    </tr>
    <tr className=" text-gray-700">
      <td className=" border border-green-600 p-2 text-left  text-green-600 font-semibold">Representative Name</td>
      <td className=" border border-green-600 p-2">{leadByIdObj?.LeadRepresentativePrimary}</td>
    </tr>
    <tr className=" text-gray-700">
      <td className=" border border-green-600 p-2 text-left  text-green-600 font-semibold">Location</td>
      <td className=" border border-green-600 p-2">{leadByIdObj?.LeadState}</td>
    </tr>
    <tr className=" text-gray-700">
      <td className=" border border-green-600 p-2 text-left  text-green-600 font-semibold">Lead Date &amp; Time</td>
      <td className=" border border-green-600 p-2">{formattedDate}</td>
    </tr>
  </tbody>
</table>

    </div>


    </>
  )
}

export default LeadDetails
