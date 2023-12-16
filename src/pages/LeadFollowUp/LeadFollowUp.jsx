import axios from "axios";
import React, { useEffect, useState } from "react";
import LeadFollowUpSupport from "./LeadFollowSupport";
import { DateRangePicker } from "react-date-range";
import API_BASE_URL from "../../config";
import LoadingTabel from "../Lead/LeadLoader";
import { Button } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import ExcelDownloadButton from "../../component/ExcelDownloadButton/ExcelDownloadButton";


const LeadFollowUp = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [isFeesDate, setisFeesDate] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleSelect = (date) => {
    setisFeesDate(false);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    let filtered = data?.filter((product) => {
      let productDate = new Date(product?.LeadStatusDate);
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
    setFilteredData(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  console.log(new Date());

  const leadfollowUpFunc = () => {
    axios
      .get(`${API_BASE_URL}/leadnotconverted/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((value) => {
        console.log(value.data);
        const arrangeData = value.data?.filter((element, index) => {
          if (element?.LeadStatus == null || element?.LeadStatus == "Fresh") {
            const currentDate = new Date();
            const leadDate = new Date(element?.LeadFollowupCreatedDate);
            return leadDate <= currentDate;
          }
        });
        setData(value.data);
        console.log(arrangeData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    leadfollowUpFunc();
  }, []);

  return (
    <>
      <div className="  overflow-x-auto">
        <div className="w-full rounded">
          <div className='ml-auto flex'>
            {isFeesDate ? (
              <ExcelDownloadButton
                data={filteredData?.map((element, index) => ({
                  "S. No.": index + 1,
                  "Name": element.LeadID?.LeadName,
                  "Lead Source": element.LeadID?.LeadScourceId.LeadSource,
                  "Class Mode": element.LeadID?.LeadAssignmentAlgo,
                  "Follow Up Status": element.LeadID?.LeadStatus,
                  "Lead Date & Time": `${element?.LeadID?.LeadDateTime?.substring(0, 10)} ` + element?.LeadID?.LeadDateTime?.substring(11, 16),
                  "Followup Date & Time": `${element.LeadStatusDate?.substring(0, 10)}`,
                  "Event Status": element.LeadEvent,
                  "Call Representative": element.LeadID?.LeadRepresentativePrimary?.name,
                  "Course": element.LeadServiceInterested?.ServiceName,
                  "Lead Status": element.LeadStatus,
                }))}
                fileName={"Today call's"}
              />
            ) : (
              <ExcelDownloadButton
                data={data?.map((element, index) => ({
                  "S. No.": index + 1,
                  "Name": element.LeadID?.LeadName,
                  "Lead Source": element.LeadID?.LeadScourceId.LeadSource,
                  "Class Mode": element.LeadID?.LeadAssignmentAlgo,
                  "Follow Up Status": element.LeadID?.LeadStatus,
                  "Lead Date & Time": `${element?.LeadID?.LeadDateTime?.substring(0, 10)} ` + element?.LeadID?.LeadDateTime?.substring(11, 16),
                  "Followup Date & Time": `${element.LeadStatusDate?.substring(0, 10)}`,
                  "Event Status": element.LeadEvent,
                  "Call Representative": element.LeadID?.LeadRepresentativePrimary?.name,
                  "Course": element.LeadServiceInterested?.ServiceName,
                  "Lead Status": element.LeadStatus,
                }))}
                fileName={"Today's Call"}
              />
            )}


            {
              isFeesDate ?
                null
                :
                <button variant="outlined"
                  className={" border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out  sm:mr-16 " + `${isFeesDate ? '' : " ml-auto "}`}
                  onClick={() => {
                    setisFeesDate(true);
                  }}
                >
                  Reset Filter
                </button>

            }
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className={`mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out sm:mr-16 ${isFeesDate ? " ml-auto " : ""} ${showCalendar
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
      <div className="">
        <h1 className="text-xl font-bold underline my-4 text-center">Lead Details</h1>
        <div className="w-11/12 mx-auto ">
          <div className="mx-4">
            <table className="min-w-full">
              <thead className="bg-purple-500 text-white hidden md:table-header-group">
                <tr className="border border-gray-300">
                  <th className="px-4 py-2 border border-gray-300">Name</th>
                  <th className="px-4 py-2 border border-gray-300">Details</th>
                  <th className="px-4 py-2 border border-gray-300">
                    Other Details
                  </th>
                  <th className="px-4 py-2 border border-gray-300">Links</th>
                </tr>
              </thead>

              <thead className="bg-purple-500 text-white md:hidden table-header-group">
                <tr className="border border-gray-300">
                  <th className="px-4 py-2 border border-gray-300">Today</th>
                </tr>
              </thead>

              {data ? (
                <>
                  {isFeesDate
                    ? data?.map((item, index) => (
                      <LeadFollowUpSupport
                        items={item}
                        key={index}
                        index={index}
                      />
                    ))
                    : filteredData?.map((item, index) => (
                      <LeadFollowUpSupport
                        items={item}
                        key={index}
                        index={index}
                      />
                    ))}
                </>
              ) : (
                <LoadingTabel />
              )}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadFollowUp;
