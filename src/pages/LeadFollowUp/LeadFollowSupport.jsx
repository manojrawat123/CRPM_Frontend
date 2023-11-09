import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import API_BASE_URL from "../../config";


const LeadFollowUpSupport = (props) => {

    console.log("----props items----");
    console.log(props?.items);
    
  const [leadObj, setLeadObj] = useState([]);
    const id = props?.items?.LeadID
    console.log("id",id);
    console.log("leadId",props?.items?.LeadID);
    
  const authToken = localStorage.getItem('token');  

    const leadFunc = ()=>{
        axios.get(`${API_BASE_URL}/lead/${id}/`,{
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }).then((value)=>{
          console.log(value.data)
          setLeadObj(value.data);
        })
      }

useEffect(()=>{   
  const fetchData = async () => {
    await Promise.all([
    leadFunc(),
      ]);
    }
        fetchData();
},[])

  return (
    <>
    <tr className=' border border-gray-300'>
      {/* <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{props?.index + 1} </td> */}
      <td className="px-6 py-4 whitespace-nowrap border border-gray-300">{leadObj?.LeadName}</td>

                
                <td className="px-6 py-4 whitespace-nowrap border border-gray-300">
                <span className='font-bold mr-4'> 
                Lead Source:
                    </span>  {leadObj?.LeadSource}
                <br />
                <span className='font-bold mr-4'> 
                    Class Mode:
                    </span> 
                {leadObj?.LeadAssignmentAlgo} 
                <br />
                <span className='font-bold mr-4'> 
                Follow Up Status:
                    </span> 
                 {leadObj?.LeadStatus} 
                <br />
                <span className='font-bold mr-4'> 
                Lead Date & Time:
                    </span> 
                {leadObj?.LeadDateTime?.substring(0, 10)} {leadObj?.LeadDateTime?.substring(11, 16)}

                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                <span className='font-bold mr-4'> 
                    Followup Date & Time:
                    </span> 
                    {props?.items?.LeadStatusDate?.substring(0, 10)} {props?.items?.LeadStatusDate?.substring(11, 16)}
                  <br />
                  <span className='font-bold mr-4'> 
                 UTM Content:
                    </span> 
                  {props?.items?.TotalFee}
                  <br />
                  <span className='font-bold mr-4'> 
                  Event Status:
                    </span> 
                  {props?.items?.LeadEvent}
                  <br />
                  <span className='font-bold mr-4'> 
                 Call Representative:
                    </span> 
                 {props?.items?.leadRepName}
                 <br />
                 <span className='font-bold mr-4'> 
                 Course: 
                    </span> 
                  {leadObj?.CourseName}
                  <br />
                <span className='font-bold mr-4'> 
                 Remarks: 
                    </span>                   
                  <br />
                <span className='font-bold mr-4'> 
                 Lead Status: 
                    </span> 
                    {props?.items?.LeadStatus}
                  <br />   
                </td>
                <td className="px-6 py-4 whitespace-nowrap  border border-gray-300">   
            <NavLink to={`/leaddetails/${leadObj.id}`}>
              <button className="bg-blue-500 hover:bg-blue-600 w-[10rem] text-white font-semibold py-2 px-4 rounded focus:outline-none">
                Details
              </button> 
            </NavLink>             
                </td>
              </tr>
    </>
  )
}

export default LeadFollowUpSupport;