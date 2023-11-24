import React, { useEffect, useState } from 'react'
import ViewStaffSupport from './ViewStaffSupport'
import axios from 'axios'
import API_BASE_URL from "../../config";
import StaffLoading from './StaffLoading';


const ViewStaffDetails = () => {

  const token = localStorage.getItem("token");

  const [staffDetailsObj, setStaffDetailsObj] = useState([]);

  const userGetFunc = () => {
    axios.get(`${API_BASE_URL}/register/`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then((value) => {
      setStaffDetailsObj(value.data);
      console.log(value.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    userGetFunc()
  }, [])

  return (

    <>
      <div className='text-center'>
        <h1 className='font-bold text-3xl underline  my-4'>Staff Details</h1>
      </div>
      <div className=" mx-4 mt-8">
      <table className="min-w-full">
          <thead className="bg-purple-500 text-white hidden md:table-header-group">
            <tr className="border border-gray-300">
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Designation</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>


          <thead className="bg-purple-500 text-white md:hidden table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Staff Details</th>
            </tr>
          </thead>

          {staffDetailsObj ? staffDetailsObj?.map((element, index) => {
            return <ViewStaffSupport key={index} staff={element} />
          }) : <StaffLoading />}
        </table>
      </div>
    </>

  )
}

export default ViewStaffDetails
