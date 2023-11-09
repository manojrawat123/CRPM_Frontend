import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { countryList } from '../../data';
import axios from 'axios';
import API_BASE_URL from '../../config';
import { useState } from 'react';
import SearchModal from './SearchModal/SearchModal';
import { Alert } from '@mui/material';

const SearchPage = () => {

  const [filterLead, setFilterLead] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [custAlert, setCustomAlert] = useState(false);

  const initialValues = {
    countryCode: '',
    name: '',
    phone: '',
    email: '',
    leadId: '',
    brandLeadId: '',
  };

  const token = localStorage.getItem("token");

  const validationSchema = Yup.object().shape({
    countryCode: Yup.string(),
    name: Yup.string(),
    phone: Yup.number(),
    email: Yup.string().email('Invalid email format'),
    leadId: Yup.number(),
    brandLeadId: Yup.string(),
  });


  return (<>
  {custAlert ? (
            <Alert
              severity={custAlert.status}
              className="fixed top-15 w-3/4 z-[1000]" // Apply the classes directly
            >
              {custAlert.message}
            </Alert>
          ) : null}
  <SearchModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} filterLead={filterLead} />
    <div className="h-screen bg-gray">
      <div className="mx-auto px-6 bg-gray-200 rounded-lg shadow-md xl:w-[65vw] pt-4 sm:mt-4">
        <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">
          Search
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Perform your search logic using the form values
            console.log("Button Clicked");
            if ( values.name == "" && values.phone== "" && values.email== "" && values.leadId== "" && values.brandLeadId== ""){
              setCustomAlert({
                status: "error",
                message: "Please Select One field to filter"
              })
              return
            }
            axios
            .get(`${API_BASE_URL}/leadfilter/`, {
                params: {
                    'LeadName': values.name,
        'LeadPhone':values.phone,
        'LeadEmail':values.email,
        'id':values.leadId,
        'Brand': values.brandLeadId,
                },
                headers: {
                  'Authorization': `Bearer ${token}`,
                },
              })
              .then((response) => {
                console.log("button Clicked")
                // setData("Filtered Lead Data",response.data);
                console.log("Filter Data:",response.data);
                setFilterLead(response.data);
                setModalIsOpen(true)
                setCustomAlert(false);
                // setLoading(false);
              })
              .catch((error) => {
                console.error('Error:', error);
                // setLoading(false);
              });
          }}
        >
          <Form>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
              <div>
                <h4 className="text-green-600 mb-2">Country Code</h4>
                <Field
                  as="select"
                  name="countryCode"
                  className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                >
                  <option value="">--------Select------</option>
                  {countryList.map((country) => (
                    <option key={country?.name} value={country?.name}>
                      {country.name}
                    </option>
                  ))}
                </Field>
              </div>
              <div>
                <h4 className="text-green-600 mb-2">Name</h4>
                <div className="relative col-span-1">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <PersonIcon className="absolute top-2 peer-focus:text-green-600 border-r-2 left-2" />
                </div>
                <ErrorMessage name="name" component="div" className="text-red-600" />
              
              </div>
              <div>
                <h4 className="text-green-600 mb-2">Phone Number</h4>
                <div className="w-full relative col-span-1">
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <LocalPhoneIcon className="absolute top-2 peer-focus:text-green-600 border-r-2 left-2" />
                </div>
                <ErrorMessage name="phone" component="div" className="text-red-600" />
              
              </div>
              <div>
                <h4 className="text-green-600 mb-2">Email</h4>
                <div className="w-full relative col-span-1">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <MailIcon className="absolute top-2 peer-focus:text-green-600 border-r-2 left-2" />
                </div>
                <ErrorMessage name="email" component="div" className="text-red-600" />
              
              </div>
              <div>
                <h4 className="text-green-600 mb-2">Lead Id</h4>
                <div className="w-full relative col-span-1">
                  <Field
                    type="text"
                    name="leadId"
                    placeholder="Lead Id"
                    className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <PersonSearchIcon className="absolute top-2 peer-focus:text-green-600 border-r-2 left-2" />
                </div>
                <ErrorMessage name="leadId" component="div" className="text-red-600" />
              
              </div>
              <div>
                <h4 className="text-green-600 mb-2">Brand Lead Id</h4>
                <div className="w-full relative col-span-1">
                  <Field
                    type="text"
                    name="brandLeadId"
                    placeholder="Brand Lead ID"
                    className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  />
                  <ManageSearchIcon className="absolute top-2 peer-focus:text-green-600 border-r-2 left-2" />
                </div>
                <ErrorMessage name="brandLeadId" component="div" className="text-red-600" />
              
              </div>
            </div>
            <div className="py-5 text-center">
              <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
              >
                Search
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
    </>
  );
};

export default SearchPage;
