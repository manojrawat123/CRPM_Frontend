import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { DataContext } from '../../context';
import API_BASE_URL from "../../config";
import YesModal from './YesShowModal/YesModal';


const ServiceForm = () => {
    
    const [noShow, setnoShow] = useState("hidden");
    const [yesNo, setYesNo] = useState("hidden");
    const [update, setUpdate] = useState("hidden");    
    const [yesShow, setYesShow] = useState("hidden");
    const [LeadPhonePicked, setLeadPhonePicked]= useState(null);
    const [yesModalOpen, setYesModalOpen] = useState(false);
    const [noModal, setNoShowModal] = useState(false);

  return (

    <>
    <div className='mx-4 pt-3 rounded'>   
    <button onClick={()=>{
        if (yesNo === "hidden"){setYesNo("block");
        setUpdate("hidden");
        } else{setYesNo("hidden");}
      }} className={`bg-gray-300 rounded py-2 px-4 w-[49%] mx-[.5%]  ${yesNo=="hidden"? "bg-gray-300": "bg-gray-500"}`}>Did You talk to Customer</button>
      
      {/* Update Status Button */}
      <button className={`my-4  rounded py-2 px-4 w-[49%] mx-[.5%] ${update=="hidden"? "bg-gray-300": "bg-gray-500"}`} onClick={()=>{
          if(update=== "hidden"){setUpdate("block")
            setYesNo("hidden")
          }else{setUpdate("hidden")}}}>Update Visit & Demo Happened</button>
      {/* Here is the code of did you talk to customer */}
      {/* Buttons of Yes & no */}
      <div className={`${yesNo}`}>
      <button className={`px-4 py-2 rounded-lg text-white bg-green-500 hover:bg-green-600 mx-auto w-[4rem] mt-5 `} onClick={()=>{setYesModalOpen(true)}}>Yes</button>

     &nbsp;&nbsp;&nbsp;&nbsp; <button className='px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600 mx-auto w-[4rem] ' onClick={()=>{if (noShow=== "hidden"){setnoShow("inline-block")
                setYesShow("hidden")
                setLeadPhonePicked("No")} else{
                  setnoShow("hidden")
                  setLeadPhonePicked("Yes")}}} >No</button>
                  </div>
</div>

      {/* End of button of yes & no */}

      {/* Here Is YesShow Code */}

      <YesModal 
        yesModalOpen={yesModalOpen}
        setYesModalOpen={setYesModalOpen}
             />

      {/* Here Is YesShow Code End */}

      {/* Here is end code of did you talk to customer */}

    </>
  )
}

export default ServiceForm
