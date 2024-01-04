import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircularProgress from '@mui/material/CircularProgress';
import Select from 'react-select';  // Assuming you are using react-select
import * as Yup from "yup";
import InvoicePreview from './InviocePreview';
import Modal from 'react-modal';

const initialValues = {
  ID: '',
  CustomerID: '',
  InvoiceNumber: '',
  InvoiceDate: '',
  InvoiceGenerateDate: '',
  InvoiceBillingDate: '',
  Item: '',
  Quantity: '',
  ItemAmount: '',
  IGST: '',
  CGST: '',
  SGST: '',
  CustomerName:"",
  CustomerAdress:"",
  CustomerGST:""
};


const validationSchema = Yup.object().shape({
    CustomerID: Yup.string().required('Customer ID is required'),
    InvoiceNumber: Yup.string().required('Invoice Number is required'),
    InvoiceDate: Yup.date().required('Invoice Date is required'),
    InvoiceGenerateDate: Yup.date().required('Invoice Generate Date is required'),
    InvoiceBillingDate: Yup.date().required('Invoice Billing Date is required'),
    Item: Yup.string().required('Item is required'),
    Quantity: Yup.number().required('Quantity is required').positive('Quantity must be positive'),
    ItemAmount: Yup.number().required('Item Amount is required').positive('Item Amount must be positive'),
    IGST: Yup.number().required('IGST is required').positive('IGST must be positive'),
    CGST: Yup.number().required('CGST is required').positive('CGST must be positive'),
    SGST: Yup.number().required('SGST is required').positive('SGST must be positive'),
    CustomerName:Yup.string().required('Customer Name is Required'),
  CustomerAdress:Yup.string().required('Customer Address is Required'),
  CustomerGST:Yup.string().required('Customer GST is Required')
  });



const DownloadInvoiceForm = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [my_values , setMyValues] = useState();
  useEffect(()=>{
    
  },[])

  return (
    <>
    <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            },
            content: {},
          }}
        >
          <InvoicePreview 
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen} 
          values={my_values}/>
        </Modal>
    <div className="w-[100%] py-10 bg-blue-50">
      <div className="sm:w-[80%] w-[90%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
        <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Add New Invoice</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={(values)=>{
            console.log("Hello This is running")
            setModalIsOpen(true);
            setMyValues(values);
            console.log(values);
          }}
          validationSchema={validationSchema}
        > 
          {({ values, handleSubmit, resetForm, setFieldValue, handleBlur }) => (
            <Form>
              <div className="px-6 pb-4">
                <div className="mb-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-green-600 mb-2">Customer ID</h4>
                    <Field
                      type="text"
                      name="CustomerID"
                      placeholder="Customer ID"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="CustomerID" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-green-600 mb-2">Customer Name</h4>
                    <Field
                      type="text"
                      name="CustomerName"
                      placeholder="Customer Name"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="CustomerName" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-green-600 mb-2">Customer Address</h4>
                    <Field
                      type="text"
                      name="CustomerAdress"
                      placeholder="Customer Address"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="CustomerAdress" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-green-600 mb-2">Customer GST</h4>
                    <Field
                      type="text"
                      name="CustomerGST"
                      placeholder="Customer ID"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="CustomerGST" component="div" className="text-red-500" />
                  </div>

                  <div>
                    <h4 className="text-green-600 mb-2">Invoice Number</h4>
                    <div className="w-full relative col-span-1">
                      <Field
                        type="text"
                        name="InvoiceNumber"
                        placeholder="Invoice Number"
                        className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      />
                      <AddIcon className={'absolute top-2 peer-focus:text-green-600 border-r-2 left-2 '} />
                    </div>
                    <ErrorMessage name="InvoiceNumber" component="div" className="text-red-500" />
                  </div>

                  <div>
                    <h4 className="text-green-600 mb-2">Invoice Date</h4>
                    <Field
                      type="date"
                      name="InvoiceDate"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="InvoiceDate" component="div" className="text-red-500" />
                  </div>

                  <div>
                    <h4 className="text-green-600 mb-2">Invoice Generate Date</h4>
                    <Field
                      type="date"
                      name="InvoiceGenerateDate"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="InvoiceGenerateDate" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-green-600 mb-2">Invoice Billing Date</h4>
                    <Field
                      type="date"
                      name="InvoiceBillingDate"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="InvoiceBillingDate" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-green-600 mb-2">Item</h4>
                    <Field
                      type="text"
                      name="Item"
                      placeholder="Item"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="Item" component="div" className="text-red-500" />
                  </div>

                  <div>
                    <h4 className="text-green-600 mb-2">Quantity</h4>
                    <Field
                      type="number"
                      name="Quantity"
                      placeholder="Quantity"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="Quantity" component="div" className="text-red-500" />
                  </div>

                  <div>
                    <h4 className="text-green-600 mb-2">Item Amount</h4>
                    <Field
                      type="number"
                      name="ItemAmount"
                      placeholder="Item Amount"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="ItemAmount" component="div" className="text-red-500" />
                  </div>

                  <div>
                    <h4 className="text-green-600 mb-2">IGST</h4>
                    <Field
                      type="number"
                      name="IGST"
                      placeholder="IGST"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="IGST" component="div" className="text-red-500" />
                  </div>

                  <div>
                    <h4 className="text-green-600 mb-2">CGST</h4>
                    <Field
                      type="number"
                      name="CGST"
                      placeholder="CGST"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="CGST" component="div" className="text-red-500" />
                  </div>

                  <div>
                    <h4 className="text-green-600 mb-2">SGST</h4>
                    <Field
                      type="number"
                      name="SGST"
                      placeholder="SGST"
                      className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                    />
                    <ErrorMessage name="SGST" component="div" className="text-red-500" />
                  </div>

                </div>

                {/* Button Code */}
                <div className="mb-4">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                  >
                    Create Invoice
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

export default DownloadInvoiceForm;
