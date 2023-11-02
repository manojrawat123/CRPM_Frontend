import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { DataContext } from '../../context';
import API_BASE_URL from "../../config";


const ServiceForm = () => {
    const [display1, setDisplay1] = useState("bg-gray-100");
    const [display2, setDisplay2] = useState("bg-gray-100");
    const [display3, setDisplay3] = useState("bg-gray-100");
    const [display4, setDisplay4] = useState("bg-gray-100");
    const [display5, setDisplay5] = useState("bg-gray-100");
    const [nodisplay1, setNoDisplay1] = useState("bg-gray-100");
    const [nodisplay2, setNoDisplay2] = useState("bg-gray-100");
    const [nodisplay3, setNoDisplay3] = useState("bg-gray-100");
    const [nodisplay4, setNoDisplay4] = useState("bg-gray-100");
    const [nodisplay5, setNoDisplay5] = useState("bg-gray-100");
    const [nodisplay6, setNoDisplay6] = useState("bg-gray-100");
    const [nodisplay7, setNoDisplay7] = useState("bg-gray-100");
    const [nodisplay8, setNoDisplay8] = useState("bg-gray-100");
    const [nodisplay9, setNoDisplay9] = useState("bg-gray-100");
    const [nodisplay10, setNoDisplay10] = useState("bg-gray-100");
    const [updateDisplay1, setUpdateDisplay1] = useState("bg-gray-100");
    const [updateDisplay2, setUpdateDisplay2] = useState("bg-gray-100");
    const [leadEvent, setLeadEvent] = useState(null);
    const [yesNo, setYesNo] = useState("hidden");
    const [yesShow, setYesShow] = useState("hidden");
    const [update, setUpdate] = useState("hidden");
    const [noShow, setnoShow] = useState("hidden");
    const [error, setError] = useState();
    const [leadStatus, setLeadStatus] = useState(null);
    const [leadTime, setLeadTime] = useState();
    const [leadDate, setLeadDate] = useState(null);
    const [leadDate2, setLeadDate2] = useState(null);
    const [leadEventTakenBy , setLeadEventTakenBy] = useState(null);
    const [leadNotInterstedReason, setLeadNotIntresteadReason] = useState(null);
    const [fees, setFees] = useState(0);
    const { id } = useParams();
    const [LeadPhonePicked, setLeadPhonePicked]= useState(null); 
    const {company, userId} = useContext(DataContext);
    const hours = Array.from({ length: 10 }, (_, index) => 9 + index);
    const { username, profileFunc,leadGetById, leadByIdObj, leadUpdateFunc } = useContext(DataContext);

    useEffect(()=>{
      profileFunc();
      leadGetById();
    },[])
    const leadFollowUpFunc = ()=>{
      const apiUrl = `${API_BASE_URL}/leadfollowup/`;
      const apiUrl2 = `${API_BASE_URL}/leadlastfollowupbyid/${id}/`;
      const authToken = localStorage.getItem("token");
      
      // Data to be sent in the POST request
      if (yesNo === "block"){
      alert("Data will save");
      if (yesShow==="block"){
      const requestData = leadByIdObj?.LeadServiceInterested?.map((element, index)=>{
        return {
            "LeadID": id,
            "Company": company,
            "Brand": 1,
            "LeadRep": userId,
            "LeadPhonePicked":LeadPhonePicked,
            "LeadStatus":leadStatus,
            "LeadStatusDate": `${leadDate} ${leadTime}`,
            "leadRepName": username,
            "LeadServiceInterested": element
        }
      }) 
      console.log(requestData);
      
    requestData.forEach(element => {
      axios.post(apiUrl, element, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(err => {
        if (err.response.data.non_field_errors[0] !== undefined){
          setError(err.response.data.non_field_errors[0])
        }
        if (error.response && error.response.data && error.response.data.event_datetime) {
        } else {
          console.error('An error occurred:', error.message);
        }
        if (error.response && error.response.status === 500) {
          // Handle the 500 error here
          // You can log the error, display a message to the user, or perform other tasks
          alert("Internal Server Error");
        }
        else{
          alert("Please Fill Proper Details")
        }
      });
      });
      
      

      // Second Api Call
      axios.post(apiUrl2, 
        {"LeadID": id,
      "Company": company,
      "Brand": 1,
      "LeadRep": userId,
      "LeadPhonePicked":LeadPhonePicked,
      "LeadStatus":leadStatus,
      "LeadStatusDate": `${leadDate} ${leadTime}`,
      "leadRepName": username,
      "LeadServiceInterested": leadByIdObj?.LeadServiceInterested
    }, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      .then(response => {
        console.log('Response:', response.data); 
        leadUpdateFunc(id, leadStatus)
        axios.put(`${API_BASE_URL}/lead/${id}/`, {
          LeadStatus: leadStatus
        }, {
          headers: {
            "Authorization": `Bearer ${authToken}`
          }
        }).then((value)=>{
          console.log(value);
        }).catch((err)=>{
          console.log(err);
        })
      })
      .catch(err => {
        console.log(err);
      });
      }
      if (noShow==="block"){
        console.log("Not intrested");
        const requestData ={
          "LeadID": id,
            "Company": company,
            "Brand": 1,
            "LeadRep": userId,
            "LeadPhonePicked":LeadPhonePicked,
            "LeadReasonPhoneNotPicked":leadNotInterstedReason,
            "leadRepName": username,
            ...(leadDate !== null
      ? { "LeadStatusDate": `${leadDate} 00:00` }
      : {})
        };
        console.log(requestData);
        axios.post(apiUrl, requestData, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        })
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(err => {
          console.log('API Error:', err.response.data.non_field_errors[0]);
          if (err.response.data.non_field_errors[0] !== undefined){
            setError(err.response.data.non_field_errors[0])
          }
          if (error.response && error.response.data && error.response.data.event_datetime) {
            console.error('Datetime format error:', error.response.data.event_datetime[0]);
          } else {
            console.error('An error occurred:', error.message);
          }
          if (error.response && error.response.status === 500) {
            // Handle the 500 error here
            // You can log the error, display a message to the user, or perform other tasks
            alert("Internal Server Error");
          }
          else{
            alert("Please Fill Proper Details")
          }
        });


        // 
        console.log(requestData);
        axios.post(apiUrl2, requestData, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        })
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(err => {
          console.log('API Error:', err.response.data.non_field_errors[0]);
          if (err.response.data.non_field_errors[0] !== undefined){
            setError(err.response.data.non_field_errors[0])
          }
          if (error.response && error.response.data && error.response.data.event_datetime) {
            console.error('Datetime format error:', error.response.data.event_datetime[0]);
          } else {
            console.error('An error occurred:', error.message);
          }
          if (error.response && error.response.status === 500) {
            // Handle the 500 error here
            // You can log the error, display a message to the user, or perform other tasks
            alert("Internal Server Error");
          }
          else{
            alert("Please Fill Proper Details")
          }
        });
      }}
      // If Upadte 
      if (update==="block"){
      alert("block");
      alert("updateDisplay");      
        console.log("Not intrested");
        const requestData ={
          "LeadID": id,
            "Company": company,
            "Brand": 1,
            "LeadRep": userId,
            "LeadEvent": leadEvent,
            "LeadStatusDate":`${leadDate} 00:00`,
            "LeadEventDate":`${leadDate2} ${leadTime}`,
            "LeadEventTakenBy": leadEventTakenBy,
            "LeadPhonePicked":null,
            "LeadReasonPhoneNotPicked":null,
            "LeadStatus":null,
            "leadRepName":username
          };
        console.log("requestData")
        console.log(requestData);
        axios.post(apiUrl, requestData, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        })
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(err => {
          if (error.response) {
            console.log('Error status:', error.response.status);
            console.log('Error data:', error.response.data); // This might contain the error message from the server
          } else if (error.request) {
            // The request was made but no response was received.
            console.log('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error.
            console.log('Error:', error.message);
          }
          console.log('API Error:', err.response.data.non_field_errors[0]);
          if (err.response.data.non_field_errors[0] !== undefined){
            setError(err.response.data.non_field_errors[0])
          }
          if (error.response && error.response.data && error.response.data.event_datetime) {
            console.error('Datetime format error:', error.response.data.event_datetime[0]);
            setError(error.response.data.event_datetime[0])
          } else {
            console.error('An error occurred:', error.message);
          }
          if (error.response && error.response.status === 500) {
            // Handle the 500 error here
            // You can log the error, display a message to the user, or perform other tasks
            alert("Internal Server Error");
          }
          else{
            alert("Please Fill Proper Details")
          }
        });

        // Second Url Api
        axios.post(apiUrl2, requestData, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        })
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(err => {
          if (error.response) {
            console.log('Error status:', error.response.status);
            console.log('Error data:', error.response.data); // This might contain the error message from the server
          } else if (error.request) {
            // The request was made but no response was received.
            console.log('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error.
            console.log('Error:', error.message);
          }
          console.log('API Error:', err.response.data.non_field_errors[0]);
          if (err.response.data.non_field_errors[0] !== undefined){
            setError(err.response.data.non_field_errors[0])
          }
          if (error.response && error.response.data && error.response.data.event_datetime) {
            console.error('Datetime format error:', error.response.data.event_datetime[0]);
            setError(error.response.data.event_datetime[0])
          } else {
            console.error('An error occurred:', error.message);
          }
          if (error.response && error.response.status === 500) {
            // Handle the 500 error here
            // You can log the error, display a message to the user, or perform other tasks
            alert("Internal Server Error");
          }
          else{
            alert("Please Fill Proper Details");
          }
        });
      }
      // Axios POST request with authentication token in headers     
      } 

  return (
    <>
    {error? 
    <div className='text-red-500 mx-4'>{error}</div>:<></>}
    <div className='mx-4 pt-3 rounded'>     
    <div className='mx-4 pt-3 rounded'> 

    <div>
      Selected Service: <select >
          {}
        </select>  
    </div>  
    <button onClick={()=>{
        if (yesNo === "hidden"){
          setYesNo("block");
          setUpdate("hidden");
        }
        else{
          setYesNo("hidden");
        }
      }} className={`bg-gray-300 rounded py-2 px-4 w-[49%] mx-[.5%]  ${yesNo=="hidden"? "bg-gray-300": "bg-gray-500"}`}>Did You talk to Customer</button>
      
      {/* Update Status Button */}
      <button className={`my-4  rounded py-2 px-4 w-[49%] mx-[.5%] ${update=="hidden"? "bg-gray-300": "bg-gray-500"}`} onClick={()=>{
          if(update=== "hidden"){
            setUpdate("block")
            setYesNo("hidden")
          
          }
          else{
            setUpdate("hidden")
          }
        }}>
        Update Visit & Demo Happened
        </button>
      </div>


<div className={`${yesNo} mx-3`}>
<div className="mx-4 my-6 text-center">

  <div className='text-left'>Fee Offered:</div>
  <input
  type="number"
  className="w-full border flex justify-center items-center p-2 rounded"
  value={fees} // Current value of the fees state
  onChange={(e) => {
    setFees(e.target.value); // Update the fees state when input changes
  }}
/>
      </div>
      <button className={`px-4 py-2 rounded-lg text-white bg-green-500 hover:bg-green-600 mx-auto w-[4rem] mt-5 ml-10 `} onClick={()=>{
        if(yesShow=== "hidden"){
            setYesShow("block");
            setnoShow("hidden");
            setLeadPhonePicked("Yes");
        }
        else{
            setYesShow("hidden");
            setLeadPhonePicked(null);
        }
      }}>
        Yes
      </button>

     &nbsp;&nbsp;&nbsp;&nbsp; <button className='px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600 mx-auto w-[4rem] ' onClick={
        ()=>{
            if (noShow=== "hidden"){
                setnoShow("block")
                setYesShow("hidden")
                setLeadPhonePicked("No")
            }
            else{
                setnoShow("hidden")
                setLeadPhonePicked("Yes")
            }
        }
      }>
        No
      </button>
<div>
<div className={yesShow}>
      <div className={`mx-4 my-6 text-center `}>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${display1}`} onClick={()=>{
            if (display1=== "bg-gray-100"){
            setDisplay1("bg-gray-400");
            setDisplay2("bg-gray-100");
            setDisplay3("bg-gray-100");
            setDisplay4("bg-gray-100");
            setDisplay5("bg-gray-100");
            setLeadStatus("Ready To Enroll");
          }
          else{
            setDisplay1("bg-gray-100")
            setLeadStatus(null)            
          }
        }}>
            Ready to Enroll
        </button>
        {display1 === "bg-gray-400"?
        <div className='my-4'>

        <div className=' text-left mx-5'>Enrolment Date:</div>
          <input type="date" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            setLeadDate(e.target.value)
          }}/> <br />
        
        <div className='text-left mx-5'>Enrolment Time:</div>
            <select id="selectOption" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
              setLeadTime(e.target.value)
            }}>
            <option>Please Select</option>
      {hours.map((hour) => (
        <option key={hour} value={`${hour}:00`}>
          {hour}:00 {hour < 12 ? 'am' : 'pm'}
        </option>
      ))}
          </select>
        </div>: <></>}
       
       
        
      </div>
      
      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${display2}`} onClick={()=>{
            if(display2 === "bg-gray-100"){
              setDisplay1("bg-gray-100")
            setDisplay2("bg-gray-400")
            setDisplay3("bg-gray-100")
            setDisplay4("bg-gray-100")
            setDisplay5("bg-gray-100")
            setLeadStatus("Visit scheduled")
            }
            else{
              setDisplay2("bg-gray-100")
              setLeadStatus(null)
            }
            
        }}>
            Schedule Visit
        </button>
        {display2 === "bg-gray-400"?
        <div className='my-4'>
        <div className=' text-left mx-5'>Visit Date:</div>
          <input type="date" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            setLeadDate(e.target.value)
          }}/> <br />
        
          <div className=' text-left mx-5'>Visit Time:</div>
             <select id="selectOption" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
              setLeadTime(e.target.value)
            }}>
            <option>Please Select</option>
      {hours.map((hour) => (
        <option key={hour} value={`${hour}:00`}>
          {hour}:00 {hour < 12 ? 'am' : 'pm'}
        </option>
      ))}
          </select>
        </div>: <></> }
      </div>

      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${display3}`} onClick={()=>{
            if(display3 === "bg-gray-100"){
            setDisplay1("bg-gray-100")
            setDisplay2("bg-gray-100")
            setDisplay3("bg-gray-400")
            setDisplay4("bg-gray-100")
            setDisplay5("bg-gray-100")
            setLeadStatus("Demo scheduled")
            }
            else{
              setDisplay3("bg-gray-100")
              setLeadStatus(null)
            }
        }}>
            Schedule Demo
        </button>
        {display3 === "bg-gray-400"?
        <div className='my-4'>
        <div className=' text-left mx-5'>Demo Date:</div>
          <input type="date" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            setLeadDate(e.target.value)
          }}/> <br />
        
          <div className=' text-left mx-5'>Demo Time:</div>
             <select id="selectOption" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
              setLeadTime(e.target.value)
            }}>
            <option>Please Select</option>
      {hours.map((hour) => (
        <option key={hour} value={`${hour}:00`}>
          {hour}:00 {hour < 12 ? 'am' : 'pm'}
        </option>
      ))}
          </select>
        </div>: <></> }

      </div>
      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${display4}`} onClick={()=>{
          if(display4 === "bg-gray-100"){
              setDisplay1("bg-gray-100")
              setDisplay2("bg-gray-100")
              setDisplay3("bg-gray-100")
              setDisplay4("bg-gray-400")
              setDisplay5("bg-gray-100")
              
          }
          else{
            setDisplay4("bg-gray-100")
            setLeadStatus(null)
          }
        }}>
            Call Later
        </button>

        {display4 === "bg-gray-400"?
        <div className="w-[96%] my-2">
        <div className="block text-left mx-4">Interest Level:</div>
        <div className="mt-1 text-left mx-7">
          <label className=" items-left block">
            <input
              type="radio"
              className="form-radio border border-gray-700 focus:ring-green-500 text-green-600"
              name="interestLevel"
              value="Highly Intersted"
              checked={leadStatus=== "Highly Intersted"}
              onChange={(e)=>{
                setLeadStatus(e.target.value)
              }}
            />
            
            <span className="">Highly Interested</span>
          </label>
          {leadStatus === 'Highly Intersted' && (
        <div className='ml-4'>
          <div className=' text-left '>Follow Up Date:</div>
          <input type="date" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            setLeadDate(e.target.value)
          }}/> <br />
          <select id="selectOption" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
              setLeadTime(e.target.value)
            }}>
            <option>Please Select</option>
      {hours.map((hour) => (
        <option key={hour} value={`${hour}:00`}>
          {hour}:00 {hour < 12 ? 'am' : 'pm'}
        </option>
      ))}
          </select>
        </div>
      )}
         
          <label className=" ">
            <input
              type="radio"
              className="form-radio border border-gray-700 focus:ring-green-500 text-green-600"
              name="interestLevel"
              value="Least Intersted"
              checked={leadStatus=== "Least Intersted"}
              onChange={(e)=>{
                setLeadStatus(e.target.value)
              }}
            />
            <span className="ml-2">Least Interested</span>
          </label>
          {leadStatus === 'Least Intersted' && (
        <div className='ml-4'>
          <div className=' text-left '>Follow Up Date:</div>
          <input type="date" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            setLeadDate(e.target.value)
          }}/> <br />
          <select id="selectOption" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
              setLeadTime(e.target.value)
            }}>
            <option>Please Select</option>
      {hours.map((hour) => (
        <option key={hour} value={`${hour}:00`}>
          {hour}:00 {hour < 12 ? 'am' : 'pm'}
        </option>
      ))}
          </select>
        </div>
      )}
         
        </div>
      </div>
      : <></> }

      </div>
      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${display5}`} onClick={()=>{
           if(display5 === "bg-gray-100"){
                setDisplay1("bg-gray-100")
                setDisplay2("bg-gray-100")
                setDisplay3("bg-gray-100")
                setDisplay4("bg-gray-100")
                setDisplay5("bg-gray-400")
                setLeadStatus("Not Intersted")
           }
           else{
            setDisplay5("bg-gray-100") 
            setLeadStatus(null)

           }
        }}>
            Not Interested
        </button>

        {display5 === "bg-gray-400"?
        
        <div className="w-[96%] my-2">
      <label className="block text-left mx-4">Reason:</label>
      <div className="mt-1 text-left mx-7">
        <label className="block ">
          <input
            type="radio"
            className="form-radio border border-gray-700 focus:ring-green-500 text-green-600"
            name="reason"
            value="Distance Issue"
            checked={leadStatus=== "Distance Issue"}
              onChange={(e)=>{
                setLeadStatus(e.target.value)
              }}
          />
          <span className="ml-2">Distance Issue</span>
        </label>
        <label className="block mt-1">
          <input
            type="radio"
            className="form-radio border border-gray-700 focus:ring-green-500 text-green-600"
            name="reason"
            value="Pricing Issue"
            checked={leadStatus=== "Pricing Issue"}
              onChange={(e)=>{
                setLeadStatus(e.target.value)
              }}
          />
          <span className="ml-2">Pricing Issue</span>
        </label>
        <label className="block mt-1">
          <input
            type="radio"
            className="form-radio border border-gray-700 focus:ring-green-500 text-green-600"
            name="reason"
            value="Already Taken Service"
            checked={leadStatus=== "Already Taken Service"}
              onChange={(e)=>{
                setLeadStatus(e.target.value)
              }}
          />
          <span className="ml-2">Already Taken Service</span>
        </label>
        <label className="block mt-1">
          <input
            type="radio"
            className="form-radio border border-gray-700 focus:ring-green-500 text-green-600"
            name="reason"
            value="Quality Issue"
            checked={leadStatus=== "Quality Issue"}
              onChange={(e)=>{
                setLeadStatus(e.target.value)
              }}
          />
          <span className="ml-2">Quality Issue</span>
        </label>
        <label className="block mt-1">
          <input
            type="radio"
            className="form-radio border border-gray-700 focus:ring-green-500 text-green-600"
            name="reason"
            value="Not Interested Anymore"
            checked={leadStatus=== "Not Interested Anymore"}
              onChange={(e)=>{
                setLeadStatus(e.target.value)
              }}
          />
          <span className="ml-2">Not Interested Anymore</span>
        </label>
        <label className="block mt-1">
          <input
            type="radio"
            className="form-radio border border-gray-700 focus:ring-green-500 text-green-600"
            name="reason"
            value="Did Not Enquire"
            checked={leadStatus=== "Did Not Enquire"}
              onChange={(e)=>{
                setLeadStatus(e.target.value)
              }}
          />
          <span className="ml-2">Did Not Enquire</span>
        </label>
        <label className="block mt-1">
          <input
            type="radio"
            className="form-radio border border-gray-700 focus:ring-green-500 text-green-600"
            name="reason"
            value="Only Wanted Information"
            checked={leadStatus=== "Only Wanted Information"}
            onChange={(e)=>{
              setLeadStatus(e.target.value)
            }}
          />
          <span className="ml-2">Only Wanted Information</span>
        </label>
        <label className="block mt-1">
          <input
            type="radio"
            className="form-radio border border-gray-700 focus:ring-green-500 text-green-600"
            name="reason"
            value="Other"
            checked={leadStatus=== "Other"}
            onChange={(e)=>{
              setLeadStatus(e.target.value)
            }}
          />
          <span className="ml-2">Other</span>
        </label>
      </div>
    </div>

        
        : <></> }

      </div>
      </div>
      </div>
      <br />
     
      <div className=''>

      <div className={noShow}>
      <div className={`mx-4 my-6 text-center `}>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${nodisplay1}`} onClick={()=>{
          if (nodisplay1 == "bg-gray-100"){
          setNoDisplay1("bg-gray-400")
          setNoDisplay2("bg-gray-100")
            setNoDisplay3("bg-gray-100")
            setNoDisplay4("bg-gray-100")
            setNoDisplay5("bg-gray-100")
            setNoDisplay6("bg-gray-100")
            setNoDisplay7("bg-gray-100")
            setNoDisplay8("bg-gray-100")
            setNoDisplay9("bg-gray-100")
            setNoDisplay10("bg-gray-100")
            setLeadNotIntresteadReason("Ringing No Answer")
              
          }
          else{
            // alert(nodisplay1)
            setNoDisplay1("bg-gray-100")
            setLeadNotIntresteadReason("Ringing No Answer")
          }
            

        }}>
            Ringing No Answer
        </button>
      </div>
      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${nodisplay2}`} onClick={()=>{
            if (nodisplay2 === "bg-gray-100"){
            setNoDisplay1("bg-gray-100")
            setNoDisplay2("bg-gray-400")
            setNoDisplay3("bg-gray-100")
            setNoDisplay4("bg-gray-100")
            setNoDisplay5("bg-gray-100")
            setNoDisplay6("bg-gray-100")
            setNoDisplay7("bg-gray-100")
            setNoDisplay8("bg-gray-100")
            setNoDisplay9("bg-gray-100")
            setNoDisplay10("bg-gray-100")
            setLeadNotIntresteadReason("Busy")
            }
            else{
              setNoDisplay2("bg-gray-100")
              setLeadNotIntresteadReason(null)
            }
        }}>
            Busy
        </button>
      </div>
      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${nodisplay3}`} onClick={()=>{
            if (nodisplay3 === "bg-gray-100"){
            setNoDisplay1("bg-gray-100")
            setNoDisplay2("bg-gray-100")
            setNoDisplay3("bg-gray-400")
            setNoDisplay4("bg-gray-100")
            setNoDisplay5("bg-gray-100")
            setNoDisplay6("bg-gray-100")
            setNoDisplay7("bg-gray-100")
            setNoDisplay8("bg-gray-100")
            setNoDisplay9("bg-gray-100")
            setNoDisplay10("bg-gray-100")
            setLeadNotIntresteadReason("Swiched Off")
            }
            else{
              setNoDisplay3("bg-gray-100")
              setLeadNotIntresteadReason(null)
            }
        }}>
            Switched Off
        </button>
      </div>
      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${nodisplay4}`} onClick={()=>{
            if (nodisplay4 === "bg-gray-100"){
            setNoDisplay1("bg-gray-100")
            setNoDisplay2("bg-gray-100")
            setNoDisplay3("bg-gray-100")
            setNoDisplay4("bg-gray-400")
            setNoDisplay5("bg-gray-100")
            setNoDisplay6("bg-gray-100")
            setNoDisplay7("bg-gray-100")
            setNoDisplay8("bg-gray-100")
            setNoDisplay9("bg-gray-100")
            setNoDisplay10("bg-gray-100")  
            setLeadNotIntresteadReason("Not Reachable")
            }
            else{
              setNoDisplay4("bg-gray-100")
              setLeadNotIntresteadReason(null)
            } 
        }}>
            Not Reachable
        </button>
      </div>
      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${nodisplay5}`} onClick={()=>{
           if (nodisplay5 === "bg-gray-100"){
           setNoDisplay1("bg-gray-100")
           setNoDisplay2("bg-gray-100")
           setNoDisplay3("bg-gray-100")
           setNoDisplay4("bg-gray-100")
           setNoDisplay5("bg-gray-400")
           setNoDisplay6("bg-gray-100")
           setNoDisplay7("bg-gray-100")
           setNoDisplay8("bg-gray-100")
           setNoDisplay9("bg-gray-100")
           setNoDisplay10("bg-gray-100")
           setLeadNotIntresteadReason("Invalid Number")
           }
           else{
            setNoDisplay5("bg-gray-100")
            setLeadNotIntresteadReason("Ringing No Answer")
          }
        }}>
            Invalid Number
        </button>
      </div>
      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${nodisplay6}`} onClick={()=>{
          if (nodisplay6 === "bg-gray-100"){
          setNoDisplay1("bg-gray-100")
           setNoDisplay2("bg-gray-100")
           setNoDisplay3("bg-gray-100")
           setNoDisplay4("bg-gray-100")
           setNoDisplay5("bg-gray-100")
           setNoDisplay6("bg-gray-400")
           setNoDisplay7("bg-gray-100")
           setNoDisplay8("bg-gray-100")
           setNoDisplay9("bg-gray-100")
           setNoDisplay10("bg-gray-100")
           setLeadNotIntresteadReason("Cut the Call")
          }
           else{
            setNoDisplay6("bg-gray-100")
            setLeadNotIntresteadReason("Ringing No Answer")
          }
        }}>
            Cut the Call
        </button>
      </div>
      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${nodisplay7}`} onClick={()=>{
           if (nodisplay7 === "bg-gray-100"){
           setNoDisplay1("bg-gray-100")
            setNoDisplay2("bg-gray-100")
            setNoDisplay3("bg-gray-100")
            setNoDisplay4("bg-gray-100")
            setNoDisplay5("bg-gray-100")
            setNoDisplay6("bg-gray-100")
            setNoDisplay7("bg-gray-400")
            setNoDisplay8("bg-gray-100")
            setNoDisplay9("bg-gray-100")
            setNoDisplay10("bg-gray-100")
            setLeadNotIntresteadReason("Tried Multiple Times")
           }
            else{
              setNoDisplay7("bg-gray-100")
              setLeadNotIntresteadReason(null)
              
            }
        }}>
            Tried Multiple Times (Set Next Call Date)
        </button>

        {nodisplay7 === "bg-gray-400"?
        <div className='my-4'>
        <div className=' text-left mx-5'>Next Call Date:</div>
          <input type="date" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            setLeadDate(e.target.value)
          }}/> <br />
        
        </div>: <></> }

      </div>
      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${nodisplay8}`} onClick={()=>{
            if (nodisplay8 === "bg-gray-100"){
            setNoDisplay1("bg-gray-100")
            setNoDisplay2("bg-gray-100")
            setNoDisplay3("bg-gray-100")
            setNoDisplay4("bg-gray-100")
            setNoDisplay5("bg-gray-100")
            setNoDisplay6("bg-gray-100")
            setNoDisplay7("bg-gray-100")
            setNoDisplay8("bg-gray-400")
            setNoDisplay9("bg-gray-100")
            setNoDisplay10("bg-gray-100")
            setLeadNotIntresteadReason("Seems Not Intrested")
            }
            else{
              setNoDisplay8("bg-gray-100")
              setLeadNotIntresteadReason(null)
            }
        }}>
            Seems Not Intrested (Close Lead)
        </button>
      </div>
      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${nodisplay9}`} onClick={()=>{
           if (nodisplay9 === "bg-gray-100"){
           setNoDisplay1("bg-gray-100")
           setNoDisplay2("bg-gray-100")
           setNoDisplay3("bg-gray-100")
           setNoDisplay4("bg-gray-100")
           setNoDisplay5("bg-gray-100")
           setNoDisplay6("bg-gray-100")
           setNoDisplay7("bg-gray-100")
           setNoDisplay8("bg-gray-100")
           setNoDisplay9("bg-gray-400")
           setNoDisplay10("bg-gray-100")
           setLeadNotIntresteadReason("Service  Not Avilable")}
           else{
            setNoDisplay9("bg-gray-100")
            setLeadNotIntresteadReason(null)
          }
        }}>
            Service Not Available
        </button>
      </div>
      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${nodisplay10}`} onClick={()=>{
           if (nodisplay10 === "bg-gray-100"){
           setNoDisplay1("bg-gray-100")
            setNoDisplay2("bg-gray-100")
            setNoDisplay3("bg-gray-100")
            setNoDisplay4("bg-gray-100")
            setNoDisplay5("bg-gray-100")
            setNoDisplay6("bg-gray-100")
            setNoDisplay7("bg-gray-100")
            setNoDisplay8("bg-gray-100")
            setNoDisplay9("bg-gray-100")
            setNoDisplay10("bg-gray-400")
            setLeadNotIntresteadReason("Other")
           }
            else{
              setNoDisplay10("bg-gray-100")
              setLeadNotIntresteadReason(null)
            }
        }}>
           Others
        </button>

        
      </div>
      <div className=''>
        <textarea name="" id="" cols="30" rows="10" className=' p-4 w-[96%] rounded focus:border-green-500 focus:border focus:outline focus:outline-green-500 mx-4 border border-gray-700 border-solid' placeholder='Remarks'></textarea>
      </div>
      </div>
      </div>
      </div>
        {/* Yes No Div End Here */}
        <br />

        <div className={`${update}`}>
        <div className={`mx-4 my-6 text-center `}>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${updateDisplay1}`} onClick={()=>{
            if (updateDisplay1 === "bg-gray-100"){
              setUpdateDisplay1("bg-gray-400")
            setUpdateDisplay2("bg-gray-100")            
            setLeadEvent("Visit happened")            
            }
            else{
              setUpdateDisplay1("bg-gray-100")
              setLeadEvent(null)
            }
        }}>
            Visit Happned
        </button>
        {updateDisplay1 === "bg-gray-400"?
        <div className='my-4'>

        <div className=' text-left mx-5'>Visit Happned Date:</div>
          <input type="date" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            setLeadDate2(e.target.value)
          }}/> <br />
              <div className=' text-left mx-5'>Visit Happned Time:</div>
        <select id="selectOption" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
              setLeadTime(e.target.value)
            }}>
            <option>Please Select</option>
      {hours.map((hour) => (
        <option key={hour} value={`${hour}:00`}>
          {hour}:00 {hour < 12 ? 'am' : 'pm'}
        </option>
      ))}
          </select>

            <div className=' text-left mx-5'>Next Followup Date:</div>
          <input type="date" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            setLeadDate(e.target.value)
          }}/> <br />
              
          <div className='text-left mx-5'>Visit Attended By:</div>
            <select id="selectOption" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
              setLeadEventTakenBy(e.target.value)
            }}>
              <option value=''>Plese Select</option>
              <option value="employee1">Employee 1</option>
              <option value="employee2">Employee 2</option>
              <option value="employee3">Employee 3</option>
              <option value="employee4">Employee 4</option>
            </select>
        </div>       
