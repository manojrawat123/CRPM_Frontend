import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_BASE_URL from "../../config";
import { format } from 'date-fns';


const PaymentSupport = (props) => {
  
console.log(props)

  return (
    <>
    <tbody className='md:table-footer-group hidden'>
      <tr key={props?.index}>
        <td className="border border-black px-4 py-2">
        <span className="font-bold">Name -: &nbsp; </span>
          {props?.payment?.name}
          <br />
          <span className="font-bold">Representative -: &nbsp;</span>
          {props?.payment?.lead_id?.LeadRepresentativePrimary?.name}
          <br /><span className='font-bold'>
            Email -: &nbsp;
          </span>
          {props?.payment?.email}
          <br />
        </td>
        <td className="border border-black px-4 py-2">
          <span className='font-bold'>
            Payment Id -: &nbsp;
          </span>

          {props?.payment?.payment_id}
          <br />
          <span className='font-bold '>
            Payment Confirmation Id -: &nbsp;
          </span>
          {props?.payment?.payment_confirmation_id}
          <br />
          <span className='font-bold'>Payment Date -: &nbsp;</span>
          {props?.payment?.payment_date ? format(new Date(props?.payment?.payment_date) , "dd MMM yyyy h a") : null}
          
          <br />
        </td>
        <td className='border border-black px-4 py-2'>
          <span className='font-bold'>
            <br /> 
            Payment Type -: &nbsp; 
          </span>
          {props?.payment?.payment_type_id?.payment_type_display}
          <br />
          <span className="font-bold">
            Payment Mode -: &nbsp;
          </span>
          {props?.payment?.payment_mode_id?.payment_mode_display}
          <br />
          <span className="font-bold">
            Amount -: &nbsp;
          </span>
          {props?.payment?.payment_amount}
          <br />
          <span className="font-bold">Remaining -: &nbsp;</span>
          {props.payment?.fees_data != false ? parseInt(props?.payment?.payment_amount, 10) -  parseInt(props.payment?.fees_data?.fee_received) : props.payment?.payment_amount}
          <br />
          
        </td>
        <td className="border border-black px-4 py-2">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
                Show Detail
          </button>
        </td>
      </tr>
      </tbody>



      <tbody className='tabel md:hidden'>
        <tr className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

          <td className="border border-gray-300 px-4 py-2">

            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Name</div>
              <div className='col-span-3'> {props?.payment?.name}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Representative</div>
              <div className='col-span-3'> {props?.payment?.lead_id?.LeadRepresentativePrimary?.name}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Email</div>
              <div className='col-span-3'>{props?.payment?.email}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Payment Id</div>
              <div className='col-span-3'> {props?.payment?.payment_id}</div>
            </div>


            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Payment Confirmation Id</div>
              <div className='col-span-3'>  {props?.payment?.payment_confirmation_id}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Payment Date</div>
              <div className='col-span-3'>  {props?.payment?.payment_date ? format(new Date(props?.payment?.payment_date) , "dd MMM yyyy h a") : null}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Payment Type</div>
              <div className='col-span-3'>
                {props?.payment?.payment_type_id?.payment_type_display}
              </div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Payment Mode</div>
              <div className='col-span-3'>
              {props?.payment?.payment_mode_id?.payment_mode_display}
              </div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Amount  </div>
              <div className='col-span-3'>
              {props?.payment?.payment_amount}
              </div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Remaining </div>
              <div className='col-span-3'>
              {props.payment?.fees_data != false ? parseInt(props?.payment?.payment_amount, 10) -  parseInt(props.payment?.fees_data?.fee_received) : props.payment?.payment_amount}
              </div>
            </div>


            <div className='flex items-center justify-center'>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
                Show Detail
          </button>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default PaymentSupport