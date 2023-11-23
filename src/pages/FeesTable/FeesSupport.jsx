import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyModal from './Modal';
import API_BASE_URL from "../../config";
import { NavLink } from 'react-router-dom';


const FeesSupport = (props) => {
  console.log(props)
  return (
    <>
    <tbody className='md:table-footer-group hidden'>
      <tr key={props?.index} className={props.index % 2 === 0 ? `bg-green-100` : `bg-gray-100`}>
        <td className="border border-gray-300 py-2 px-10">
          <span className='font-bold'>
            Fees Id -: &nbsp;
          </span>
          {props?.fees?.id}
          <br />
          <span className='font-bold'>Lead Id -: </span>&nbsp;
          {props?.fees?.lead?.id}
          <br />
          
          
          <span className="font-bold">Customer Id -: &nbsp;</span>
          {props?.fees?.student}
          <br />
          <span className='font-bold'>
            Converted Id -:&nbsp;
          </span>
          {props?.fees?.converted_id?.ConvertedID}
          <br />
          <span className='font-bold'>
            Payment Id -:&nbsp;
          </span>
          {props?.fees?.payment_id}
          <br />
          
         
        </td>
        <td className='border border-gray-300 px-4 py-2'>
          <span className="font-bold">Pending Fees -:&nbsp;</span>
          {parseInt(props?.fees?.converted_id?.TotalFee, 10) - parseInt(props?.fees?.fee_received, 10) }
          <br />
          <span className="font-bold">Payment Date:</span>&nbsp;
          {props?.fees?.fee_payment_datetime}
          <br />
          <span className='font-bold'>Payment Mode -:&nbsp; </span>
          {props?.fees?.payment_mode?.payment_mode}
          <br />
         
          <span className='font-bold'>Payment Type -:&nbsp;</span>
          {props?.fees?.payment_type?.payment_type_display}
          <br />
         
          <span className="font-bold">
            Fees Recived -:&nbsp;
          </span>
          {props?.fees?.fee_received}
          <br />
          <span className="font-bold">Total Fees:</span>&nbsp;
          {props?.fees.converted_id?.TotalFee}
          <br />
        </td>
        <td>
        <span className='font-bold '>
            Customer Name:&nbsp;
          </span>
          {props?.fees.lead?.LeadName}
          <br />
          <span className='font-bold'>Lead Scource:</span>&nbsp;
          {props?.fees?.lead?.LeadScourceId?.LeadSource}
          <br />
          <span className='font-bold'>Package:</span>&nbsp;&nbsp;
          {props?.fees?.converted_id?.CourseID?.ServiceName}
          <br />
          <span className='font-bold'>Representative:</span>&nbsp;
          {props?.fees?.lead?.LeadRepresentativePrimary?.name}
          <br />
          <span className="font-bold">
            Receipt No. :
          </span>
          {props?.fees?.receipt_number}
          <br />
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">
          {/* <NavLink to={`/leaddetails/${props?.fees?.lead?.id}`}> */}
          <MyModal fees_data={props?.fees} name={props?.fees.lead?.LeadName} total_fees={props?.fees.converted_id?.TotalFee}/>
          {/* </NavLink> */}
        </td>
      </tr>
      </tbody>


      <tbody className='tabel md:hidden'>
        <tr className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>
          <td className="border border-gray-300 px-4 py-2">
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Fees Id</div>
              <div className='col-span-3'>{props?.fees?.id}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Lead Id :</div>
              <div className='col-span-3'>{props?.fees?.lead?.id}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Customer Id  :</div>
              <div className='col-span-3'> {props?.fees?.student}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Converted Id :</div>
              <div className='col-span-3'> {props?.fees?.converted_id?.ConvertedID}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Payment Id:</div>
              <div className='col-span-3'>{props?.fees?.payment_id}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Pending Fees:</div>
              <div className='col-span-3'> {parseInt(props?.fees?.converted_id?.TotalFee, 10) - parseInt(props?.fees?.fee_received, 10) }</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Payment Mode :</div>
              <div className='col-span-3'> {props?.fees?.payment_mode?.payment_mode}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Payment Type</div>
              <div className='col-span-3'>
              {props?.fees?.payment_type?.payment_type_display}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Fees Recived </div>
              <div className='col-span-3'>
              {props?.fees?.fee_received}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Total Fees</div>
              <div className='col-span-3'>
              {props?.fees.converted_id?.TotalFee}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Customer Name</div>
              <div className='col-span-3'>
              {props?.fees?.lead?.LeadName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Package</div>
              <div className='col-span-3'>
              {props?.fees?.converted_id?.CourseID?.ServiceName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Scource</div>
              <div className='col-span-3'>
              {props?.fees?.lead.LeadScourceId.LeadSource}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Representative</div>
              <div className='col-span-3'>
              {props?.fees?.lead?.LeadRepresentativePrimary?.name}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Receipt No.</div>
              <div className='col-span-3'>
              {props?.fees?.receipt_number}</div>
            </div>
            <div className='flex items-center justify-center'>
          
            <MyModal fees_data={props?.fees} name={props?.fees.lead?.LeadName} total_fees={props?.fees.converted_id?.TotalFee} />
         
            </div>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default FeesSupport