import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { DataContext } from '../../context';
import ViewStaffDetails from './ViewStaffDetails';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    designation: Yup.string().required('Designation is required'),
    dob: Yup.date().required('Date of Birth is required'),
    doj: Yup.date().required('Date of Joining is required'),
    status: Yup.string().required('Status is required'),
    brand: Yup.string().required('Brand is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

const initialValues = {
    username: '',
    name: '',
    phone: '',
    email: '',
    designation: '',
    dob: '',
    doj: '',
    status: '',
    password: '',
    confirmPassword: '',
    brand: ''
};

function AddStaffForm() {

    const { company,brandarr, profileFunc } = useContext(DataContext);

    useEffect(()=>{
        profileFunc()
    },[])

    const token = localStorage.getItem("token");
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            const post_data = {
                email: values.username,
                name: values.name,
                phone: values.phone,
                company: company,
                brand: [+values.brand], // Replace with the actual brand IDs
                password: values.password, 
                password2: values.confirmPassword,
                designation: values.designation,
                dob: values.dob,
                doj: values.doj, 
                status: values.status,
                user_type: "Staff",
                user_location: "Dummy Location",
                online_status: "Online"
            }
            axios.post('http://localhost:8000/register/', post_data, {
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            }).then((value)=>{
                console.log(value)
                setIsHidden(true);
                setSuccess(true)

            }).catch((err)=>{
                console.log("----data---")
                console.log(post_data);
                if(err.response.data.errors.email == "my user with this email address already exists."){
                    setIsHidden(false);
                    setSuccess(false);
                    setMessage("This Email Already Exists!!")

                }
            },[])

        },
    });

    const [isHidden, setIsHidden] = useState(true);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState("");

    const handleClose = () => {
      setIsHidden(true);
    };

    return (

        <>

        <div className="  m-4">

{/* This is Error Message */}
<div className={`bg-red-500 text-white p-4 rounded fixed top-[3rem] w-[90%] ${isHidden ? 'hidden' : ''}`}>
      <button className="float-right text-white" onClick={handleClose}>
        &times;
      </button>
      <div>{message}</div>
    </div>

    {/* This is success Message */}
<div className={`bg-green-500 text-white p-4 rounded fixed top-[3rem] w-[90%] ${success ? '' : 'hidden'}`}>
      <button className="float-right text-white" onClick={()=>{
        setSuccess(false)
      }}>
        &times;
      </button>
      <div>Staff Created Successfully!!</div>
    </div>


            <form onSubmit={formik.handleSubmit} className="bg-green-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-semibold text-center mb-4 text-green-500 underline">Add Staff Details</h2>
                {/* Username */}
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {formik.touched.username && formik.errors.username && (
                            <p className="text-red-500 text-xs italic">{formik.errors.username}</p>
                        )}
                    </div>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {formik.touched.name && formik.errors.name && (
                            <p className="text-red-500 text-xs italic">{formik.errors.name}</p>
                        )}
                    </div>
                </div>


                {/* Phone */}
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {formik.touched.phone && formik.errors.phone && (
                            <p className="text-red-500 text-xs italic">{formik.errors.phone}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
                        )}
                    </div>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                    {/* Designation */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="designation">
                            Designation
                        </label>
                        <select
                            id="designation"
                            name="designation"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.designation}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select Designation</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Manager">Manager</option>
                            <option value="Intern">Intern</option>
                            </select>
                        {formik.touched.designation && formik.errors.designation && (
                            <p className="text-red-500 text-xs italic">{formik.errors.designation}</p>
                        )}
                    </div>

                    {/* Date of Birth */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                            Date of Birth
                        </label>
                        <input
                            id="dob"
                            name="dob"
                            type='date'
                            selected={formik.values.dob}
                            value={formik.values.dob}
                            onChange={(e) => formik.setFieldValue('dob', e.target.value)}
                            onBlur={formik.handleBlur}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {formik.touched.dob && formik.errors.dob && (
                            <p className="text-red-500 text-xs italic">{formik.errors.dob}</p>
                        )}
                    </div>
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                    {/* Date of Joining */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doj">
                            Date of Joining
                        </label>
                        <input
                            id="doj"
                            name="doj"
                            type='date'
                            value={formik.values.doj}
                            selected={formik.values.doj}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {formik.touched.doj && formik.errors.doj && (
                            <p className="text-red-500 text-xs italic">{formik.errors.doj}</p>
                        )}
                    </div>

                    {/* Status */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.status}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                        {formik.touched.status && formik.errors.status && (
                            <p className="text-red-500 text-xs italic">{formik.errors.status}</p>
                        )}
                    </div>
                </div>

                {/* Password */}
                <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                            Brand
                        </label>
                        <select
                            id="brand"
                            name="brand"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.brand}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select Brand</option>
                            
                            {brandarr?.map((value, index)=>{
                                return <option value={value?.id} key={index}>{value.BrandName}</option>
                            })}
                            
                        </select>
                        {formik.touched.brand && formik.errors.brand && (
                            <p className="text-red-500 text-xs italic">{formik.errors.brand}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {formik.touched.password && formik.errors.password && (
                            <p className="text-red-500 text-xs italic">{formik.errors.password}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    
                </div>

                <div className='grid md:grid-cols-2 grid-cols-1'>
                <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                            <p className="text-red-500 text-xs italic">{formik.errors.confirmPassword}</p>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mb-4">
                    <button
                        className={`mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
                        type="submit"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style={{
                            background: "linear-gradient(to right, #34D399, #22A7F0)",
                        }}
                    >
                       Submit
                    </button>

                </div>
            </form>
        </div>

                        {/* Staff Details */}
                        
<ViewStaffDetails />
        </>
    );
}

export default AddStaffForm;
