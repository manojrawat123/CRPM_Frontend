
import React, { useContext, useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DataContext } from "../../context";
import FeesSupport from "./FeesSupport";
import ExcelDownloadButton from "../../component/ExcelDownloadButton/ExcelDownloadButton";
import { Button } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";


const FeesDetails = () => {
  const { GetFeesAll, allFeesObj } =
    useContext(DataContext);
  const [filteredallFeesObj, setFilteredAllFeesObj] = useState([]);
  const [isFeesDate, setisFeesDate] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const handleSelect = (date) => {
    setisFeesDate(false);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    let filtered = allFeesObj?.filter((product) => {
      let productDate = new Date(product?.fee_payment_datetime);
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
    setFilteredAllFeesObj(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  useEffect(() => {
    GetFeesAll();
  }, []);

  return (
    <>
      

     
<div className="  overflow-x-auto">
        <div className="w-full rounded ">
  <div className='ml-auto flex'>
{isFeesDate ? (
  <ExcelDownloadButton
  data={allFeesObj?.map((element, index) => ({
  "S. No.": index + 1,
  Name: element.lead.LeadName,
  Phone: element.lead.LeadPhone,
  Email: element.lead.LeadEmail,
  "Fee Received": element.fee_received,
  "Course Name": element.lead.LeadServiceInterested.ServiceName,
  "Payment Mode": element.payment_mode.payment_mode,
  "Payment Purpose": element.payment_type.payment_type_display,
  "Payment Date": element.fee_payment_datetime,
  "Receipt No": element.receipt_number,
  "Representative Name": element.lead.LeadRepresentativePrimary.name,
  "Company Name": element.lead.Company.CompanyName,
  "Brand Name": element.lead.Brand.BrandName
}))}
fileName={"Fees Detail's"}
  />
) : (
  <ExcelDownloadButton
 data={allFeesObj?.map((element, index) => ({
  "S. No.": index + 1,
  Name: element.lead.LeadName,
  Phone: element.lead.LeadPhone,
  Email: element.lead.LeadEmail,
  "Fee Received": element.fee_received,
  "Course Name": element.lead.LeadServiceInterested.ServiceName,
  "Payment Mode": element.payment_mode.payment_mode,
  "Payment Purpose": element.payment_type.payment_type_display,
  "Payment Date": element.fee_payment_datetime,
  "Receipt No": element.receipt_number,
  "Representative Name": element.lead.LeadRepresentativePrimary.name,
  "Company Name": element.lead.Company.CompanyName,
  "Brand Name": element.lead.Brand.BrandName
}))}
fileName={"Fees Detail's"}
  />
)}


{
  isFeesDate?
null
:
<button variant="outlined"
className={" border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out  sm:mr-16 " + `${isFeesDate ? '': " ml-auto "}`}
onClick={() => {
  setisFeesDate(true);  
}}
>
Reset Filter
</button> 

  }
 <button
onClick={() => setShowCalendar(!showCalendar)}
className={`mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out sm:mr-16 ${isFeesDate ? " ml-auto " : ""} ${
  showCalendar
    ? "border border-red-500 hover:bg-red-500 hover:text-white text-red-500"
    : "border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 "
}`}
>
{showCalendar ? <CloseOutlined /> : "Filter Fees Detail's"}
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
      <table className="min-w-full">
          <thead className="bg-purple-500 text-white hidden md:table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">IDs</th>
              <th className="px-4 py-2 border border-gray-300">Fees Details</th>
              <th className="px-4 py-2 border border-gray-300">Lead Details</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>

          <thead className="bg-purple-500 text-white md:hidden table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Fees Details</th>
            </tr>
          </thead>


            {isFeesDate ? allFeesObj?.map((fees, index) => (
              <FeesSupport
                fees={fees}
                index={index} 
                key={index}
              />
            ))
              : filteredallFeesObj?.map((fees, index) => (
                <FeesSupport
                  fees={fees}
                  index={index}
                  key={index}
                />
              ))}
        </table>
      </div>
    </>
  );
};

export default FeesDetails;
