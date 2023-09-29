import React, { useContext, useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { DataContext } from '../context';
import axios from 'axios';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from "yup";
import { useNavigate, useParams } from 'react-router-dom';

const PaymentForm = () => {
  const { id } = useParams()
  const { profileFunc, company, brand, service, setService, username, serviceFunc } = useContext(DataContext);
  const selectedBrand = localStorage.getItem("brand")
  const navigate = useNavigate()

  const [paymentmode, setPaymentMode] = useState([]); 
  const [paymentTypeId, setPaymentTypeID] = useState();
  const [paymentType, setPaymentType] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [paymentModeId, setPaymentModeId] = useState();
  const [leadObj, setLeadObj] = useState();
  const [dataFetch, setDataFetched] = useState(false);



  const getLeadByIdFunc = async(id)=>{
    
  const token = localStorage.getItem("token");
    const value = await axios.get(`http://localhost:8000/lead/${id}/`, {
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
    getLeadByIdFunc(id)
    // setLeadEmail(leadObj.LeadName)
    // alert("setLeadEmail", leadObj.LeadName)
    
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (selectedBrand !== null) {
      axios.get(`http://127.0.0.1:8000/paymentmode/${selectedBrand}/`, config).then((response) => {
        setPaymentMode(response?.data);
      }).catch((error) => {
        console.log(error)
      });

      axios.get(`http://127.0.0.1:8000/paymenttype/${selectedBrand}/`, config).then((response) => {
        setPaymentType(response?.data[0]?.payment_type);
        setPaymentTypeID(response?.data[0]?.payment_type_id)
      }).catch((error) => {
        console.log(error)
      })
    }
    else {
      navigate("")
    }
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
        <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
          <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Payment Form</h2>
         {console.log(leadObj)}
          <Formik
            initialValues={{
              payment_confirmation_id: '',
              name: leadObj?.LeadName || '' ,
              email:  leadObj?.LeadEmail || '', // Set default value to empty string if LeadEmail is undefined
              phone:  leadObj?.LeadPhone || '', // Set default value to empty string if LeadPhone is undefined        
              paymentDate: formattedDate,
              paymentTime: formattedTime,
              payment_purpose_name: '',
              representative: username,
              payment_mode: '',
              payment_amount: '',
              payment_type: '',
              payment_currency: '',
            }}
            validationSchema={Yup.object({
              payment_confirmation_id: Yup.string().required('This Field is required'),
              paymentDate: Yup.string().required('This Field is required'),
              paymentTime: Yup.string().required('This Field is required'),
              payment_purpose_name: Yup.string().required('This Field is required'),
              payment_mode: Yup.string().required('This Field is required'),
              payment_amount: Yup.number().required('This Field is required'),
              payment_currency: Yup.string().required('This Field is required'),
              payment_type: Yup.string().required('This Field is required'),
  
            })}
  
            onSubmit={(values, { resetForm }) => {
              const authToken = localStorage.getItem('token')
              const selectedServiceName = values.payment_purpose_name;
              const serviceObject = service.find(
                (service) => service.ServiceName === selectedServiceName
              );
              const payment_mode_display = values.payment_mode;
              const payment_mode_obj = paymentmode.find(
                (mode) => mode.payment_mode === payment_mode_display
              );
              console.log(payment_mode_display)
              console.log("payment_mode_obj:", payment_mode_obj);
              console.log("Selected Service Id", selectedServiceId);
              const combinedDatetime = `${values.paymentDate} ${values.paymentTime}`
              const requestData = {
                ...values,      // Formik form values
                "lead_id": id,  // Other additional fields
                "company": company,  // Other additional fields
                "brand": selectedBrand,  // Other additional fields
                "payment_purpose": serviceObject?.id || '',  // Other additional fields
                "payment_date": combinedDatetime, // Payment Date
                "payment_type_id": paymentTypeId,
                "payment_mode_id": payment_mode_obj?.payment_mode_id || '',
              }
              console.log(requestData);
              axios.post("http://127.0.0.1:8000/payments/", requestData, {
                headers: {
                  'Authorization': `Bearer ${authToken}`
                }
              })
                .then(response => {
                  console.log('Response:', response.data);
                })
                .catch(err => {
                  console.log('API Error:', err);
  
                });
              resetForm();
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
                        name='payment_purpose_name'
                      >
                        <option value="">----Select-----</option>
                        {service?.map((element, index) => (
                          <option key={index} value={element.ServiceName}>
                            {element.ServiceName}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="payment_purpose_name" component="div" className="text-red-500 mt-1" />
                    </div>
  
                    <div>
                      <h4 className="text-green-600 mb-2">Payment Type</h4>
                      <Field
                        as="select"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        name='payment_type'
                      >
                        <option value="">----Select------</option>
  
                        {paymentType?.map((element, index) => (
                          <option key={index} value={element.ServiceName}>
                            {element}
                          </option>
                        ))}
                      </Field>
  
                      <ErrorMessage name="payment_type" component="div" className="text-red-500 mt-1" />
                    </div>
                    {/* <div>
  
                  <h4 className="text-green-600 mb-2">Representative</h4>
                  <Field
                    
                    className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    name='representative'
                    readOnly
                    
                    />
                    
                    
                  
                  <ErrorMessage name="representative" component="div" className="text-red-500 mt-1" />
                    </div> */}
                  </div>
  
  
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Payment Mode</h4>
                      <Field
                        as="select"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        name='payment_mode'
                      >
                        <option value="">----Select------</option>
                        {paymentmode?.map((element, index) => (
                          <option key={index} value={element?.payment_mode}>
                            {element.payment_mode}
                          </option>
                        ))}
                      </Field>
  
                      <ErrorMessage name="payment_mode" component="div" className="text-red-500 mt-1" />
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
                    <br />
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                    >
                      PAY NOW
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
