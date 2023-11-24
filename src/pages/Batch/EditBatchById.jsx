import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import { DataContext } from '../../context';
import API_BASE_URL from "../../config";
import { ToastContainer, toast } from 'react-toastify';
import { CircularProgress } from '@mui/material';



const validationSchema = Yup.object().shape({
  batchname: Yup.string().required('Batch Name is required'),
  batchmode: Yup.string().required('Batch Mode is required'),
  addtags: Yup.string().required('Add Tags is required'),
  teacher: Yup.string().required('Assign Teacher is required'),
  assignstaff: Yup.string().required('Assign Staff is required'),
  batchstartdate: Yup.date().required('Batch Start Date is required'),
  batchenddate: Yup.date().required('Batch End Date is required'),
  batchstarttime: Yup.string().required('Batch Start Time is required'),
  batchendtime: Yup.string().required('Batch End Time is required'),
});


function EditBatchForm(props) {

    const { profileFunc, username, service, userId} = useContext(DataContext);
    const token = localStorage.getItem('token');
    const [loadingButton , setLoadingButton] = useState(false);

    useEffect(()=>{
        profileFunc()
    },[])

  return (
    <div className="md:w-[30rem] p-4 bg-green-100 rounded-md">
   
      
      <h2 className="text-2xl text-green-800 font-semibold mb-4 text-center underline">Create New Batch</h2>
      <Formik
        initialValues={{
          batchname: props?.editd?.BatchName,
        //   batchbrand: props?.ed,
          batchmode:props?.editd.BatchMode,
          addtags: props?.editd.BatchTags,
          teacher: props?.editd.BatchTeacherName,
          assignstaff: props?.editd.BatchStaffAssigned,
          batchstartdate: props?.editd.BatchStartDate.substring(0, 10),
          batchenddate: props?.editd.BatchEndDate.substring(0,10),
          batchstarttime: props?.editd.BatchTime,
          batchendtime: props?.editd.BatchEndTime
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Data Will Save ")
            setLoadingButton(true);
          const batch = {
            BatchName: values?.batchname,
            BatchDescription: 'This is a dummy batch.',
            BatchMode: values?.batchmode,
            BatchTags: values?.addtags,
            BatchTeacher: 1, 
            BatchStartDate: values?.batchstartdate, 
            BatchEndDate: values?.batchenddate,   
            BatchTime: values?.batchstarttime, 
            BatchEndTime: values?.batchendtime,
            BatchTeacherName:values?.teacher,
            BatchStaffAssigned:values?.assignstaff,
          };
          axios.put(`${API_BASE_URL}/batch/${props.editd.BatchID}/`,batch,{
          headers: {
            "Authorization": `Bearer ${token}`
          }
          }).then((value)=>{
           if(props.open){
             toast.success('Changes are saved sucessfully!!', {
               position: toast.POSITION.TOP_CENTER,});
              }
              resetForm();
            props.batchDetails()
            props.handleClose()
          }).catch((err)=>{
            console.log(err);
            resetForm();
            if(props.open){

              toast.error('Some Error Occured!!', {
                position: toast.POSITION.TOP_CENTER,});
              } 
          }).finally(()=>{
            setLoadingButton(false)
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
                <option>Teacher 1</option>
                <option>Teacher 2</option>
                <option>Teacher 3</option>
                <option>Teacher 4</option>
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
                
               {loadingButton ? <> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<CircularProgress color="inherit" size={19} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</> : <> Save Changes</>}
            </button>
                </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditBatchForm;
