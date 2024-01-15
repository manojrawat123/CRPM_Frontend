import React, { useContext, useState } from "react";
import { DataContext } from "../../context";
import { useEffect } from "react";
import LeadAnalyticsModal from "./LeadAnalyticsModel";
import { DateRangePicker } from "react-date-range";
import { CloseOutlined } from "@mui/icons-material";
import ExcelDownloadButton from "../../component/ExcelDownloadButton/ExcelDownloadButton";
import { CircularProgress } from "@mui/material";

const LeadAnalytics = () => {
  const [filterLead, setFilterLead] = useState();
  const [modalIsOpen, setModalIsOpen] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isDate, setIsDate] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);


  const { leadAnalyticsObj,leadAnalyticsFunc,filterLeadAnalyticsFunc,filterLeadAanlist } = useContext(DataContext);


  useEffect(() => {
    leadAnalyticsFunc();
  }, [])


  
  const handleSelect = (date) => {
    setIsDate(false);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    filterLeadAnalyticsFunc(date.selection.startDate,date.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  if (!leadAnalyticsObj){
    return <>
    <div className="flex justify-center items-center h-[70vh] m-20 bg-gray-200">
    <CircularProgress />
    </div>
    </>
  }

  return (
    <div className="mx-8 ">
      <LeadAnalyticsModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} filterLead={filterLead} />   
      {/* Date fields and Brand option */}
      <div className='ml-auto flex'>

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

      {/* Lead analytics grid */}
      <h1 className="text-2xl font-semibold mb-4">Lead Analyst</h1>

      <div className={`grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 cursor-pointer`}  >
       { isDate ?
       leadAnalyticsObj?.map((element, index) => {
        let demoSchedule = 0;
        let visitSchedule = 0;
        let callMade = 0;
        element.leadObject.forEach((element, index) => {
          if (element.LeadStatus === "Visit scheduled") {
            visitSchedule++;
          }
          else if (element.LeadStatus === "Demo scheduled") {
            demoSchedule++;
          }

        })

        return <div className="p-4 border rounded-2xl shadow-2xl" key={index}
          onClick={() => {
            setModalIsOpen(true);

            setFilterLead(element.myLead)
          }}>
          <h1 className="text-xl font-bold my-2 text-center">
            Date -: <span className="text-base font-semibold">{element.date.substring(0, 10)}</span>
          </h1>
          <h2 className="font-bold mb-2 inline-block">
            Total Leads -: {element.leadObject?.length}
          </h2>

          <br />
          <h2 className="font-bold mb-2 inline-block">
            Visit Schedule {visitSchedule}
          </h2>
          <br />
          <h2 className="font-bold mb-2 inline-block">
            Demo Schedule {demoSchedule}
          </h2>
          <br />

          <h2 className="font-bold mb-2 inline-block">
            Follow Up {element.leadObject?.length - (visitSchedule + demoSchedule)}
          </h2>
          <br />

          <h2 className="font-bold mb-2 inline-block">
            Call Made {element.leadObject?.length}
          </h2>
        </div>
      })
      
      :  filterLeadAanlist?.map((element, index) => {
        console.log(element)
        let demoSchedule = 0;
        let visitSchedule = 0;
        let callMade = 0;
        element.leadObject.forEach((element, index) => {
          if (element.LeadStatus === "Visit scheduled") {
            visitSchedule++;
          }
          else if (element.LeadStatus === "Demo scheduled") {
            demoSchedule++;
          }

        })

        return <div className="p-4 border rounded-2xl shadow-2xl" key={index}
          onClick={() => {
            setModalIsOpen(true);

            setFilterLead(element.myLead)
          }}>
          <h1 className="text-xl font-bold my-2 text-center">
            Date -: <span className="text-base font-semibold">{element.date.substring(0, 10)}</span>
          </h1>
          <h2 className="font-bold mb-2 inline-block">
            Total Leads -: {element.leadObject?.length}
          </h2>

          <br />
          <h2 className="font-bold mb-2 inline-block">
            Visit Schedule {visitSchedule}
          </h2>
          <br />
          <h2 className="font-bold mb-2 inline-block">
            Demo Schedule {demoSchedule}
          </h2>
          <br />

          <h2 className="font-bold mb-2 inline-block">
            Follow Up {element.leadObject?.length - (visitSchedule + demoSchedule)}
          </h2>
          <br />

          <h2 className="font-bold mb-2 inline-block">
            Call Made {element.leadObject?.length}
          </h2>
        </div>
      })
      
      }
      </div>

    </div>
  );
};

export default LeadAnalytics;