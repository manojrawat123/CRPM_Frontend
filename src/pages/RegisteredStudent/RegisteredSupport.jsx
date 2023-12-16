import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API_BASE_URL from "../../config";
import { format } from 'date-fns';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';


const RegisteredSupport = (props) => {

  console.log(props.student);

  return (
    <>
      <tbody className='md:table-footer-group hidden'>
        <tr key={props.lead_obj?.id}>
          <td className="border border-gray-300 px-4 py-2"> <span className='font-bold'>
            ConvertID -: &nbsp;
          </span>
            {props?.student?.ConvertedID}
            <br />
            <span className='font-bold'>Total Fee -: &nbsp; </span>
            {props?.student?.total_payment}
            <br />
            <span className="font-bold">Pending Fee -: &nbsp;  </span>
            {props?.student?.pending_fees}
            <br />
            <span className="font-bold">Refund Fees -: &nbsp;  </span>
            {props?.student?.fees_refund}
            <br />
            <span className='font-bold'>Primary Course Name -: &nbsp; </span>
            {props?.student?.CourseID?.ServiceName}</td>
          <td className="border border-gray-300 px-4 py-2">

            <span className='font-bold '>
              Student Name -: &nbsp;
            </span>
            {props.student.lead_obj?.LeadName}
            <br />

            <span className='font-bold '>
              Phone -: &nbsp;
            </span>
            {props.student.lead_obj?.LeadPhone}
            <br />

            <span className='font-bold'>
              Lead  Source -: &nbsp;
            </span>
            {props.student.lead_obj?.LeadScourceId?.LeadSource}
            <br />


            <span className="font-bold">Representative  -: &nbsp; </span>
            {props.student.lead_obj?.LeadRepresentativePrimary?.name}
            <br />
          </td>


          <td className='border border-gray-300 px-4 py-2'>
            <span className='font-bold'>
              Lead Date -: &nbsp;
            </span>
            {props.student.lead_obj?.LeadDateTime ? format(new Date(props.student.lead_obj?.LeadDateTime), "dd MMM yyyy h a") : null}
            <br />
            <span className="font-bold">
              Converted Date -: &nbsp;
            </span>
            {props.student?.ConvertedDateTime ? format(new Date(props.student?.ConvertedDateTime), "dd MMM yyyy h a") : null}

            <br />
            <span className="font-bold">
              Last Payment Date -: &nbsp;
            </span>
            {props?.student?.PaymentID?.payment_date ? format(new Date(props?.student?.PaymentID?.payment_date), "dd MMM yyyy h a") : null}

            <br />
            <span className="font-bold">Course Start Date -: &nbsp; </span>
            {props.student?.CourseStartDate ? format(new Date(props.student?.CourseStartDate), "dd MMM yyyy") : null}
            <br />
            <span className="font-bold">Course End Date -: &nbsp; </span>
            {props?.student?.CourseEndDate ? format(new Date(props?.student?.CourseEndDate), "dd MMM yyyy") : null}

            <br />


          </td>


          <td className="border border-gray-300 px-4 py-2">
            <NavLink to={`/student_details/${props.student?.ConvertedID}`}>

              <button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
              >
                Show Details
              </button>
            </NavLink>
            <br />
            <br />
            <NavLink to={`/refund/${props.student?.ConvertedID}`}>

              <Button
              variant='outlined'
                >
                Refund Fees
              </Button>
            </NavLink>

          </td>
        </tr>
      </tbody>




      <tbody className='tabel md:hidden'>
        <tr key={props?.index} className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

          <td className="border border-gray-300 px-4 py-2">

            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>ConvertID  &nbsp; </div>
              <div className='col-span-3'>{props?.student?.ConvertedID}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Total Fee  &nbsp;</div>
              <div className='col-span-3'>{props?.student?.total_payment}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Pending Fee  &nbsp;</div>
              <div className='col-span-3'>{props?.student?.pending_fees}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Fees Refund &nbsp;</div>
              <div className='col-span-3'>{props?.student?.fees_refund}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Primary Course Name  &nbsp;</div>
              <div className='col-span-3'>{props?.student?.CourseID?.ServiceName}</div>
            </div>


            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Primary Course Name  &nbsp;</div>
              <div className='col-span-3'> {props?.student?.CourseID?.ServiceName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Phone  </div>
              <div className='col-span-3'>{props.student.lead_obj?.LeadPhone}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Lead  Source  &nbsp; </div>
              <div className='col-span-3'>
                {props.student.lead_obj?.LeadScourceId?.LeadSource}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Representative  &nbsp; </div>
              <div className='col-span-3'>
                {props.student.lead_obj?.LeadRepresentativePrimary?.name}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>   Lead Date  &nbsp;  </div>
              <div className='col-span-3'>
                {props.student.lead_obj?.LeadDateTime ? format(new Date(props.student.lead_obj?.LeadDateTime), "dd MMM yyyy h a") : null}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Converted Date  &nbsp;</div>
              <div className='col-span-3'>
                {props.student?.ConvertedDateTime ? format(new Date(props.student?.ConvertedDateTime), "dd MMM yyyy h a") : null}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Last Payment Date  &nbsp; </div>
              <div className='col-span-3'>
                {props?.student?.PaymentID?.payment_date ? format(new Date(props?.student?.PaymentID?.payment_date), "dd MMM yyyy h a") : null}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Course Start Date  &nbsp;</div>
              <div className='col-span-3'>
                {props.student?.CourseStartDate ? format(new Date(props.student?.CourseStartDate), "dd MMM yyyy") : null}   </div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Course End Date  &nbsp;</div>
              <div className='col-span-3'>
                {props?.student?.CourseEndDate ? format(new Date(props?.student?.CourseEndDate), "dd MMM yyyy") : null}    </div>
            </div>

<br />
            <div className='flex items-center justify-center'>
              <NavLink to={`/student_details/${props.student?.ConvertedID}`}>

                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
                >
                  Show Details
                </button>
              </NavLink>
            </div>
            <br />
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default RegisteredSupport