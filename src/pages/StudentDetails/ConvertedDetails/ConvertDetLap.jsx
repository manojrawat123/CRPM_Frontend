// Data4.jsx

import { format } from 'date-fns';
import React from 'react';

const ConvertDetailLap = ({ converted_data }) => {
  return (
    <>
      <div className="overflow-x-auto border border-green-500 rounded-xl md:block hidden mt-2">
        <table className="min-w-full table-auto border-collapse rounded-md overflow-hidden">
          <thead>
            <tr className="bg-green-200">
              <th className="border border-green-500 p-2">Course</th>
              <th className="border border-green-500 p-2">Batch</th>
              <th className="border border-green-500 p-2">Batch Timings</th>
              <th className="border border-green-500 p-2">Book Issued</th>
              <th className="border border-green-500 p-2">Teacher</th>
              <th className="border border-green-500 p-2">Convert Date</th>
              <th className="border border-green-500 p-2">Course Complete</th>
              <th className="border border-green-500 p-2">Course Fees</th>
              <th className="border border-green-500 p-2">Next Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-green-500 p-2">{converted_data?.CourseID?.ServiceName}</td>
              <td className="border border-green-500 p-2">---</td>
              <td className="border border-green-500 p-2">----</td>
              <td className="border border-green-500 p-2">No Book Issued</td>
              <td className="border border-green-500 p-2">{converted_data?.LeadID.LeadRepresentativePrimary.name}</td>
              <td className="border border-green-500 p-2">{converted_data?.ConvertedDateTime ? format(new Date(converted_data?.ConvertedDateTime), "dd MMM yyyy h a") : "---"}</td>
              <td className="border border-green-500 p-2">{new Date(converted_data?.CourseEndDate) > new Date() ? "Course in progress" : "Compleated"}</td>
              <td className="border border-green-500 p-2">{converted_data.TotalFee}</td>
              <td className="border border-green-500 p-2">{converted_data?.NextDueDate}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ConvertDetailLap;
