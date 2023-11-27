import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API_BASE_URL from "../../config";
import { format } from 'date-fns';


const MySupport = (props) => {

  const [batchId, setBatchId] = useState();
  const [batchStudentData, setBatchStudentData] = useState();
  const convertedId = props?.items?.ConvertedID
  const authToken = localStorage.getItem('token');

  console.log(props);

  return (
    <>
      <tbody className='md:table-footer-group hidden'>
        <tr>
          <td className="px-6 py-4 whitespace-nowrap">

            <span className='font-bold mr-4'>
              Name -
            </span>
            {props.items.LeadID?.LeadName}
            <br />
            <span className='font-bold mr-4'>
              Lead Scource -
            </span>
            {props.items.LeadID?.LeadSource}
            <br />
            <span className='font-bold mr-4'>
              Lead Representative -
            </span>
            {props?.items?.UpdateBY}
            <br />
            
            <span className='font-bold mr-4'>
              Phone -
            </span>
            {props.items.LeadID?.LeadPhone}
            <br />


            <span className='font-bold mr-4'>
              Brand Name -
            </span>
            {props?.items?.Brand?.BrandName}


          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className='font-bold mr-4'>

              Converted ID - </span> {props?.items?.ConvertedID}
            <br />
            <span className='font-bold mr-4'>
              Lead Id -
            </span>
            {props?.items?.LeadID.id}
            <br />
            <span className='font-bold mr-4'>
              Lead Date -
            </span>
            {props.items.LeadID?.LeadDateTime ? format(new Date(props.items.LeadID?.LeadDateTime?.substring(0, 10)), "dd MMM yyyy") : "----"}
            <br />
            <span className='font-bold mr-4'>
              Converted Date -
            </span>
            {props?.items?.ConvertedDateTime ? format(new Date(props?.items?.ConvertedDateTime?.substring(0, 10)), "dd MMM yyyy") : "----"}
            <br />
            <span className='font-bold mr-4'>
              Package -
            </span>
            {props?.items?.CourseID.ServiceName}
            <br />

          </td>

          <td className="px-6 py-4 whitespace-nowrap text-center">
            {props.items.assign_batch_details != null ? <>{`${props.items.assign_batch_details?.BatchID.BatchName} (${props.items.assign_batch_details?.BatchID?.BatchTags})`} <br /> <span className='text-sm'>{props.items.assign_batch_details?.BatchID?.BatchTime.substring(0, 5)} - {props.items.assign_batch_details?.BatchID?.BatchEndTime.substring(0, 5)}</span>
              <br />
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                type="button"
                onClick={() => {
                  axios.delete(`${API_BASE_URL}/batchstudent/${convertedId}/`, {
                    headers: {
                      "Authorization": `Bearer ${authToken}`
                    }
                  }).then((value) => {
                    console.log(value.data);
                    props.convertedLeadGetFunc();
                  }).catch((err) => {
                    console.log(err);
                  })
                }}
              >
                Remove
              </button></> : ""}

            {props.items.assign_batch_details == null ? <> <select
              id="selectOption"
              name="selectOption"
              value={batchId}
              onChange={(e) => {
                setBatchId(e.target.value);
              }}
              className=" px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-[80%]"
            >
              <option value={null}>Select Batch</option>
              {props.batches?.map((element, index) => {
                return <option value={element.BatchID} key={index}>{`${element.BatchName} (${element.BatchTags})`} {element.BatchTime.substring(0, 5)} - {element.BatchEndTime.substring(0, 5)}</option>
              })}
            </select> &nbsp; 
            <br />
              <button
                className='bg-blue py-1 px-4 hover:bg-blue-600 bg-blue-500 rounded text-white font-bold mt-4'
                onClick={() => {
                  if (batchId != null && batchId != undefined) {
                    axios.post(`${API_BASE_URL}/batchstudent/`, {
                      BatchID: batchId,
                      CustomerID: props?.items?.StudentID,
                      ConvertedID: props?.items?.ConvertedID,
                      LeadId: props?.items?.LeadID.id,
                    }, {
                      headers: {
                        "Authorization": `Bearer ${authToken}`
                      }
                    }).then((value) => {
                      console.log(value.data);

                      props.convertedLeadGetFunc();
                    }).catch((err) => {
                      console.log(err);
                    })
                  }
                }}>Assign</button></> : ""}

          </td>
          <td className="px-6 py-4 whitespace-nowrap">

            <span className='font-bold mr-4'>
              Course Start Date -
            </span>
            {props?.items?.CourseStartDate ? format(new Date(props?.items?.CourseStartDate), "dd MMM yyyy") : "----"}
            <br />
            <span className='font-bold mr-4'>
              Course End Date -
            </span>
            {props?.items?.CourseEndDate ? format(new Date(props?.items?.CourseEndDate), "dd MMM yyyy") : "----"}
            <br />
            <span className='font-bold mr-4'>
              Course Expiry Date -
            </span>
            {props?.items?.CourseExpiryDate ? format(new Date(props?.items?.CourseExpiryDate), "dd MMM yyyy") : "----"}
            <br />

          </td>
        </tr>
      </tbody>


      <tbody className='tabel md:hidden'>
        <tr  className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

          <td className="border border-gray-300 px-4 py-2">

            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Name </div>
              <div className='col-span-3'> {props.items.LeadID?.LeadName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Lead Scource </div>
              <div className='col-span-3'>  {props.items.LeadID?.LeadSource}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Lead Representative </div>
              <div className='col-span-3'> {props?.items?.UpdateBY}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Phone </div>
              <div className='col-span-3'> {props.items.LeadID?.LeadPhone}</div>
            </div>


            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Brand Name</div>
              <div className='col-span-3'> {props?.items?.Brand?.BrandName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Converted ID</div>
              <div className='col-span-3'> {props?.items?.ConvertedID}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Id</div>
              <div className='col-span-3'>
              {props?.items?.LeadID.id}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Lead Date </div>
              <div className='col-span-3'>
              {props.items.LeadID?.LeadDateTime ? format(new Date(props.items.LeadID?.LeadDateTime?.substring(0, 10)), "dd MMM yyyy") : "----"}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Converted Date</div>
              <div className='col-span-3'>
              {props?.items?.ConvertedDateTime ? format(new Date(props?.items?.ConvertedDateTime?.substring(0, 10)), "dd MMM yyyy") : "----"}
              </div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Package </div>
              <div className='col-span-3'>
              {props?.items?.CourseID.ServiceName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Course Start Date </div>
              <div className='col-span-3'>
              {props?.items?.CourseStartDate ? format(new Date(props?.items?.CourseStartDate), "dd MMM yyyy") : "----"}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Course End Date  </div>
              <div className='col-span-3'>
              {props?.items?.CourseEndDate ? format(new Date(props?.items?.CourseEndDate), "dd MMM yyyy") : "----"}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Course Expiry Date </div>
              <div className='col-span-3'>
              {props?.items?.CourseExpiryDate ? format(new Date(props?.items?.CourseExpiryDate), "dd MMM yyyy") : "----"}</div>
            </div>


            <div className='text-center mt-4 p-4 rounded-xl bg-gray-200'>
            {props.items.assign_batch_details != null ? <>{`${props.items.assign_batch_details?.BatchID.BatchName} (${props.items.assign_batch_details?.BatchID?.BatchTags})`} <br /> <span className='text-sm'>{props.items.assign_batch_details?.BatchID?.BatchTime.substring(0, 5)} - {props.items.assign_batch_details?.BatchID?.BatchEndTime.substring(0, 5)}</span>
              <br />
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
                type="button"
                onClick={() => {
                  axios.delete(`${API_BASE_URL}/batchstudent/${convertedId}/`, {
                    headers: {
                      "Authorization": `Bearer ${authToken}`
                    }
                  }).then((value) => {
                    console.log(value.data);
                    props.convertedLeadGetFunc();
                  }).catch((err) => {
                    console.log(err);
                  })
                }}
              >
                Remove
              </button></> : ""}

            {props.items.assign_batch_details == null ? <> <select
              id="selectOption"
              name="selectOption"
              value={batchId}
              onChange={(e) => {
                setBatchId(e.target.value);
              }}
              className=" px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-[80%]"
            >
              <option value={null}>Select Batch</option>
              {props.batches?.map((element, index) => {
                return <option value={element.BatchID} key={index}> {`${element.BatchName} (${element.BatchTags})`} {element.BatchTime.substring(0, 5)} - {element.BatchEndTime.substring(0, 5)}</option>
              })}
            </select> &nbsp; 
            <br />
              <button
                className='bg-blue py-1 px-4 hover:bg-blue-600 bg-blue-500 rounded text-white font-bold mt-4'
                onClick={() => {
                  if (batchId != null && batchId != undefined) {
                    axios.post(`${API_BASE_URL}/batchstudent/`, {
                      BatchID: batchId,
                      CustomerID: props?.items?.StudentID,
                      ConvertedID: props?.items?.ConvertedID,
                      LeadId: props?.items?.LeadID.id,
                    }, {
                      headers: {
                        "Authorization": `Bearer ${authToken}`
                      }
                    }).then((value) => {
                      console.log(value.data);

                      props.convertedLeadGetFunc();
                    }).catch((err) => {
                      console.log(err);
                    })
                  }
                }}>Assign</button></> : ""}
            </div>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default MySupport;