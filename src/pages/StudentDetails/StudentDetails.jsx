import React, { useContext, useEffect } from "react";
import Data1 from "./Data1";
import Data2 from "./Data2";
import Data3 from "./Data3";
import ConvertDetMob from "./ConvertedDetails/ConvertDetMob";
import { DataContext } from "../../context";
import { useParams } from "react-router-dom";
import LeadFollowUpDisplayById from "../LeadDetailsCustomizePage/LeadFollowUpDisplayById/LeadFollowUpDisplayById";
import ConvertDetailLap from "./ConvertedDetails/ConvertDetLap";
import { CircularProgress } from "@mui/material";

const StudentDetails = () => {

  const {registeredStudentDetailFunc,register_student_detail_obj } = useContext(DataContext);
  const { id } = useParams();
  useEffect(()=>{
    registeredStudentDetailFunc(id);
  },[])
  return (
    <div className="m-4">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <div className="col-span-1">
        {register_student_detail_obj ? (<>
          <Data1 lead_obj={register_student_detail_obj?.converted_data.LeadID} converted_id={register_student_detail_obj.converted_data.ConvertedID}/>
          </>):<><div className="flex items-center justify-center mt-5"><CircularProgress /></div></>}
        </div>

        <div className="col-span-1">
        {register_student_detail_obj ? (<>
          <Data2 fees_details={register_student_detail_obj?.fees_details}/>
          </>):<><div className="flex items-center justify-center mt-5"><CircularProgress /></div></>}
        </div>

        <div className="mt-2  rounded-xl col-span-1">
           {register_student_detail_obj ? (<>
          <Data3 message_log={register_student_detail_obj?.message_log}/>
          </>):<><div className="flex items-center justify-center mt-5"><CircularProgress /></div></>}
        </div>
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl font-bold text-green-700  pb-2 mt-6 text-center">
          <span className="border-b border-green-700">
            Converted Lead Details
          </span>
        </h1>
        {register_student_detail_obj ? (<>
        <ConvertDetMob converted_data={register_student_detail_obj?.converted_data}/>
        <ConvertDetailLap converted_data={register_student_detail_obj?.converted_data}/></>
        ): <><div className="flex items-center justify-center mt-5"><CircularProgress /></div></>}
      </div>
 
      {register_student_detail_obj ? (
        <>
        <h1 className="text-4xl font-bold text-green-700  pb-2 mt-6 text-center">
          <span className="border-b border-green-700">
            Lead FollowUp Details
          </span>
        </h1>
        <LeadFollowUpDisplayById leadFollowUpObj={register_student_detail_obj.lead_follow_up_details} />
        </>
      ) : null}
    </div>
  );
};

export default StudentDetails;
