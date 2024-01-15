import React, { useState } from 'react'
import EditBatchButton from '../EditButton';
import axios from 'axios';
import API_BASE_URL from '../../../config';
import { CircularProgress } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';

const BatchSupport = (props) => {
    const [activeButton, setActiveButton] = useState(false);
    console.log(props)
    return (
        <>
            <tbody className='md:table-footer-group hidden'>
                <tr className={props.index % 2 === 0 ? 'bg-gray-100' : ''}>
                    <td className="px-6 py-4 text-sm text-gray-900">
                        <span className='font-bold text-black'>Batch ID  -:  </span>
                        {props?.item?.BatchID}

                        <div>
                            <span className='font-bold text-black'>Batch Name -:  </span>
                            {props?.item?.BatchName}
                        </div>

                        <div>
                            <span className='font-bold text-black'>Batch Mode -:  </span>
                            {props?.item?.BatchMode}
                        </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                        <div>
                            <span className='font-bold text-black'>Assigned Teachers -:  </span>
                            {props?.item?.BatchTeacherName}
                        </div>
                        <div>
                            <span className='font-bold text-black'>Assigned Staff -:  </span>
                            {props?.item?.BatchStaffAssigned}
                        </div>
                        <div>
                            <span className='font-bold text-black'>Active Status -:  </span>
                            {props?.item?.Status ? "Active" : "Not Active"}
                        </div>
                        <div>
                            <span className='font-bold text-black'>Tags -:  </span>
                            {props?.item?.BatchTags}
                        </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                        <div>
                            <span className='font-bold text-black'>Created Date Time -:  </span>
                            {props?.item?.BatchCreatedDate?.substring(0, 10)}
                        </div>

                        <div>
                            <span className='font-bold text-black'>Batch Timing -:  </span>
                            {props?.item?.BatchTime?.substring(0, 5)}  to {props?.item?.BatchEndTime.substring(0, 5)}
                        </div>
                        <div>
                            <span className='font-bold text-black'>Batch StartDate -:  </span>
                            {props?.item?.BatchStartDate?.substring(0, 10)}
                        </div>
                        <div>
                            <span className='font-bold text-black'>Batch End Date -:  </span>
                            {props?.item?.BatchEndDate?.substring(0, 10)}
                        </div>
                    </td>


                    <td>

                        {/* Edit Button!!  */}
                        <EditBatchButton item={props?.item} batchDetails={props?.batchDetails} />
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={() => {
                                setActiveButton(true);
                                const token = localStorage.getItem("token");
                                axios.put(`${API_BASE_URL}/batch/${props?.item?.BatchID}/`, {
                                    Status: props?.item.Status == true ? false : true,
                                }, {
                                    headers: {
                                        "Authorization": `Bearer ${token}`
                                    }
                                }).then((value) => {
                                    console.log(value);
                                    props?.batchDetails()
                                }).catch((err) => {
                                    toast.error('Some Error Occured!!', {
                                        position: toast.POSITION.TOP_CENTER,});
                                }).finally(() => {
                                    setActiveButton(false);
                                })
                                console.log("Button Clicked");
                            }}
                        >
                            {activeButton ? <> &nbsp;&nbsp;&nbsp;<CircularProgress color="inherit" size={19} />&nbsp;&nbsp;&nbsp;</> : <> {props?.item?.Status ? "Mark InActive" : "Active"}</>}
                        </button>
                        {/* Edit Button End!! */}
                    </td>
                </tr>
            </tbody>


            <tbody className='tabel md:hidden'>
                <tr className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

                    <td className="border border-gray-300 px-4 py-2">

                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Batch ID </div>
                            <div className='col-span-3'> {props?.item?.BatchID}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'> Batch Name</div>
                            <div className='col-span-3'>{props?.item?.BatchName}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Batch Mode</div>
                            <div className='col-span-3'> {props?.item?.BatchMode}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Assigned Teachers</div>
                            <div className='col-span-3'> {props?.item?.BatchTeacherName}</div>
                        </div>


                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Assigned Staff </div>
                            <div className='col-span-3'>{props?.item?.BatchStaffAssigned}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Active Status </div>
                            <div className='col-span-3'> {props?.item?.Status ? "Active" : "Not Active"}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Tags</div>
                            <div className='col-span-3'>{props?.item?.BatchTags}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Created Date Time </div>
                            <div className='col-span-3'>{props?.item?.BatchCreatedDate?.substring(0, 10)}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Batch Timing</div>
                            <div className='col-span-3'>{props?.item?.BatchTime?.substring(0, 5)}  to {props?.item?.BatchEndTime.substring(0, 5)}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Tags</div>
                            <div className='col-span-3'>{props?.item?.BatchTags}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Batch StartDate </div>
                            <div className='col-span-3'> {props?.item?.BatchEndDate?.substring(0, 10)}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Batch End Date</div>
                            <div className='col-span-3'> {props?.item?.BatchEndDate?.substring(0, 10)}</div>
                        </div>


                        <div className='flex items-center justify-center'>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 mt-4 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={() => {
                                    setActiveButton(true);
                                    const token = localStorage.getItem("token");
                                    axios.put(`${API_BASE_URL}/batch/${props?.item?.BatchID}/`, {
                                        Status: props?.item.Status == true ? false : true,
                                    }, {
                                        headers: {
                                            "Authorization": `Bearer ${token}`
                                        }
                                    }).then((value) => {
                                        console.log(value);
                                        props?.batchDetails()
                                    }).catch((err) => {
                                        console(err);
                                        toast.error('Some Error Occured!!', {
                                            position: toast.POSITION.TOP_CENTER,});
                                    }).finally(() => {
                                        setActiveButton(false);
                                    })
                                    console.log("Button Clicked");
                                }}
                            >

                                {activeButton ? <> &nbsp;&nbsp;&nbsp;<CircularProgress color="inherit" size={19} /></> : <> {props?.item?.Status ? "Mark InActive" : "Active"}</>}

                            </button>
                        </div>
                        <div className='flex items-center justify-center'>
                            <EditBatchButton item={props?.item} batchDetails={props?.batchDetails} />

                        </div>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default BatchSupport
