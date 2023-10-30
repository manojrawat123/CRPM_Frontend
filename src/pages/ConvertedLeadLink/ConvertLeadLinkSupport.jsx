import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import CopyButton from './CopyLink';
import API_BASE_URL from "../../config";



const ConvertLeadLinkSupport = (props) => {

  console.log("----props items----");
  console.log(props?.items);
  
const [leadObj, setLeadObj] = useState([]);
const [feesObj, setFeesObj] = useState();
const [feeReceived, setFeesRecived] = useState();
  const id = props?.items?.LeadID
  const feeId = props?.items?.ConvertedID
  console.log("id",id);
  console.log("leadId",props?.items.ConvertedID);

  
const authToken = localStorage.getItem('token');  

  const leadFunc = ()=>{
      axios.get(`${API_BASE_URL}/lead/${id}/`,{
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then((value)=>{
        console.log(value.data);
        setLeadObj(value.data);
      })
    }


  const feesTrackerFunc = ()=>{
      axios.get(`${API_BASE_URL}/feetracer/${feeId}/`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }).then((values) => {
        console.log("Fees Data",values.data);
        setFeesObj(values.data);
        const arrFees = values.data?.map((item,index)=>{
          return parseInt(item?.fee_received, 10)
        })


      const sum = arrFees.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
      },);
      console.log("Sum:", sum); // This will also print the sum of the elements in the array
      setFeesRecived(sum)
  })
}

    useEffect(()=>{   
      const fetchData = async () => {
        await Promise.all([
          leadFunc(),
          feesTrackerFunc(),
        ]);
      }
      fetchData();
    },[])


return (
  <>
  <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                  {leadObj?.LeadName} 
              </td>
              <td className="px-6 py-4 whitespace-nowrap">

              <span className='font-bold mr-4'> 
              Lead Id:
                  </span> 
              {props?.items?.LeadID}
              <br />
              <span className='font-bold mr-4'> 
                  Lead Scource
                  </span> 
              {leadObj?.LeadSource} 
              <br />
              <span className='font-bold mr-4'> 
              Lead Date
                  </span> 
               {leadObj?.LeadDateTime?.substring(0, 10)} 
              <br />
              <span className='font-bold mr-4'> 
              Customer Id
                  </span> 
              {props?.items?.StudentID}
                  <br />
              <span className='font-bold mr-4'> 
                  Representative
                  </span> 
                  {leadObj?.LeadRepresentativePrimary}
                <br />
                <span className='font-bold mr-4'> 
                Converted Date
                  </span> 
                {props?.items?.ConvertedDateTime.substring(0,10)}
                <br />
              </td>
             
              <td className="px-6 py-4 whitespace-nowrap">
              <button className="bg-blue-500 hover:bg-blue-600 w-[10rem] text-white font-semibold py-2 px-4 rounded focus:outline-none">
                  <CopyButton id={props?.items?.StudentID} />
                </button> 
                <br />
                
                <br />
              <NavLink to={`http://localhost:5173/customer_registration_form/${props?.items?.StudentID}`}>
                <button className="bg-green-500 hover:bg-green-600 w-[10rem] text-white font-semibold py-2 px-4 rounded focus:outline-none">
                  Open Link
                </button>
              </NavLink>
                <br />
                <br />
                <button className="bg-red-500 hover:bg-red-600 w-[10rem] text-white font-semibold py-2 px-4 rounded focus:outline-none">
                  Whatsapp 
                </button>
              </td>
            </tr>
    </>
  )
}

export default ConvertLeadLinkSupport
