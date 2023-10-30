import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import { DataContext } from '../../context';
import API_BASE_URL from "../../config";


const validationSchema = Yup.object().shape({
  representative: Yup.string().required('Representative is required'),
  package: Yup.string().required('Package is required'),
  amount: Yup.number().min(0, 'Amount must be at least 0').required('Amount is required'),
});

function PaymentLinkForm() {

    const { profileFunc, username, service, userId} = useContext(DataContext)
    const token = localStorage.getItem('token')
    useEffect(()=>{
        profileFunc()
    },[])

  return (
    <div className="w-[30rem] p-4 bg-green-100 rounded-md">
      <h2 className="text-2xl text-green-800 font-semibold mb-4 text-center">Create Payment Link</h2>
      <Formik
        initialValues={{
          representative: '',
          package: '',
          amount: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // Handle form submission here
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
            
            console.log(value.data)
            alert("Data Submitted Successfully!!")
          }).catch((err)=>{
            console.log(err)
            console.log(err?.response?.data)
            alert("Congrulatins Some Error Occured!!")
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
              Create Link
            </button>
                </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PaymentLinkForm;
