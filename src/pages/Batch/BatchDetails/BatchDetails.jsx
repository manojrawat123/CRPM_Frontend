import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../../../config";
import BatchSupport from "./BatchSupport";
import { ToastContainer } from "react-toastify";
import { CircularProgress } from "@mui/material";
import ExcelDownloadButton from "../../../component/ExcelDownloadButton/ExcelDownloadButton";
import { CloseOutlined } from "@mui/icons-material";
import { DateRangePicker } from "react-date-range";
import { DataContext } from "../../../context";
import NoDataPage from "../../../component/NoDataPage/NoDataPage";

const BatchDetails = () => {
  const { batchDetails, batchObj, filterBatchFunc, batchFilterObj } = useContext(DataContext);

  const [isDate, setIsDate] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    batchDetails();
  }, []);

  const handleSelect = (date) => {
    setIsDate(false);
    console.log(date);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);

    filterBatchFunc(date.selection.startDate, date.selection.endDate);
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
          <div className="ml-auto flex">
            {isDate ? (
              <ExcelDownloadButton
                data={batchObj?.map((element, index) => ({
                  "S. No." : index,
                  "Batch ID": element.BatchID,
                  "Batch Name": element.BatchName,
                  "Batch Mode": element.BatchMode,
                  "Batch Teacher Name": element.BatchTeacherName,
                  "Batch Staff Assigned": element.BatchStaffAssigned,
                  Status: element.Status,
                  "Batch Tags": element.BatchTags,
                  "Batch Created Date": element.BatchCreatedDate?.substring(0,10),
                  "Batch Time": `${element.BatchTime?.substring(0,5)} - ${element?.BatchEndTime.substring(0, 5)}`,
                  "Batch Start Date": element.BatchStartDate?.substring(0, 10),
                  "Batch End Date": element.BatchEndDate?.substring(0, 10),
                }))}
                fileName={"Batch Details"}
              />
            ) : (
              <ExcelDownloadButton data={batchFilterObj?.map((element, index) => ({
                "S. No." : index,
                  "Batch ID": element.BatchID,
                  "Batch Name": element.BatchName,
                  "Batch Mode": element.BatchMode,
                  "Batch Teacher Name": element.BatchTeacherName,
                  "Batch Staff Assigned": element.BatchStaffAssigned,
                  Status: element.Status,
                  "Batch Tags": element.BatchTags,
                  "Batch Created Date": element.BatchCreatedDate?.substring(0,10),
                  "Batch Time": `${element.BatchTime?.substring(0,5)} - ${element?.BatchEndTime.substring(0, 5)}`,
                  "Batch Start Date": element.BatchStartDate?.substring(0, 10),
                  "Batch End Date": element.BatchEndDate?.substring(0, 10),
              }))} fileName={"Batch Details"} />
            )}
            {isDate ? null : (
              <button
                variant="outlined"
                className={
                  " border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out  sm:mr-16 " +
                  `${isDate ? "" : " ml-auto "}`
                }
                onClick={() => {
                  setIsDate(true);
                }}
              >
                Reset Filter
              </button>
            )}
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className={`mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out sm:mr-16 ${
                isDate ? " ml-auto " : ""
              } ${
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

      <ToastContainer />
      <div className=" mx-7 py-8 md:py-0">
        <h1 className="text-center underline text-green-500 font-bold text-2xl my-4 hidden md:block">
          Batch Details
        </h1>
        <div className="bg-white rounded-lg shadow-md overflow-x-auto border-2">
          <table className="min-w-full">
            <thead className="bg-purple-500 text-white hidden md:table-header-group">
              <tr className="border border-gray-300">
                <th className="px-2 py-3 text- font-bold text-left uppercase">
                  Batch Details
                </th>
                <th className="px-6 py-3 text- font-bold text-left uppercase ">
                  Staff & Other Details
                </th>
                <th className="px-6 py-3 text- font-bold text-left uppercase">
                  Batch Date & Time
                </th>
                <th className="px-6 py-3 text- font-bold text-left uppercase">
                  Status
                </th>
              </tr>
            </thead>

            <thead className="bg-purple-500 text-white md:hidden table-header-group">
              <tr className="border border-gray-300">
                <th className="px-4 py-2 border border-gray-300">
                  Batch Details
                </th>
              </tr>
            </thead>
            {batchObj ? (
              <>
                {isDate
                  ? batchObj?.map((item, index) => {
                      return (
                        <BatchSupport
                          index={index}
                          item={item}
                          batchDetails={batchDetails}
                        />
                      );
                    })
                  : batchFilterObj?.map((item, index) => {
                      return (
                        <BatchSupport
                          index={index}
                          item={item}
                          batchDetails={batchDetails}
                        />
                      );
                    })}
              </>
            ) : (
              <></>
            )}
          </table>
          {isDate ? 
          batchObj ?
          batchObj.length == 0 ? <NoDataPage status={"Batch "}/> : null : null : null}


{!isDate ? batchFilterObj ? batchFilterObj.length == 0 ? <NoDataPage status={"Batch Created in given Range"}/> : null: null: null}

          {!batchObj ? (
            <div className="h-[50vh] flex items-center justify-center">
              <CircularProgress />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default BatchDetails;
