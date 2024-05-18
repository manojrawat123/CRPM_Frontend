import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from "../../config";
import { ArrowBack } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
import { DataContext, DataProvider } from '../../context';
import { useContext } from 'react';
import LoadingPending from '../addpendingFees/LoadingPending';
import { toast } from 'react-toastify';



const AddLostSale = () => {

  const [loadingButton, setLoadingButton] = useState(false);
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const { paymentFunc, paymentObj } = useContext(DataContext);
  const { id } = useParams();

  useEffect(() => {
    paymentFunc(id, setLoad);
  }, [])

  if (load === false) {
    return <>
      <LoadingPending />
    </>
  }
  else if (load === true) {
    return (<div className="w-[100%] py-10 bg-blue-50">
      <div className='md:mx-4 mx-2 bg-white rounded-full p-2 inline-block top-5 hover:bg-green-200 sticky'>
        <NavLink to={'/pendingfees'} className={'inline-block'}>
          <ArrowBack className='inline-block' />
        </NavLink>
      </div>
      <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
        <h1
          className=" text-green-600 text-3xl  font-semibold text-center"> Payment Form </h1>
        <h2 className='bg-gray-100 py-4 px-6 mb-6 text-center'>
          <br className='sm:hidden'/><span className='underline text-green-600'> Converted ID {id}</span>
           <br className='md:hidden'/><span className=" underline text-green-600 text-sm inline-block mx-10"> Total Fees -: {paymentObj?.total_fees} </span>
           <br className='md:hidden'/><span className=" underline text-green-600 text-sm inline-block mx-10"> Paid Fees -: {paymentObj?.done_payment} </span>
          <br className='xl:hidden'/> <span className=" underline text-red-600 text-sm"> Pending Fees -: {paymentObj?.pending_payment} </span>
        </h2>
        <Formik
          initialValues={{
            student: '',
            payment_amount: '',
            lost_sale_reason: '',
          }}
          validationSchema={Yup.object({
            student: Yup.string().required('This Field is required'),
            // payment_amount: Yup.string().required('This Field is required'),
            // lost_sale_reason: Yup.string().required('This Field is required'),
          })}
          onSubmit={(values) => {
            console.log("----idhar chala mai udhar chala!!");
            setLoadingButton(true);
            axios.put(`${API_BASE_URL}/convertedlead/${id}/`, {
              LostSales: values?.payment_amount,
              LostSalesReason: values?.lost_sale_reason,
              LostSalesDate: new Date().toISOString().substring(0, 10)
            }, ).then((value) => {
              toast.success(`Lost Sales Updated Successfully of ${paymentObj?.lead_details?.LeadName} of amount ${values?.payment_amount}`, {
                position: toast.POSITION.TOP_CENTER,
              });
                navigate("/pendingfees")
              
            }).catch((err) => {
              toast.error(`Internal Server Error`, {
                position: toast.POSITION.TOP_CENTER,
              });
            }).finally(() => {
              setLoadingButton(false);
            })
            console.log({
              LostSales: values?.payment_amount,
              LostSalesReason: values?.lost_sale_reason,
              LostSalesDate: new Date().toISOString().substring(0, 10)
            })
          }}
        >
           {({ handleChange, values, setFieldValue }) => (
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
                    <option>{id} - {paymentObj?.lead_details?.LeadName} {paymentObj?.pending_payment}</option>
                  </Field>
                  <ErrorMessage name="student" component="div" className="text-red-500 mt-1" />
                </div>
                <div>
                  <h4 className="text-green-600 mb-2">Lost sale Amount</h4>
                  <Field
                    type="number"
                    name="payment_amount"
                    // value={paymentObj?.pending_payment}
                    value={values.payment_amount}
                      onChange={(e) => setFieldValue('payment_amount', e.target.value)}
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  >
                  </Field>
                  <ErrorMessage name="payment_amount" component="div" className="text-red-500 mt-1" />
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-green-600 mb-2">Lost Sale Reason</h4>
                <Field
                  type="text"
                  name="lost_sale_reason"
                  className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                />
                <ErrorMessage name="lost_sale_reason " component="div" className="text-red-500 mt-1" />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                >
                  {loadingButton ? <> &nbsp;&nbsp;&nbsp;<CircularProgress color="inherit" size={19} /></> : <>Add Lost Sale</>}
                </button>
              </div>
            </div>
          </Form>
             )}
        </Formik>
      </div>
    </div>)
    }  
}



export default AddLostSale
