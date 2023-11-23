import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LeadFollowUpSupport from './LeadFollowSupport'
import { DateRangePicker } from 'react-date-range'
import API_BASE_URL from "../../config";
import LoadingTabel from '../Lead/LeadLoader';


const LeadFollowUp = () => {

  const token = localStorage.getItem("token")
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [isFeesDate, setisFeesDate] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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


  console.log(new Date())

  const leadfollowUpFunc = () => {
    axios.get(`${API_BASE_URL}/leadnotconverted/`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    }).then((value) => {
      console.log(value.data);
      const arrangeData = value.data?.filter((element, index) => {
        if (element?.LeadStatus == null || element?.LeadStatus == "Fresh") {
          const currentDate = new Date();
          const leadDate = new Date(element?.LeadFollowupCreatedDate);
          return leadDate <= currentDate;
        }
      })
      setData(value.data);
      console.log(arrangeData);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    leadfollowUpFunc();
  }, []);

  return (
     <>
     <div className="text-center mt-8 overflow-x-auto">
  <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto rounded">
    <DateRangePicker
      ranges={[selectionRange]}
      onChange={handleSelect}
      className="w-full max-w-full"
    />
  </div>
</div>
    <div className="py-4 ">
      <div className='text-center'>
        <button className="bg-blue-500 text-white rounded py-1 px-3"
          onClick={() => {
            setisFeesDate(true);
          }}>Show All Data</button>
      </div>
      <br />
      
      <div className="w-11/12 mx-auto mt-8">
      <div className="mx-4">
      <table className="min-w-full">
          <thead className="bg-purple-500 text-white hidden md:table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">
                Name
              </th>
              <th className="px-4 py-2 border border-gray-300">
                Details
              </th>
              <th className="px-4 py-2 border border-gray-300">
                Other Details
              </th>
              <th className="px-4 py-2 border border-gray-300">
                Links
              </th>
            </tr>
          </thead>

          <thead className="bg-purple-500 text-white md:hidden table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Today</th>
            </tr>
          </thead>


          {data?
          <>
            {isFeesDate ? data?.map((item, index) => (
              <LeadFollowUpSupport items={item} key={index} index={index} />
            )) : 
              
                filteredData?.map((item, index) => (
                  <LeadFollowUpSupport items={item} key={index} index={index} />
                ))
            }
          </>: <LoadingTabel />
          }

        </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default LeadFollowUp