import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import API_BASE_URL from "../../config";


const MySupport = (props) => {

  console.log("----props items----");
  console.log(props?.items);


  return (
    <>

      <tbody className='md:table-footer-group hidden'>
        <tr key={props.index} className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>
          <td className="px-6 py-4 whitespace-nowrap"> <span className='font-bold mr-4'> Converted ID: </span> {props?.items?.ConvertedID}
            <br />
            <span className='font-bold mr-4'>
              Lead Id:
            </span>
            {props?.items?.LeadID}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className='font-bold mr-4'>
              Phone:
            </span>
            {props.items?.lead_obj?.LeadPhone}
            <br />
            <span className='font-bold mr-4'>
              Name:
            </span>
            {props.items?.lead_obj?.LeadName}
            <br />
            <span className='font-bold mr-4'>
              Lead Representative:
            </span>
            {props?.items?.lead_obj?.LeadRepresentativePrimary?.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className='font-bold mr-4'>
              Total Fees:
            </span>
            {props?.items?.TotalFee}
            <br />
            <span className='font-bold mr-4'>
              Net Total Fees:
            </span>
            {props?.items?.total_payment}
            <br />
            <span className='font-bold mr-4'>
              CollectedFee:
            </span>
            {props?.items?.payment_done}
            <br />
            <span className='font-bold mr-4'>
              Balance:
            </span>
            {props?.items?.pending_fees}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">{props?.items?.LostSales ? props?.items?.LostSales : "---"}</td>
          <td className="px-6 py-4 whitespace-nowrap">{props?.items?.CourseID.ServiceName ? props?.items?.CourseID.ServiceName : "---"}</td>
          <td className="px-6 py-4 whitespace-nowrap">{props?.items?.NextDueDate ? props?.items?.NextDueDate : "---"}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <NavLink to={`/addpendingfee/${props?.items?.LeadID}`}>
              <button className="bg-blue-500 hover:bg-blue-600 w-[10rem] text-white font-semibold py-2 px-4 rounded focus:outline-none">
                Add Pending Fee
              </button>
            </NavLink>
            <br />
            <br />

            <NavLink to={`/addlostsale/${props?.items?.ConvertedID}`}>

              <button className="bg-red-500 hover:bg-red-600 w-[10rem] text-white font-semibold py-2 px-4 rounded focus:outline-none">
                Add Lost Sale
              </button>
            </NavLink>
          </td>
        </tr>
      </tbody>




      {/* Phone Data */}
      <tbody className='tabel md:hidden'>
        <tr key={props.index} className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

          <td className="border border-gray-300 px-4 py-2">

            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>   Converted ID: </div>
              <div className='col-span-3'> {props?.items?.ConvertedID}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Lead Id:</div>
              <div className='col-span-3'>{props?.items?.LeadID}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Phone:</div>
              <div className='col-span-3'> {props.items?.lead_obj?.LeadPhone}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Name:</div>
              <div className='col-span-3'> {props.items?.lead_obj?.LeadName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Representative:</div>
              <div className='col-span-3'>{props?.items?.lead_obj?.LeadRepresentativePrimary?.name}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Total Fees:</div>
              <div className='col-span-3'>{props?.items?.lead_obj?.LeadRepresentativePrimary?.name}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Representative:</div>
              <div className='col-span-3'> {props?.items?.TotalFee}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Net Total Fees:</div>
              <div className='col-span-3'> {props?.items?.total_payment}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> CollectedFee:</div>
              <div className='col-span-3'>  {props?.items?.payment_done}</div>
            </div>


            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Balance:</div>
              <div className='col-span-3'>  {props?.items?.pending_fees}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lost Sale:</div>
              <div className='col-span-3'>{props?.items?.LostSales ? props?.items?.LostSales : "---"}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Course Name:</div>
              <div className='col-span-3'>{props?.items?.CourseID.ServiceName ? props?.items?.CourseID.ServiceName : "---"}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Next Due Date:</div>
              <div className='col-span-3'>{props?.items?.NextDueDate ? props?.items?.NextDueDate : "---"}</div>
            </div>


            <div className='flex items-center justify-center my-4'>
              <NavLink to={`/addpendingfee/${props?.items?.LeadID}`}>
                <button className="bg-blue-500 hover:bg-blue-600 w-[10rem] text-white font-semibold py-2 px-4 rounded focus:outline-none">
                  Add Pending Fee
                </button>
              </NavLink>
            </div>
            <div className='flex items-center justify-center my-4'>
              <NavLink to={`/addlostsale/${props?.items?.ConvertedID}`}>

                <button className="bg-red-500 hover:bg-red-600 w-[10rem] text-white font-semibold py-2 px-4 rounded focus:outline-none">
                  Add Lost Sale
                </button>
              </NavLink>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default MySupport;