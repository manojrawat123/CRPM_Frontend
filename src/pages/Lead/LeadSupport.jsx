import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { format } from "date-fns";

const LeadSupport = (props) => {
  const { getLeadFunc,
    leads
  } = useContext(DataContext);
  
  const [myDate, setMyDate] = useState("");
  const [leadDate, setLeadDate] = useState("");
  const id = props.lead.id
  const token = localStorage.getItem('token');
  const leadLastFollowUp = () => {
    axios.get(`http://localhost:8000/leadlastfollowupbyid/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
}).then((values) => {
  console.log("Data received:", values.data);
  if (values.data[0]?.LeadFollowupCreatedDate){
    const formattedDate = new Date(values?.data[0]?.LeadFollowupCreatedDate);
    const dateEx = format(formattedDate, "dd-MMM-yyyy hh:mm a");
    setMyDate(dateEx);   
  }
  }).catch((err) => {
    console.log(err);
  });
  }
 
  
  useEffect(() => {
    getLeadFunc();
    leadLastFollowUp();
    const formattedDate2 = new Date(props.lead.LeadDateTime);
    const dateEx2 = format(formattedDate2, "dd-MMM-yyyy hh:mm a");
    setLeadDate(dateEx2)
  }, [myDate])
  useEffect(()=>{
    
    getLeadFunc();
    // leadLastFollowUp();
  },[leadDate])
  
  return (
    <>
    
      <tr key={props.lead.id}>
        <td className="border border-black px-4 py-2">{props.index + 1}</td>
        <td className="border border-black px-4 py-2">{props.lead.LeadName}</td>
        <td className="border border-black px-4 py-2">
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
          {props.lead.LeadRepresentativePrimary}
<br />
          <span className="font-bold">
            Course Name:
          </span>
          {props.lead.CourseName}
          </td>
          
        <td className="border border-black px-4 py-2">
          <span className="font-bold">Lead Added:</span>
          {leadDate}
          <br />
          <span className="font-bold">Lead Last Call:</span>
          {myDate}
          </td>

        <td className="border border-black px-4 py-2">
          <NavLink to={`/leaddetails/${props.lead.id}`}>

            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
            >
              Show Details
            </button>
          </NavLink>

        </td>
      </tr>
    </>
  )
}

export default LeadSupport
