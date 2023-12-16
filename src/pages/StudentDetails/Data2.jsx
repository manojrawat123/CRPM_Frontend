import { ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Data2 = ({ fees_details }) => {



    return (
        <>
            <div className="mx-4">
                <div className="py-1 text-center bg-gray-200 border border-solid border-green-500 my-2 rounded-xl">
                    <NavLink to={"/registeredstudent"}>
                        <Button variant='outlined'>
                            <ArrowBack /> Back
                        </Button>
                    </NavLink>
                    &nbsp;&nbsp;
                    <Button variant='outlined'>
                        <ArrowBack /> Back to Pending Fees
                    </Button>

                </div>


                <div className="overflow-x-auto border border-green-500 border-solid rounded-xl">
                    <table className="min-w-full table-auto border-collapse border border-green-500 rounded-md overflow-hidden">
                        <thead>
                            <tr className="bg-green-200">
                                <th className="border border-green-500 p-2">Receipt No</th>
                                <th className="border border-green-500 p-2">Fees</th>
                                <th className="border border-green-500 p-2">Date</th>
                                <th className="border border-green-500 p-2">Mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fees_details?.map((element, index) => (
                                <tr key={index}>
                                    <td className="border border-green-500 p-2">{element?.receipt_number}</td>
                                    <td className="border border-green-500 p-2">${element?.fee_received}</td>
                                    <td className="border border-green-500 p-2">{element?.fee_payment_datetime}</td>
                                    <td className="border border-green-500 p-2">{element?.payment_mode.payment_mode}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <br />
                <div className="text-center font-semibold rounded-b-xl">
                    <Button variant='outlined'
                        onClick={() => {
                            console.log("Button Clicked");
                        }}
                    >
                        Add Lost Sale
                    </Button>
                </div>
            </div>

        </>
    )
}

export default Data2
