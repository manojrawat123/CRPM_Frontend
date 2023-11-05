import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Alert, AlertTitle, CircularProgress } from '@mui/material';
import { DataContext } from '../../context';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from "../../config";


const LeadUpdateForm = (props) => {
    const [leadUpdateButton, setLeadUpdateButton] = useState(false);
    const { leadGetById, leadByIdObj } = useContext(DataContext);
    const [updateStatus, setUpdateStatus] = useState(false);
    const token = localStorage.getItem("token");
    const { id } = useParams(); 

    useEffect(()=>{
        leadGetById(id);
        
        console.log(leadByIdObj);
    },[])

  const initialValues = {
    name: leadByIdObj?.LeadName,
    email: leadByIdObj?.LeadEmail,
    phone: leadByIdObj?.LeadPhone,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.number().required('phone is required'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setLeadUpdateButton(true);
      setSubmitting(false); 
    
    axios.put(`${API_BASE_URL}/lead/${id}/`, {
        "LeadName": values.name, 
    "LeadPhone":values.phone, 
    "LeadEmail":values.email, 
}, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then((value)=>{
        console.log(value);
        setLeadUpdateButton(false);
        setUpdateStatus("success")
      }).catch((err)=>{
        console.log(err);
        setUpdateStatus("error")
        setLeadUpdateButton(false);
      })
  };

  return (
<>{updateStatus? <Alert severity={`${updateStatus}`}>
  <AlertTitle>{updateStatus=="success"?"Success": "Error"}</AlertTitle>
  {updateStatus == "success"? "Data Updated Sucessfully": "Some Error Occured"} — <strong>check it out!</strong>
</Alert>: <></>}
    {/* Modal content goes here */}
    <div
  className={`fixed ${props?.modalIsOpen ? 'block' : 'hidden'}`}
  style={{ top: '2.53rem', right: '2.53rem' }}
>
  <button
    className="hover:bg-red-500 text-red-500 hover:text-white p-4 text-4xl font-extrabold"
    onClick={() => props.setModalIsOpen(false)}
  >
    X
  </button>
</div>
    <div className="w-full">
        <h1 className='text-2xl font-bold text-center text-green-500 underline my-4 '>Update Detail  </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        
      >
        {({values, handleSubmit, resetForm, setFieldValue, handleBlur }) => (
          <Form className="bg-green-100 2xl:w-[90vw] xl:[w-80vw] md:[w-70vw]  shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={(e)=>{
                    setFieldValue("name", e.target.value)
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage name="name" component="p" className="text-red-500 text-xs italic" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email:
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={(e)=>{
                    setFieldValue("email", e.target.value)
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-xs italic" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Phone Number:
              </label>
              <Field
                name="phone"
                id="phone"
                value={values.phone}
                onChange={(e)=>{
                    setFieldValue("phone", e.target.value)
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <ErrorMessage name="phone" component="p" className="text-red-500 text-xs italic" />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {leadUpdateButton?<>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CircularProgress color="inherit" size={20} />&nbsp;&nbsp;&nbsp;&nbsp;</>:"Update" }
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
    </>
  );
};

export default LeadUpdateForm;
