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
  const [avaliableServices, setAvaliableServices] = useState();

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
        setLeadFollowUpObj(values.data);
        setAvaliableServices(values.data[0].available_services);
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
      <div className="grid lg:grid-cols-3  md:m-4 gap-5">
        <div className="">
          {leadObj ? (
            <LeadFollowUpLeadDetails leadObj={leadObj} leadFollowUpFunc={leadFollowUpFunc}/>
          ) : (
            <LeadFollowUpLeadLoader />
          )}
        </div>

        <div className="">
          {leadObj ? (
            <LeadFollowUpLeadService
              leadObj={leadObj}
              avaliableServices={avaliableServices}
              leadFollowUpFunc={leadFollowUpFunc}
            />
          ) : (
            <LeadFollowUpLeadServiceLoading />
          )}
        </div>

        <div className=" m-4 border border-solid border-green-500 rounded-xl">
          {leadObj ? (
            <LeadFollowUpForm leadObj={leadObj} leadFollowUpFunc={leadFollowUpFunc}/>
          ) : (
            <LeadFollowUpFormLoading />
          )}
        </div>
      </div>

      {leadFollowUpObj ? (
        <LeadFollowUpDisplayById leadFollowUpObj={leadFollowUpObj} />
      ) : null}
    </>
  );
};

export default LeadDetailsCustom;
