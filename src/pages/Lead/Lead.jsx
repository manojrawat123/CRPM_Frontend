// Leads Tabel
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context";
import LeadSupport from "./LeadSupport";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker, DefinedRange, InputRange } from "react-date-range";
import { useParams } from "react-router-dom";
import LeadLoaderTabel from "./LeadLoader";
import { CloseOutlined, Download } from "@mui/icons-material";
import { Button } from "@mui/material";
import ExcelDownloadButton from "../../component/ExcelDownloadButton/ExcelDownloadButton";

const Lead = () => {
  const { getLeadFunc, leads, leadGetById } = useContext(DataContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isDate, setIsDate] = useState(true);
  const [filteredLead, setFilteredLead] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const { id } = useParams();

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getLeadFunc();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    leadGetById(id);
  }, []);

  useEffect(() => {
    console.log("This is filteredLead", filteredLead);
  }, [JSON.stringify(startDate), JSON.stringify(endDate)]);

  const handleSelect = (date) => {
    setIsDate(false);
    console.log(date);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    let filtered = leads?.filter((product) => {
      let productDate = new Date(product?.LeadDateTime);
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
    setFilteredLead(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <>
      <div className="  overflow-x-auto">
        <div className="w-full rounded ">
  <div className='ml-auto flex'>
{isDate ? (
  <ExcelDownloadButton
    data={leads?.map((element, index) => ({
      "S. No.": index + 1,
      Name: element.LeadName,
      Phone: element.LeadPhone,
      Email: element.LeadEmail,
      "Lead Status": element.LeadStatus,
      "Course Name": element.LeadServiceInterested?.map(
        (element, index) => {
          return element.ServiceName;
        }
      ),
      "Representative Name": element.LeadRepresentativePrimary.name,
      "Brand Name": element.Brand.BrandName,
      "Lead Scource": element.LeadSource,
    }))}
    fileName={"LeadData"}
  />
) : (
  <ExcelDownloadButton
    data={filteredLead.map((element, index) => ({
      "S. No.": index + 1,
      Name: element.LeadName,
      Phone: element.LeadPhone,
      Email: element.LeadEmail,
      "Lead Status": element.LeadStatus,
      "Course Name": element.LeadServiceInterested.ServiceName,
      "Representative Name": element.LeadRepresentativePrimary.name,
      "Brand Name": element.Brand.BrandName,
      "Lead Scource": element.LeadSource,
    }))}
    fileName={"LeadData"}
  />
)}


{
  isDate?
null
:
<button variant="outlined"
className={" border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out  sm:mr-16 " + `${isDate ? '': " ml-auto "}`}
onClick={() => {
  setIsDate(true);
}}
>
Reset Filter
</button> 

  }
 <button
onClick={() => setShowCalendar(!showCalendar)}
className={`mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out sm:mr-16 ${isDate ? " ml-auto " : ""} ${
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
      {/* Button's List */}
      <h1 className="text-xl font-bold underline my-4 text-center">Lead Details</h1>
      <div
        className={
          "w-11/12 mx-auto "
        }
      >
        <table className="min-w-full">
          <thead className="bg-purple-500 text-white hidden md:table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300 ">
                Lead Details
              </th>
              <th className="px-4 py-2 border border-gray-300 ">
                Lead Date & Time
              </th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>

          <thead className="bg-purple-500 text-white md:hidden table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Lead Details</th>
            </tr>
          </thead>

          {leads ? (
            <>
              {isDate
                ? leads?.map((lead, index) => {
                    return (
                      <LeadSupport lead={lead} index={index} key={index} />
                    );
                  })
                : filteredLead?.map((lead, index) => {
                    return (
                      <LeadSupport lead={lead} index={index} key={index} />
                    );
                  })}
            </>
          ) : (
            <>
              {" "}
              <LeadLoaderTabel />
            </>
          )}
        </table>
      </div>
      <br /> <br />
    </>
  );
};

export default Lead;
