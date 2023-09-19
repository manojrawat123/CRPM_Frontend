import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AddLostSale = () => {
    
 const { id } = useParams()
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  
      return (
      <div className="w-[100%] py-10 bg-blue-50">
        <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
          <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">
            Add Lost Sale
          </h2>
          <Formik
            initialValues={{
              student: '',
              payment_id: '',
              receipt_number: '',
            }}
            validationSchema={Yup.object({
              student: Yup.string().required('This Field is required'),
              payment_id: Yup.string().required('This Field is required'),
              receipt_number: Yup.string().required('This Field is required'),
            })}
            onSubmit={(values)=>{
                    axios.put(`http://localhost:8000/convertedlead/${id}/`,{
                        LostSales: values?.payment_id,
                        LostSalesReason: values?.receipt_number,
                        LostSalesDate:  new Date().toISOString().substring(0,10)
                    }, config).then((value)=>{
                        console.log(value.data);

                    }).catch((err)=>{
                        console.log(err)
                    })

                    console.log({LostSales: values?.payment_id,
                        LostSalesReason: values?.receipt_number,
                        LostSalesDate:  new Date().toISOString().substring(0,10)})
            }}
          >
              <Form>
                <div className="px-6 pb-4">
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Student</h4>
                      <Field
                        as="select"
                        name="student"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      >
                        <option value="">---- Select Student ----</option>
                        <option>Student
                        </option>
                      </Field>
                      <ErrorMessage name="student" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div>
                      <h4 className="text-green-600 mb-2">Lost sale Amount</h4>
                      <Field
                        type="number"
                        name="payment_id"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      >
                      </Field>
                      <ErrorMessage name="payment_id" component="div" className="text-red-500 mt-1" />
                    </div>
                  </div>  
                  <div className="mb-4">
                    <h4 className="text-green-600 mb-2">Lost Sale Reason</h4>
                    <Field
                      type="text"
                      name="receipt_number"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="receipt_number" component="div" className="text-red-500 mt-1" />
                  </div>
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                    >
                      PAY NOW
                    </button>
                  </div>
                </div>
              </Form>        
          </Formik>
        </div>
      </div>
    );
    }
    


export default AddLostSale
