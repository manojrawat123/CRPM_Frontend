import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from "../../config";
import LoadingPending from './LoadingPending';
import { CircularProgress } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ArrowBack } from '@mui/icons-material';

const AddFeesDetails = () => {

  const { id } = useParams()
  const [paymentObj, setPaymetObj] = useState();
  const [leadObj, setLeadObj] = useState();
  const [feesObj, setFeesObj] = useState();
  const [load, setLoad] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [selectedPaymentObj, setSelectedPaymentObj] = useState();

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const paymentFunc = async () => {
    if (id == undefined){
      return;
    }
    axios.get(`${API_BASE_URL}/payments/${id}/`, config).then((res) => {
      setPaymetObj(res.data);
      setFeesObj(res.data.feesDetails[0]);
      setLeadObj(res.data.lead_details);
      setLoad(true);
    }).catch((errr) => {
      console.log(errr);
    });
  }

  useEffect(() => {
    paymentFunc();
  }, [id])


  if (load === false) {
    return <>
      <LoadingPending />
    </>
  }
  else if (load === true) {
    return (
      <>
      <ToastContainer />
      <div className="w-[100%] py-10 bg-blue-50">
        <div className='md:mx-4 mx-2 bg-white rounded-full p-2 inline-block top-5 hover:bg-green-200 sticky'>
        <NavLink to={'/pendingfees'} className={'inline-block'}>
            <ArrowBack className='inline-block'/>
        </NavLink>
        </div>
        
        <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
        <h1
         className=" text-green-600 text-3xl  font-semibold text-center"> Payment Form </h1>
          <h2 className='bg-gray-100 py-4 px-6 mb-6 text-center'>
            <br className='sm:hidden'/><span className='underline text-green-600'>  {leadObj?.LeadName ? leadObj?.LeadName : "---"} Lead Id -: {leadObj?.id}</span>
           <br className='md:hidden'/><span className=" underline text-green-600 text-sm inline-block mx-10"> Paid Fees -: {paymentObj?.done_payment} </span>
          <br className='xl:hidden'/> <span className=" underline text-red-600 text-sm"> Pending Fees -: {paymentObj?.pending_payment} </span>
          </h2>
          <Formik  
            initialValues={{
              student: '',
              payment_id: '',
              next_due_date: '',
              fees_paid: '',
              receipt_number: '',
            }}
            validationSchema={Yup.object({
              student: Yup.string().required('This Field is required'),
              payment_id: Yup.string().required('This Field is required'), next_due_date: Yup.date()
                .min(new Date(), 'Date must be in the future')
                .required('This field is required'),
              fees_paid: Yup.number().required('This Field is required'),
              receipt_number: Yup.string().required('This Field is required'),
            })}
            onSubmit={(values, { resetForm }) => {
              setLoadingButton(true);
              const feeTracerData = {
                lead: leadObj.id,
                fee_received: values?.fees_paid,
                fee_created_datetime: feesObj?.fee_created_datetime,
                fee_payment_datetime: feesObj?.fee_payment_datetime,
                next_due_date: values?.next_due_date,
                receipt_number: values?.receipt_number,
                student: feesObj?.student,
                payment_mode: feesObj?.payment_mode,
                representative: feesObj?.representative,
                payment_type: feesObj?.payment_type,
                customer_status: 'Active',
                company: feesObj?.company,
                brand: feesObj?.brand,
                converted_id: feesObj?.converted_id,
                updated_by: feesObj?.updated_by,
                payment_id: values?.payment_id,
                next_payment_date: values?.next_due_date
              };
              console.log(feeTracerData)
              console.log(values?.fees_paid);
              console.log(selectedPaymentObj?.payment_amount);
              if (values?.fees_paid != selectedPaymentObj.payment_amount){
                  toast.error('Payment Amount Should Equal to Payment !!', {
                    position: toast.POSITION.TOP_CENTER,})
              setLoadingButton(false);
              return
              }
              console.log(feeTracerData);
              axios.post(`${API_BASE_URL}/feetracerpost/`, feeTracerData, {
                headers: {
                  'Authorization': `Bearer ${token}`
                }
              }).then((res) => {
                console.log("Final Response!!", res.data)
                toast.success('Fees Submit Sucessfully!!', {
                  position: toast.POSITION.TOP_CENTER,})
                  paymentFunc();
                  resetForm();
              }).catch((err)=>{
                console.log(err);
                toast.error('Fees Not added!!', {
                    position: toast.POSITION.TOP_CENTER,});
              }).finally(()=>{
                setLoadingButton(false);
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
                        <option>
                        {`${id}-${leadObj?.LeadName}-${paymentObj?.done_payment}`}
                        </option>

                      </Field>
                      <ErrorMessage name="student" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div>
                      <h4 className="text-green-600 mb-2">Payment ID</h4>
                      <Field
                        as="select"
                        name="payment_id"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        value={values.paymentId}
                        onChange={async event => {
                          handleChange(event);
                          const id_payment = event.target.value;

                          const selected_payment_obj = paymentObj?.payment_detail.find(
                            (element) => element.payment_id == id_payment);
                          setFieldValue('fees_paid', selected_payment_obj?.payment_amount);
                          setFieldValue('receipt_number', selected_payment_obj?.payment_confirmation_id);
                          setSelectedPaymentObj(selected_payment_obj);
                        }}
                      >
                        <option value="">----Select-----</option>
                        {paymentObj?.payment_detail?.map((element, index) => (
                          <option key={index} value={element.payment_id}>
                            {element.payment_id}-{element.name}-{element.payment_amount}-{element.payment_purpose.ServiceName}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="payment_id" component="div" className="text-red-500 mt-1" />
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Next Due Date</h4>
                      <Field
                        type="date"
                        name="next_due_date"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      />
                      <ErrorMessage name="next_due_date" component="div" className="text-red-500 mt-1" />
                    </div>

                    <div>
                      <h4 className="text-green-600 mb-2">Fees Paid</h4>
                      <Field
                        type="number"
                        name="fees_paid"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      />
                      <ErrorMessage name="fees_paid" component="div" className="text-red-500 mt-1" />
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-green-600 mb-2">Receipt Number</h4>
                    <Field
                      type="text"
                      name="receipt_number"
                      value={values.receipt_number}
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="receipt_number" component="div" className="text-red-500 mt-1" />
                  </div>
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                    >
                    {loadingButton?<> &nbsp;&nbsp;&nbsp;<CircularProgress color="inherit" size={19}/></>: <>PAY NOW</>}
                      
                    </button>

                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      </>
    );
  }
};

export default AddFeesDetails;


