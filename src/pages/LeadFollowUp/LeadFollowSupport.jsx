import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import API_BASE_URL from "../../config";

const LeadFollowUpSupport = (props) => {
  console.log("----props items----");
  console.log(props?.items);
  console.log("leadId", props?.items?.LeadID);
  

  

  return (
    <>
      <tbody className="md:table-footer-group hidden">
        <tr
          key={props?.index}
          className={`${props?.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}
        >
          {/* <td className="px-6 py-4  border border-gray-300">{props?.index + 1} </td> */}
          <td className="px-6 py-4 border border-gray-300">
            {props?.items?.LeadID?.LeadName}
          </td>

          <td className="px-6 py-4 border border-gray-300">
            <span className="font-bold mr-4">Lead Source:</span>{" "}
            {props?.items?.LeadID?.LeadScourceId.LeadSource}
            <br />
            <span className="font-bold mr-4">Class Mode:</span>{" "}
            {props?.items?.LeadID?.LeadAssignmentAlgo}
            <br />
            <span className="font-bold mr-4">Follow Up Status:</span>{" "}
            {props?.items?.LeadID?.LeadStatus}
            <br />
            <span className="font-bold mr-4">Lead Date & Time:</span>
            {props?.items?.LeadID?.LeadDateTime?.substring(0, 10)}{" "}
            {props?.items?.LeadID?.LeadDateTime?.substring(11, 16)}
          </td>
          <td className="px-6 py-4 ">
            <span className="font-bold mr-4">Followup Date & Time:</span>
            {props?.items?.LeadStatusDate?.substring(0, 10)}{" "}
            {props?.items?.LeadStatusDate?.substring(11, 16)}
            <br />
            <span className="font-bold mr-4">Event Status:</span>
            {props?.items?.LeadEvent ? props?.items?.LeadEvent : "----"}
            <br />
            <span className="font-bold mr-4">Call Representative:</span>
            {props?.items?.LeadID?.LeadRepresentativePrimary?.name}
            <br />
            <span className="font-bold mr-4">Course:</span>
            {props?.items?.LeadServiceInterested?.ServiceName}
            <br />
            <span className="font-bold mr-4">Lead Status:</span>
            {props?.items?.LeadStatus ? props?.items?.LeadStatus : "----"}
            <br /> 
          </td>
          <td className="px-6 py-4   border border-gray-300">
            <NavLink to={`/leaddetails/${props?.items?.LeadID.id}`}>
              <button className="bg-blue-500 hover:bg-blue-600 w-[10rem] text-white font-semibold py-2 px-4 rounded focus:outline-none">
                Details
              </button>
            </NavLink>
          </td>
        </tr>
      </tbody>



      {/* Phone Data */}
      <tbody className='tabel md:hidden'>
        <tr key={props?.lead?.id} className={`${props?.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

          <td className="border border-gray-300 px-4 py-2">
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Name:</div>
              <div className='col-span-3'>  {props?.items?.LeadID?.LeadName}</div>
            </div>
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Source:</div>
              {props?.items?.LeadID?.LeadScourceId.LeadSource}
              {console.log(props?.items?.LeadID?.LeadScourceId)}
              
            </div>
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Class Mode:</div>
              <div className='col-span-3'>{props?.items?.LeadID?.LeadAssignmentAlgo}</div>
            </div>
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Follow Up Status:</div>
              <div className='col-span-3'>{props?.items?.LeadID?.LeadStatus}</div>
            </div>
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Date & Time:</div>
              <div className='col-span-3'><span className="font-bold"></span>{" "}
            {props?.items?.LeadID?.LeadDateTime?.substring(0, 10)}{" "}
            {props?.items?.LeadID?.LeadDateTime?.substring(11, 16)}</div>
            </div>
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Follow Up Status:</div>
              <div className='col-span-3'>{props?.items?.LeadID?.LeadStatus}</div>
            </div>
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Followup Date & Time:</div>
              <div className='col-span-3'>
            {props?.items?.LeadStatusDate?.substring(0, 10)}{" "}
            {props?.items?.LeadStatusDate?.substring(11, 16)}</div>
            </div>
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>UTM Content:</div>
              <div className='col-span-3'>{props?.items?.TotalFee ? props?.items?.TotalFee : "---"}</div>
            </div>
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Event Status:</div>
              <div className='col-span-3'>{props?.items?.LeadEvent ? props?.items?.LeadEvent : "---"}</div>
            </div>
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Call Representative:</div>
              <div className='col-span-3'>{props?.items?.LeadID?.LeadRepresentativePrimary?.name}</div>
            </div>
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Course:</div>
             {props?.items?.LeadServiceInterested?.ServiceName}
            </div>
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Remarks:</div>
              <div className='col-span-3'> {"----"}</div>
            </div>
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Status:</div>
              <div className='col-span-3'>{props?.items?.LeadStatus}</div>
            </div>

            <div className='flex items-center justify-center my-4'>
              <NavLink to={`/leaddetails/${props?.items?.LeadID?.id}`}>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
                >
                  Show Detail 
                </button>
              </NavLink>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default LeadFollowUpSupport;
