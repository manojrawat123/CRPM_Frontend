import React, { useContext, useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { DataContext } from '../../context';
import axios from 'axios';
import API_BASE_URL from "../../config";
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useNavigate, useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';


const paymentSchema =Yup.object({
  payment_confirmation_id: Yup.string().required('This Field is required'),
  paymentDate: Yup.string().required('This Field is required'),
  paymentTime: Yup.string().required('This Field is required'),
  payment_purpose: Yup.string().required('This Field is required'),
  payment_mode_id: Yup.string().required('This Field is required'),
  payment_amount: Yup.number().required('This Field is required'),
  payment_currency: Yup.string().required('This Field is required'),
  payment_type: Yup.string().required('This Field is required'),
});


const PaymentForm = () => {

  const { id } = useParams();
  const { profileFunc, company, service, username, serviceFunc,paymentTypeModeFunc, paymentType, paymentmode } = useContext(DataContext);
  const selectedBrand = localStorage.getItem("brand");
  const [leadObj, setLeadObj] = useState();
  const [loadingButton,setLoadingButton] = useState(false);
  const [dataFetch, setDataFetched] = useState(false);



  const getLeadByIdFunc = async(id)=>{
    
  const token = localStorage.getItem("token");
    const value = await axios.get(`${API_BASE_URL}/lead/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setLeadObj(value.data);
    setDataFetched(true);
    console.log("Lead Object",leadObj);
  }


  useEffect(() => {
    serviceFunc();
    getLeadByIdFunc(id);
    paymentTypeModeFunc();
    profileFunc();
  }, [])


  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  const formattedTime = today.toTimeString().slice(0, 5);


  if(dataFetch===false){
    return <>
    Loading....</>
  }

  else if (dataFetch===true){
    return (
      <div className="w-[100%] py-10 bg-blue-50">
        
        <ToastContainer />
        <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
          <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Payment Form</h2>
        
          <Formik
            initialValues={{
              payment_confirmation_id: '',
              name: leadObj?.LeadName || '' ,
              email:  leadObj?.LeadEmail || '',
              phone:  leadObj?.LeadPhone || '',
              paymentDate: formattedDate,
              paymentTime: formattedTime,
              payment_purpose: '',
              representative: username,
              payment_mode_id: '',
              payment_amount: '',
              payment_type: '',
              payment_currency: '',
            }}
            validationSchema={paymentSchema}
  
            onSubmit={(values, { resetForm }) => {
              setLoadingButton(true);
              const authToken = localStorage.getItem('token');
              const combinedDatetime = `${values.paymentDate} ${values.paymentTime}`
              const requestData = {
                ...values,     
                "lead_id": id,  
                "company": company, 
                "brand": selectedBrand, 
                "payment_type_id": paymentType.payment_type_id,
                "payment_date": combinedDatetime,
              }
              console.log(requestData);
              axios.post(`${API_BASE_URL}/payments/`, requestData, {
                headers: {
                  'Authorization': `Bearer ${authToken}`
                }
              })
                .then(response => {
                  console.log('Response:', response.data);
                  toast.success(`${values.payment_type} Payment Added successfully For ${leadObj?.LeadName} Lead Id -: ${leadObj?.id}!!`, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 20000,

                  });
                })
                .catch(err => {
                  toast.error('Data submission failed', {
                    position: toast.POSITION.TOP_CENTER,
                  });
                  console.log(err);
                  console.log(values);
                  console.log(paymentType)
  
                }).finally(()=>{
                  setLoadingButton(false);
                });
              // resetForm();
            }
  
            }
          >
            {({ handleChange, values ,setFieldValue }) => (
              <Form>
                <div className="px-6 pb-4">
                  <h4 className="text-green-600 mb-2 text-center underline text-xl">Account</h4>
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="w-full relative">
  
                        <Field
                          type="text"
                          placeholder="Recipt No"
                          name='payment_confirmation_id'
                          required
                          className={" w-full pl-9 py-2 px-3 border peer border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600 "}
                        />
                        <InsertDriveFileIcon className='absolute  peer-focus:text-green-600 top-2 left-2 border-r-2 ' />
                      </div>
                      <ErrorMessage name="payment_confirmation_id" component="div" className="text-red-500 mt-1" />
  
  
                    </div>
  
                    <div>
                      <div className={"w-full relative col-span-1 "}>
  
                        <Field
                          type="text"
                          placeholder="Name"
                          name='name'
                          required
                          className="pl-8 w-full py-2 px-3 border peer border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />
                        <PersonIcon className={'absolute top-2 peer-focus:text-green-600 border-r-2 left-2 '} />
                      </div>
                      <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
  
                    </div>
                  </div>
  
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="w-full relative">
                        <Field
                          type="email"
                          placeholder="Email"
                          required
                          name='email'
                          className="w-full pl-9 py-2 px-3 peer border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />
                        <MailIcon className='absolute top-2 left-2 border-r-2  peer-focus:text-green-600 ' />
                      </div>
                      <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
                    </div>
  
                    <div>
                      <div className="w-full relative">
                        <Field
                          type="number"
                          placeholder="Phone Number"
                          required
                          name='phone'
                          className="pl-8 w-full py-2 px-3 border peer border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />
                        <LocalPhoneIcon className='absolute top-2 peer-focus:text-green-600 border-r-2 left-2 ' />
                      </div>
                      <ErrorMessage name="phone" component="div" className="text-red-500 mt-1" />
                    </div>
                  </div>
  
  
                  <div>
                    <h4 className="text-green-600 mb-2 underline text-xl text-center">Payment Details</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4">
                    <div className="w-full ">
                      <h4 className="text-green-600 mb-2">Payment Date</h4>
                      <Field
                        type="date"
                        name='paymentDate'
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      />
                      <ErrorMessage name="paymentDate" component="div" className="text-red-500 mt-1" />
                    </div>
                    <div className="w-full ">
  
  
                      <h4 className="text-green-600 mb-2">Payment Time</h4>
                      <Field
                        type="time"
                        name='paymentTime'
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      />
                      <ErrorMessage name="paymentTime" component="div" className="text-red-500 mt-1" />
                    </div>
                  </div>
  
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Purpose</h4>
                      <Field
                        as="select"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        name='payment_purpose'
                      >
                        <option value="">----Select-----</option>
                        {service?.map((element, index) => (
                          <option key={index} value={element.id}>
                            {element.ServiceName} {element.id}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="payment_purpose" component="div" className="text-red-500 mt-1" />
                    </div>
  
                    <div>
                      <h4 className="text-green-600 mb-2">Payment Type</h4>
                      <Field
                        as="select"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        name='payment_type'
                      >
                        <option value="">----Select------</option>
  
                        {paymentType?.payment_type?.map((element, index) => (
                          <option key={index} value={element}>
                            {element}
                          </option>
                        ))}
                      </Field>
  
                      <ErrorMessage name="payment_type" component="div" className="text-red-500 mt-1" />
                    </div>
                    
                  </div>
  
  
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Payment Mode</h4>
                      <Field
                        as="select"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        name='payment_mode_id'
                      >
                        <option value="">----Select------</option>
                        {paymentmode?.map((element, index) => (
                          <option key={index} value={element?.payment_mode_id}>
                            {element.payment_mode} 
                          </option>
                        ))}
                      </Field>
  
                      <ErrorMessage name="payment_mode_id" component="div" className="text-red-500 mt-1" />
                    </div>

                    <div>
                      <h4 className="text-green-600 mb-2">Payment Amount</h4>
                      <Field
                        type="number"
                        required
                        name='payment_amount'
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      />
                      <ErrorMessage name="payment_amount" component="div" className="text-red-500 mt-1" />
                    </div>
                  </div>
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Payment Currency</h4>
                      <Field
                        as="select"
                        name="payment_currency" // Make sure this matches the field name in your Formik form
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      >
                        <option value="">---- Select Payment Currency ----</option>
                        <option value="USD">USD - United States Dollar</option>
                        <option value="EUR">EUR - Euro</option>
                        <option value="JPY">JPY - Japanese Yen</option>
                        <option value="INR">INR - Indian Rupees</option>
                        {/* Add more currency options here */}
                      </Field>
                      <ErrorMessage name="payment_currency" component="div" className="text-red-500 mt-1" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                    >
                    {loadingButton?<CircularProgress color="inherit" size={19}/>:<> PAY NOW </>} 
                    </button>
                    
                  </div>
                </div>
              </Form>
            )}
          </Formik>

          
        </div>
      </div>
    );
  }

};

export default PaymentForm;
