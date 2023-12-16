import axios from 'axios';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';


const DemoHappnedSupport = (props) => {

    return (
        <>

            <tbody className='md:table-footer-group hidden'>
                <tr key={props.lead?.id}>
                    <td className="border border-black px-4 py-2">{props?.visit.LeadID?.LeadName}</td>
                    <td className="border border-black px-4 py-2">
                        <span className="font-bold">Course:</span>
                        {props?.visit?.LeadServiceInterested?.ServiceName}

                        <br />
                        <span className='font-bold '>
                            Class Mode:
                        </span>
                        {props?.visit.LeadID?.LeadAssignmentAlgo}
                        <br />

                        <span className='font-bold'>
                            Lead Source:
                        </span>
                        {props?.visit.LeadID?.LeadSource}
                        <span className='font-bold'>
                            <br />
                            Followup Status:
                        </span>
                        Demo Happned
                    </td>
                    <td className="border border-black px-4 py-2">

                        <span className="font-bold">
                            <br />
                            Demo Happned Date:
                        </span>
                        {props.visit?.LeadStatusDate ? format(new Date(props.visit.LeadStatusDate), "dd MMM yyyy h a") : ""}
                        <br />
                        <span className="font-bold">
                            Representative:
                        </span>
                        {props.visit?.LeadRep?.name}
                        <br />

                        <span className="font-bold">Remarks:</span>
                        {props.visit?.LeadComments}
                    </td>


                    <td className="border border-black px-4 py-2">
                        <NavLink to={`/leaddetails/${props?.visit?.LeadID?.id}`}>

                            <button
                                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
                            >
                                Show Details
                            </button>
                        </NavLink>

                    </td>
                </tr>
            </tbody>


            <tbody className='tabel md:hidden'>
                <tr key={props?.index} className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

                    <td className="border border-gray-300 px-4 py-2">

                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Lead Name</div>
                            <div className='col-span-3'>{props?.visit.LeadID?.LeadName}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'> Course:</div>
                            <div className='col-span-3'>{props?.visit?.LeadServiceInterested?.ServiceName}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Lead Source:</div>
                            <div className='col-span-3'>{props?.visit.LeadID?.LeadSource}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Followup Status:</div>
                            <div className='col-span-3'>Demo Happned</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'> Demo Happned Date:</div>
                            <div className='col-span-3'> {props.visit?.LeadStatusDate ? format(new Date(props.visit?.LeadEventDate), "dd MMM yyyy h a") : ""}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Lead Representative:</div>
                            <div className='col-span-3'> {props.visit?.LeadRep?.name}</div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2 font-bold'>Remarks:
                            </div>
                            <div className='col-span-3'>
                                {props.visit?.LeadComments}</div>
                        </div>


                        <div className='flex items-center justify-center'>
                            <NavLink to={`/leaddetails/${props?.visit?.LeadID?.id}`}>
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
                                >
                                    Show Detail
                                </button>
                            </NavLink>
                        </div>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default DemoHappnedSupport