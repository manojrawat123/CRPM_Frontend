import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LeadFollowUpSupport from './LeadFollowSupport'
import { DateRangePicker } from 'react-date-range'
import API_BASE_URL from "../../config";


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
    <div className="py-4 ">
      <div className="text-center rounded">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      </div>
      <div className='text-center'>
        <button className="bg-blue-500 text-white rounded py-1 px-3"
          onClick={() => {
            setisFeesDate(true);
          }}>Show All Data</button>
      </div>
      <br />
      <div className="mx-4">
        <table className="table-auto min-w-full divide-y divide-gray-200 ">
          <thead className='bg-purple-500 text-white'>
            <tr>
              {/* <th className="px-6 py-3 text-left text-xs font-medium border border-gray-300  uppercase tracking-wider">
                S. No.
              </th> */}
              <th className="px-6 py-3 text-left text-xs font-medium border border-gray-300  uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium border border-gray-300  uppercase tracking-wider">
                Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium border border-gray-300  uppercase tracking-wider">
                Other Details
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium border border-gray-300  uppercase tracking-wider">
                Links
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {isFeesDate ? <>{data?.map((item, index) => (
              <LeadFollowUpSupport items={item} key={index} index={index} />
            ))} </> : 
              <>
                {filteredData?.map((item, index) => (
                  <LeadFollowUpSupport items={item} key={index} index={index} />
                ))}</>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LeadFollowUp