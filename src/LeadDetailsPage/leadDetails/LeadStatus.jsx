import React, { useState } from "react";
import LeadDetails from "./LeadDetails";
import LeadServices from "../../component/leadServices";
import LeadFollowDisplay from "../LeadFollowDisplay/LeadFollowDisplay";
import { NavLink, Navigate, useParams } from "react-router-dom";
import LeadUpdateModel from "../../Models/LeadUpdateModel/LeadUpdateModel";
import ServiceRequirment from "./ServiceRequirment";

const LeadStatus = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id } = useParams();

  return (
    <>
      <LeadUpdateModel
        myProps={{
          modalIsOpen: modalIsOpen,
          setModalIsOpen: setModalIsOpen,
          leadId: id,
        }}
      />
      <div className="grid md:grid-cols-2 grid-cols-1 m-8 gap-5">
        <LeadDetails className="col-span-1" setModalIsOpen={setModalIsOpen} />
        <div className="col-span-1">
          <LeadServices />
        </div>
        <div className="md:col-span-2 col-span-1 border-2 rounded border-solid border-black">
          <ServiceRequirment />
        </div>
      </div>
      <div className="text-center flex items-center justify-center space-x-5 border-b border-solid border-black ">
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4">
          Close Lead
        </button>

        <NavLink to={`/message`}>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            SMS
          </button>
        </NavLink>
      </div>
      {/* Lead FollowUp display */}
      <LeadFollowDisplay />
    </>
  );
};

export default LeadStatus;
