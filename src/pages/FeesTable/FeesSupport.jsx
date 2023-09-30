import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyModal from './Modal';

const FeesSupport = (props) => {


    const [leadObj, setLeadObj] = useState();
    const [convertedLeadObj,setConvertedLeadObj] = useState();
    const [isConverted, setIsConverted] = useState(false);

    const authToken = localStorage.getItem('token');
    const id = props?.fees?.lead
    
    const convertedId = props?.fees?.converted_id
    console.log(convertedId)

    const leadFunc = ()=>{
        axios.get(`http://localhost:8000/lead/${id}/`,{
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        }).then((value)=>{
          setLeadObj(value.data);
        }).catch((err)=>{
            console.log(err)
        })
      }

      const getConvertedLead = ()=>{
        axios.get(`http://localhost:8000/convertedlead/${convertedId}/`,{
            headers: {
              'Authorization': `Bearer ${authToken}`
            }
          }).then((value)=>{
            setConvertedLeadObj(value.data[0])
            setIsConverted(true)

          }).catch((err)=>{
            console.log(err);
            setIsConverted(false)
          })
      }

      useEffect(()=>{
        leadFunc();
        getConvertedLead();
    },[])


    useEffect(()=>{
        getConvertedLead()
    },[isConverted])


  return (
    <>
    <tr key={props?.index}>
        <td className="border border-black px-4 py-2">{props.index + 1}</td>
        <td className="border border-black px-4 py-2">
            <span className='font-bold'>
                Fees Id:
            </span>
            
            {props?.fees?.id}
            <br />
        <span className='font-bold '>
            Customer Name:
        </span>
        {leadObj?.LeadName}
        <br />
        <span className='font-bold'>Lead Id:</span>
        {props?.fees?.lead}
        <br />
        <span className="font-bold">Customer Id: </span>
        {props?.fees?.student}
        <br />
        <span className='font-bold'>
      Converted Id:
        </span>
        {props?.fees?.converted_id}
          <br />
          <span className='font-bold'>
            <br />
          Payment Id:
          </span>
          {props?.fees?.payment_id}
            <br />
          <span className="font-bold">
            Receipt No. :
          </span>
          {props?.fees?.receipt_number}
            <br />
          <span className="font-bold">
            Fees:
          </span>
          {props?.fees?.fee_received}
          <br />
          <span className="font-bold">Total Fees:</span>
          {convertedLeadObj?.TotalFee}
          <br />
          </td>
        <td className='border border-black px-4 py-2'>
          <span className="font-bold">Pending Fees:</span>
        {convertedLeadObj?.TotalFee - props?.fees?.fee_received }
          
          <br />
            <span className="font-bold">Payment Date:</span>
           {props?.fees?.fee_payment_datetime}
            <br />
            <span className='font-bold'>Payment Mode</span>
            {props?.fees?.payment_mode?.payment_mode}
            <br />
            <span className='font-bold'>Lead Scource:</span>
            {leadObj?.LeadSource}
            <br />
            <span className='font-bold'>Package:</span>
            {leadObj?.CourseName}
            <br />
            <span className='font-bold'>Representative:</span>
            {leadObj?.LeadRepresentativePrimary}
            <br />
            <span className='font-bold'>Payment Type:</span>
            {props?.fees?.payment_type?.payment_type_display}
            <br />
          </td>
        <td className="border border-black px-4 py-2">
          {/* <NavLink to={`/leaddetails/${props.lead?.id}`}> */}
            <MyModal fees_data={props?.fees} name={leadObj?.LeadName} total_fees={convertedLeadObj?.TotalFee}/>
          {/* </NavLink> */}
        </td>
      </tr>
    </>
  )
}

export default FeesSupport