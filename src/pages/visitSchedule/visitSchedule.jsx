import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context';
import VisitSupport from './VisitSupport';
import { DateRangePicker } from 'react-date-range';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import LoadingTabel from '../Lead/LeadLoader';

const VisitSchedule = () => {

    const { getLeadFollowUpAll, visitSechudule } = useContext(DataContext);
    const [isVisitDate, setIsVisitDate ] = useState(true);
    const [filteredVisitSechudule, setFilteredVisitSechudle] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const handleSelect = (date) => {
      setIsVisitDate(false);
      setStartDate(date.selection.startDate);
      setEndDate(date.selection.endDate);
      let filtered = visitSechudule?.filter((product) => {
        let productDate = new Date(product?.LeadEventDate);
        if (date.selection.endDate == date.selection.startDate) {

          productDate.setHours(0, 0, 0, 0);
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
      setFilteredVisitSechudle(filtered);
    }
  
    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    }

    useEffect(()=>{

        getLeadFollowUpAll();
    },[])

  return (
    <>
    <div className='m-4'>
        <h1 className='text-center text-xl font-bold'>Visit Schedule</h1>
    </div>

    <div className="text-center mt-8 overflow-x-auto">
  <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto rounded">
    <DateRangePicker
      ranges={[selectionRange]}
      onChange={handleSelect}
      className="w-full max-w-full"
    />
  </div>
</div>
<div className="text-center my-4">
          <button
            type="button"
            onClick={() => {
              setIsVisitDate(true);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Show all data
          </button>
        </div>

<div className='m-8'>
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
              <th className="px-4 py-2 border border-gray-300">Visit Schedule Details</th>
            </tr>
          </thead>

            {VisitSchedule ? 
            isVisitDate ? 
            visitSechudule?.map((visit, index) => (
              <VisitSupport visit={visit} index={index} key={index} />
            )) 
            : filteredVisitSechudule?.map((visit, index) => (
              <VisitSupport visit={visit} index={index} key={index} />
            )) : <LoadingTabel />}
        </table>
  </div>
    </>
  )
}

export default VisitSchedule
