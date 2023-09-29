import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const MySupport = (props) => {

    console.log("----props items----");
    console.log(props?.items);
    
  const [leadObj, setLeadObj] = useState([]);
  const [feesObj, setFeesObj] = useState();
  const [feeReceived, setFeesRecived] = useState();
    const id = props?.items?.LeadID
    const feeId = props?.items?.ConvertedID
    console.log("id",id);
    console.log("leadId",props?.items.LeadID);

    
  const authToken = localStorage.getItem('token');  

    const leadFunc = ()=>{
        axios.get(`http://localhost:8000/lead/${id}/`,{
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }).then((value)=>{
          console.log(value.data)
          setLeadObj(value.data);
        })
      }


    const feesTrackerFunc = ()=>{
        axios.get(`http://localhost:8000/feetracer/${feeId}/`, {
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
                <td className="px-6 py-4 whitespace-nowrap"> <span className='font-bold mr-4'> Converted ID: </span> {props?.items?.ConvertedID}
                <br />
                <span className='font-bold mr-4'> 
                Lead Id:
                    </span> 
                {props?.items?.LeadID}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                <span className='font-bold mr-4'> 
                    Phone:
                    </span> 
                {leadObj?.LeadPhone} 
                <br />
                <span className='font-bold mr-4'> 
                Name:
                    </span> 
                 {leadObj?.LeadName} 
                <br />
                <span className='font-bold mr-4'> 
                Lead Representative:
                    </span> 
                {props?.items?.Representative}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                <span className='font-bold mr-4'> 
                    Total Fees:
                    </span> 
                    {props?.items?.TotalFee}
                  <br />
                  <span className='font-bold mr-4'> 
                  Net Total Fees:
                    </span> 
                  {props?.items?.TotalFee}
                  <br />
                  <span className='font-bold mr-4'> 
                  CollectedFee:
                    </span> 
                  {feeReceived}
                  <br />
                  <span className='font-bold mr-4'> 
                 Balance: 
                    </span> 
                 {props?.items?.TotalFee - feeReceived}

                </td>
                <td className="px-6 py-4 whitespace-nowrap">{props?.items?.LostSales}</td>
                <td className="px-6 py-4 whitespace-nowrap">{props?.items?.CourseName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{props?.items?.NextDueDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                <NavLink to={`/addpendingfee/${props?.items?.ConvertedID}`}>
                <button className="bg-blue-500 hover:bg-blue-600 w-[10rem] text-white font-semibold py-2 px-4 rounded focus:outline-none">
                    Add Pending Fee
                  </button> 
                </NavLink>
                  <br />
                  <br />

                  <NavLink to={`/addlostsale/${props?.items?.ConvertedID}`}>

                  <button className="bg-red-500 hover:bg-red-600 w-[10rem] text-white font-semibold py-2 px-4 rounded focus:outline-none">
                    Add Lost Sale
                  </button>
                  </NavLink>
                </td>
              </tr>
    </>
  )
}

export default MySupport;