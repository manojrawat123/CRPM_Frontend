import React, { useContext, useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DataContext } from "../../context";
import RegisteredSupport from "./RegisteredSupport";
import RegisterStudentLoading from "./RegisterStudentLoading";
import { CloseOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import ExcelDownloadButton from "../../component/ExcelDownloadButton/ExcelDownloadButton";
import { format } from "date-fns";

const RegisteredStudent = () => {
  const { getResisteredStudentAll, registeredStudent } =
    useContext(DataContext);
  const [isRegisteredDate, setIsRegisteredDate] = useState(true);
  const [filteredRegisteredStudent, setFilteredRegisterStudent] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);


  const handleSelect = (date) => {
    setIsRegisteredDate(false);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    let filtered = registeredStudent?.filter((product) => {
      let productDate = new Date(product?.ConvertedDateTime);

      if (date.selection.endDate == date.selection.startDate) {
        productDate.setHours(0, 0, 0, 0);
        return productDate.getTime() === date.selection.startDate.getTime();
      } else if (date.selection.startDate && date.selection.endDate) {
        return (
          productDate <= date.selection.endDate &&
          productDate >= date.selection.startDate
        );
      } else if (date.selection.endDate != date.selection.startDate) {
        return (
          productDate >= date.selection.startDate &&
          productDate <= date.selection.endDate
        );
      }
    });
    setFilteredRegisterStudent(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  useEffect(() => {
    getResisteredStudentAll();
  }, []);

  return (
    <>
     <div className="  overflow-x-auto">
        <div className="w-full rounded ">
  <div className='ml-auto flex'>
{isRegisteredDate ? (
  <ExcelDownloadButton
   data={filteredRegisteredStudent.map((element, index) => ({
  "S. No.": index + 1,
  "Student Name": element.lead_obj?.LeadName, 
  "Student Total Fee" :   element.total_payment,
  "Student Pending Fee" :   element.pending_fees,
  "Refund Fees": element.fees_refund,
  "Course Name" : element.CourseID?.ServiceName,
  "Phone" :  element.lead_obj?.LeadPhone,
  "Lead Source" :  element.lead_obj?.LeadScourceId?.LeadSource,
  "Representative" :   element.lead_obj?.LeadRepresentativePrimary?.name,
  "Lead Add Date" : element.lead_obj?.LeadDateTime ? format(new Date(element.lead_obj?.LeadDateTime), "dd MMM yyyy h a") : null                  ,
  "Converted Date" : element?.ConvertedDateTime ? format(new Date(element?.ConvertedDateTime), "dd MMM yyyy h a") : null,
  "Last Payment Date" : element?.PaymentID?.payment_date ? format(new Date(element.PaymentID?.payment_date), "dd MMM yyyy h a") : null ,
  "Course Start Date" :   element.CourseStartDate ? format(new Date(element?.CourseStartDate), "dd MMM yyyy") : null,
  "Course End Date" :  element.CourseEndDate ? format(new Date(element.CourseEndDate), "dd MMM yyyy") : null ,
}))}
fileName={"Registered Student"}
  />
) : (
  <ExcelDownloadButton
    data={filteredRegisteredStudent.map((element, index) => ({
  "S. No.": index + 1,
  "Student Name": element.lead_obj?.LeadName, 
  "Student Total Fee" :   element.total_payment,
  "Student Pending Fee" :   element.pending_fees,
  "Refund Fees": element.fees_refund,
  "Course Name" : element.CourseID?.ServiceName,
  "Phone" :  element.lead_obj?.LeadPhone,
  "Lead Source" :  element.lead_obj?.LeadScourceId?.LeadSource,
  "Representative" :   element.lead_obj?.LeadRepresentativePrimary?.name,
  "Lead Add Date" : element.lead_obj?.LeadDateTime ? format(new Date(element.lead_obj?.LeadDateTime), "dd MMM yyyy h a") : null                  ,
  "Converted Date" : element?.ConvertedDateTime ? format(new Date(element?.ConvertedDateTime), "dd MMM yyyy h a") : null,
  "Last Payment Date" : element?.PaymentID?.payment_date ? format(new Date(element.PaymentID?.payment_date), "dd MMM yyyy h a") : null ,
  "Course Start Date" :   element.CourseStartDate ? format(new Date(element?.CourseStartDate), "dd MMM yyyy") : null,
  "Course End Date" :  element.CourseEndDate ? format(new Date(element.CourseEndDate), "dd MMM yyyy") : null ,
}))}
fileName={"Registered Student"}
  />
)}


{
  isRegisteredDate?
null
:
<button variant="outlined"
className={" border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out  sm:mr-16 " + `${isRegisteredDate ? '': " ml-auto "}`}
onClick={() => {
  setIsRegisteredDate(true);  
}}
>
Reset Filter
</button> 

  }
 <button
onClick={() => setShowCalendar(!showCalendar)}
className={`mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out sm:mr-16 ${isRegisteredDate ? " ml-auto " : ""} ${
  showCalendar
    ? "border border-red-500 hover:bg-red-500 hover:text-white text-red-500"
    : "border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 "
}`}
>
{showCalendar ? <CloseOutlined /> : "Filter Lead's"}
</button>

{showCalendar && (
<div
  className={` absolute z-10  text-center shadow-2xl overflow-hidden bg-white px-12 right-0 top-[9rem] rounded-xl transition-height duration-500 overflow-x-scroll`}
  
>
  <DateRangePicker
    ranges={[selectionRange]}
    onChange={handleSelect}
    className="w-full max-w-full"
  />
</div>
)} 
</div>

        </div>
      </div>
      

      <div className="m-8">
        
      <h1 className="text-xl font-bold underline my-4 text-center">Register Student Detail's</h1>
      <table className="min-w-full">
          <thead className="bg-purple-500 text-white hidden md:table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Converted Details</th>
              <th className="px-4 py-2 border border-gray-300">Lead Details</th>
              <th className="px-4 py-2 border border-gray-300">Dates & Time</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>

          <thead className="bg-purple-500 text-white md:hidden table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Registered Student Details</th>
            </tr>
          </thead>
            {registeredStudent ? isRegisteredDate ? registeredStudent?.map((student, index) => (
              <RegisteredSupport
                student={student}
                index={index}
                key={index}
              />
            ))
              : filteredRegisteredStudent?.map((student, index) => (
                <RegisteredSupport
                  student={student}
                  index={index}
                  key={index}
                />
              )): <RegisterStudentLoading />}
        </table>
      </div>
    </>
  );
};

export default RegisteredStudent;
