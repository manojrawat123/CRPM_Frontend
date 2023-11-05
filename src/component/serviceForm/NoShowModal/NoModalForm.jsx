import { Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useState ,useContext, useEffect } from 'react'
import API_BASE_URL from '../../../config';
import { DataContext } from '../../../context';
import { useParams } from 'react-router-dom';

const NoModalForm = (props) => {

    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedButtonObj, setSelectedButtonObj] = useState();
    const [leadNotInterstedReason, setLeadNotIntresteadReason] = useState(null);
    const [custAlert, setCustomAlert] = useState(false);
    const [button, setButton] = useState(false);
    const brand = localStorage.getItem("brand"); 
    const [leadStatusDate,setLeadStatusDate] = useState()  
    const { serviceFunc,profileFunc,company, userId } = useContext(DataContext);
    const { id } = useParams() 
    const token = localStorage.getItem('token');

    useEffect(()=>{
        serviceFunc();
        profileFunc();
    },[])

    const handleSubmit = ()=>{
        setButton(true)
        if (leadNotInterstedReason == "" || leadNotInterstedReason == undefined || leadNotInterstedReason == null){
            setCustomAlert({
                status: "error",
                message: "Please Select Not Intrestead Reason"
            });
            setButton(false);
            return
        }
        const today = new Date().toISOString().slice(0, 10);

        if (selectedButton == 7 && leadStatusDate== null ){
            setCustomAlert({
                status: "error",
                message: "Please Select Date"
            })
            setButton(false);
            return

        }
        if (leadStatusDate !==null){
            if (today > leadStatusDate){
                setCustomAlert({
                    status: "error",
                    message: "Past Date Not Allowed"
                })
                setButton(false);
                return
            }

        }
        const requestData ={
            "LeadID": id,
              "Company": company,
              "Brand": brand,
              "LeadRep": userId,
              "LeadPhonePicked":"No",
              "LeadReasonPhoneNotPicked":leadNotInterstedReason,
              "LeadServiceInterested":props?.leadFollowUpServiceId,
              ...(leadStatusDate !== null
        ? { "LeadStatusDate": `${leadStatusDate} 00:00` }
        : {})
          }

        axios.post(`${API_BASE_URL}/leadfollowup/`,requestData, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((value)=>{

             axios.post(`${API_BASE_URL}//leadlastfollowupbyid/${id}/`, requestData, {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    }).then((values1)=>{
                        setCustomAlert({
                            status: "success",
                            message: "Data Submitted Sucessfully!!"
                        });  
                     }).catch((err)=>{
                        setCustomAlert({
                            status: "error",
                            message: "Could Not update in lead Last Followup"
                        });   
                     })
           
        }).catch((err)=>{
            console.log(err)
            setCustomAlert({
                status: "error",
                message: "Internal Server Error"
            });            
        }).finally(()=>{
            setButton(false)
        })
    }


    const buttons = [
        { id: 1, label: "Ringing No Answer" },
        { id: 2, label: "Busy" },
        { id: 3, label: "Switched Off" },
        { id: 4, label: "Not Reachable" },
        { id: 5, label: "Invalid Number" },
        { id: 6, label: "Cut the Call" },
        { id: 7, label: "Tried Multiple Times (Set Next Call Date)" },
        { id: 8, label: "Seems Not Intrested (Close Lead)" },
        { id: 9, label: "Service Not Available" },
        { id: 10, label: "Others" },
    ];

    const handleButtonClick = (buttonId, button) => {
        setSelectedButton(buttonId);
        setLeadStatusDate(null);
    };

    return (
        <>
        {custAlert ? (
            <Alert
              severity={custAlert.status}
              className="fixed top-12 w-3/4" // Apply the classes directly
            >
              {custAlert.message}
            </Alert>
          ) : null}
            <div className="mx-4 grid md:grid-cols-2 grid-cols-1">
                {buttons.map((button, index) => {
                   return <div key={index} className={`my-4 inline-block w-[98%] mx-1 ${button.id == selectedButton ? 'bg-gray-200':'bg-white'} rounded`}>
                        <button
                            key={button.id}
                            className={`${selectedButton === button.id
                                ? "bg-green-500 text-white"
                                : "bg-gray-200 text-black"
                                } px-4 py-2 rounded w-full`}
                            onClick={() => {
                                handleButtonClick(button.id, button);
                                setSelectedButtonObj(button);
                                setLeadNotIntresteadReason(button.label);
                            }}
                        >
                            {button.label}
                        </button>

                            {selectedButton === 7 ? <>
                            <div className={`${button.id == selectedButton ? 'block' : "hidden"} my-4`}>
                                <input type="date" className='mx-5 w-[94%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e)=>{
                                    setLeadStatusDate(e.target.value);
                                    const selectedDate = e.target.value;
    }} />
                            </div>
                        </> : ""}
                    </div>
                })}
            </div>
<div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white  rounded" 
                onClick={handleSubmit}>
                    {button? <><div className="m-2"> <CircularProgress size={20} color="inherit" className=" mx-8"/></div></>:<div className="my-2 mx-4">Submit</div> }
                </button>
            </div>
        </>
    )
}

export default NoModalForm



