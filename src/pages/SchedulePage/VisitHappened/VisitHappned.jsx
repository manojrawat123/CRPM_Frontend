import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../context';
import { DateRangePicker } from 'react-date-range';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import LoadingTabel from '../../Lead/LeadLoader';
import VisitHappnedSupport from './VisitHappnedSupport';
import ExcelDownloadButton from '../../../component/ExcelDownloadButton/ExcelDownloadButton';
import { Button } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { format } from 'date-fns';
import NoDataPage from '../../../component/NoDataPage/NoDataPage';

const VisitHappned = () => {

  const { getLeadFollowUpAll, filteredvisitHappned, visitHappned, getLeadFollowUpFilter } = useContext(DataContext);


  const [isVisitDate, setIsVisitDate] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);


  const handleSelect = (date) => {
    setIsVisitDate(false);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    getLeadFollowUpFilter("Visit Happened", date.selection.startDate, date.selection.endDate);
  }

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  useEffect(() => {

    getLeadFollowUpAll("Visit Happened");
  }, [])

  return (
    <>


      <div className="  overflow-x-auto">
        <div className="w-full rounded ">
          <div className='ml-auto flex'>
            {isVisitDate ? (
              <ExcelDownloadButton
                data={visitHappned?.map((element, index) => ({
                  "S. No.": index + 1,
                  "Lead Name": element.LeadID.LeadName,
                  "Course Name": element?.LeadServiceInterested?.ServiceName,
                  "Class Mode": element.LeadID?.LeadAssignmentAlgo,
                  "Lead Source": element.LeadID?.LeadSource,
                  "Status": element.LeadID.LeadStatus,
                  "Demo Happned": element.LeadStatusDate ? format(new Date(element.LeadStatusDate), "dd MMM yyyy h a") : "",
                  "Representative": element?.LeadRep?.name,
                }))}
                fileName={"Visit Happned"}
              />
            ) : (
              <ExcelDownloadButton
                data={visitHappned?.map((element, index) => ({
                  "S. No.": index + 1,
                  "Lead Name": element.LeadID.LeadName,
                  "Course Name": element?.LeadServiceInterested?.ServiceName,
                  "Class Mode": element.LeadID?.LeadAssignmentAlgo,
                  "Lead Source": element.LeadID?.LeadSource,
                  "Status": element.LeadID.LeadStatus,
                  "Demo Happned": element.LeadStatusDate ? format(new Date(element.LeadStatusDate), "dd MMM yyyy h a") : "",
                  "Representative": element?.LeadRep?.name,
                }))}
                fileName={"Visit Happned"}
              />
            )}


            {
              isVisitDate ?
                null
                :
                <button variant="outlined"
                  className={" border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out  sm:mr-16 " + `${isVisitDate ? '' : " ml-auto "}`}
                  onClick={() => {
                    setIsVisitDate(true);
                  }}
                >
                  Reset Filter
                </button>

            }
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className={`mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out sm:mr-16 ${isVisitDate ? " ml-auto " : ""} ${showCalendar
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


      <div className='m-8'>
        <h1 className="text-xl font-bold underline my-4 text-center">Visit Happned</h1>
        <table className="min-w-full">
          <thead className="bg-purple-500 text-white hidden md:table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">
                Details
              </th>
              <th className="px-4 py-2 border border-gray-300">
                Other Details
              </th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>

          <thead className="bg-purple-500 text-white md:hidden table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Visit Happned Details</th>
            </tr>
          </thead>

          {visitHappned ?
            isVisitDate ?
              visitHappned?.map((visit, index) => (
                <VisitHappnedSupport visit={visit} index={index} key={index} />
              ))
              :
              filteredvisitHappned?.map((visit, index) => (
                <VisitHappnedSupport visit={visit} index={index} key={index} />
              )) : <LoadingTabel />}
        </table>


        {visitHappned ?
          isVisitDate ?
            visitHappned.length == 0 ? <NoDataPage status={"Visit Happned"} /> : null
            : null : null}

        {filteredvisitHappned ?
          !isVisitDate ?
            filteredvisitHappned.length == 0 ? <NoDataPage status={"Visit Happned"} /> : null
            : null : null}


      </div>
    </>
  )
}

export default VisitHappned
