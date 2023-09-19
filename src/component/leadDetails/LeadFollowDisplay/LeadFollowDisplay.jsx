import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../context';
import { useParams } from 'react-router-dom';

const LeadFollowDisplay = () => {
  const { profileFunc } = useContext(DataContext)
  const { id } = useParams()
    
  const [leadfollowUpObj, setLeadFollowUpObj] = useState();
  const [leadObj, setLeadObj] = useState();

    useEffect(()=>{
      profileFunc()
        const apiUrl = `http://localhost:8000/leadfollowup/${id}`;
const authToken = localStorage.getItem("token");

// Define a function to make the GET request
const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Handle the response data here
    console.log(response.data);
    setLeadFollowUpObj(response.data)
  } catch (error) { 
    // Handle any errors here
    console.error('Error fetching data:', error);
  }
};

// Call the fetchData function to make the GET request
fetchData();

axios.get(`http://localhost:8000/lead/${id}`, {
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
}).then((value)=>{
  console.log(value.data);
  setLeadObj(value.data);
})
    },[])
  return (
    <>
    <div className='m-8'>
  <div className="overflow-x-auto">
  <table className="min-w-full table-auto border border-gray-300">
    <thead>
      <tr>
        <th className="border border-gray-300 p-2">Date & Time</th>
        <th className="border border-gray-300 p-2">Follow Up Details</th>
        <th className="border border-gray-300 p-2">More Details</th> 
      </tr>
    </thead>
    <tbody>
     {leadfollowUpObj?.map((element, index)=>{
      return (
        <tr key={index}>
        <td className='border border-gray-300 p-2'>
        <span className='font-bold'>Call Date & Time: </span> {element?.LeadFollowupCreatedDate?.substring(0, 10)}
        <br />
        <span className='font-bold'>Followup Date & Time: </span> {element?.LeadStatusDate?.substring(0, 10)}

        </td>
        <td className='border border-gray-300 p-2'>
        <span className='font-bold'>Followup Status: </span> {element?.LeadStatus}
        <br />
        <span className='font-bold'>Followup Output:</span> {element?.LeadStatus}
       
        </td>
        <td className='border border-gray-300 p-2'>
        <span className='font-bold'>Service Interested:  </span>{leadObj?.CourseName}
        <br />
        <span className='font-bold'> Event Status: </span>{element?.LeadEvent}
        <br />
        <span className='font-bold'> Response: </span>
        <br />
        <span className='font-bold'>Remarks: {element?.comment}</span>
        <br />
        <span className='font-bold'>Representative: </span> {element?.leadRepName}
        </td>
      
      </tr>
      )
     })}
    </tbody>
  </table>
</div>

  </div>
    </>
  )
}

export default LeadFollowDisplay
