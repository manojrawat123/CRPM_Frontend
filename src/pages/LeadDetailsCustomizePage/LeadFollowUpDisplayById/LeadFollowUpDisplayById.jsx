import React from "react";
import LeadFollowUpDisplayByIdSupport from "./LeadFollowUpDisplayByIdSupport";

const LeadFollowUpDisplayById = (props) => {
  return (
    <>
      <div className="m-8">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-purple-500 text-white hidden md:table-header-group rounded-xl">
              <tr className="border border-gray-300">
                <th className="border border-gray-300 p-2">Date & Time</th>
                <th className="border border-gray-300 p-2">
                  Follow Up Details
                </th>
                <th className="border border-gray-300 p-2">More Details</th>
              </tr>
            </thead>

            <thead className="bg-purple-500 text-white md:hidden table-header-group">
              <tr className="border border-gray-300">
                <th className="px-4 py-2 border border-gray-300">
                  Lead Follow Up Details
                </th>
              </tr>
            </thead>

            {props?.leadFollowUpObj?.map((element, index) => {
              return (
                <LeadFollowUpDisplayByIdSupport
                  leadfollowUpObjEl={element}
                  key={index}
                  index={index}
                />
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default LeadFollowUpDisplayById;
