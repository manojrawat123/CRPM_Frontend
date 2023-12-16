import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import API_BASE_URL from "../../config";
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';


const Form3 = () => {
  
  const token = localStorage.getItem("token"); 
  const { id } = useParams();
  const [button, setButton] = useState();

  return (
    <>
      <div className="w-[100%] bg-blue-50">
        <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
          <Formik
            initialValues={{
              addressLine1: '',
              addressLine2: '',
              townCity: '',
              state: '',
              pincode: '',
              country: '',
            }}
            onSubmit={(values) => {
              // Handle form submission
              axios.put(`${API_BASE_URL}/customer/${id}/`,{
                CustomerShippingAddress: values?.addressLine1,
                CustomerBillingAddress: values?.addressLine2,
                CustomerLocation: `${values?.townCity} ${values?.state} ${values?.pincode} ${values?.country}`
    },{
      headers : {
        'Authorization': `Bearer ${token}`
      }
    }).then((value)=>{
      setButton(true)
      toast.success('Details Update Sucessfully', {
        position: toast.POSITION.TOP_CENTER,
      });
    }).catch((err)=>{
      toast.error('Internal Server Error', {
        position: toast.POSITION.TOP_CENTER,
      });
    }).finally(()=>{
      setButton(false)
    })
}}
            validationSchema={Yup.object().shape({
              // Validation for new fields
              addressLine1: Yup.string().required('Address Line 1 is required'),
              addressLine2: Yup.string(),
              townCity: Yup.string().required('Town/City is required'),
              state: Yup.string().required('State is required'),
              pincode: Yup.string().required('Pincode is required'),
              country: Yup.string(),
            })}
          >
            <Form>
              <div className="px-6">
                
<h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Adress Details</h2>
                {/* New Address Fields */}
                <div className="mb-4">
                  <label className="text-green-600 mb-2 block">Address Line 1</label>
                  <Field
                    
                    name="addressLine1"
                    rows="3"
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <ErrorMessage name="addressLine1" component="div" className="text-red-500" />
                </div>
                
                <div className="mb-4">
                  <label className="text-green-600 mb-2 block">Address Line 2</label>
                  <Field
                    
                    name="addressLine2"
                    rows="3"
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <ErrorMessage name="addressLine2" component="div" className="text-red-500" />
                </div>
                
                <div className="mb-4">
                  <label className="text-green-600 mb-2 block">Town/City</label>
                  <Field
                    type="text"
                    name="townCity"
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <ErrorMessage name="townCity" component="div" className="text-red-500" />
                </div>
                
                <div className="mb-4">
                  <label className="text-green-600 mb-2 block">State</label>
                  <Field
                    type="text"
                    name="state"
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <ErrorMessage name="state" component="div" className="text-red-500" />
                </div>
                
                <div className="mb-4">
                  <label className="text-green-600 mb-2 block">Pincode</label>
                  <Field
                    type="text"
                    name="pincode"
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <ErrorMessage name="pincode" component="div" className="text-red-500" />
                </div>
                
                <div className="mb-4">
                  <label className="text-green-600 mb-2 block">Country</label>
                  <Field
                    as="select"
                    name="country"
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  >
                    <option value="">Select Country</option>
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                    {/* Add more country options as needed */}
                  </Field>
                  <ErrorMessage name="country" component="div" className="text-red-500" />
                </div>
                {/* New Address Fields End */}
                {/* Update and Cancel Buttons */}
      <div className="mb-4  space-x-4 text-right">
        <button
          type="submit"
          className=" bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          {button ? <CircularProgress color='inherit' size={19}/> : "Update"}
        </button>
        <button
          type="button"
          className=" bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 sm:mt-0"
        >
          Cancel
        </button>
      </div>
                {/* ... (existing buttons and form closing code) */}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Form3;
