import React, { useContext, useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../context';
import axios from 'axios';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as Yup from "yup";



const ConvertLead = () => {
  const { id } = useParams()
  const [paymentObj, setPaymetObj] = useState([]);
  const [customerEmail, setCustomerEmail] = useState();
  const [customerName, setCustomerName] = useState();
  const [customerPhone, setCustomerPhone] = useState();
  const [selectedPaymentObject,setSelectedPaymentObject] = useState();
  const { service ,serviceFunc,username,profileFunc, company,userId } = useContext(DataContext);

  useEffect(()=>{
    serviceFunc();
    paymentFunc();
    profileFunc();
  },[])

  const validationSchema = Yup.object().shape({
    package: Yup.string().required('Package is required'),
    classMode: Yup.string().required('Class Mode is required'),
    courseStartDate: Yup.string().required('Course Start Date is required'),
    courseEndDate: Yup.string().required('Course End Date is required'),
    paymentDate: Yup.string().required('Payment Date is required'),
    paymentId: Yup.string().required('Payment Id is required'),
    totalFee: Yup.number().required('Total Fee is required').positive('Total Fee must be positive'),
    feePaid: Yup.number().required('Fee Paid is required').positive('Fee Paid must be positive'),
    nextDueDate: Yup.string().required('Next Due Date is required'),
    receiptNumber: Yup.string().required('Receipt Number is required'),
  });

  


  const paymentFunc = async()=>{
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get(`http://127.0.0.1:8000/payments/${id}/`, config).then((res)=>{
    console.log(res.data);
    setPaymetObj(res.data);
    }).catch((errr)=>{
      console.log(errr);
    });
  }

  


  return (
    <>

    <h1 className='text-center text-3xl font-bold my-4 text-green-500 underline'>Convert Lead</h1>
    <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-3 my-4 px-16'>
        <div className='col-span-1  mx-4'>
            <span className='text-xl font-semibold'>Name: </span>
            <span>Samridh Goel</span>
        </div>
        <div className='col-span-1  mx-4'>
            <span className='text-xl font-semibold'>Phone: </span>
            <span>Samridh Goel</span>
        </div>
        <div className='col-span-1 mx-4'>
            <span className='text-xl font-semibold'>Lead Id: </span>
            <span>Samridh Goel</span>
        </div>
        <div className='col-span-1 mx-4'>
            <span className='text-xl font-semibold'>Brand Lead ID: </span>
            <span>{localStorage.getItem("brand")}</span>
        </div>


    </div>
     <div className="w-[100%] py-10 bg-blue-50">
      <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
        <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Course Details</h2>
        <Formik
        initialValues ={{
          package : '',
          classMode: '',
          courseStartDate: '',
          courseEndDate: '',
          paymentDate: '',
          paymentId: '',
          totalFee: '',
          feePaid: '',
          nextDueDate: '',
          receiptNumber: '',
          clientRepresentative: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          const authToken = localStorage.getItem('token')
          const brandID = localStorage.getItem("brand");
          const requestData = {
            ...values,      // Formik form values
            "Company": company,  // Other additional fields
            "Brand": brandID,  // Other additional fields
            "LeadID": id,  // Other additional fields
            "CustomerName": customerName,  // Other additional fields
            "CustomerEmail": customerEmail,  // Other additional fields
            "CustomerPhone": customerPhone,  // Other additional fields
          }
          console.log(requestData);
            axios.post("http://127.0.0.1:8000/customer/", requestData, {
              headers: {
                'Authorization': `Bearer ${authToken}`
              }
            })
              .then(response => {
                console.log('Response:', response.data);
                if (response.data){
                    const convertLeadData = {
                      LeadID: id, // Replace with a valid LeadID
                      CourseName: values?.package,
                      ClassMode: values?.classMode,
                      CourseStartDate: values?.courseStartDate,
                      CourseEndDate: values?.courseEndDate,
                      TotalFee: values?.totalFee,   
                      StudentID: response.data?.CustomerID, 
                      NextDueDate: values?.nextDueDate,
                      UpdateBY: username,
                      Representative: userId, 
                      Brand: brandID, // Replace with a valid BrandID
                      Company: company, // Replace with a valid CompanyID
                      PaymentID: values?.paymentId, // Replace with a valid PaymentID
                      LostSales: null,
                      LostSalesDate: null,
                      LostSalesReason: null,
                      SecureKey: null
                    };
                    console.log("HEllo",convertLeadData)
                  axios.post("http://127.0.0.1:8000/convertedlead/",convertLeadData, {
                    headers: {
                      'Authorization': `Bearer ${authToken}`
                    }
                  }).then((res)=>{
                    console.log(res)
                    if (res.data){
                      const feeTracerData = {
                        lead: id, // Replace with the actual Lead ID
                        fee_received: values?.feePaid, // Replace with the actual fee received amount  
                        fee_created_datetime: values.paymentDate, // Replace with the actual datetime
                        fee_payment_datetime: values.paymentDate, // Replace with the actual datetime
                        receipt_number: values?.receiptNumber, // Replace with the actual receipt number
                        student: response.data?.CustomerID, // Replace with the actual Student ID
                        payment_mode: selectedPaymentObject?.payment_mode_id                        , // Replace with the actual Payment Mode ID
                        representative: userId, // Replace with the actual Representative ID
                        payment_type: selectedPaymentObject?.payment_type_id, // Replace with the actual Payment Type ID
                        customer_status: 'Active', // Replace with the actual customer status
                        company: company, // Replace with the actual Company ID
                        brand: brandID, // Replace with the actual Brand ID
                        converted_id: res?.data.ConvertedID, // Replace with the actual Converted Lead ID
                        updated_by: username, // Replace with the actual updated by name
                        payment_id: values?.paymentId // Replace with the actual Payment ID
                      };
                      console.log("Final Posting data....",feeTracerData);
                      axios.post("http://127.0.0.1:8000/feetracer/", feeTracerData, {
                        headers: {
                          'Authorization': `Bearer ${authToken}`
                        }
                      }).then((res)=>{
                        console.log("Final Response!!",res.data)
                      })
                  }
                }).catch((err)=>{
                  console.log(err)
                })
                }
              })
              .catch(err => {
                console.log('API Error:', err);

              });

              // resetForm()
        }
      }

      
        >
          {({ handleChange, values ,setFieldValue }) => (
        <Form>
      <div className="px-6 pb-4">
        <h4 className="text-green-600 mb-2 text-center underline text-xl">Account</h4>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-green-600 mb-2">Package</h4>
            <Field
            as="select"
              name="package"
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
              
            >
              <option value="">----Please Select Package------</option>
              {service?.map((element, index) => (
                <option key={index} value={element.ServiceName}>
                  {element.ServiceName}
                </option>
              ))}
            </Field>
            <ErrorMessage name="package" component="div" className="text-red-500 mt-1" />
            


          </div>
          <div>
            <h4 className="text-green-600 mb-2">Class Mode</h4>
            <Field
            as="select"
              name="classMode"
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
              
            >
              <option value="">----Please Select Class Mode------</option>
              <option>Online</option>
              <option>Offline</option>
            </Field>
            <ErrorMessage name="classMode" component="div" className="text-red-500 mt-1" />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <h4 className="text-green-600 mb-2">Course Start Date</h4>
            <Field
              type="date"
              name="courseStartDate"
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
              
            />
            <ErrorMessage name="courseStartDate" component="div" className="text-red-500 mt-1" />
          </div>
          <div>
            <h4 className="text-green-600 mb-2">Course end Date</h4>
            <Field
              type="date"
              name="courseEndDate"
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
              
            />
            <ErrorMessage name="courseEndDate" component="div" className="text-red-500 mt-1" />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full">
            <h4 className="text-green-600 mb-2">Payment Date</h4>
            <Field
              type="date"
              name="paymentDate"
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            <ErrorMessage name="paymentDate" component="div" className="text-red-500 mt-1" />
          </div>
        </div>

        <div>
          <h4 className="text-green-600 mb-2 underline text-xl text-center">Payment Details</h4>
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-green-600 mb-2">Payment Id</h4>
            <Field
            as="select"
              name="paymentId"
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
              value={values.paymentId}
              onChange={async event => {
                handleChange(event); // Update Formik form state
                const id_payment = event.target.value;

                const selected_payment_obj = paymentObj.find(
                  (element) => element.payment_id == id_payment);
                  setSelectedPaymentObject(selected_payment_obj);
                  setFieldValue('totalFee', selected_payment_obj?.payment_amount);
                  setFieldValue('receiptNumber', selected_payment_obj?.payment_confirmation_id);
                  console.log(selected_payment_obj)
                  setCustomerName(selected_payment_obj?.name)
                  setCustomerEmail(selected_payment_obj?.email)
                  setCustomerPhone(selected_payment_obj?.phone)
              }}
            >
              <option value="">----Select-----</option>
              {paymentObj?.map((element, index) => (
                  <option key={index} value={element.payment_id}>
                    {element.payment_id}-{element.name}-{element.payment_amount}
                  </option>
                ))}
            </Field>
            <ErrorMessage name="paymentId" component="div" className="text-red-500 mt-1" />
          </div>
          <div>
            <h4 className="text-green-600 mb-2">Total Fee</h4>
            <Field
              type="number"
              name="totalFee"
              required
              placeholder='Total Fee'
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            <ErrorMessage name="totalFee" component="div" className="text-red-500 mt-1" />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-green-600 mb-2">Fee Paid</h4>
            <Field
              type="number"
              name="feePaid"
              required
              placeholder='Fee Paid'
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            <ErrorMessage name="feePaid" component="div" className="text-red-500 mt-1" />
          </div>
          <div className="w-full">
            <h4 className="text-green-600 mb-2">Next Due Date</h4>
            <Field
              type="date"
              name="nextDueDate"
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
              
            />
            <ErrorMessage name="nextDueDate" component="div" className="text-red-500 mt-1" />
          </div>
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-green-600 mb-2">Receipt Number</h4>
            <Field
              type="number"
              name="receiptNumber"
              required
              placeholder='Receipt Number'
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
            />
            <ErrorMessage name="receiptNumber" component="div" className="text-red-500 mt-1" />
          </div>
          <div>
            <h4 className="text-green-600 mb-2">Client's Representative</h4>
            <Field
            as="select"
              name="clientRepresentative"
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600" 
            >
              <option value={username}>{username}</option>
            </Field>
            <ErrorMessage name="clientRepresentative" component="div" className="text-red-500 mt-1" />
          </div>
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
        )}
    </Formik>

      </div>
    </div>
    </>
  )
}

export default ConvertLead