import React, { useContext, useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import API_BASE_URL from "../../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@mui/material";

const ConvertLeadForm = () => {
  const { id } = useParams();
  const [paymentObj, setPaymetObj] = useState([]);
  const [customerEmail, setCustomerEmail] = useState();
  const [customerName, setCustomerName] = useState();
  const [customerPhone, setCustomerPhone] = useState();
  const [selectedPaymentObject, setSelectedPaymentObject] = useState();
  const [loadingButton, setLoadingButton] = useState();

  const {
    service,
    serviceFunc,
    username,
    profileFunc,
    company,
    userId,
    leadGetById,
    leadByIdObj,
  } = useContext(DataContext);

  useEffect(() => {
    serviceFunc();
    paymentFunc();
    profileFunc();
    leadGetById(id);
  }, []);

  const validationSchema = Yup.object().shape({
    package: Yup.string().required("Package is required"),
    classMode: Yup.string().required("Class Mode is required"),
    courseStartDate: Yup.string().required("Course Start Date is required"),
    courseEndDate: Yup.string().required("Course End Date is required"),
    fee_payment_datetime: Yup.string().required("Payment Date is required"),
    payment_id: Yup.string().required("Payment Id is required"),
    totalFee: Yup.number()
      .required("Total Fee is required")
      .positive("Total Fee must be positive"),
    fee_received: Yup.number()
      .required("Fee Paid is required")
      .positive("Fee Paid must be positive"),
    nextDueDate: Yup.string().required("Next Due Date is required"),
    receipt_number: Yup.string().required("Receipt Number is required"),
    clientRepresentative: Yup.string().required(
      "Client Representative Number is required"
    ),
  });

  const paymentFunc = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${API_BASE_URL}/payments/${id}/`, config)
      .then((res) => {
        console.log(res.data);
        setPaymetObj(res.data);
      })
      .catch((errr) => {
        console.log(errr);
      });
  };

  if (!leadByIdObj) {
    return <>Loading...</>;
  }

  return (
    <>
      <ToastContainer />
      
      
      <div className="w-[100%] py-4 bg-blue-50">

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-3 my-4 px-16 md:w-[50%] md:mx-auto">
        <div>
          <span className=" font-semibold  mb-2">Name -:</span>
          &nbsp;<span>{leadByIdObj?.LeadName}</span>
        </div>

        <div>
          <span className=" font-semibold  mb-2">Phone -:</span>
          &nbsp;<span>{leadByIdObj?.LeadPhone}</span>
        </div>

        <div>
          <span className=" font-semibold  mb-2">Lead Id -:</span>
          &nbsp;<span>{id}</span>
        </div>

        <div>
          <span className=" font-semibold  mb-2">Brand Lead ID -:</span>
          &nbsp;<span>{localStorage.getItem("brand")}</span>
        </div>
      </div>
        <div className="md:w-[80%] w-[95%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
          
          <Formik
            initialValues={{
              package: "",
              classMode: "",
              courseStartDate: "",
              courseEndDate: "",
              fee_payment_datetime: "",
              payment_id: "",
              totalFee: "",
              fee_received: "",
              nextDueDate: "",
              receipt_number: "",
              clientRepresentative: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              setLoadingButton(true);
              console.log(values);
              const authToken = localStorage.getItem("token");
              const brandID = localStorage.getItem("brand");
              const requestData = {
                ...values,
                Company: company,
                Brand: brandID,
                LeadID: id,
                CustomerName: customerName,
                CustomerEmail: customerEmail,
                CustomerPhone: customerPhone,
                UpdateBY: username,
                payment_mode:selectedPaymentObject?.payment_mode_id,
                payment_type:selectedPaymentObject?.payment_type_id,
                fee_created_datetime: values.fee_payment_datetime
              };
              console.log(requestData);
              axios
                .post(`${API_BASE_URL}/convertedlead/`, requestData, {
                  headers: {
                    Authorization: `Bearer ${authToken}`,
                  },
                })
                .then((res) => {
                  toast.success(`Lead Converted Sucessfully and Payment Of ${values.fee_received} Added`, {
                    position: toast.POSITION.TOP_CENTER,
                  });
                  resetForm();
                })
                .catch((err) => {
                  console.log(err);
                  toast.error("Some Error Occured", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                }).finally(()=>{
                  setLoadingButton(false);
                });
              
              
            }}
          >
            {({ handleChange, values, setFieldValue }) => (
              <Form>
                <div className="px-6 pb-4">
                  <h4 className="text-green-600 mb-2 text-center underline text-xl">
                    Account
                  </h4>
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Package</h4>
                      <Field
                        as="select"
                        name="package"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      >
                        <option value="">Please Select</option>
                        {leadByIdObj?.LeadServiceInterested?.map(
                          (element, index) => (
                            <option key={index} value={element.id}>
                              {element.ServiceName}
                            </option>
                          )
                        )}
                      </Field>
                      <ErrorMessage
                        name="package"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                    <div>
                      <h4 className="text-green-600 mb-2">Class Mode</h4>
                      <Field
                        as="select"
                        name="classMode"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      >
                        <option value="">
                          ----Please Select Class Mode------
                        </option>
                        <option>Online</option>
                        <option>Offline</option>
                      </Field>
                      <ErrorMessage
                        name="classMode"
                        component="div"
                        className="text-red-500 mt-1"
                      />
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
                      <ErrorMessage
                        name="courseStartDate"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                    <div>
                      <h4 className="text-green-600 mb-2">Course end Date</h4>
                      <Field
                        type="date"
                        name="courseEndDate"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      />
                      <ErrorMessage
                        name="courseEndDate"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="w-full">
                      <h4 className="text-green-600 mb-2">Payment Date</h4>
                      <Field
                        type="date"
                        name="fee_payment_datetime"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      />
                      <ErrorMessage
                        name="fee_payment_datetime"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="text-green-600 mb-2 underline text-xl text-center">
                      Payment Details
                    </h4>
                  </div>

                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Payment Id</h4>
                      <Field
                        as="select"
                        name="payment_id"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        value={values.payment_id}
                        onChange={async (event) => {
                          handleChange(event); // Update Formik form state
                          const id_payment = event.target.value;

                          const selected_payment_obj = paymentObj.find(
                            (element) => element.payment_id == id_payment
                          );
                          setSelectedPaymentObject(selected_payment_obj);
                          setFieldValue(
                            "totalFee",
                            selected_payment_obj?.payment_amount
                          );
                          setFieldValue(
                            "receipt_number",
                            selected_payment_obj?.payment_confirmation_id
                          );
                          setCustomerName(selected_payment_obj?.name);
                          setCustomerEmail(selected_payment_obj?.email);
                          setCustomerPhone(selected_payment_obj?.phone);
                        }}
                      >
                        <option value="">----Select-----</option>
                        {paymentObj?.map((element, index) => (
                          <option key={index} value={element.payment_id}>
                            {element.payment_id}-{element.name}-
                            {element.payment_amount}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="payment_id"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                    <div>
                      <h4 className="text-green-600 mb-2">Total Fee</h4>
                      <Field
                        type="number"
                        name="totalFee"
                        required
                        placeholder="Total Fee"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      />
                      <ErrorMessage
                        name="totalFee"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Fee Paid</h4>
                      <Field
                        type="number"
                        name="fee_received"
                        required
                        placeholder="Fee Paid"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      />
                      <ErrorMessage
                        name="fee_received"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                    <div className="w-full">
                      <h4 className="text-green-600 mb-2">Next Due Date</h4>
                      <Field
                        type="date"
                        name="nextDueDate"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      />
                      <ErrorMessage
                        name="nextDueDate"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Receipt Number</h4>
                      <Field
                        type="number"
                        name="receipt_number"
                        required
                        placeholder="Receipt Number"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      />
                      <ErrorMessage
                        name="receipt_number"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                    <div>
                      <h4 className="text-green-600 mb-2">
                        {`Client's Representative`}
                      </h4>
                      <Field
                        as="select"
                        name="clientRepresentative"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      >
                        <option value="">Please Select </option>
                        <option value={userId}>{username}</option>
                      </Field>
                      <ErrorMessage
                        name="clientRepresentative"
                        component="div"
                        className="text-red-500 mt-1"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                    >
                      {loadingButton ? (
                        <>
                          {" "}
                          &nbsp;&nbsp;&nbsp;
                          <CircularProgress color="inherit" size={19} />
                        </>
                      ) : (
                        <>Convert Lead</>
                      )}
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
};

export default ConvertLeadForm;
