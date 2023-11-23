import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context';
import { NavLink } from 'react-router-dom';
import { format } from "date-fns";
import axios from 'axios';
import API_BASE_URL from '../../config';

const LeadSupport = (props) => {
  
  const [myDate, setMyDate] = useState("");
  const [leadDate, setLeadDate] = useState("");

  useEffect(() => {
    const formattedDate2 = new Date(props.lead.LeadDateTime);
    const dateEx2 = format(formattedDate2, "dd-MMM-yyyy hh:mm a");
    setLeadDate(dateEx2);
  }, [myDate])

  return (
    <>
      <tbody className='md:table-footer-group hidden'>        
      <tr key={props.lead.id} className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>
          <td className="border border-gray-300 px-4 py-2">{props.lead.LeadName}</td>
          <td className="border border-gray-300 px-4 py-2">
            <span className='font-bold'>
              Lead Source:
            </span>

            {props.lead.LeadSource}
            <span className='font-bold'>
              <br />
              Lead Status:
            </span>
            {props.lead.LeadStatus}
            <span className="font-bold">
              <br />
              Lead Representative:
            </span>
            {props?.lead?.LeadRepresentativePrimary?.name}
            <br />
            <span className="font-bold">
              Course Name:
            </span>
            {props.lead.LeadServiceInterested?.map((value, index) => {
              return <span key={index}>{index == 0 ? null : <>,</>} {value?.ServiceName}</span>
            })
            }
          </td>
          <td className="border border-gray-300 px-4 py-2">
            <span className="font-bold">Lead Added:</span>
            {leadDate}
            <br />
            <span className="font-bold">Lead Last Call:</span>
            {myDate}
          </td>
          <td className="border border-gray-300 px-4 py-2">
            <NavLink to={`/leaddetails/${props.lead.id}`}>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
              >
                Show Detail
              </button>
            </NavLink>
          </td>
        </tr>
      </tbody>


      <tbody className='tabel md:hidden'>
        <tr key={props.lead.id} className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

          <td className="border border-gray-300 px-4 py-2">

            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Name</div>
              <div className='col-span-3'>{props.lead.LeadName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Lead Source:</div>
              <div className='col-span-3'>{props.lead.LeadSource}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Status:</div>
              <div className='col-span-3'>{props.lead.LeadStatus}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Representative:</div>
              <div className='col-span-3'>{props?.lead?.LeadRepresentativePrimary?.name}</div>
            </div>


            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Course Name:</div>
              <div className='col-span-3'> {props.lead.LeadServiceInterested?.map((value, index) => {
                return <span key={index}>{index == 0 ? null : <>,</>} {value?.ServiceName}</span>
              })
              }</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Added Date:</div>
              <div className='col-span-3'> {leadDate}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Last Call</div>
              <div className='col-span-3'>
                {myDate}</div>
            </div>


            <div className='flex items-center justify-center'>
              <NavLink to={`/leaddetails/${props.lead.id}`}>
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

export default LeadSupport
