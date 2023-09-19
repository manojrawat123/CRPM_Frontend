
import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import ConvertLeadLinkSupport from './ConvertLeadLinkSupport';

const ConvertedLeadLink = () => {


  const [data, setData] = useState([]);  
  const authToken = localStorage.getItem('token')  
  const convertedLeadGetFunc = () => {
    axios.get(`http://localhost:8000/convertedlead/`, {
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
        // leadFunc(),
        // feesTrackerFunc(),
      ]);
      // const totalFeesPaid = feesObj?.reduce((acc, item) => acc + item.feesPaid, 0);
      // setFeesRecived(totalFeesPaid)
    }
    fetchData();
  },[])
  return (
    <>
     <div className="py-4 ">
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Details
              </th>
             
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Links
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.map((item, index) => (
              <ConvertLeadLinkSupport items={item} key={index}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default ConvertedLeadLink
