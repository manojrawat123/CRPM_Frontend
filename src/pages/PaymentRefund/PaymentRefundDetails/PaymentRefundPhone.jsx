import { format } from "date-fns";
import React from "react";

const PaymentRefundPhone = ({converted_data}) => {
  return (
    <div className="overflow-x-auto border border-green-500 rounded-xl md:hidden">
      <table className="min-w-full table-auto border-collapse rounded-md overflow-hidden">
        <tbody>
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
         
        </tbody>
      </table>
    </div>
  );
};

export default PaymentRefundPhone;
