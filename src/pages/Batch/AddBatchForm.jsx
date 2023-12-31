import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import { DataContext } from '../../context';
import API_BASE_URL from "../../config";
import { Button, CircularProgress } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';



const validationSchema = Yup.object().shape({
  batchname: Yup.string().required('Batch Name is required'),
  batchbrand: Yup.string().required('Batch Brand Type is required'),
  batchmode: Yup.string().required('Batch Mode is required'),
  addtags: Yup.string().required('Add Tags is required'),
  teacher: Yup.string().required('Assign Teacher is required'),
  assignstaff: Yup.string().required('Assign Staff is required'),
  batchstartdate: Yup.date().required('Batch Start Date is required'),
  batchenddate: Yup.date().required('Batch End Date is required'),
  batchstarttime: Yup.string().required('Batch Start Time is required'),
  batchendtime: Yup.string().required('Batch End Time is required'),
});


function AddBatchForm() {

    const token = localStorage.getItem('token');
    const [loadingButton, setLoadingButton] = useState();
    const [allUser, setAllUser] = useState();
    const getAllUserFunc = ()=>{
      axios.get(`${API_BASE_URL}/getalluser/`, {
        headers:{
          "Authorization": `Bearer ${token}`
        }
      }).then((values)=>{
        console.log(values.data);
          setAllUser(values.data);
      },[]).catch((err)=>{
        console.log(err);
        console.log("UnAuthorized User")

      })
    }

    useEffect(()=>{
      getAllUserFunc();
    },[])

    if (!allUser){
      return <>
       <div className='flex items-center justify-center h-[100vh]' >
    <CircularProgress size={50} />
  </div>
      </> 
    }

  return (

    <>
     <div className='md:mx-4 mx-2 mt-4  rounded-full p-2 inline-block top-5'>
        <NavLink to={'/assignbatch'} className={'inline-block'}>
            
            <Button variant="outlined">
            <ArrowBack className='inline-block'/>
                 Show Batches
            </Button>
        </NavLink>
        </div>

    <div className="md:w-[80%] w-full p-4 bg-green-100 rounded-md md:mx-auto md:my-4">
      <ToastContainer />
      <h2 className="text-2xl text-green-800 font-semibold mb-4 text-center underline bg-gray-200 py-4">Create New Batch</h2>
      <Formik
        initialValues={{
          batchname: '',
          batchbrand: '',
          batchmode: '',
          addtags: '',
          teacher: '',
          assignstaff: '',
          batchstartdate: '',
          batchenddate: '',
          batchstarttime: '',
          batchendtime: '' 
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
          setLoadingButton(true);
          console.log(values);
          const batch = {
            BatchName: values?.batchname,
            BatchDescription: 'This is a dummy batch.',
            BatchMode: values?.batchmode,
            BatchTags: values?.addtags,
            BatchTeacher: values.teacher,
            BatchStartDate: values?.batchstartdate,
            BatchEndDate: values?.batchenddate,  
            BatchTime: values?.batchstarttime, 
            BatchEndTime: values?.batchendtime, 
            BatchTeacherName:values?.teacher,
BatchStaffAssigned:values?.assignstaff,
};
console.log(batch);
          axios.post(`${API_BASE_URL}/batch/`,batch,{
          headers: {
            "Authorization": `Bearer ${token}`
          }
          }).then((value)=>{
            toast.success(`${values?.batchname} Batch Created Sucessfully!! From ${values?.batchstartdate} to ${values?.batchenddate} Batch Timing ${values?.batchstarttime}-${values?.batchendtime}`, {
              position: toast.POSITION.TOP_CENTER,
            autoClose: 20000});
            resetForm()
          }).catch((err)=>{
            toast.error('Some error Occured!!', {
              position: toast.POSITION.TOP_CENTER,});
          }).finally(()=>{
            setLoadingButton(false);
          })
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/* Batch Name */}
            <div className="mb-4">
              <label htmlFor="batchname" className="block text-green-700 font-semibold">
                Batch Name 
              </label>
              <Field
                id="batchname"
                name="batchname"
                className="border rounded-md p-2 w-full"
              />
              <ErrorMessage name="batchname" component="div" className="text-red-600" />
            </div>
            {/* End Batch Name */}
            {/* Batch Brand Type */}
            <div className="mb-4">
              <label htmlFor="batchbrand" className="block text-green-700 font-semibold">
                Batch Brand Type
              </label>
              <Field
                as="select"
                id="batchbrand"
                name="batchbrand"
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select Type</option>
                <option>Batch Brand Type 1</option>
                <option>Batch Brand Type 2</option>
                <option>Batch Brand Type 3</option>
                <option>Batch Brand Type 4</option>
              </Field>
              <ErrorMessage name="batchbrand" component="div" className="text-red-600" />
            </div>
            {/* End Batch Brand Type */}
            {/* Brand Mode */}
            <div className="mb-4">
              <label htmlFor="batchmode" className="block text-green-700 font-semibold">
                Batch Mode
              </label>
              <Field
                as="select"
                id="batchmode"
                name="batchmode"
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select Batch</option>
                <option >Online</option>
                <option >Offline</option>
              </Field>
              <ErrorMessage name="batchmode" component="div" className="text-red-600" />
            </div>
            {/* End Brand Mode */}
            {/* Add Tags */}
            <div className="mb-4">
              <label htmlFor="addtags" className="block text-green-700 font-semibold">
                Add Tags
              </label>
              <Field
                as="select"
                id="addtags"
                name="addtags"
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select Tags</option>
                <option>MWF</option>
                <option>TTS</option>
                <option>Weekdays</option>
                <option>Weekends</option>
               
              </Field>
              <ErrorMessage name="addtags" component="div" className="text-red-600" />
            </div>
            {/* End Add Tags */}
            {/* Assign Teacher */}
            <div className="mb-4">
              <label htmlFor="teacher" className="block text-green-700 font-semibold">
              Assign Teacher
              </label>
              <Field
                as="select"
                id="teacher"
                name="teacher"
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select Teacher</option>
                {allUser?.map((element, index)=>{
                 return <option value={element.id}>{element.name}</option>
                })}
              </Field>
              <ErrorMessage name="teacher" component="div" className="text-red-600" />
            </div>
            <div className="mb-4">
              <label htmlFor="assignstaff" className="block text-green-700 font-semibold">
              Assign Staff
              </label>
              <Field
                as="select"
                id="assignstaff"
                name="assignstaff"
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select Staff</option>
                <option>Staff 1</option> 
                <option>Staff 2</option> 
                <option>Staff 3</option> 
                <option>Staff 4</option> 
              </Field>
              <ErrorMessage name="assignstaff" component="div" className="text-red-600" />
            </div>
            <div className="mb-4">
              <label htmlFor="batchstartdate" className="block text-green-700 font-semibold">
              Batch Start Date
              </label>
              <Field
                type="date"
                id="batchstartdate"
                name="batchstartdate"
                className="border rounded-md p-2 w-full"
              />
              <ErrorMessage name="batchstartdate" component="div" className="text-red-600" />
            </div>
            <div className="mb-4">
              <label htmlFor="batchenddate" className="block text-green-700 font-semibold">
                Batch End Date 
              </label>
              <Field
              type="date"
                id="batchenddate"
                name="batchenddate"
                className="border rounded-md p-2 w-full"
             />
              <ErrorMessage name="batchenddate" component="div" className="text-red-600" />
            </div>
            <div className="mb-4">
              <label htmlFor="batchstarttime" className="block text-green-700 font-semibold">
              Batch Start Time
              </label>
              <Field
                type="time"
                id="batchstarttime"
                name="batchstarttime"
                className="border rounded-md p-2 w-full"
              />
              <ErrorMessage name="batchstarttime" component="div" className="text-red-600" />
            </div>
            <div className="mb-4">
              <label htmlFor="batchendtime" className="block text-green-700 font-semibold">
              Batch End Time
              </label>
              <Field
                type="time"
                id="batchendtime"
                name="batchendtime"
                className="border rounded-md p-2 w-full"
              />
              <ErrorMessage name="batchendtime" component="div" className="text-red-600" />
            </div>
        <div className='text-center'>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md">
                {loadingButton ? <> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<CircularProgress color="inherit" size={19} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</> : <> Create New Batch</>}
           
            </button>
                </div>
          </Form>
        )}
      </Formik>
    </div>
    </>
  );
}

export default AddBatchForm;
