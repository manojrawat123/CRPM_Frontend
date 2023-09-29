import axios from 'axios';
import React, { useEffect, useState } from 'react'

const RegisteredSupport = (props) => {

    console.log(props.student);
    const [leadObj, setLeadObj] = useState();
    const [feesDetails, setFeesDetails] = useState();
    const [paidFees, setPaidFees] = useState()

    const authToken = localStorage.getItem('token');  
    const id = props?.student?.LeadID

    const leadFunc = ()=>{
        axios.get(`http://localhost:8000/lead/${id}/`,{
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }).then((value)=>{
          setLeadObj(value.data);
          console.log(value.data);
        })
      }

    const feesFunc = ()=>{
        axios.get(`http://localhost:8000/feetracer/${id}/`,{
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }).then((value)=>{
          (value.data);
          console.log("Fees Details:",value.data);
          if (value.data?.length != 0){
            const arrFees = value.data?.map((item,index)=>{
              return item?.fee_received
            })
  
              const sum = arrFees.reduce((accumulator, currentValue) => {
              return parseInt(accumulator, 10) +  parseInt(currentValue, 10);
          },);
          
          console.log("Sum:", sum);
          setPaidFees(sum);
          alert(sum);
          setFeesDetails(value.data[value.data.length - 1])
          }
          else{
            setPaidFees(0)
          }
        }).catch((erro)=>{
          console.log(erro);
          alert("Some Error Occured in feetracer");
        })
    }

    useEffect(()=>{
        feesFunc()
        console.log("Fees Detail Last Array",feesDetails)
    },[paidFees])
      useEffect(()=>{
        leadFunc();
        feesFunc();
      },[])

      // if(!feesDetails){
      //   return (<>Loading...</>)
      // }


  return (
    <>
    <tr key={props.lead?.id}>
        <td className="border border-black px-4 py-2">{props.index + 1}</td>
        <td className="border border-black px-4 py-2">
            <span className='font-bold'>
                ConvertID:
            </span>
            {props?.student?.ConvertedID}
            <br />
        <span className='font-bold '>
            Phone:
        </span>
        {leadObj?.LeadPhone}
        <br />
        <span className='font-bold'>Total Fee:</span>
        {props?.student?.TotalFee}
        <br />
        <span className="font-bold">Pending Fee: </span>

             {props?.student?.TotalFee - paidFees}
            
        <br />
        <span className='font-bold'>
      Lead  Source:
        </span>
          {leadObj?.LeadSource}
          <br />
          <span className='font-bold'>
            <br />
          Lead Date:
          </span>
          {leadObj?.LeadDateTime}
            <br />
          <span className="font-bold">
            Converted Date:
          </span>
          {props.student?.ConvertedDateTime}
            <br />
          <span className="font-bold">
            Last Payment Date:
          </span>
          {feesDetails?.fee_payment_datetime}
          <br />
          <span className="font-bold">Representative:</span>
          {leadObj?.LeadRepresentativePrimary}
          <br />
          </td>
        <td className='border border-black px-4 py-2'>
          <span className="font-bold">Course Start Date:</span>
          {props.student?.CourseStartDate}
          
          <br />
            <span className="font-bold">Course End Date:</span>
            {props?.student?.CourseEndDate}
            <br />
            <span className='font-bold'>Validity Package</span>
            {props?.student.CourseName}
            <br />
            <span className='font-bold'>Primary Course Name:</span>
            {props?.student?.CourseName}
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

export default RegisteredSupport