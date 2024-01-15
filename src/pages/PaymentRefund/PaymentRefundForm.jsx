import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import * as Yup from "yup";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context";
import API_BASE_URL from "../../config";
import { ToastContainer, toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const validationSchema = Yup.object().shape({
  leadDate: Yup.date()
    .required("Lead Date is required")
    .test("leadDate", "Lead Date should not be in the future", (value) => {
      const today = new Date();
      return new Date(value) <= today;
    }),
  leadTime: Yup.string().required("Lead Time is required"),
  studentName: Yup.string().required("Student Name is required"),
  studentEmail: Yup.string()
    .email("Invalid email")
    .required("Student Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[1-9]\d{7,14}$/, "Invalid phone number")
    .required("Phone Number is required"),
  paymode: Yup.string().required("Payment Mode is required"),
  amount: Yup.string().required("Amount is required"),
  paytype: Yup.string().required("Payment Type is required"),
  // reciptnumber: Yup.string().required('Recipt Number is required'),
});

const PaymentRefundForm = () => {
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  const formattedTime = today.toTimeString().slice(0, 5);
  const { id } = useParams();
  const [convertedData, setConvertedData] = useState();
  const [leadObj, setLeadObj] = useState();
  const [paymentmode, setPaymentMode] = useState([]);
  const [paymentTypeId, setPaymentTypeID] = useState();
  const [paymentType, setPaymentType] = useState([]);
  const [button , setButton] = useState(false);
  const { username, profileFunc, company } = useContext(DataContext);
  const brandID = localStorage.getItem("brand");
  const [payment_done, setPaymentDone] = useState();

  const token = localStorage.getItem("token");
  

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/refunddisplayview/${brandID}/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setConvertedData(response.data.converted_data);
        setPaymentMode(response?.data.payment_mode);
        setPaymentType(response?.data.payment_type[0]?.payment_type);
        setPaymentTypeID(response?.data.payment_type[0]?.payment_type_id);
        setLeadObj(response.data.converted_data.LeadID);
        setPaymentDone(response.data.payment_done);
      })
      .catch((err) => {
        console.log(err);
      })

    profileFunc();
  }, []);

  const initialValues = {
    leadDate: formattedDate,
    leadTime: formattedTime,
    studentName: leadObj?.LeadName,
    studentEmail: leadObj?.LeadEmail,
    phoneNumber: leadObj?.LeadPhone,
    paymode: "",
    amount: payment_done,
    leadRepresentative: "",
    paytype: "",
    // reciptnumber: '',
  };
  if (leadObj) {
    return (
      <>
      <ToastContainer />
        <div className="w-[100%] py-10 bg-blue-50">
          <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
            <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">
              Add Refund Details
            </h2>
            <Formik
              initialValues={initialValues} 
              //   onSubmit={addLeadFunc}
              onSubmit={(value, { resetForm }) => {
                setButton(true);
                console.log(payment_done < value.amount);
                console.log(payment_done , value.amount);
                if (payment_done < value?.amount){
                  
                  toast.error('Payment Refund Amount should Less than paid fees', {
                    position: toast.POSITION.TOP_CENTER,
                  });
                  setButton(false);
                  return;
                }
                  
                
                const payment_mode_display = value.paymode;
                const payment_mode_obj = paymentmode.find(
                  (mode) => mode.payment_mode === payment_mode_display
                );


                // Representative               
                // StudentID
               
                const postData = {
                  LeadID: leadObj.id,
                  FeeRefunded: value?.amount,
                  FeeRefundedDateTime: `${value?.leadDate} ${value?.leadTime}`,
                  // ReceiptNumber: 'ABC123',
                  PaymentMode: payment_mode_obj?.payment_mode_id || "",
                  StudentID: convertedData?.StudentID?.CustomerID,
                  ConvertedID: id,
                  UpdatedBY: username,
                  Representative: leadObj?.LeadRepresentativePrimary.id,
                  PaymentID: convertedData?.PaymentID.payment_id,
                  PaymentType: paymentTypeId,
                  CustomerStatus: "Active",
                  Company: company,
                  Brand: brandID,
                };
                axios
                  .post(`${API_BASE_URL}/refundfees/`, postData, {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  })
                  .then((response) => { 
                    console.log("Fee refund created:", response.data);
                    toast.success(`Payment Refunded Sucessfully ${value.amount}`, {
                      position: toast.POSITION.TOP_CENTER,
                    });
                    resetForm();
                  })
                  .catch((error) => {
                    console.error("Error creating fee refund:", error);
                  }).finally(()=>{
                    setButton(false);
                  });

              }}
              validationSchema={validationSchema}
            >
              {(values, handleSubmit, resetForm, setFieldValue) => (
                <Form>
                  <div className="px-6 pb-4">
                   
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-green-600 mb-2">Name</h4>
                        <div className={"w-full relative col-span-1 "}>
                          <Field
                            type="text"
                            name="studentName"
                            placeholder="Name"
                            required
                            className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                          />
                          <PersonIcon
                            className={
                              "absolute top-2 peer-focus:text-green-600 border-r-2 left-2 "
                            }
                          />
                        </div>
                        <ErrorMessage
                          name="studentName"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <div>
                          <h4 className="text-green-600 mb-2">Phone Number</h4>
                          <div className="w-full relative">
                            <Field
                              type="number"
                              name="phoneNumber"
                              placeholder="Phone Number"
                              className="pl-8 w-full py-2 px-3 border peer border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                            />
                            <LocalPhoneIcon className="absolute top-2 border-r-2 left-2  peer-focus:text-green-600" />
                          </div>
                          <ErrorMessage
                            name="phoneNumber"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Second Input Tag */}
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* NAme */}
                      <div>
                        <h4 className="text-green-600 mb-2">Student Email</h4>
                        <div className="w-full relative">
                          <Field
                            type="email"
                            name="studentEmail"
                            placeholder="Email"
                            required
                            className="w-full pl-9 py-2 px-3 peer border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                          />
                          <MailIcon className="absolute top-2 left-2 border-r-2  peer-focus:text-green-600 " />
                        </div>
                        <ErrorMessage
                          name="studentEmail"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div>
                        <div>
                          <h4 className="text-green-600 mb-2">
                            Representative
                          </h4>
                          <Field
                            as="select"
                            name="leadRepresentative"
                            className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                            defaultValue={leadObj?.LeadRepresentativePrimary?.id}
                          >
                            <option value="">Please Select</option>
                            <option
                              value={leadObj?.LeadRepresentativePrimary?.id}
                            >
                              {leadObj?.LeadRepresentativePrimary?.name}
                            </option>
                          </Field>
                          <ErrorMessage
                            name="leadRepresentative"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="w-full ">
                          <h4 className="text-green-600 mb-2">Refund Date</h4>
                          <Field
                            type="date"
                            name="leadDate"
                            className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                          />
                          <ErrorMessage
                            name="leadDate"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="w-full">
                          <h4 className="text-green-600 mb-2">Refund Time</h4>
                          <Field
                            type="time"
                            name="leadTime"
                            className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                          />
                          <ErrorMessage
                            name="leadTime"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div>
                          <h4 className="text-green-600 mb-2">Payment Mode</h4>
                          <Field
                            as="select"
                            name="paymode"
                            className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                            defaultValue={paymentmode[0].payment_mode}
                          >
                            <option value="">--------Select------</option>
                            {paymentmode?.map((element, index) => (
                              <option key={index} value={element?.payment_mode}>
                                {element.payment_mode}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            name="paymode"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                      <div>
                        <div>
                          <h4 className="text-green-600 mb-2">Amount</h4>
                          <Field
                            type="number"
                            name="amount"
                            required
                            className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                            placeholder="Amount"
                            
                          />
                          <ErrorMessage
                            name="amount"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div>
                          <h4 className="text-green-600 mb-2">Payment Type</h4>
                          <Field
                            as="select"
                            name="paytype"
                            className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                            defaultValue={paymentType[0]?.ServiceName}
                          >
                            <option value="">--------Select------</option>
                            {paymentType?.map((element, index) => (
                              <option key={index} value={element.ServiceName}> 
                                {element}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage
                            name="paytype"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                      >
                        {button ? <CircularProgress color="inherit" size={19} /> : "Refund Fees"}
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

export default PaymentRefundForm;
