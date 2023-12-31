import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import * as Yup from "yup"
import API_BASE_URL from "../../config";
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';


const Form2 = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");  
  const [button, setButton] = useState(false);

  return (
    <> 
    <div className="w-[100%] py-10 bg-blue-50">
    <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
    <Formik
  initialValues={{
    // ... your existing fields
    gender: '',
    dateOfBirth: '',
    occupation: '',
  }}
  onSubmit={(values) => {
    setButton(true);
    // Handle form submission
    axios.put(`${API_BASE_URL}/customer/${id}/`,{
      CustomerGender: values?.gender,
      CustomerDOB: values?.dateOfBirth,
      CustomerOccupation: values?.occupation
    },{
      headers : {
        'Authorization': `Bearer ${token}`
      }
    }).then((value)=>{
      toast.success('Details Update Sucessfully', {
        position: toast.POSITION.TOP_CENTER,
      });
    }).catch((err)=>{
      toast.error('Internal Server Error', {
        position: toast.POSITION.TOP_CENTER,
      });
    }).finally(()=>{
      setButton(false);
    })
  }}
  validationSchema={Yup.object().shape({
    // ... your existing validation rules
    gender: Yup.string().required('Gender is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
    occupation: Yup.string().required('Occupation is required'),
  })}
>
    <Form>

<div className='px-6'>    
<h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Customer Details</h2>
    {/* Gender Fields */}
    <div className="mb-4">
      <label className="text-green-600 mb-2 block">Gender</label>
         <div className="flex space-x-4">
        <div>
         <label className="inline-flex items-center">
            <Field
          type="radio"
          name="gender"
          value="male"
           className="form-radio text-green-600"
         />
        <span className="ml-2">Male</span>
      </label>
    </div>
    <div>
      <label className="inline-flex items-center">
        <Field
          type="radio"
          name="gender"
          value="female"
          className="form-radio text-green-600"
        />
        <span className="ml-2">Female</span>
      </label>
    </div>
    <div>
      <label className="inline-flex items-center">
        <Field
          type="radio"
          name="gender"
          value="other"
          className="form-radio text-green-600"
        />
        <span className="ml-2">Other</span>
      </label>
    </div>
  </div>
  <ErrorMessage name="gender" component="div" className="text-red-500" />
</div>

{/* Gender Fields End */}

{/* Date of birth Field Start */}
<div className="mb-4">
  <label className="text-green-600 mb-2 block">Date of Birth</label>
  <Field
    type="date"
    name="dateOfBirth"
    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
  />
  <ErrorMessage name="dateOfBirth" component="div" className="text-red-500" />
</div>
{/* Date of birth fields end */}

<div className="mb-4">
  <label className="text-green-600 mb-2 block">Occupation</label>
  <Field
    as="select"
    name="occupation"
    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
  >
    <option value="">Select Occupation</option>
    <option value="student">Student</option>
    <option value="engineer">Engineer</option>
    <option value="doctor">Doctor</option>
    {/* Add more occupation options as needed */}
  </Field>
  <ErrorMessage name="occupation" component="div" className="text-red-500" />
</div>


<div className="mb-4  space-x-4 text-right">
        <button
          type="submit"
          className=" bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
         {button ? <CircularProgress color='inherit' size={19}/> : "Update"}
        </button>
        <button
          type="button"
          className=" bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
        >
          Cancel
        </button>
      </div>
</div>
</Form>
  {/* ... your form rendering code with the new fields */}
</Formik>
</div>
</div>

    </>
  )
}

export default Form2
