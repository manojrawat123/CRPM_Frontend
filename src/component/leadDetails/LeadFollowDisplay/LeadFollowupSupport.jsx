import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../context'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../../config';

const LeadFollowupSupport = (props) => {

    const [leadObj, setLeadObj] = useState();
const { id } = useParams();

const authToken = localStorage.getItem("token");
    
    const {
        getServiceNameById,
        serviceName,
        userObj,
        leadRepresentative
      } = useContext(DataContext)


    useEffect(()=>{
        getServiceNameById(props.leadfollowUpObjEl.LeadServiceInterested)
        userObj(props.leadfollowUpObjEl?.LeadRep);

        axios.get(`${API_BASE_URL}/lead/${id}/`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }).then((value)=>{
            console.log(value.data);
            setLeadObj(value.data);
          }).catch((err)=>{
            console.log(err);
          })

    },[])
    


  return (
    <>
          <tr>
          <td className='border border-gray-300 p-2'>
          <span className='font-bold'>Call Date & Time: </span> {props?.leadfollowUpObjEl?.LeadFollowupCreatedDate?.substring(0, 10)}
          <br />
          <span className='font-bold'>Followup Date & Time: </span> {props?.leadfollowUpObjEl?.LeadStatusDate?.substring(0, 10)}
  
          </td>
          <td className='border border-gray-300 p-2'>
          <span className='font-bold'>Followup Status: </span> {props?.leadfollowUpObjEl?.LeadStatus}
          <br />
          <span className='font-bold'>Followup Output:</span> {props?.leadfollowUpObjEl?.LeadStatus}
         
          </td>
          <td className='border border-gray-300 p-2'>
          <span className='font-bold'>Service Interested:  </span>{serviceName}
          <br />
          <span className='font-bold'> Event Status: </span>{props?.leadfollowUpObjEl?.LeadEvent}
          <br />
          <span className='font-bold'> Response: </span>
          <br />
          <span className='font-bold'>Remarks: {props?.leadfollowUpObjEl?.comment}</span>
          <br />
          <span className='font-bold'>Representative: </span> {leadRepresentative?.name}
          </td>
        
        </tr>
        
   
       </>
  )
}

export default LeadFollowupSupport