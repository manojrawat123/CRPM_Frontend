import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context';
import { NavLink } from 'react-router-dom';
import { format } from "date-fns";
import axios from 'axios';
import API_BASE_URL from '../../config';

const LeadSupport = (props) => {
  const { 
    getLeadFunc, 
    // leadGetById
    // getServiceNamesForArray ,
    // getSerciceNameById, serviceName 
    
    // userObj,
    // leadRepresentative
    // ,setServiceName
  } = useContext(DataContext);

  

  const [myDate, setMyDate] = useState("");
  const [leadDate, setLeadDate] = useState("");
  const token = localStorage.getItem('token');



  useEffect(() => {
    getLeadFunc();
    const formattedDate2 = new Date(props.lead.LeadDateTime);
    const dateEx2 = format(formattedDate2, "dd-MMM-yyyy hh:mm a");
    setLeadDate(dateEx2);
  }, [myDate])
  useEffect(() => {
    getLeadFunc();
  }, [leadDate])

  useEffect(()=>{
    console.log(props.lead)
  },[])




  

  return (
    <>
      <tr key={props.lead.id}>
        <td className="border border-gray-300 px-4 py-2">{props.index + 1}</td>
        <td className="border border-gray-300 px-4 py-2">{props.lead.LeadName}</td>
        <td className="border border-gray-300 px-4 py-2">
          <span className='font-bold'>
            Lead Source:
          </span>

          {props.lead.LeadSource}
          <span className='font-bold'>
            <br />
            Lead Status:
          </span>
          {props.lead.LeadStatus}
          <span className="font-bold">
            <br />
            Lead Representative:
          </span>
           {props?.lead?.LeadRepresentativePrimary?.name}
          <br />
          <span className="font-bold">
            Course Name: 
          </span>        
             {props.lead.LeadServiceInterested?.map((value, index)=>{
              return <span key={index}>{index == 0? null: <>,</>} {value?.ServiceName}</span>})
          }
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <span className="font-bold">Lead Added:</span>
          {leadDate}
          <br />
          <span className="font-bold">Lead Last Call:</span>
           {myDate}
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <NavLink to={`/leaddetails/${props.lead.id}`}>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
            >
              Show Detail
            </button>
          </NavLink>
        </td>
      </tr>
    </>
  )
}

export default LeadSupport
