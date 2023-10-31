import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { DataContext } from '../../context';
import API_BASE_URL from "../../config";



const ServiceForm = () => {
    const [yesShow, setYesShow] = useState("hidden")

    const [yesNo, setYesNo] = useState("hidden");
    const [update, setUpdate] = useState("hidden");

  return (

    <>
    <div className='mx-4 pt-3 rounded'>   
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


      {/* Here is the code of did you talk to customer */}

      {/* Here Is Yes Show */}
      <div className={yesShow}>
      <div className={`mx-4 my-6 text-center `}>
        <button type='button' className={`w-full border flex justify-center items-center py-2 hover:bg-gray-300 rounded ${display1}`} onClick={()=>{
            // if (display1=== "bg-gray-100"){
            // setDisplay1("bg-gray-400");
            // setDisplay2("bg-gray-100");
            // setDisplay3("bg-gray-100");
            // setDisplay4("bg-gray-100");
            // setDisplay5("bg-gray-100");
            // setLeadStatus("Ready To Enroll");
        //   }
        //   else{
        //     setDisplay1("bg-gray-100")
            // setLeadStatus(null)            
        //   }
        }}>
            Ready to Enroll
        </button>
        {display1 === "bg-gray-400"?
        <div className='my-4'>

        <div className=' text-left mx-5'>Enrolment Date:</div>
          <input type="date" className='w-[90%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            // setLeadDate(e.target.value)
          }}/> <br />
        
        <div className='text-left mx-5'>Enrolment Time:</div>
            <select id="selectOption" className='w-[90%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
            //   setLeadTime(e.target.value)
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
            // if(display2 === "bg-gray-100"){
            //   setDisplay1("bg-gray-100")
            // setDisplay2("bg-gray-400")
            // setDisplay3("bg-gray-100")
            // setDisplay4("bg-gray-100")
            // setDisplay5("bg-gray-100")
            // setLeadStatus("Visit scheduled")
            // }
            // else{
            //   setDisplay2("bg-gray-100")
            //   setLeadStatus(null)
            // }
            
        }}>
            Schedule Visit
        </button>
        {display2 === "bg-gray-400"?
        <div className='my-4'>
        <div className=' text-left mx-5'>Visit Date:</div>
          <input type="date" className='w-[90%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            setLeadDate(e.target.value)
          }}/> <br />
        
          <div className=' text-left mx-5'>Visit Time:</div>
             <select id="selectOption" className='w-[90%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
            //   setLeadTime(e.target.value)
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
            // if(display3 === "bg-gray-100"){
            // setDisplay1("bg-gray-100")
            // setDisplay2("bg-gray-100")
            // setDisplay3("bg-gray-400")
            // setDisplay4("bg-gray-100")
            // setDisplay5("bg-gray-100")
            // setLeadStatus("Demo scheduled")
            // }
            // else{
            //   setDisplay3("bg-gray-100")
            //   setLeadStatus(null)
            // }
        }}>
            Schedule Demo
        </button>
        {display3 === "bg-gray-400"?
        <div className='my-4'>
        <div className=' text-left mx-5'>Demo Date:</div>
          <input type="date" className='w-[90%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            // setLeadDate(e.target.value)
          }}/> <br />
        
          <div className=' text-left mx-5'>Demo Time:</div>
             <select id="selectOption" className='w-[90%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
            //   setLeadTime(e.target.value)
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
            //   setDisplay1("bg-gray-100")
            //   setDisplay2("bg-gray-100")
            //   setDisplay3("bg-gray-100")
            //   setDisplay4("bg-gray-400")
            //   setDisplay5("bg-gray-100")
            //   
          }
          else{
            setDisplay4("bg-gray-100")
            // setLeadStatus(null)
          }
        }}>
            Call Later
        </button>

        {display4 === "bg-gray-400"?
        <div className="w-[90%] my-2">
        <div className="block text-left mx-4">Interest Level:</div>
        <div className="mt-1 text-left mx-7">
          <label className=" items-left block">
            <input
              type="radio"
              className="form-radio border border-gray-700 focus:ring-green-500 text-green-600"
              name="interestLevel"
              value="Highly Intersted"
            //   checked={leadStatus=== "Highly Intersted"}
              onChange={(e)=>{
                // setLeadStatus(e.target.value)
              }}
            />
            
            <span className="">Highly Interested</span>
          </label>
          {leadStatus === 'Highly Intersted' && (
        <div className='ml-4'>
          <div className=' text-left '>Follow Up Date:</div>
          <input type="date" className='w-[90%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            // setLeadDate(e.target.value)
          }}/> <br />
          <select id="selectOption" className='w-[90%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
            //   setLeadTime(e.target.value)
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
            //   checked={leadStatus=== "Least Intersted"}
              onChange={(e)=>{
                // setLeadStatus(e.target.value)
              }}
            />
            <span className="ml-2">Least Interested</span>
          </label>
          {leadStatus === 'Least Intersted' && (
        <div className='ml-4'>
          <div className=' text-left '>Follow Up Date:</div>
          <input type="date" className='w-[90%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
            // setLeadDate(e.target.value)
          }}/> <br />
          <select id="selectOption" className='w-[90%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e)=>{
            //   setLeadTime(e.target.value)
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
        //    if(display5 === "bg-gray-100"){
                // setDisplay1("bg-gray-100")
                // setDisplay2("bg-gray-100")
                // setDisplay3("bg-gray-100")
                // setDisplay4("bg-gray-100")
        //         // setDisplay5("bg-gray-400")
                // setLeadStatus("Not Intersted")
        //    }
        //    else{
        //     setDisplay5("bg-gray-100") 
            // setLeadStatus(null)
        //    }
        }}>
            Not Interested
        </button>

        {display5 === "bg-gray-400"?
        
        <div className="w-[90%] my-2">
      <label className="block text-left mx-4">Reason:</label>
      <div className="mt-1 text-left mx-7">
        <label className="block ">
          <input
            type="radio"
            className="form-radio border border-gray-700 focus:ring-green-500 text-green-600"
            name="reason"
            value="Distance Issue"
            // checked={leadStatus=== "Distance Issue"}
              onChange={(e)=>{
                // setLeadStatus(e.target.value)
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
            // checked={leadStatus=== "Pricing Issue"}
              onChange={(e)=>{
                // setLeadStatus(e.target.value)
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
            // checked={leadStatus=== "Already Taken Service"}
              onChange={(e)=>{
                // setLeadStatus(e.target.value)
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
            // checked={leadStatus=== "Quality Issue"}
              onChange={(e)=>{
                // setLeadStatus(e.target.value)
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
            // checked={leadStatus=== "Not Interested Anymore"}
              onChange={(e)=>{
                // setLeadStatus(e.target.value)
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
            // checked={leadStatus=== "Did Not Enquire"}
              onChange={(e)=>{
                // setLeadStatus(e.target.value)
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
            // checked={leadStatus=== "Only Wanted Information"}
            onChange={(e)=>{
            //   setLeadStatus(e.target.value)
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
            // checked={leadStatus=== "Other"}
            onChange={(e)=>{
            //   setLeadStatus(e.target.value)
            }}
          />
          <span className="ml-2">Other</span>
        </label>
      </div>
    </div>

        
        : <></> }

      </div>
      </div>
      {/* Here is end code of did you talk to customer */}

    </>
  )
}

export default ServiceForm
