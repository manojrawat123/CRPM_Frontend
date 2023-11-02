import React, { useContext, useEffect, useState } from "react";
import DateAndTimeInput from "./DateAndTimeInput";
import CustomRadioButton from "./RadioButton";
import { Alert, CircularProgress } from '@mui/material';
import axios from "axios";
import API_BASE_URL from "../../../config";
import { useParams } from "react-router-dom";
import { DataContext } from "../../../context";

const YesModalForm = () => {
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedButtonObj, setSelectedButtonObj] = useState();
    const [optionId, setOptionId] = useState();
    const [leadStatusDate, setLeadStatusDate] = useState();
    const [leadStatusTime, setLeadStatusTime] = useState();
    const [leadStatus, setLeadStatus] = useState();
    const [button, setButton] = useState(false);
    const [custAlert, setCustomAlert] = useState(false);
    const { id } = useParams();
    const brand = localStorage.getItem("brand");
    const { serviceFunc,profileFunc,company, userId } = useContext(DataContext);

    useEffect(()=>{
        serviceFunc();
        profileFunc();
        
    },[])

    useEffect(() => {
        setLeadStatusDate('');
        setLeadStatusTime('');
    }, [optionId]);

    useEffect(() => {
        handleButtonClick(optionId, selectedButtonObj);
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
        setTimeout(() => {
            setButton(false)
        }, 2000);
        if (leadStatus == undefined || leadStatus =="" || leadStatus == null){
            setCustomAlert({
                status: "error",
                message: "Please Select Lead Status"
            });
            // setButton(false)
            return
        }
        else if (optionId == 1 || optionId == 2 || optionId ==3 || optionId ==4){
            if (leadStatusDate == undefined || leadStatusDate == "" || leadStatusDate == null){
                setCustomAlert({
                    status: "error",
                    message: "Please Select Date"
                });
                return
            }
            else if(leadStatusTime == undefined || leadStatusTime == "" || leadStatusTime == null){
                setCustomAlert({
                    status: "error",
                    message: "Please Select Time Field"
                });
                return
            }
            else{
                console.log(leadStatusTime);
                setCustomAlert(false);
            }
        }
        else {
            setCustomAlert(false)
        }

        // api Request
        axios.post(`${API_BASE_URL}/leadfollowup/`, {
            
                "LeadID": id,
                "Company": company,
                "Brand": 1,
                "LeadRep": userId,
                "LeadPhonePicked":"Yes",
                "LeadStatus":leadStatus,
                "LeadStatusDate": `${leadStatusDate} ${leadStatusTime}`,
                "LeadServiceInterested": "",   
        }, {
            headers: {
            "Authorization": `Bearer ${token}`
            }
        })
    }
    
    const buttons = [
        { id: 1, label: "Ready To Enroll" },
        { id: 2, label: "Visit scheduled" },
        { id: 3, label: "Demo scheduled" },
        { id: 4, label: "Call Later" },
        { id: 5, label: "Not Interested" },
    ];

    return (
        <>
        {custAlert? <Alert severity={custAlert.status}>{custAlert.message}</Alert>: ""}
   
            <div className="mx-4 grid grid-cols-2">
                {buttons.map((button, index) => {
                    return <div key={index} className={`my-4 inline-block w-[98%] mx-1 ${button.id == optionId ? 'bg-gray-100' : 'bg-white'}`}>
                        <button
                            key={button.id}
                            className={`${selectedButton === button.id
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-black"
                                } px-4 py-2 rounded w-full`}
                            onClick={() => {
                                handleButtonClick(button.id, button);
                                setOptionId(button.id);
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
                        {optionId === 1 || optionId == 2 || optionId == 3 ?
                            <div className={`my-4 ${optionId === button.id ? 'block' : 'hidden'}`}>
                                <DateAndTimeInput leadStatusDate={leadStatusDate} setLeadStatusDate={setLeadStatusDate} leadStatusTime={leadStatusTime} setLeadStatusTime={setLeadStatusTime} selectedButtonObj={selectedButtonObj} />
                            </div> : ""}
                        {/* Code of 1, 2, 3 End */}
                        {/* Code of 4 */}
                        {optionId === 4 ? <>
                            <div className={`${button.id == optionId ? 'block' : "hidden"} my-4`}>
                                <button className={`mx-[3%] w-[40%] rounded px-4 py-2  ${leadStatus == "Highly Intrested" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                                    onClick={() => {
                                        setLeadStatus('Highly Intrested');
                                    }}
                                >
                                    Highly Intrested</button>
                                <button className={`mx-[3%] w-[40%] rounded px-4 py-2 ${leadStatus == "Least Intrested" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                                    onClick={() => {
                                        setLeadStatus('Least Intrested');
                                    }}
                                    
                                >Least Intersted</button>
                                
                                {leadStatus == "Least Intrested" || leadStatus == "Highly Intrested" ?
                                    <DateAndTimeInput leadStatusDate={leadStatusDate} setLeadStatusDate={setLeadStatusDate} leadStatusTime={leadStatusTime} setLeadStatusTime={setLeadStatusTime} selectedButtonObj={selectedButtonObj} />
                                    : ""} 
                            </div>
                        </> : ""}

                        {/* Code of 4 End*/}
                        {/* Lead Status Not Intrestead */}
                        {optionId === 5 ?<><div className={`${optionId === button.id ? 'block': 'hidden'}`}>
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
