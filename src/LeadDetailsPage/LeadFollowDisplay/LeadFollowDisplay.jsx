import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import LeadFollowupSupport from './LeadFollowupSupport';
import API_BASE_URL from '../../config';
import { DataContext } from '../../context';
import Skeleton from 'react-loading-skeleton';


const LeadFollowDisplay = () => {
  const { profileFunc,
  } = useContext(DataContext)
  const { id } = useParams()
    
  const [leadfollowUpObj, setLeadFollowUpObj] = useState();
  

  const apiUrl = `${API_BASE_URL}/leadfollowup/${id}/`;
const authToken = localStorage.getItem("token");

// Define a function to make the GET request
const fetchData = async () => {
try {
const response = await axios.get(apiUrl, {
headers: {
  Authorization: `Bearer ${authToken}`,
},
});

// Handle the response data here
console.log(response.data);
setLeadFollowUpObj(response.data)
} catch (error) { 
// Handle any errors here
console.error('Error fetching data:', error);
}
};
    useEffect(()=>{
      profileFunc()

// Call the fetchData function to make the GET request
fetchData();

},[])
  return (
    <>
    <div className='m-8'>
  <div className="overflow-x-auto">
  <table className="min-w-full table-auto border border-gray-300 ">
    <thead className='bg-purple-500 text-white'>
      <tr>
        <th className="border border-gray-300 p-2">Date & Time</th>
        <th className="border border-gray-300 p-2">Follow Up Details</th>
        <th className="border border-gray-300 p-2">More Details</th> 
      </tr>
    </thead>
    {leadfollowUpObj? <>
      <tbody>
     { leadfollowUpObj?.map((element, index)=>{
    return <LeadFollowupSupport leadfollowUpObjEl={element} key={index}/>
  })} 
  </tbody>
  </>:<Skeleton count={5} height={20}/>}   
  
  </table>

</div>

  </div>
<Skeleton count={5} />
<Skeleton count={5} />
<Skeleton count={5} />
<Skeleton count={5} />
<Skeleton count={5} />
<Skeleton count={5} />
    </>
  )
}

export default LeadFollowDisplay
