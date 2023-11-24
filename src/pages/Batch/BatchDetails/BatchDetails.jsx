
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from "../../../config";
import EditBatchButton from '../EditButton';
import BatchSupport from './BatchSupport';
import { ToastContainer } from 'react-toastify';

const BatchDetails = () => {

  const token = localStorage.getItem("token");
  const [batchObj, setBatchObj] = useState();

  const batchDetails = () => {
    axios.get(`${API_BASE_URL}/batch/`,
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then((value) => {
        console.log(value.data);
        setBatchObj(value.data);
      }).catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    batchDetails();
  }, [])


  return (
    <>
    <ToastContainer />
      <div className=" mx-7 py-8 md:py-0">
        <h1 className='text-center underline text-green-500 font-bold text-2xl my-4 hidden md:block'>Batch Details</h1>
        <div className="bg-white rounded-lg shadow-md overflow-x-auto border-2">
          <table className="min-w-full">
            <thead className="bg-purple-500 text-white hidden md:table-header-group">
              <tr className="border border-gray-300">
                <th className="px-2 py-3 text- font-bold text-left uppercase">Batch Details</th>
                <th className="px-6 py-3 text- font-bold text-left uppercase ">Staff & Other Details</th>
                <th className="px-6 py-3 text- font-bold text-left uppercase">Batch Date & Time</th>
                <th className="px-6 py-3 text- font-bold text-left uppercase">Status</th>
              </tr>
            </thead>


            <thead className="bg-purple-500 text-white md:hidden table-header-group">
              <tr className="border border-gray-300">
                <th className="px-4 py-2 border border-gray-300">Batch Details</th>
              </tr>
            </thead>



            {batchObj?.map((item, index) => (
              <BatchSupport index={index} item={item} batchDetails={batchDetails} />
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default BatchDetails;
