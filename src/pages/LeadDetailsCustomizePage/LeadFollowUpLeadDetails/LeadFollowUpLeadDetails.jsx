import { format } from "date-fns";
import React from "react";
import LeadUpdateModel from "../../../Models/LeadUpdateModel/LeadUpdateModel";
import { useState } from "react";
import { useParams } from "react-router-dom";

const LeadFollowUpLeadDetails = (props) => {
  console.log(props);

  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id } = useParams();

  return (
    <>

    <div className="mx-4">
<LeadUpdateModel
        myProps={{
          modalIsOpen: modalIsOpen,
          setModalIsOpen: setModalIsOpen,
          leadId: id,
        }}
      />
 <div className=" grid sm:grid-cols-2 grid-cols-1 text-center bg-gray-200 border border-solid border-green-500 my-4 rounded-xl">
            <h1 className="text-xl font-bold p-2 ">
              {props.leadObj?.LeadName}
            </h1>
            <div className="my-3">
              <span className="bg-white px-2 py-1 ">+91</span>&nbsp;
              <span className="bg-white px-4 py-1">
                  {props.leadObj?.LeadPhone}&nbsp;
              </span>
            </div>
          </div>
      <div className='grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold rounded-t-xl'>
              <div className='col-span-2 font-bold'>   Email</div>
              <div className='col-span-3 text-gray-700 overflow-auto'>  {props.leadObj?.LeadEmail}</div>
            </div>
            <div className='grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold'>
              <div className='col-span-2 font-bold'> Update Details</div>
              <div className='col-span-3 text-gray-700'><button
                  className="bg-green-700 hover:bg-green-800 text-white font-semibold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => {
                    setModalIsOpen(true);
                  }}
                >
                  Update Details
                </button>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold'>
              <div className='col-span-2 font-bold'>  Lead Status</div>
              <div className='col-span-3 text-gray-700'>  {props.leadObj?.LeadStatus}</div>
            </div>
            <div className='grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold'>
              <div className='col-span-2 font-bold '>   Lead Source</div>
              <div className='col-span-3 text-gray-700  overflow-x-auto'> {" "}
                {props.leadObj?.LeadSource}
                </div>
            </div>
            <div className='grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold'>
              <div className='col-span-2 font-bold '>  Representative Name</div>
              <div className='col-span-3 text-gray-700  overflow-x-auto'> {" "}
              {props.leadObj?.LeadRepresentativePrimary?.name}
                </div>
            </div>
            <div className='grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold'>
              <div className='col-span-2 font-bold '>  Location</div>
              <div className='col-span-3 text-gray-700  overflow-x-auto'> {" "}
              {props.leadObj?.LeadState}
                </div>
            </div>
            <div className='grid grid-cols-5 gap-10 border border-green-600 p-2 text-left text-green-600 font-semibold rounded-b-xl'>
              <div className='col-span-2 font-bold '>    Lead Date &amp; Time</div>
              <div className='col-span-3 text-gray-700  overflow-x-auto'> {" "}
              {props?.leadObj?.LeadDateTime
                  ? format(
                      new Date(props?.leadObj?.LeadDateTime),
                      "dd MMM yyyy h a"
                    )
                  : "---"}
                </div>
            </div>
            </div>
    </>
  );
};

export default LeadFollowUpLeadDetails;
