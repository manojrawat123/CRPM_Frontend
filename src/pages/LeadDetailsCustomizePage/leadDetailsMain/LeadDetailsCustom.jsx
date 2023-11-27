import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_BASE_URL from "../../../config";
import LeadFollowUpLeadDetails from "../LeadFollowUpLeadDetails/LeadFollowUpLeadDetails";
import LeadFollowUpLeadLoader from "../LeadFollowUpLeadDetails/LeadFollowUpLeadLoader";
import LeadFollowUpLeadService from "../LeadService/LeadFollowUpLeadService";
import LeadFollowUpLeadServiceLoading from "../LeadService/LeadFollowUpLeadServiceLoading";
import LeadFollowUpForm from "../leadFollowUpForm/LeadFollowUpForm";
import LeadFollowUpDisplayById from "../LeadFollowUpDisplayById/LeadFollowUpDisplayById";
import LeadFollowUpFormLoading from "../leadFollowUpForm/LeadFollowUpFormLoading";

const LeadDetailsCustom = (props) => {
  const { id } = useParams();
  const authToken = localStorage.getItem("token");
  const [leadObj, setLeadObj] = useState();
  const [leadFollowUpObj, setLeadFollowUpObj] = useState();

  const leadFollowUpFunc = () => {
    axios
      .get(`${API_BASE_URL}/leadfollowup/${id}/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((values) => {
        console.log(values);
        setLeadObj(values.data[0].LeadID);
        console.log(values.data[0].LeadID);
        setLeadFollowUpObj(values.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    leadFollowUpFunc();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2  md:m-4 gap-5">
        <div className="col-span-2 md:col-span-1">
          {leadObj ? (
            <LeadFollowUpLeadDetails leadObj={leadObj} />
          ) : (
            <LeadFollowUpLeadLoader />
          )}
        </div>

        <div className="col-span-2 md:col-span-1">
          { leadObj ? (
            <LeadFollowUpLeadService leadObj={leadObj} />
          ) : (
            <LeadFollowUpLeadServiceLoading />
          )}
        </div>

        <div className="col-span-2 m-4 border border-solid border-green-500 rounded-xl">
            {leadObj ?
                <LeadFollowUpForm leadObj={leadObj}/> :
               <LeadFollowUpFormLoading />
            }
        </div>
      </div>

{       leadFollowUpObj ? 
        <LeadFollowUpDisplayById leadFollowUpObj={leadFollowUpObj} /> :
        null
}

        
    </>
  );
};

export default LeadDetailsCustom;
