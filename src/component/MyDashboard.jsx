import React, { useContext, useEffect } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { countryList } from '../data';
import { DataContext } from '../context';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
  countryCode: Yup.string().required('Country Code is required'),
  country: Yup.string().required('Country is required'),
  location: Yup.string().required('Location is required'),
  phoneNumber: Yup.string()
  .matches(/^[1-9]\d{7,14}$/, 'Invalid phone number')
  .required('Phone Number is required'),
  state: Yup.string().required('State is required'),
  parentName: Yup.string().required('Parent Name is required'),
  leadRepresentative: Yup.string().required('Lead Representative is required'),
  course: Yup.string().required('Course is required'),
  classMode: Yup.string().required('Class Mode is required'),
});


const today = new Date();
const formattedDate = today.toISOString().slice(0, 10);
const formattedTime = today.toTimeString().slice(0, 5);




const MyDashboard = () => {

  const { number, setNumber, code, setCode, country, setCountry, addLeadFunc, profileFunc } = useContext(DataContext);
  const ctCode = code
  const ctnumber = number

  const initialValues = {
    leadDate: formattedDate,
    leadTime: formattedTime,
    studentName: '',
    studentEmail: '',
    leadSource: '',
    leadSourceDetails: '',
    countryCode: ctCode,
    country: '',
    location: '',
    phoneNumber: number,
    state: '',
    parentName: '',
    leadRepresentative: '',
    course: '',
    classMode: '',
  };

  useEffect(()=>{
    profileFunc()
    console.log("Profile Function run")
  },[])
  return (
    <>
      <div className="w-[100%] py-10 bg-blue-50">
        <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
          <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Add New Lead</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={addLeadFunc}
            validationSchema={validationSchema}
          >
            {() => (
              <Form>
                <div className="px-6 pb-4">
                  <h4 className="text-green-600 mb-2 text-center underline text-xl">Lead Details</h4>
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="w-full ">
                        <h4 className="text-green-600 mb-2">Lead Date</h4>
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
                        <h4 className="text-green-600 mb-2">Lead Time</h4>
                        <Field
                          type="time"
                          name="leadTime"
                          className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                        />
                        <ErrorMessage name="leadTime" component="div" className="text-red-500" />
                      </div>
                    </div>
                  </div>

                  {/* Second Input Tag */}
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Student Name</h4>
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
                      <h4 className="text-green-600 mb-2">Student Email</h4>
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
                  </div>

                  {/* ... (remaining fields) ... */}

                  
                  {/* ... (remaining fields) ... */}
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div>
            <h4 className="text-green-600 mb-2">Lead Source</h4>
            <Field
              as="select"
              name="leadSource"
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
            >
              <option value="">--------Select------</option>
              <option>Website</option>
              <option>Social Media</option>
              <option>Youtube</option>
            </Field>
            <ErrorMessage name="leadSource" component="div" className="text-red-500" />
          </div>
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
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div>
            <h4 className="text-green-600 mb-2">Country Code</h4>
            <Field
                as="select"
                name="countryCode"
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                
              >
                <option value="">--------Select------</option>
                {countryList.map((country, index) => (
                  <option key={index} value={country?.code}>
                    {country.code}
                  </option>
                ))}
              </Field>
            <ErrorMessage name="countryCode" component="div" className="text-red-500" />
          </div>
        </div>

        <div>
          <div>
            <h4 className="text-green-600 mb-2">Country</h4>
            <Field
              as="select"
              name="country"
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
            >
              <option value="">--------Select------</option>
              {countryList.map((country, index) => (
                <option key={index} value={country?.name}>
                  {country.name}
                </option>
              ))}
            </Field>
            <ErrorMessage name="country" component="div" className="text-red-500" />
          </div>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div>
            <h4 className="text-green-600 mb-2">Phone Number</h4>
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
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
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

        <div>
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
        </div>
      </div>


      {/* Remaining Field */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div>
            <h4 className="text-green-600 mb-2">Lead Representative</h4>
            <Field
              as="select"
              name="leadRepresentative"
              className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
            >
              <option value="">--------Select------</option>
              <option>Purpose 1</option>
              <option>Purpose 2</option>
              <option>Purpose 3</option>
            </Field>
            <ErrorMessage name="leadRepresentative" component="div" className="text-red-500" />
          </div>
        </div>

        <div>
          {/* Placeholder */}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        

        <div>
          {/* Placeholder */}
        </div>
      </div>



      {/* Remaining Field end */}
                  {/* end remaining fileds */}
                  <div>
                    <h4 className="text-green-600 mb-2 underline text-xl text-center">Course Details</h4>
                  </div>
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Course</h4>
                      <Field
                        as="select"
                        name="course"
                        className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                      >
                        <option value="">----Select------</option>
                        <option>Course 1</option>
                        <option>Course 2</option>
                        <option>Course 3</option>
                      </Field>
                      <ErrorMessage name="course" component="div" className="text-red-500" />
                    </div>

                    <div>
                      <h4 className="text-green-600 mb-2">Class Mode</h4>
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
                  </div>
{/* Button Code */}
                  <div className="mb-4">
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
                    >
                      Submit
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










