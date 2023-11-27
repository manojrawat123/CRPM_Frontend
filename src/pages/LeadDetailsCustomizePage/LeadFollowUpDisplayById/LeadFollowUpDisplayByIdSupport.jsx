import { format } from 'date-fns'
import React from 'react'

const LeadFollowUpDisplayByIdSupport = (props) => {
  return (
   <>
    <tbody className='md:table-footer-group hidden'>
        <tr>
        <td className="border border-gray-300 p-2">
          <span className="font-bold">Call Date & Time  - &nbsp;</span>{" "}
          {props?.leadfollowUpObjEl?.LeadFollowupCreatedDate ? format(new Date(props?.leadfollowUpObjEl?.LeadFollowupCreatedDate), "dd MMM yyyy h a") : "---"}
          <br /> 
          <span className="font-bold">Followup Date & Time  - &nbsp;</span>{" "}
          {props?.leadfollowUpObjEl?.LeadStatusDate ? format(new Date(props?.leadfollowUpObjEl?.LeadStatusDate),  "dd MMM yyyy h a") : "---"}
        </td>
        <td className="border border-gray-300 p-2">
          <span className="font-bold">Followup Status  - &nbsp;</span>{" "}
          {props?.leadfollowUpObjEl?.LeadStatus ? props?.leadfollowUpObjEl?.LeadStatus : "---"}
          <br />
          <span className="font-bold">Followup Output  - &nbsp;</span>{" "}
          {props?.leadfollowUpObjEl?.LeadStatus ? props?.leadfollowUpObjEl?.LeadStatus : "---"}
        </td>
        <td className="border border-gray-300 p-2">
          <span className="font-bold">
            Service Interested  - &nbsp;
          </span>
            {props.leadfollowUpObjEl?.LeadServiceInterested?.ServiceName}
          {/* {courseName} */}
          <br />
          <span className="font-bold"> Event Status  - &nbsp;</span>
          {props?.leadfollowUpObjEl?.LeadEvent ?props?.leadfollowUpObjEl?.LeadEvent: "---" }
          <br />
          <span className="font-bold"> Fees Offered  - &nbsp;</span>
          {props?.leadfollowUpObjEl?.LeadFeeOffered ? props?.leadfollowUpObjEl?.LeadFeeOffered : "---"}
          <br />
          <span className="font-bold">
          Remarks -: &nbsp; 
          </span>
            {props?.leadfollowUpObjEl?.LeadComments ? props?.leadfollowUpObjEl?.LeadComments : "---" }
          <br />
          <span className="font-bold">Representative  - &nbsp; </span>
          {props?.leadfollowUpObjEl?.LeadRep?.name}
        </td>
      </tr>         

      </tbody>  




                {/* Phone Code */}
                <tbody className='tabel md:hidden'>
        <tr className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

          <td className="border border-gray-300 px-4 py-2">

            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Call Date & Time:</div>
              <div className='col-span-3'>{props?.leadfollowUpObjEl?.LeadFollowupCreatedDate ? format(new Date(props?.leadfollowUpObjEl?.LeadFollowupCreatedDate), "dd MMM yyyy h a") : "---"}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Followup Date & Time: </div>
              <div className='col-span-3'>{props?.leadfollowUpObjEl?.LeadStatusDate ? format(new Date(props?.leadfollowUpObjEl?.LeadStatusDate),  "dd MMM yyyy h a") : "---"}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Status:</div>
              <div className='col-span-3'> {props?.leadfollowUpObjEl?.LeadStatus ? props?.leadfollowUpObjEl?.LeadStatus : "---"}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Followup Output</div>
              <div className='col-span-3'>{props?.leadfollowUpObjEl?.LeadStatus}</div>
            </div>


            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Service Interested{" "}</div>
              <div className='col-span-3'>  {props.leadfollowUpObjEl?.LeadServiceInterested?.ServiceName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Event Status</div>
              <div className='col-span-3'> {props?.leadfollowUpObjEl?.LeadEvent ? props?.leadfollowUpObjEl?.LeadEvent : "---"}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Fees Offered</div>
              <div className='col-span-3'>{props?.leadfollowUpObjEl?.LeadFeeOffered ? props?.leadfollowUpObjEl?.LeadFeeOffered : "---"}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Remarks</div>
              <div className='col-span-3'>{props?.leadfollowUpObjEl?.LeadComments ? props?.leadfollowUpObjEl?.LeadComments : "---" }</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Representative</div>
              <div className='col-span-3'>{props?.leadfollowUpObjEl?.LeadRep?.name}</div>
            </div>
          </td>
        </tr>
      </tbody>
   </>
  )
}

export default LeadFollowUpDisplayByIdSupport