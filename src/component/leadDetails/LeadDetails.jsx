import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context';
 
const LeadDetails = () => {

  const {setBrandId} = useContext(DataContext)
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
    axios.get(`http://localhost:8000/lead/${myId}`)
      .then((response) => {
        console.log('Lead data submitted successfully:', response.data);
        setLead(response.data)
        setBrandId(response.data.Brand)
      })
      .catch((error) => {
        console.log(error.status)
        if(error.response.status=== 404){
          setErrorStatus(true)
        }
        console.error('Error submitting lead Data:', error);
      });

      
  },[])

  if (errorStatus){
    return (<><h1 className='text-2xl text-center font-bold mt-10 text-red-500'>No data Found Of given Id {myId}</h1></>)
  }
  return (
    <>
      
      
      <div className="w-full overflow-x-auto ">

      <table className=" w-full border-collapse rounded rounded-corners">
  <tbody >
    <tr className="bg-white text-gray-900">
      <th className=" text-xl border border-r-0 rounded font-bold p-2 text-left">{lead?.LeadName}</th>
      <td className="border border-l-0 rounded p-2">
        <span className='bg-white border'>
          +91 
        </span>&nbsp; 
        <span className='bg-white border '>
          {lead?.LeadPhone}&nbsp;
        </span>
      </td>
    </tr>

    <tr >
      <td className='p-2'></td>
      <td className='p-2'></td>
    </tr>

    <tr className="bg-gray-100 text-gray-700">
      <td className="border p-2 text-left">Email</td>
      <td className="border p-2">{lead?.LeadEmail}</td>
    </tr>
    <tr className="bg-gray-200 text-gray-700">
      <td className="border p-2 text-left">Update Details</td>
      <td className="border p-2">
        <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-1 px-3 rounded focus:outline-none focus:shadow-outline">
          Update Details
        </button>
      </td>
    </tr>
    <tr className="bg-gray-100 text-gray-700">
      <td className="border p-2 text-left">Lead Status</td>
      <td className="border p-2">{lead?.LeadStatus}</td>
    </tr>
    <tr className="bg-gray-200 text-gray-700">
      <td className="border p-2 text-left">Lead Source</td>
      <td className="border p-2"> {lead?.LeadSource}</td>
    </tr>
    <tr className="bg-gray-100 text-gray-700">
      <td className="border p-2 text-left">Representative Name</td>
      <td className="border p-2">{lead?.LeadRepresentativePrimary}</td>
    </tr>
    <tr className="bg-gray-200 text-gray-700">
      <td className="border p-2 text-left">Location</td>
      <td className="border p-2">{lead?.LeadState}</td>
    </tr>
    <tr className="bg-gray-100 text-gray-700">
      <td className="border p-2 text-left">Lead Date &amp; Time</td>
      <td className="border p-2">{formattedDate}</td>
    </tr>
  </tbody>
</table>

    </div>


    </>
  )
}

export default LeadDetails
