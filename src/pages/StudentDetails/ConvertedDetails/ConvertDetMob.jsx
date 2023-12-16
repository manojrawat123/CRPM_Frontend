import { format } from "date-fns";
import React from "react";

const ConvertDetMob = ({converted_data}) => {
  return (
    <div className="overflow-x-auto border border-green-500 rounded-xl md:hidden">
      <table className="min-w-full table-auto border-collapse rounded-md overflow-hidden">
        <tbody>
          <tr>
            <th className="bg-green-200 border border-green-500 p-2">Course</th>
            <td className="border border-green-500 p-2">{converted_data?.CourseID?.ServiceName}</td>
             
          </tr>
          <tr>
            <th className="bg-green-200 border border-green-500 p-2">Batch</th>
            <td className="border border-green-500 p-2">---</td>
             
          </tr>
          <tr>
            <th className="bg-green-200 border border-green-500 p-2">
              Batch Timings
            </th>
            <td className="border border-green-500 p-2">----</td>
              
          </tr>
          <tr>
            <th className="bg-green-200 border border-green-500 p-2">
              Book Issued
            </th>
            <td className="border border-green-500 p-2">No Book Issued</td>
             
          </tr>
          <tr>
            <th className="bg-green-200 border border-green-500 p-2">
              Teacher
            </th>
            <td className="border border-green-500 p-2">{converted_data?.LeadID.LeadRepresentativePrimary.name}</td>
              
          </tr>
          <tr>
            <th className="bg-green-200 border border-green-500 p-2">
              Convert Date
            </th>
            <td className="border border-green-500 p-2">{converted_data?.ConvertedDateTime ? format(new Date(converted_data?.ConvertedDateTime), "dd MMM yyyy h a") : "---"}</td>
             
          </tr>
          <tr>
            <th className="bg-green-200 border border-green-500 p-2">
              Course Complete
            </th>
            <td className="border border-green-500 p-2">{new Date(converted_data?.CourseEndDate) > new Date() ? "Course in progress" : "Compleated"}</td>
              
          </tr>
          <tr>
            <th className="bg-green-200 border border-green-500 p-2">
              Course Fees
            </th>
            <td className="border border-green-500 p-2">{converted_data.TotalFee}</td>
            
          </tr>
          <tr>
            <th className="bg-green-200 border border-green-500 p-2">
              Next Due Date
            </th>
            <td className="border border-green-500 p-2">{converted_data?.NextDueDate}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ConvertDetMob;
