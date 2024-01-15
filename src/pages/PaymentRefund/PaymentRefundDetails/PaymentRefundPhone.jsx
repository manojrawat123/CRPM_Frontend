import { format } from "date-fns";
import React from "react";

const PaymentRefundPhone = ({ refund_data }) => {
  return (
    <div className="overflow-x-auto  md:hidden mx-4">
      <h1 className="text-xl font-bold underline text-center">Refund Fees Details</h1>
      <table className="min-w-full table-auto border-collapse rounded-md overflow-hidden">
      
          {
            refund_data.map((element, index)=>{
          return ( 
            <tbody key={index} className="my-4  border-green-500 rounded-xl">  
          <tr>
          <th className="border border-green-500 p-2">Name</th>
             
            <td className="border border-green-500 p-2">{element?.lead_obj?.LeadName}</td>
             
          </tr>
          <tr>
          <th className="border border-green-500 p-2">Phone</th>
             
            <td className="border border-green-500 p-2">{element?.lead_obj?.LeadPhone}</td>
              
          </tr>
          <tr>
          <th className="border border-green-500 p-2">Total Fees</th>
             
            <td className="border border-green-500 p-2">{element?.total_fees}</td>
              
          </tr>
          <tr>
          <th className="border border-green-500 p-2">Collected Fees</th>
             
            <td className="border border-green-500 p-2">{element?.payment_done}</td>
             
          </tr>
          <tr>
          <th className="border border-green-500 p-2">Pending Fees</th>
            
            <td className="border border-green-500 p-2">{element?.pending_fees}</td>
             
          </tr>
          <tr>
          <th className="border border-green-500 p-2">Refund Fees</th>
            
            <td className="border border-green-500 p-2">{element?.FeeRefunded}</td>
             
          </tr>
          <tr>
          <th className="border border-green-500 p-2">Refund Date</th>
            <td className="border border-green-500 p-2">{format(new Date(element?.FeeRefundedDateTime), "dd MMM yy h a")}</td>
               
          </tr>
          <br />
          <br />
          </tbody>
          )
          })
        }
      </table>
    </div>
  );
};

export default PaymentRefundPhone;
