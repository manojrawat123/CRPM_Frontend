import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import API_BASE_URL from "../../config";
import { toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';

const LeadDetailsUpdate = () => {

  const token = localStorage.getItem("token");
  const [customer, setCustomer] = useState();

  const [button, setButton] = useState();
  const { id } = useParams();

  const customerGetFunc = () => {
    setButton(true);
    axios                   
      .get(`${API_BASE_URL}/customerdetails/${id}/`, { 
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }) 
      .then((values) => {
        setCustomer(values.data);
        console.log(values.data);
      })
      .catch((err) => {
        console.log(err);
      }).finally(()=>{
        setButton(false);
      });
  };

  useEffect(()=>{
    customerGetFunc();
  },[])

  if (!customer){
    return <div className='h-[75vh] flex justify-center items-center'>
      <CircularProgress />
    </div>
  }

  return (
    <>
      <div className="w-[100%] bg-blue-50">
        <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
          <Formik
            initialValues={{
              LeadName: customer?.LeadID.LeadName,
              LeadPhone:customer?.LeadID.LeadPhone,
              LeadEmail: customer?.LeadID.LeadEmail,
            }}
            onSubmit={(values) => {
              // Handle form submission  
              axios.put(`${API_BASE_URL}/lead/${id}/`, { 
                LeadName: values?.LeadName,
                LeadPhone: values?.LeadPhone,
                LeadEmail: values?.LeadEmail,
              }, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              }).then((value) => {
                toast.success('Details Update Successfully', {
                  position: toast.POSITION.TOP_CENTER,
                });
              }).catch((err) => {
                toast.error('Internal Server Error', {
                  position: toast.POSITION.TOP_CENTER,
                });
              })
            }}
            validationSchema={Yup.object().shape({
              // Validation for new fields
              LeadName: Yup.string().required('Lead Name is required'),
              LeadPhone: Yup.string().required('Lead Phone is required'),
              LeadEmail: Yup.string().email('Invalid email address').required('Lead Email is required'),
            })}
          >
            <Form>
              <div className="px-6">
                <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Lead Details</h2>

                {/* New Lead Fields */}
                <div className="mb-4">
                  <label className="text-green-600 mb-2 block">Lead Name</label>
                  <Field
                    name="LeadName"
                    type="text"
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <ErrorMessage name="LeadName" component="div" className="text-red-500" />
                </div>

                <div className="mb-4">
                  <label className="text-green-600 mb-2 block">Lead Phone</label>
                  <Field
                    name="LeadPhone"
                    type="tel"
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <ErrorMessage name="LeadPhone" component="div" className="text-red-500" />
                </div>

                <div className="mb-4">
                  <label className="text-green-600 mb-2 block">Lead Email</label>
                  <Field
                    name="LeadEmail"
                    type="email"
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <ErrorMessage name="LeadEmail" component="div" className="text-red-500" />
                </div>
                {/* New Lead Fields End */}

                {/* Update and Cancel Buttons */}
                <div className="mb-4 space-x-4 text-right">
                  <button
                    type="submit"
                    className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                  >
                    {button ? <CircularProgress color='inherit' size={19}/> : "Update"}
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 sm:mt-0"
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

export default LeadDetailsUpdate;
