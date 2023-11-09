import React, { useContext, useEffect, useState } from "react";
import DateAndTimeInput from "./DateAndTimeInput";
import CustomRadioButton from "./RadioButton";
import { Alert, CircularProgress } from '@mui/material';
import axios from "axios";
import API_BASE_URL from "../../../config";
import { useParams } from "react-router-dom";
import { DataContext } from "../../../context";

const YesModalForm = (props) => {
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedButtonObj, setSelectedButtonObj] = useState();
    const [leadStatusDate, setLeadStatusDate] = useState();
    const [leadStatusTime, setLeadStatusTime] = useState();
    const [leadStatus, setLeadStatus] = useState();
    const [button, setButton] = useState(false);
    const [custAlert, setCustomAlert] = useState(false);
    const { id } = useParams();
    const brand = localStorage.getItem("brand");
    const { serviceFunc,profileFunc,company, userId } = useContext(DataContext);
    const token = localStorage.getItem('token')

    useEffect(()=>{
        serviceFunc();
        profileFunc();
        
    },[])

    useEffect(() => {
        if (selectedButton == 5){
            setLeadStatusDate(null);
            setLeadStatusTime(null);
        }
        else{
            setLeadStatusDate('');
            setLeadStatusTime('');
        }
        
    }, [selectedButton]);

    useEffect(() => {
        handleButtonClick(selectedButton, selectedButtonObj);
    }, [leadStatus])


    const handleButtonClick = (buttonId, button) => {
        setSelectedButton(buttonId);
        console.log(buttonId);
        if (buttonId === 1 || buttonId === 2 || buttonId === 3) {
            setLeadStatus(button.label)
            console.log(leadStatus);
        }
    };

    const handleSubmit = ()=>{
        setButton(true)
        
        if (leadStatus == undefined || leadStatus =="" || leadStatus == null){
            setCustomAlert({
                status: "error",
                message: "Please Select Lead Status"
            });
            setButton(false)
            return
        }
        else if (selectedButton == 1 || selectedButton == 2 || selectedButton ==3 || selectedButton ==4){
            if (leadStatusDate == undefined || leadStatusDate == "" || leadStatusDate == null){
                setCustomAlert({
                    status: "error",
                    message: "Please Select Date"
                });
                setButton(false)
                return
            }
            else if(leadStatusTime == undefined || leadStatusTime == "" || leadStatusTime == null){
                setCustomAlert({
                    status: "error",
                    message: "Please Select Time Field"
                });
                setButton(false)
                return
            }
            else{
                setCustomAlert(false);
            }
        }
        else {
            setCustomAlert(false)
        }

        // api Request
        if (leadStatusDate == undefined || leadStatusDate == "" || leadStatusDate == null){
            setLeadStatusDate(null)
        }

        const requestData = {
            
            "LeadID": id,
            "Company": company,
            "Brand": brand,
            "LeadRep": userId,
            "LeadPhonePicked":"Yes",
            "LeadStatus":leadStatus,
            "LeadStatusDate": leadStatusDate ? `${leadStatusDate} ${leadStatusTime}` : null,
            "LeadServiceInterested": props?.leadFollowUpServiceId,   
    }
        axios.post(`${API_BASE_URL}/leadfollowup/`, requestData, {
            headers: {
            "Authorization": `Bearer ${token}`
            }
        }).then((val)=>{

                setCustomAlert({
                    status: "success",
                    message: "Data Submitted Sucessfully!!"
                });  
            // axios.post(`${API_BASE_URL}/leadlastfollowupbyid/${id}/`, requestData, {
            //     headers: {
            //         "Authorization": `Bearer ${token}`
            //     }
            // }).then((values1)=>{
            //     setButton(false)
            //  }).catch((err)=>{
            //     console.log(err)
            //     setCustomAlert({
            //         status: "error",
            //         message: "Could Not update in lead Last Followup"
            //     });   
            //     setButton(false)
            //  })
            
             setButton(false)
            }).catch((err)=>{
                console.log(err)
                setCustomAlert({
                    status: "error",
                    message: "Some Error Occured"
                })
                setButton(false)
        })
        // setButton(false)
    }
    
    const buttons = [
        { id: 1, label: "Ready To Enroll" },
        { id: 2, label: "Visit scheduled" },
        { id: 3, label: "Demo scheduled" },
        { id: 4, label: "Call Later" },
        { id: 5, label: "Not Interested" },
    ];

    return (
        <>{custAlert ? (
            <Alert
              severity={custAlert.status}
              className="fixed top-12 w-3/4" // Apply the classes directly
            >
              {custAlert.message}
            </Alert>
          ) : null}
   
            <div className="mx-4 grid sm:grid-cols-2 grid-cols-1">
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
                                setSelectedButton(button.id)
                                setSelectedButtonObj(button);
                                if (button.id == 1 || button.id == 2 || button.id == 2){
                                    setLeadStatus(button.label);
                                }
                                else if (button.id == 4|| button.id == 5){
                                    setLeadStatus("");
                                }
                            }}
                        >
                            {button.label}
                        </button>
                        {/* Input Fields Code of Id 1 2 3*/}
                        {selectedButton === 1 || selectedButton == 2 || selectedButton == 3 ?
                            <div className={`my-4 ${selectedButton === button.id ? 'block' : 'hidden'}`}>
                                <DateAndTimeInput leadStatusDate={leadStatusDate} setLeadStatusDate={setLeadStatusDate} leadStatusTime={leadStatusTime} setLeadStatusTime={setLeadStatusTime} selectedButtonObj={selectedButtonObj} />
                            </div> : ""}
                        {/* Code of 1, 2, 3 End */}
                        {/* Code of 4 */}
                        {selectedButton === 4 ? <>
                            <div className={`${button.id == selectedButton ? 'block' : "hidden"} my-4`}>
                                <button className={`mx-[3%] w-[40%] rounded px-4 py-2  ${leadStatus == "Highly Intersted" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                                    onClick={() => {   
                                        setLeadStatus('Highly Intersted');
                                    }}
                                >
                                    Highly Intrested</button>
                                <button className={`mx-[3%] w-[40%] rounded px-4 py-2 ${leadStatus == "Least Intersted" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
                                    onClick={() => {   
                                        setLeadStatus('Least Intersted');
                                    }}
                                    
                                >Least Intersted</button>
                                
                                {leadStatus == "Least Intersted" || leadStatus == "Highly Intersted" ?
                                    <DateAndTimeInput leadStatusDate={leadStatusDate} setLeadStatusDate={setLeadStatusDate} leadStatusTime={leadStatusTime} setLeadStatusTime={setLeadStatusTime} selectedButtonObj={selectedButtonObj} />
                                    : ""} 
                            </div>
                        </> : ""}

                        {/* Code of 4 End*/}
                        {/* Lead Status Not Intrestead */}
                        {selectedButton === 5 ?<><div className={`${selectedButton === button.id ? 'block': 'hidden'}`}>
                            <div className="text-xl text-center font-bold underline">Tell Us Why </div> <br />
                       <CustomRadioButton leadStatus={leadStatus} setLeadStatus={setLeadStatus}/></div>
                       </> :""}                        
                        {/* Lead Status Not Intrestead Code End */}
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
    );
};

export default YesModalForm;
