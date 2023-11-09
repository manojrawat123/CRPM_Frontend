import React, { useEffect, useState } from "react";

const LeadFollowupSupport = (props) => {
  return (
    <>
      <tr>
        <td className="border border-gray-300 p-2">
          <span className="font-bold">Call Date & Time: </span>{" "}
          {props?.leadfollowUpObjEl?.LeadFollowupCreatedDate?.substring(0, 10)}
          <br />
          <span className="font-bold">Followup Date & Time: </span>{" "}
          {props?.leadfollowUpObjEl?.LeadStatusDate?.substring(0, 10)}
        </td>
        <td className="border border-gray-300 p-2">
          <span className="font-bold">Followup Status: </span>{" "}
          {props?.leadfollowUpObjEl?.LeadStatus}
          <br />
          <span className="font-bold">Followup Output:</span>{" "}
          {props?.leadfollowUpObjEl?.LeadStatus}
        </td>
        <td className="border border-gray-300 p-2">
          <span className="font-bold">
            Service Interested:{" "}
          </span>
            {props.leadfollowUpObjEl?.LeadServiceInterested?.ServiceName}
          {/* {courseName} */}
          <br />
          <span className="font-bold"> Event Status: </span>
          {props?.leadfollowUpObjEl?.LeadEvent}
          <br />
          <span className="font-bold"> Response: </span>
          <br />
          <span className="font-bold">
            Remarks: {props?.leadfollowUpObjEl?.comment}
          </span>
          <br />
          <span className="font-bold">Representative: </span>
          {props.leadfollowUpObjEl?.LeadRep?.name}
        </td>
      </tr>
    </>
  );
};

export default LeadFollowupSupport;
