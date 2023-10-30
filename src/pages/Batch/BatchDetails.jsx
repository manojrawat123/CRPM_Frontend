
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from "../../config";
import EditBatchButton from './EditButton';

const BatchDetails = () => {

  const token = localStorage.getItem("token");
  const [batchObj, setBatchObj] = useState();

  const batchDetails = ()=>{
    axios.get(`${API_BASE_URL}/batch/`,
    {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then((value)=>{
      console.log(value.data);
      setBatchObj(value.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    batchDetails();
  },[])

 
  return (
    <>
    <div className=" mx-7 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-x-auto border-2">
        <table className="min-w-full divide-y divide-gray-200 table-fixed">
        <thead className="bg-gray-50">
        <tr>
          <th className="px-2 py-3 text- font-bold text-left uppercase w-[.5rem]">S. No</th>
          <th className="px-6 py-3 text- font-bold text-left uppercase w-[9rem]">Batch Id</th>
          <th className="px-6 py-3 text- font-bold text-left uppercase w-56">Details</th>
          <th className="px-6 py-3 text- font-bold text-left uppercase w-[16rem]">Time</th>
          <th className="px-6 py-3 text- font-bold text-left uppercase">Other Details</th>
          <th className="px-6 py-3 text- font-bold text-left uppercase "></th>
        </tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">
  {batchObj?.map((item, index) => (
    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
      <td className="px-6 py-4 text-sm text-gray-900">{index + 1}.</td>
      <td className="px-6 py-4 text-sm text-gray-900">{item?.BatchID}</td>
      <td className="px-6 py-4 text-sm text-gray-900">
      <div>
    <span className='font-bold text-black'>Created Date Time: </span>
        {item?.BatchCreatedDate?.substring(0,10)}
        </div>
        <div>
    <span className='font-bold text-black'>Batch Name: </span>
        {item?.BatchName}
        </div>
        </td>
      <td className="px-6 py-4 text-sm text-gray-900 w-40">
        <div>
          <span className='font-bold text-black'>Batch Mode: </span>
          {item?.BatchMode}
        </div>
        <div>
          <span className='font-bold text-black'>Active Status: </span>
          {item?.Status ? "Active": "Not Active"}
        </div>
        {/* <div>
          <span className='font-bold text-black'>Active Students: </span>
          {item?.followupDateTime}
        </div> */}
        <div>
          <span className='font-bold text-black'>Tags: </span>
          {item?.BatchTags}
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-900">
      <div>
    <span className='font-bold text-black'>Assigned Teachers: </span>
    {item?.BatchTeacherName}
        </div>
      <div>
    <span className='font-bold text-black'>Assigned Staff: </span>
    {item?.BatchStaffAssigned}
        </div>
      <div>
    <span className='font-bold text-black'>Batch Timing: </span>
    {item?.BatchTime?.substring(0,5)}  to {item?.BatchEndTime.substring(0,5)}
        </div>
      <div>
    <span className='font-bold text-black'>Batch StartDate: </span>
    {item?.BatchEndDate?.substring(0,10)}
        </div>
      <div>
    <span className='font-bold text-black'>Batch End Date: </span>
    {item?.BatchEndDate?.substring(0,10)}
        </div>
      </td>
    <td>

      {/* Edit Button!!  */}
     <EditBatchButton item={item} batchDetails={batchDetails}/>
     <button
  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
  type="button"
  onClick={()=>{
    axios.put(`http://localhost:8000/batch/${item?.BatchID}/`,{
      Status: item.Status == true ? false: true,
    },{
      headers: {
        "Authorization": `Bearer ${token}`
      }
      }).then((value)=>{
        console.log(value);
        batchDetails()
      }).catch((err)=>{
        console(err);
      })
      console.log("Button Clicked");
  }}
  >
{item.Status? "Mark InActive": "Active"}
  </button>
      {/* Edit Button End!! */}
    </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default BatchDetails;
