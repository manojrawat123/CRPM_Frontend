import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import { DataContext } from '../../context';
import API_BASE_URL from "../../config";
import { NavLink } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import { Button, CircularProgress } from '@mui/material';


const validationSchema = Yup.object().shape({
  representative: Yup.string().required('Representative is required'),
  package: Yup.string().required('Package is required'),
  amount: Yup.number().min(0, 'Amount must be at least 0').required('Amount is required'),
});

function PaymentLinkForm() {

    const { profileFunc, username, service, userId} = useContext(DataContext);
    const token = localStorage.getItem('token');
    const [loadingButton, setLoadingButton] = useState(false);

    useEffect(()=>{
        profileFunc()
    },[])

  return (
    <>
    
    <ToastContainer />
      <div className='md:mx-4 mx-2 mt-4 rounded-full p-2 inline-block top-5 hover:bg-green-200 sticky'>
        <NavLink to={'/paymentlink'} className={'inline-block'}>
            <Button variant='outlined'>
            <ArrowBack className='inline-block'/>
            Show Payment Link
            </Button>
        </NavLink>
        </div>
        

    <div className="w-full md:w-[80%] mx-auto md:mt-4 p-4 bg-green-100 rounded-md">
      <h2 className="text-2xl text-green-800 font-semibold mb-4 text-center bg-gray-200 py-4 underline px-4">Create Payment Link</h2>
      <Formik
        initialValues={{
          representative: '',
          package: '',
          amount: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
          setLoadingButton(true)
          axios.post(`${API_BASE_URL}/paymentlink/`, {         
            Package :values.package,
            Amount :values.amount,
            RepID :userId,
            RepName :username,
            PaymentAmount: values.amount
          }, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }).then((value)=>{
            
            console.log(value.data);
            toast.success(`Payment Link Created Sucessfully for ${values.package} of ${values.amount} rupees!!`, {
              position: toast.POSITION.TOP_CENTER
            });
             resetForm();
          }).catch((err)=>{
            console.log(err)
            toast.error('Payment Link Not Created!!', {
              position: toast.POSITION.TOP_CENTER
            });
          }).finally(()=>{
            setLoadingButton(false);
          })
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="representative" className="block text-green-700 font-semibold">
                Representative
              </label>
              <Field
                as="select"
                id="representative"
                name="representative"
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select Representative</option>
                <option >{username}</option>
              </Field>
              <ErrorMessage name="representative" component="div" className="text-red-600" />
            </div>

            <div className="mb-4">
              <label htmlFor="package" className="block text-green-700 font-semibold">
                Package
              </label>
              <Field
                as="select"
                id="package"
                name="package"
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select Package</option>
                {service?.map((value)=>{
                    return <option>{value.ServiceName}</option>
                })}
              </Field>
              <ErrorMessage name="package" component="div" className="text-red-600" />
            </div>

            <div className="mb-4">
              <label htmlFor="amount" className="block text-green-700 font-semibold">
                Amount
              </label>
              <Field
                type="number"
                id="amount"
                name="amount"
                className="border rounded-md p-2 w-full"
              />
              <ErrorMessage name="amount" component="div" className="text-red-600" />
            </div>

        <div className='text-center'>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md"
              >
                
             {loadingButton ? <> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<CircularProgress color="inherit" size={19} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</> : <>   Create Payment Link</>}
           
            </button>
                </div>
          </Form>
        )}
      </Formik>
    </div>
    <br />
    <br />
    </>
  );
}

export default PaymentLinkForm;
