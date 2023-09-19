// Leads Tabel
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context";
import LeadSupport from "./LeadSupport";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

const Lead = () => {
  const { getLeadFunc, leads } = useContext(DataContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isDate, setIsDate] = useState(true);
  const [filteredLead, setFilteredLead] = useState([]);

  /// /// Inside your useEffect, set isLoading to false when the data is fetched

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getLeadFunc();
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("This is filteredLead", filteredLead);
  }, [JSON.stringify(startDate), JSON.stringify(endDate)]);

  
  const handleSelect = (date) => {
    setIsDate(false)
    console.log(date);
    console.log(date.selection.endDate == date.selection.startDate);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    let filtered = leads?.filter((product) => {
      let productDate = new Date(product?.LeadDateTime);
      if (date.selection.endDate == date.selection.startDate) {
        productDate.setHours(0, 0, 0, 0);
        console.log(date.selection.endDate == date.selection.startDate);
        console.log(
          "How Much Should Return: ",
          productDate.getTime() === date.selection.startDate.getTime()
        );
        console.log("Product Date", productDate);
        console.log("Date Selection Date", date.selection.startDate);
        return (
          productDate.getTime() === date.selection.startDate.getTime()
        );
      }
      else if (date.selection.startDate && date.selection.endDate) {
        return (
          productDate <= date.selection.endDate &&
          productDate >= date.selection.startDate
        )
      }
      else if (date.selection.endDate != date.selection.startDate) {
        return (
          productDate >= date.selection.startDate &&
          productDate <= date.selection.endDate)
      }
    })
    setFilteredLead(filtered);
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  return (
    <>
      <div className="text-center mt-8">
        <div className="sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto border-2 rounded border-gray-800">
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </div>
      </div>
      <div className="w-11/12 mx-auto mt-8">
        <div className="text-center my-4">
          <button
            type="button"
            onClick={() => {
              setIsDate(true);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Show all data
          </button>
        </div>
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200 border border-black">
              <th className="px-4 py-2 border border-black">S.No</th>
              <th className="px-4 py-2 border border-black">Name</th>
              <th className="px-4 py-2 border border-black">
                Lead Details
              </th>
              <th className="px-4 py-2 border border-black">Lead Date & Time</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isDate ? leads?.map((lead, index) => (
              <LeadSupport lead={lead} index={index} key={index} />
            )) : filteredLead?.map((lead, index) => (
              <LeadSupport lead={lead} index={index} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Lead;