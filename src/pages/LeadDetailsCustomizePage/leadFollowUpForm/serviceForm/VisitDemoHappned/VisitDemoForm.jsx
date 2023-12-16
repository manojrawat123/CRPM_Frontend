import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { DataContext } from '../../../../../context';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import VisitInputFiled from './VisitInputFiled';
import { Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import API_BASE_URL from "../../../../../config";
import { toast } from 'react-toastify';

const VisitDemoForm = (props) => {

    const [selectedButton, setSelectedButton] = useState();
    const [selectedButtonObj, setSelectedButtonObj] = useState();
    const [custAlert, setCustomAlert] = useState(false);
    const [button, setButton] = useState(false);
    const brand = localStorage.getItem("brand");
    const { serviceFunc, profileFunc, company, userId } = useContext(DataContext);
    const { id } = useParams()
    const token = localStorage.getItem('token');
    const [visitHappenedDate, setVisitHappenedDate] = useState('');
    const [visitHappenedTime, setVisitHappenedTime] = useState('');
    const [nextFollowupDate, setNextFollowupDate] = useState('');
    const [visitAttendedBy, setVisitAttendedBy] = useState('');
    const [leadEvent, setLeadEvent] = useState();
    const [leadStatus, setLeadStatus]= useState();

    useEffect(() => {
        serviceFunc();
        profileFunc();
    }, [])

    const handleSubmit = () => {
        setButton(true)
            if (leadEvent == null || leadEvent == "" || leadEvent == undefined){
                setCustomAlert({
                    status: "error",
                    message: "Please Select Lead Event"
                });
                
                setButton(false);
                return 
            }
            else{
                if ( visitHappenedDate == null || visitHappenedDate == "" || visitHappenedDate == undefined){
                    setCustomAlert({
                        status: "error",
                        message: "Please Select Lead Event Date"
                    });
                    setButton(false)
                    return 
                }
               else if (visitHappenedDate > new Date().getDate){
                    setCustomAlert({
                        status: "error",
                        message: "Date Must in Past"
                    });
                    setButton(false)
                    return
                }
                else if ( visitHappenedTime == null || visitHappenedTime == "" || visitHappenedTime == undefined){
                    setCustomAlert({
                        status: "error",
                        message: "Please Select Lead Event Time"
                    });
                    setButton(false)
                    return 
                }
                else if ( nextFollowupDate == null || nextFollowupDate == "" || nextFollowupDate == undefined){
                    setCustomAlert({
                        status: "error",
                        message: "Please Select Next Follow Up Date"
                    });
                    setButton(false)
                    return 
                }
                else if ( new Date(nextFollowupDate) < new Date()){
                    setCustomAlert({
                        status: "error",
                        message: "Next Follow Date cann't be past date"
                    });
                    setButton(false)
                    return 
                }
                else if ( visitAttendedBy == null || visitAttendedBy == "" || visitAttendedBy == undefined){
                    setCustomAlert({
                        status: "error",
                        message: "Please Select Lead Attended By"
                    });
                    setButton(false)
                    return 
                }       
            }

            const requestData ={
                "LeadID": id,
                  "Company": company,
                  "Brand": brand,
                  "LeadRep": userId,
                  "LeadEvent": leadEvent,
                  "LeadStatus": leadStatus,
                  "LeadStatusDate":`${nextFollowupDate} 00:00`,
                  "LeadEventDate":`${visitHappenedDate} ${visitHappenedTime}`,
                  "LeadEventTakenBy": visitAttendedBy,
                  "LeadServiceInterested": props.selectedService,
                };

                

                axios.post(`${API_BASE_URL}/leadfollowup/`,requestData, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }).then((value)=>{

                    props.setSelectedService("");
                    props.setVisitDemoModalOpen(false);
                    toast.success('Lead FollowUp Updated Sucessfully !!', {
                        position: toast.POSITION.TOP_CENTER,
                      });
                      props.leadFollowUpFunc()
                }).catch((err)=>{
                    console.log(err)
                    setCustomAlert({
                        status: "error",
                        message: "Internal Server Error"
                    });            
                }).finally(()=>{
                    setButton(false)
                })
            
            
            return 
}

    const buttons = [    
        { id: 1, label: "Visit happened", status: "Visit Happened" },
        { id: 2, label: "Demo happened" , status: "Demo Happened"},
    ];

    const handleButtonClick = (buttonId, button) => {
        setSelectedButton(buttonId);
        setSelectedButtonObj(button);
        setLeadEvent(button.label);
        setLeadStatus(button.status);
        setVisitHappenedDate('');
setVisitHappenedTime('');
setNextFollowupDate('');
setVisitAttendedBy('');
                               
        
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
                    return <div key={index} className={`my-4 inline-block w-[98%] mx-1 ${button.id == selectedButton ? 'bg-gray-200' : 'bg-white'} rounded`}>
                        <button
                            key={button.id}
                            className={`${selectedButton === button.id
                                ? "bg-green-500 text-white"
                                : "bg-gray-200 text-black"
                                } px-4 py-2 rounded w-full`}
                            onClick={() => {
                                handleButtonClick(button.id, button);
                                
                                // setLeadNotIntresteadReason(button.label);
                            }}
                        >
                            {button.label}
                        </button>

                        <div className={`${button.id == selectedButton ? 'block' : "hidden"} my-4`}>
                            <VisitInputFiled setVisitHappenedDate={setVisitHappenedDate}
                                setVisitHappenedTime={setVisitHappenedTime}
                                setNextFollowupDate={setNextFollowupDate}
                                setVisitAttendedBy={setVisitAttendedBy} 
                                visitHappenedDate={visitHappenedDate}
                                visitAttendedBy={visitAttendedBy}
                                visitHappenedTime={visitHappenedTime}
                                nextFollowupDate={nextFollowupDate}
                                selectedButton={selectedButton}/>
                        </div>

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

export default VisitDemoForm
