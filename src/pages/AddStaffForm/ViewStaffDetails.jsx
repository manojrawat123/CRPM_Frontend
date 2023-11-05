import React, { useEffect, useState } from 'react'
import ViewStaffSupport from './ViewStaffSupport'
import axios from 'axios'
import API_BASE_URL from "../../config";


const ViewStaffDetails = () => {

    const token = localStorage.getItem("token");

    const [staffDetailsObj, setStaffDetailsObj] = useState([]);

    const userGetFunc = ()=>{
        axios.get(`${API_BASE_URL}/register/`,{
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((value)=>{
            setStaffDetailsObj(value.data);
            console.log(value.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        userGetFunc()
    },[])

  return (

    <>
    <div className='text-center'>
      <h1 className='font-bold text-3xl underline  my-4'>Staff Details</h1>
    </div>
    <div className="container mx-auto mt-8">
  <table className="min-w-full table-auto border">
    <thead>
      <tr className="bg-green-500 text-white">
        <th className="py-2 px-4 border">Name</th>
        <th className="py-2 px-4 border">Designation</th>
        <th className="py-2 px-4 border">Action</th>
      </tr>
    </thead>
    <tbody>
        {staffDetailsObj?.map((element, index)=>{
            return <ViewStaffSupport key={index} staff={element} />
        })}      
    </tbody>
  </table>
</div>
</>

  )
}

export default ViewStaffDetails
