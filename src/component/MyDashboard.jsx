import React, { useContext, useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { countryList } from '../data';
import { DataContext } from '../context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { CircularProgress } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie'; 

const validationSchema = Yup.object().shape({
  leadDate: Yup.date()
    .required('Lead Date is required')
    .test('leadDate', 'Lead Date should not be in the future', (value) => {
      const today = new Date();
      return new Date(value) <= today;
    }),
  leadTime: Yup.string().required('Lead Time is required'),
  studentName: Yup.string().required('Student Name is required'),
  studentEmail: Yup.string().email('Invalid email').required('Student Email is required'),
  leadSource: Yup.string().required('Lead Source is required'),
  leadSourceDetails: Yup.string().required('Lead Source Details is required'),
  // countryCode: Yup.string().required('Country Code is required'),
  country: Yup.string().required('Country is required'),
  location: Yup.string().required('Location is required'),
  phoneNumber: Yup.string()
    .matches(/^[1-9]\d{7,14}$/, 'Invalid phone number')
    .required('Phone Number is required'),
  state: Yup.string().required('State is required'),
  parentName: Yup.string().required('Parent Name is required'),
  course: Yup.array().min(1, 'Please Select One Course'),
  classMode: Yup.string().required('Class Mode is required'),
});


const today = new Date();
const formattedDate = today.toISOString().slice(0, 10);
const formattedTime = today.toTimeString().slice(0, 5);

const MyDashboard = () => {

  const { number, leadSubmitButton,  addLeadFunc, dashboardFunc,dashboardData, setRecaptchaToken} = useContext(DataContext);
  

  const ctnumber = number
  var username = ""
  try{
    username = JSON.parse(Cookies.get('user_data')).user_name
  }
  catch{
    username = ""
  }

  const initialValues = {
    leadDate: formattedDate,
    leadTime: formattedTime,
    studentName: '',
    studentEmail: '',
    leadSource: '',
    leadSourceDetails: '',
    countryCode: "",
    country: 'India',
    location: '',
    phoneNumber: ctnumber,
    state: '',
    parentName: '',
    leadRepresentative: '',
    course: '',
    classMode: '',
  };

  useEffect(() => {
    dashboardFunc();
  }, []);


  return (
    <>


      <ToastContainer />
      <div className="w-[100%] py-10 bg-blue-50">

        <div className="sm:w-[80%] w-[90%]  mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
          <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Add New Lead</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={addLeadFunc}
            validationSchema={validationSchema}
          >
            {({ values, handleSubmit, resetForm, setFieldValue, handleBlur }) => (
              <Form>
                <div className="px-6 pb-4">
                  {/* <h4 className="text-green-600 mb-2 text-center underline text-xl">Lead Details</h4> */}
                  <div className="">
                   


                  </div>

                  {/* Second Input Tag */}
                  <div className="mb-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4">

                  <div>
                      <h4 className="text-green-600 mb-2">Student Name <span className="text-red-500">*</span></h4>
                      <div className={"w-full relative col-span-1 "}>
                        <Field
                          type="text"
                          name="studentName"
                          placeholder="Name"
                          required
                          className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />
                        <PersonIcon className={'absolute top-2 peer-focus:text-green-600 border-r-2 left-2 '} />
                      </div>
                      <ErrorMessage name="studentName" component="div" className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-green-600 mb-2">Student Email <span className="text-red-500">*</span></h4>
                      <div className="w-full relative">
                        <Field
                          type="email"
                          name="studentEmail"
                          placeholder="Email"
                          required
                          className="w-full pl-9 py-2 px-3 peer border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />
                        <MailIcon className='absolute top-2 left-2 border-r-2  peer-focus:text-green-600 ' />
                      </div>
                      <ErrorMessage name="studentEmail" component="div" className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-green-600 mb-2">Phone Number <span className="text-red-500">*</span></h4>
                      <div className="w-full relative">
                        <Field
                          type="number"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          className="pl-8 w-full py-2 px-3 border peer border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />
                        <LocalPhoneIcon className='absolute top-2 border-r-2 left-2  peer-focus:text-green-600' />
                      </div>
                      <ErrorMessage name="phoneNumber" component="div" className="text-red-500" />
                    </div>
                    <div>
                      <div className="w-full ">
                        <h4 className="text-green-600 mb-2">Lead Date <span className="text-red-500">*</span></h4>
                        <Field
                          type="date"
                          name="leadDate"
                          className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />
                        <ErrorMessage name="leadDate" component="div" className="text-red-500" />
                      </div>
                    </div>

                    <div>
                      <div className="w-full">
                        <h4 className="text-green-600 mb-2">Lead Time <span className="text-red-500">*</span></h4>
                        <Field
                          type="time"
                          name="leadTime"
                          className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />
                        <ErrorMessage name="leadTime" component="div" className="text-red-500" />
                      </div>
                    </div>


                    <div>
                      <h4 className="text-green-600 mb-2">Course <span className="text-red-500">*</span></h4>
                      <Select
                        name="course"
                        options={dashboardData?.service?.map((element, index) => {
                          return { value: element?.id, label: element?.ServiceName }
                        })}
                        isMulti
                        onChange={(selectedOptions) => setFieldValue('course', selectedOptions)}
                        onBlur={handleBlur}
                        value={values.course}
                      />
                      <ErrorMessage name="course" component="div" className="text-red-500" />
                    </div>

                    <div>
                      <h4 className="text-green-600 mb-2">Lead Source <span className="text-red-500">*</span></h4>
                      <Field
                        as="select"
                        name="leadSource"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      >
                        <option value="">--------Select------</option>
                        {dashboardData?.lead_scource?.map((element1, index) => (
                          <option key={index} value={element1.LeadSource}>
                            {element1.LeadSource}
                          </option>
                        ))}
                      </Field>

                      <ErrorMessage name="leadSource" component="div" className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-green-600 mb-2">Class Mode <span className="text-red-500">*</span></h4>
                      <Field
                        as="select"
                        name="classMode"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      >
                        <option value="">----Select------</option>
                        <option>Online</option>
                        <option>Offline</option>
                      </Field>
                      <ErrorMessage name="classMode" component="div" className="text-red-500" />
                    </div>


                    <div>
                      <div>
                        <h4 className="text-green-600 mb-2">Lead Source Details</h4>
                        <Field
                          type="text"
                          name="leadSourceDetails"
                          required
                          className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                          placeholder='Lead Source Details'
                        />
                        <ErrorMessage name="leadSourceDetails" component="div" className="text-red-500" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-green-600 mb-2">Country Code</h4>
                      <Field
                        as="select"
                        name="country"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                       defaultValue={"India"}
                        
                      >
                        <option value="">--------Select------</option>
                        {countryList.map((country, index) => (
                          <option key={index} value={country?.name}>
                           {country.code} - {country.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="country" component="div" className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-green-600 mb-2">Lead Representative</h4>
                      <Field
                        as="select"
                        name="leadRepresentative"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        value={username}
                        // defaultValue={JSON.parse(Cookies.get('user_data')).user_name}

                      >
                        
                        <option value="">Please Select</option>
                        <option value={username}>{username}</option>
                      </Field>
                      <ErrorMessage name="leadRepresentative" component="div" className="text-red-500" />
                    </div>
                    <div>
                        <h4 className="text-green-600 mb-2">Parent Name</h4>
                        <Field
                          type="text"
                          name="parentName"
                          required
                          className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                          placeholder='Parent Name'
                        />
                        <ErrorMessage name="parentName" component="div" className="text-red-500" />
                      </div>

                      <div>
                      <h4 className="text-green-600 mb-2">Location</h4>
                      <div className='relative'>
                        <Field
                          type="text"
                          name="location"
                          required
                          className="pl-8 w-full py-2 px-3 border peer border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                          placeholder='Location'
                        />
                        <LocationOnIcon className='absolute top-2 border-r-2 left-2  peer-focus:text-green-600' />
                      </div>
                      <ErrorMessage name="location" component="div" className="text-red-500" />
                    </div>


                    <div>
                      <h4 className="text-green-600 mb-2">State</h4>
                      <Field
                        type="text"
                        name="state"
                        required
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        placeholder='State'
                      />
                      <ErrorMessage name="state" component="div" className="text-red-500" />
                    </div>
                  </div>

                  
                    {/* <ReCAPTCHA sitekey="6LcBrkkpAAAAAE6aCxcwdkn6R84fWFrgglbrUD3s" 
                    onChange={(value)=>{
                      setRecaptchaToken(value);
                    }}/> */}
                  {/* Button Code */}
                  <div className="mb-4">
                    <button
                      type="submit"

                      className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                    >
                      {leadSubmitButton ? <> &nbsp;&nbsp;&nbsp;<CircularProgress color="inherit" size={19} /></> : <>Submit</>}
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

export default MyDashboard;










