import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import MySupport from './AssignBatchSupport';
import API_BASE_URL from "../../config";
import { Button } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import AssignBatchesLoading from './AssignBatchesLoading';


const AssignBatch = () => {
  const [data, setData] = useState();  
  const authToken = localStorage.getItem('token');
  const [batches, setBatches] = useState()
  const convertedLeadGetFunc = () => {
    axios.get(`${API_BASE_URL}/batchforconverted/`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    }).then((values) => {
      setData(values.data.converted_data);
      setBatches(values.data.batch_data);
    });
  }

  useEffect(()=>{    
    const fetchData = async () => {
      await Promise.all([
        convertedLeadGetFunc(),
      ]);
    }
    fetchData();
  },[])
  
  return (

    <>
        <div className='md:mx-4 mx-2 mt-4  rounded-full p-2 inline-block top-5'>
        <NavLink to={'/createnewbatch'} className={'inline-block'}>
            <Button variant="outlined">
            Create Batches &nbsp;&nbsp;
            <ArrowForward className='inline-block'/>
            </Button>
        </NavLink>
            
        </div>

    <div className="py-4 mx-4">
      <div className="overflow-x-auto">
      <table className="min-w-full">
          <thead className="bg-purple-500 text-white hidden md:table-header-group">
            <tr className="border border-gray-300">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Lead Details
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Converted Data
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Assign Batch
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                Course Date
              </th>
              
            </tr>
          </thead>

          <thead className="bg-purple-500 text-white md:hidden table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Assign Batch</th>
            </tr>
          </thead>
              
            {data ? data?.map((item, index) => (
              <MySupport items={item} key={index} batches={batches} convertedLeadGetFunc={convertedLeadGetFunc} index={index}/>
            )) : <AssignBatchesLoading />}
        </table>
      </div> 
    </div>
    </>
  );
};

export default AssignBatch;
