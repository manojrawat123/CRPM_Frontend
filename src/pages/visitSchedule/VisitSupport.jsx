import axios from 'axios';
import React, { useEffect, useState } from 'react'

const VisitSupport = (props) => {

    console.log(props.visit);
    const [leadObj, setLeadObj] = useState();

    const authToken = localStorage.getItem('token');  
    const id = props.visit.LeadID

    const leadFunc = ()=>{
        axios.get(`http://localhost:8000/lead/${id}`,{
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }).then((value)=>{
          setLeadObj(value.data);
          console.log(value.data);
        })
      }

      useEffect(()=>{
        leadFunc()
      },[])


  return (
    <>
    <tr key={props.lead?.id}>
        <td className="border border-black px-4 py-2">{props.index + 1}</td>
        <td className="border border-black px-4 py-2">{leadObj?.LeadName}</td>
        <td className="border border-black px-4 py-2">
        <span className='font-bold '>
            Class Mode:
        </span>
        {leadObj?.LeadAssignmentAlgo}
        <br />
        <span className='font-bold'>
            Lead Source:
        </span>
          {leadObj?.LeadSource}
          <span className='font-bold'>
            <br />
          Followup Status:
          </span>
          Visit Scheduled
          <span className="font-bold">
            <br />
            Visit Scheduled Date:
          </span>
          {props.visit?.LeadEventDate}
            <br />
          <span className="font-bold">
            Representative:
          </span>
          {props.visit?.leadRepName}
          <br />
          <span className="font-bold">Course:</span>
          {leadObj?.CourseName}

          <br />
          <span className="font-bold">Remarks:</span>
          {props.visit?.LeadComments}
          </td>
         

        <td className="border border-black px-4 py-2">
          {/* <NavLink to={`/leaddetails/${props.lead?.id}`}> */}

            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
            >
              Show Details
            </button>
          {/* </NavLink> */}

        </td>
      </tr>
    </>
  )
}

export default VisitSupport