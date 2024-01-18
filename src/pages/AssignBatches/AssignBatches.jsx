import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import MySupport from './AssignBatchSupport';
import API_BASE_URL from "../../config";
import { Button } from '@mui/material';
import { ArrowBack, ArrowForward, CloseOutlined } from '@mui/icons-material';
import AssignBatchesLoading from './AssignBatchesLoading';
import AssignBatchSupport from './AssignBatchSupport';
import { DateRangePicker } from 'react-date-range';
import ExcelDownloadButton from '../../component/ExcelDownloadButton/ExcelDownloadButton';
import { format } from 'date-fns';
import { DataContext } from '../../context';
import { ToastContainer } from 'react-toastify';


const AssignBatch = () => {
  const { batchAssignStuDetailsFunc,
    filterBatchAssignStuDetailsFunc,
    assignBatchObj,
    filterAssignBatchObj } = useContext(DataContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isDate, setIsDate] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);

  

  useEffect(() => {
    batchAssignStuDetailsFunc()
  }, [])

  const handleSelect = (date) => {
    setIsDate(false);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    filterBatchAssignStuDetailsFunc(date.selection.startDate, date.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (

    <>
<ToastContainer />

<div className="  overflow-x-auto">
        <div className="w-full rounded ">
          <div className='ml-auto flex'>
            {isDate ? (
              <ExcelDownloadButton
                data={assignBatchObj?.converted_data.map((element, index) => ({
                  "S. No.": index + 1,
                  Name: element.LeadID?.LeadName,
                  "Lead Source": element.LeadID?.LeadSource,
                  'Lead Representative': element.UpdateBY,
                  "Lead Phone": element.LeadID?.LeadPhone,
                  "Brand Name": element.Brand?.BrandName,
                  "Converted ID": element.ConvertedID,
                  "Lead Id": element.LeadID.id,
                  "Lead Date Time": element.LeadID?.LeadDateTime ? format(new Date(element.LeadID?.LeadDateTime?.substring(0, 10)), "dd MMM yyyy") : "----",
                  "Converted Date Time": element.ConvertedDateTime ? format(new Date(element?.ConvertedDateTime?.substring(0, 10)), "dd MMM yyyy") : "----",
                  "Course Name": element.CourseID.ServiceName,
                  "Batch Name": element.assign_batch_details != null ? `${element.assign_batch_details?.BatchID.BatchName} - ${element.assign_batch_details?.BatchID?.BatchTags} - ${element.assign_batch_details?.BatchID?.BatchTime.substring(0, 5)} - ${element.assign_batch_details?.BatchID?.BatchEndTime.substring(0, 5)}` : "No Batch Assigned",
                  "Course Start Date": element.CourseStartDate ? format(new Date(element?.CourseStartDate), "dd MMM yyyy") : "----",
                  "Course End Date": element.CourseEndDate ? format(new Date(element.CourseEndDate), "dd MMM yyyy") : "----",
                  "Course Expiry Date": element.CourseExpiryDate ? format(new Date(element.CourseExpiryDate), "dd MMM yyyy") : "----",
                  
                }))}
                fileName={"Assign Batch Details"}
              />
            ) : (
              <ExcelDownloadButton
                data={filterAssignBatchObj?.converted_data?.map((element, index) => ({
                  "S. No.": index + 1,
                  Name: element.LeadID?.LeadName,
                  "Lead Source": element.LeadID?.LeadSource,
                  'Lead Representative': element.UpdateBY,
                  "Lead Phone": element.LeadID?.LeadPhone,
                  "Brand Name": element.Brand?.BrandName,
                  "Converted ID": element.ConvertedID,
                  "Lead Id": element.LeadID.id,
                  "Lead Date Time": element.LeadID?.LeadDateTime ? format(new Date(element.LeadID?.LeadDateTime?.substring(0, 10)), "dd MMM yyyy") : "----",
                  "Converted Date Time": element.ConvertedDateTime ? format(new Date(element?.ConvertedDateTime?.substring(0, 10)), "dd MMM yyyy") : "----",
                  "Course Name": element.CourseID.ServiceName,
                  "Batch Name": element.assign_batch_details != null ? `${element.assign_batch_details?.BatchID.BatchName} - ${element.assign_batch_details?.BatchID?.BatchTags} - ${element.assign_batch_details?.BatchID?.BatchTime.substring(0, 5)} - ${element.assign_batch_details?.BatchID?.BatchEndTime.substring(0, 5)}` : "No Batch Assigned",
                  "Course Start Date": element.CourseStartDate ? format(new Date(element?.CourseStartDate), "dd MMM yyyy") : "----",
                  "Course End Date": element.CourseEndDate ? format(new Date(element.CourseEndDate), "dd MMM yyyy") : "----",
                  "Course Expiry Date": element.CourseExpiryDate ? format(new Date(element.CourseExpiryDate), "dd MMM yyyy") : "----",
                  
                }))}
                fileName={"Assign Batch Details"}
              />
            )}
           
            {
              isDate ?
                null
                :
                <button variant="outlined"
                  className={" border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out  sm:mr-16 " + `${isDate ? '' : " ml-auto "}`}
                  onClick={() => {
                    setIsDate(true);
                  }}
                >
                  Reset Filter
                </button>
            }
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className={`mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out sm:mr-16 ${isDate ? " ml-auto " : ""} ${showCalendar
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



      <div className='md:mx-4 mx-2 mt-4  rounded-full p-2 inline-block top-5'>
        <NavLink to={'/createnewbatch'} className={'inline-block'}>
          <Button variant="outlined">
            Create Batches &nbsp;&nbsp;
            <ArrowForward className='inline-block' />
          </Button>
        </NavLink>

      </div>

      <div className="py-4 mx-4">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-purple-500 text-white hidden md:table-header-group">
              <tr className="border border-gray-300">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Lead Details
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                  Converted Data
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                  Assign Batch
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium uppercase tracking-wider">
                  Course Date
                </th>

              </tr>
            </thead>

            <thead className="bg-purple-500 text-white md:hidden table-header-group">
              <tr className="border border-gray-300">
                <th className="px-4 py-2 border border-gray-300">Assign Batch</th>
              </tr>
            </thead>
            {console.log(assignBatchObj)} 
            {assignBatchObj ? (
              <>
                {isDate
                  ? assignBatchObj?.converted_data.map((item, index) => {
                    return (
                      <AssignBatchSupport items={item} key={index} batches={assignBatchObj.batch_data} batchAssignStuDetailsFunc={batchAssignStuDetailsFunc} index={index} />
                    );
                  })
                  : filterAssignBatchObj?.converted_data.map((item, index) => {
                    return (
                      <AssignBatchSupport items={item} key={index} batches={filterAssignBatchObj.batch_data} batchAssignStuDetailsFunc={batchAssignStuDetailsFunc} index={index} />
                    );
                  })}
              </>
            ) : (
              <AssignBatchesLoading />

            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default AssignBatch;
