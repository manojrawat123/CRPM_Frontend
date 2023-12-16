// Data4.jsx

import { format } from 'date-fns';
import React from 'react';

const PaymentRefundLap = ({ refund_data }) => {
  return (
    <>
      <h1 className='text-green-500 underline text-xl font-bold text-center my-4'>Fees Refund Data</h1>
      <div className="overflow-x-auto border border-green-500 rounded-xl md:block hidden mt-2 m-6">
        <table className="min-w-full table-auto border-collapse rounded-md overflow-hidden">
          <thead>
            <tr className="bg-green-200">
              <th className="border border-green-500 p-2">Name</th>
              <th className="border border-green-500 p-2">Phone</th>
              <th className="border border-green-500 p-2">Total Fees</th>
              <th className="border border-green-500 p-2">Collected Fees</th>
              <th className="border border-green-500 p-2">Pending Fees</th>
              <th className="border border-green-500 p-2">Refund Fees</th>
              <th className="border border-green-500 p-2">Refund Date</th>
            </tr>
          </thead>
          <tbody>
            {refund_data?.map((element, index)=>{
              return (<tr>
              <td className="border border-green-500 p-2">{element?.lead_obj?.LeadName}</td>
              <td className="border border-green-500 p-2">{element?.lead_obj?.LeadPhone}</td>
              <td className="border border-green-500 p-2">{element?.total_fees}</td>
              <td className="border border-green-500 p-2">{element?.payment_done}</td>
              <td className="border border-green-500 p-2">{element?.pending_fees}</td>
              <td className="border border-green-500 p-2">{element?.FeeRefunded}</td>
              <td className="border border-green-500 p-2">{format(new Date(element?.FeeRefundedDateTime), "dd MMM yy h a")}</td>
             </tr>)
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};


export default PaymentRefundLap
