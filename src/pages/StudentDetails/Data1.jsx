import { CheckCircleOutline, CopyAllOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { format } from 'date-fns';
import React from 'react'
import LeadUpdateForm from '../LeadDetailsCustomizePage/LeadFollowUpLeadDetails/LeadUpdateForm';
import Modal from "react-modal";
import { useState } from 'react';


const Data1 = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <>

<Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            },
            content: {},
          }}
        >
          <LeadUpdateForm
            leadObj={props?.lead_obj}
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            leadFollowUpFunc={()=>{}}
          />
        </Modal>
            <div className="  text-center bg-gray-200 border border-solid border-green-500 my-1 rounded-xl">
                <h1 className="p-2 "><div className='text-xl font-bold inline-block mx-4'>CB-{props?.converted_id}</div> <button
                    className="bg-green-700 hover:bg-green-800 text-white font-semibold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => {
                        setModalIsOpen(true);
                    }}
                >
                    Update Details
                </button>
                </h1>
               
            </div>
            <div className="grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold rounded-t-xl">
                <div className="col-span-2 font-bold"> Name</div>
                <div className="col-span-3 text-gray-700 overflow-auto">
                    {props.lead_obj?.LeadName}
                </div>
            </div>


            <div className="grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold">
                <div className="col-span-2 font-bold "> Lead Email</div>
                <div className="col-span-3 text-gray-700  overflow-x-auto">
                    {props.lead_obj?.LeadEmail}
                </div>
            </div>
            <div className="grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold">
                <div className="col-span-2 font-bold"> Phone</div>
                <div className="col-span-3 text-gray-700 overflow-auto">
                    {props.lead_obj?.LeadPhone}
                    {""}
                </div>
            </div>
            <div className="grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold">
                <div className="col-span-2 font-bold"> Lead Status</div>
                <div className="col-span-3 text-gray-700">
                    {props.lead_obj?.LeadStatus}
                </div>
            </div>

            <div className="grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold">
                <div className="col-span-2 font-bold "> Representative Name</div>
                <div className="col-span-3 text-gray-700  overflow-x-auto">
                    {props.lead_obj?.LeadRepresentativePrimary.name}
                </div>
            </div>
            <div className="grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold rounded-b-xl">
                <div className="col-span-2 font-bold "> Lead Date &amp; Time</div>
                <div className="col-span-3 text-gray-700  overflow-x-auto">

                    {props.lead_obj?.LeadDateTime ? format(new Date(props.lead_obj?.LeadDateTime), "dd MMM yyyy h a") : "---"}
                </div>
            </div>

        </>
    )
}

export default Data1
