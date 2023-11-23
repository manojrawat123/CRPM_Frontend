import React, { useContext, useState } from "react";
import { DataContext } from "../../context";
import { useEffect } from "react";
import LeadAnalyticsModal from "./LeadAnalyticsModel";

const LeadAnalytics = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [filterLead, setFilterLead] = useState();
  const [modalIsOpen, setModalIsOpen] = useState();


  const { getLeadFollowUpAll, leadAnalyticsObj } = useContext(DataContext);


  useEffect(() => {
    getLeadFollowUpAll()

  }, [])

  return (
    <div className="mx-8 my-4">


      <LeadAnalyticsModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} filterLead={filterLead} />
      <h1 className="text-2xl font-semibold mb-4">Lead Analytics</h1>

      {/* Date fields and Brand option */}
      <div className="flex mb-4 space-x-4">
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2"
        />
        <select
          // value={selectedBrand}
          // onChange={handleBrandChange}
          className="border p-2"
        >
          <option value="All Brands">All Brands</option>
          {/* Add other brand options here */}
        </select>
      </div>

      {/* Lead analytics grid */}
      <div className={`grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 cursor-pointer`}  >
        {leadAnalyticsObj?.map((element, index) => {
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
        })}
      </div>

    </div>
  );
};

export default LeadAnalytics;