: <></> }
       
       
        
      </div>
      <div className='mx-4 my-6 text-center'>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${updateDisplay2}`} onClick={()=>{
            if (updateDisplay2 === "bg-gray-100"){
              setUpdateDisplay1("bg-gray-100")
              setUpdateDisplay2("bg-gray-400")
              setLeadEvent("Demo happened")
              
            }
            else{
              setUpdateDisplay2("bg-gray-100")
              setLeadEvent(null)
            }
        }}>
            Demo Happned
        </button>
        {updateDisplay2 === "bg-gray-400"?
        <div className='my-4'>

        <div className=' text-left mx-5'>Demo Happned Date:</div>
        <input type="date" className='w-[100%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            setLeadDate2(e.target.value);
          }}/> 
          <br />
              
        <div className='text-left mx-5'>Demo Happened Time:</div>
        <select id="selectOption" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
              setLeadTime(e.target.value);
            }}>
            <option>Please Select</option>
      {hours.map((hour) => (
        <option key={hour} value={`${hour}:00`}>
          {hour}:00 {hour < 12 ? 'am' : 'pm'}
        </option>
      ))}
          </select>
            <div className=' text-left mx-5'>Next Followup Date:</div>
          <input type="date" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            setLeadDate(e.target.value)
          }}/> <br />              
          <div className='text-left mx-5'>Demo Given By:</div>
          <select id="selectOption" className='w-[96%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
              setLeadEventTakenBy(e.target.value)
            }}>
              <option value=''>Plese Select</option>
              <option value="employee1">Employee 1</option>
              <option value="employee2">Employee 2</option>
              <option value="employee3">Employee 3</option>
              <option value="employee4">Employee 4</option>
            </select>
        </div>: <></> }
      </div>
        </div>
<div className='text-center'>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='button' onClick={leadFollowUpFunc}>
      Submit
    </button>
</div>
    </div>
    </>
  )
}

export default ServiceForm
