import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import Form2 from './Form2';
import Form3 from './Form3';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from "../../config";


const CustomerRegister = () => {

  const [profilePhoto, setProfilePhoto] = useState();
  const token = localStorage.getItem("token");
  const { id } = useParams();
  
    return (
      
      <div className="w-[100%] py-10 bg-blue-50">
    <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
        <form onSubmit={(e)=>{
          e.preventDefault()
          axios.put(`${API_BASE_URL}/customer/${id}/`,{
            CustomerPhoto: profilePhoto
          },{
            headers : {
              'Authorization': `Bearer ${token}`
            }
          }).then((value)=>{
            alert("Data Updated Sucessfully!!");
            console.log(value.data);
          }).catch((err)=>{
            console.log(err);
            alert("Error", err);
          })
        }}>
<div className='px-6'>
<h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Customer Registration Form</h2>
      {/* File Input for Profile Photo */}
      <div className="mb-4">
      

        <label className="text-green-600 mb-2 block">Profile Photo</label>
        <input
          type="file"
          name="profilePhoto"
          onChange={(e)=>{
            const uploadedFile = e.target.files[0];
            setProfilePhoto(uploadedFile)
          }}
          required
          accept=".jpg, .jpeg, .png"
          className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
        />
      </div>
      {/* Update and Cancel Buttons */}
      <div className="mb-4  space-x-4 text-right">
        <button
          type="submit"
          className=" bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
          >
          Update
        </button>
        <button
          type="button"
          className=" bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
          >
          Cancel
        </button>
      </div>
      </div>
      </form>
  


</div>


<Form2 />
<Form3 />
</div>

  )
}

export default CustomerRegister
