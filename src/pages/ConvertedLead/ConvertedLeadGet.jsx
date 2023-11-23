import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import MySupport from './Support';
import API_BASE_URL from "../../config";
import ConvertedLeadLoading from './ConvertedLeadLoading';


const ConvertedLeadGet = () => {
  const [data, setData] = useState();  
  const authToken = localStorage.getItem('token')  
  const convertedLeadGetFunc = () => {
    axios.get(`${API_BASE_URL}/convertedwithfeesdetails/`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    }).then((values) => {
      console.log(values.data);
      setData(values.data);
    }) 
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
    <div className="py-4 ">
      <div className="overflow-x-auto mx-4">
        <table className="table-auto min-w-full divide-y divide-gray-200 mx-4">
          <thead className="bg-gray-100  hidden md:table-header-group">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Ids
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Lead Information
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Fees Details 
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Lost Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Package
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Fees Due Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Links
              </th>
            </tr>
          </thead>

          <thead className="bg-purple-500 text-white md:hidden table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Converted Lead Details</th>
            </tr>
          </thead>
            {data ?  data?.map((item, index) => (
              <MySupport items={item} key={index}/>
            )) : <ConvertedLeadLoading />}
        </table> 
      </div>
    </div>
  );
};

export default ConvertedLeadGet;
