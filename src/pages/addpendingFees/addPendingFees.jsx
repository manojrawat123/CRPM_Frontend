import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AddFeesDetails = () => {

  const { id } = useParams()
  const [paymentObj, setPaymetObj] = useState([]);
  const [customerEmail, setCustomerEmail] = useState();
  const [data, setData] = useState()
  const [feeReceived, setFeesRecived] = useState();
  const [customerName, setCustomerName] = useState();
  const [customerPhone, setCustomerPhone] = useState();
  const [selectedPaymentObject,setSelectedPaymentObject] = useState();
  const [leadObj, setLeadObj] = useState();
  const [feesObj, setFeesObj] = useState();
  const [load, setLoad] = useState(false);

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };


  const convertedLeadGetFunc = () => {
    axios.get(`http://localhost:8000/convertedlead/${id}/`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((values) => {
      console.log("Converted Data",values.data);
      setData(values?.data[0]);
    })
  }

  const feesTrackerFunc = ()=>{
    axios.get(`http://localhost:8000/feetracer/${id}/`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((values) => {
      console.log("Fees Data",values.data);
      setFeesObj(values.data[0]);
      const arrFees = values.data?.map((item,index)=>{
        return parseInt(item?.fee_received,10)
      })
        const sum = arrFees.reduce((accumulator, currentValue) => {
        return parseInt(accumulator, 10) +  parseInt(currentValue, 10);
    },);
    console.log("Sum:", sum); // This will also print the sum of the elements in the array
    setFeesRecived(sum);
})
}

  useEffect(()=>{
    const paymentFunc = async()=>{
      axios.get(`http://127.0.0.1:8000/payments/${id}/`, config).then((res)=>{
      console.log(res.data);
      setPaymetObj(res.data);
      setLoad(true);
      }).catch((errr)=>{
        console.log(errr);
      });
    }
    
    const leadFunc = ()=>{
      setLoad(false)
      axios.get(`http://localhost:8000/lead/${id}/`,config).then((values)=>{
        console.log("Lead Data",values.data)
        setLeadObj(values.data)
        setLoad(true)
      }).catch((err)=>{
        console.log(err)
      })
    }
    paymentFunc();
    leadFunc();
    convertedLeadGetFunc();  
    feesTrackerFunc();
  },[])

  useEffect(()=>{
    feesTrackerFunc()
  }, [feeReceived])
  // Define your options for Student and Payment ID fields
  



  
if (load===false){
  return <>
  Loading Please wait...
  </>
}
  else if (load=== true){
    return (
    <div className="w-[100%] py-10 bg-blue-50">
      <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
        <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">
          Payment Form
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
            payment_id: Yup.string().required('This Field is required'),
            next_due_date: Yup.date().required('This Field is required'),
            fees_paid: Yup.number().required('This Field is required'),
            receipt_number: Yup.string().required('This Field is required'),
          })}
          onSubmit={(values, { resetForm }) => {
            // Handle form submission logic here
            
            const feeTracerData = {
              lead: id, // Replace with the actual Lead ID
              fee_received: values?.fees_paid, // Replace with the actual fee received amount  
              fee_created_datetime: feesObj?.fee_created_datetime, // Replace with the actual datetime
              fee_payment_datetime: feesObj?.fee_payment_datetime, // Replace with the actual datetime
              receipt_number: values?.receipt_number, // Replace with the actual receipt number
              student: feesObj?.student, // Replace with the actual Student ID
              payment_mode: feesObj?.payment_mode, // Replace with the actual Payment Mode ID
              representative: feesObj?.representative, // Replace with the actual Representative ID
              payment_type: feesObj?.payment_type, // Replace with the actual Payment Type ID
              customer_status: 'Active', // Replace with the actual customer status
              company: feesObj?.company, // Replace with the actual Company ID
              brand: feesObj?.brand, // Replace with the actual Brand ID
              converted_id: feesObj?.converted_id, // Replace with the actual Converted Lead ID
              updated_by: feesObj?.updated_by, // Replace with the actual updated by name
              payment_id: values?.payment_id // Replace with the actual Payment ID
            };
            console.log(feeTracerData);
            axios.post("http://127.0.0.1:8000/feetracer/", feeTracerData, {
                        headers: {
                          'Authorization': `Bearer ${token}`
                        }
                      }).then((res)=>{
                        console.log("Final Response!!",res.data)
                        alert("Data posted sucessfully")
                      })
                    resetForm();
          }}
        >
          {({ handleChange, values ,setFieldValue }) => (
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
                      {`${id}-${leadObj?.LeadName}-${data?.TotalFee - feeReceived}`}
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
                        handleChange(event); // Update Formik form state
                        const id_payment = event.target.value;
        
                        const selected_payment_obj = paymentObj.find(
                          (element) => element.payment_id == id_payment);
                          setSelectedPaymentObject(selected_payment_obj);
                          setFieldValue('totalFee', selected_payment_obj?.payment_amount);
                          setFieldValue('receipt_number', selected_payment_obj?.payment_confirmation_id);
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

export default AddFeesDetails;


