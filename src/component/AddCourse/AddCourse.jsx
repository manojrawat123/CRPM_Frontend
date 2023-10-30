import React, { useContext, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { DataContext } from '../../context';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import API_BASE_URL from "../../config";


const AddCourseForm = () => {


    const { serviceFunc, service } = useContext(DataContext);
    const token = localStorage.getItem('token');
    useEffect(()=>{
        serviceFunc();
    },[])
    const { id } = useParams();

    
  return (
    <div className="p-4">
      <h1 className="text-4xl font-extrabold text-green-500 underline text-center ">Add Course</h1>
      <Formik
        initialValues={{ course: '', classMode: 'online' }}
        onSubmit={(values) => {
          // Handle form submission here
          axios.put(`${API_BASE_URL}/lead/${id}/`, {
            LeadServiceInterested:[]
          }, {headers: {
           "Authorization": `Bearer ${token}` 
        }}).then((value)=>{
            console.log(value);
        }).catch((err)=>{
            console.log(err);
        });
        }}
      >
        <Form className="mt-4 border border-solid border-gray-600 rounded-2xl p-4">
          <div className="mb-4">
            <label htmlFor="course" className="block text-gray-700 text-sm font-bold mb-2">
              Select Course:
            </label>
            <Field
              as="select"
              name="course"
              className="block w-full bg-gray-200 border border-gray-400 text-gray-700 rounded py-2 px-3 focus:outline-none focus:bg-white"
            >
              <option value="">Select a course</option>
              {service?.map((element, index) => (
                        <option key={index} value={element.id}>
                          {element.ServiceName}
                        </option>
                      ))} 
            </Field>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Select Class Mode:</label>
            <div>
              <label className="inline-flex items-center">
                <Field type="radio" name="classMode" value="online" className="text-green-500 form-radio" />
                <span className="ml-2">Online</span>
              </label>
              <label className="ml-4 inline-flex items-center">
                <Field type="radio" name="classMode" value="offline" className="text-green-500 form-radio" />
                <span className="ml-2">Offline</span>
              </label>
            </div>
          </div>
          <div className='text-center'>

            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddCourseForm;
