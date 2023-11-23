import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API_BASE_URL from "../../config";
import { NavLink } from 'react-router-dom';


const VisitSupport = (props) => {

    console.log(props.visit);


  return (
    <>
    
    <tbody className='md:table-footer-group hidden'>
    <tr key={props.lead?.id}>
        <td className="border border-black px-4 py-2">{props?.visit.LeadID?.LeadName}</td>
        <td className="border border-black px-4 py-2">
        <span className="font-bold">Course:</span>
          {props?.visit?.LeadServiceInterested?.ServiceName}

          <br />
        <span className='font-bold '>
            Class Mode:
        </span>
        {props?.visit.LeadID?.LeadAssignmentAlgo}
        <br />
        
        <span className='font-bold'>
            Lead Source:
        </span>
          {props?.visit.LeadID?.LeadSource}
          <span className='font-bold'>
            <br />
          Followup Status:
          </span>
          Visit Scheduled
        </td>
        <td className="border border-black px-4 py-2">
        
          <span className="font-bold">
            <br />
            Visit Scheduled Date:
          </span>
          {props.visit?.LeadEventDate}
            <br />
          <span className="font-bold">
            Representative:
          </span>
          {props.visit?.LeadRep?.name}
          <br />
          
          <span className="font-bold">Remarks:</span>
          {props.visit?.LeadComments}
          </td>
         

        <td className="border border-black px-4 py-2"> 
          <NavLink to={`/leaddetails/${props?.visit?.LeadID?.id}`}>

            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
            >
              Show Details
            </button>
          </NavLink>

        </td>
      </tr>
      </tbody>


      <tbody className='tabel md:hidden'>
        <tr key={props?.index} className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

          <td className="border border-gray-300 px-4 py-2">

            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Name</div>
              <div className='col-span-3'>{props?.visit.LeadID?.LeadName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Course:</div>
              <div className='col-span-3'>{props?.visit?.LeadServiceInterested?.ServiceName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Source:</div>
              <div className='col-span-3'>{props?.visit.LeadID?.LeadSource}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Followup Status:</div>
              <div className='col-span-3'>Visit Scheduled</div>
            </div>


            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Visit Scheduled Date:</div>
              <div className='col-span-3'>{props.visit?.LeadEventDate}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Representative:</div>
              <div className='col-span-3'> {props.visit?.LeadRep?.name}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Remarks:
          </div>
              <div className='col-span-3'>
              {props.visit?.LeadComments}</div>
            </div>


            <div className='flex items-center justify-center'>
              <NavLink to={`/leaddetails/${props?.visit?.LeadID?.id}`}>
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
  )
}

export default VisitSupport