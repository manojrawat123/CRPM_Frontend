import React, { useEffect, useState } from "react";
import YesModal from "./serviceForm/YesShowModal/YesModal";
import NoModal from "./serviceForm/NoShowModal/NoModal";
import VisitDemoModal from "./serviceForm/VisitDemoHappned/VisitDemo";
import { ToastContainer, toast } from "react-toastify";

const LeadFollowUpForm = (props) => {
  const [yesModalOpen, setYesModalOpen] = useState(false);
  const [noModalOpen, setNoModalOpen] = useState(false);
  const [visitDemoModalOpen, setVisitDemoModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [feesOffered,  setFeesOffered] = useState();

  useEffect(() => {}, []);

  return (
    <>
    <ToastContainer />
      <div className="text-center bg-gray-100 rounded-xl ">
        <h1 className=" text-2xl  font-bold p-2 col-span-3 text-center underline text-green-500 inline-block ">
          Lead Follow Up Form.
        </h1>
        <select
          className="outline-green-500 border-green-500  border-solid border rounded sm:w-[15rem] w-[8rem] h-[2rem]"
          value={selectedService}
          onChange={(e) => {
            setSelectedService(e.target.value);
          }}
        >
          <option value="">Select Course</option>
          {props?.leadObj?.LeadServiceInterested.map((option, index) => {
            return (
              <option key={index} value={option?.id}>
                {option?.ServiceName} ({option?.serviceMode})
              </option>
            );
          })}
        </select>
      </div>
      <div className="mx-4 pt-3 rounded grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="">
          <button
            className={`rounded py-2 px-4 w-full mx-[.5%] my-4  ${"bg-blue-500 text-white"}`}
          >
            Did You talk to Customer
          </button>
          {/* Buttons of Yes & no */}
          <div className="my-4 mx-4">
            <label htmlFor="" >Fees Offered</label>
            <input type="number" className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600 "
            value={feesOffered}
            onChange={(e)=>{
                setFeesOffered(e.target.value);
            }}/>
          </div>

          <div className={` grid grid-cols-2 gap-4 mx-4 mb-4`}>
            <button
              className={`px-4 py-2 rounded-lg text-white bg-green-500 hover:bg-green-600  w-[full] `}
              onClick={() => {
                if (selectedService === null || selectedService === undefined || selectedService === ""){
                    toast.error(`Please Select course`, {
                        position: toast.POSITION.TOP_CENTER,
                      });
                      return;
                }
                if (feesOffered === null || feesOffered === undefined || feesOffered === ""){
                    toast.error(`Fees Offered can't be null`, {
                        position: toast.POSITION.TOP_CENTER,
                      });
                      return;
                }
                setYesModalOpen(true);
              }}
            >
              Yes
            </button>

            <button
              className="px-4 py-2 rounded-lg text-white bg-red-500 hover:bg-red-600 mx-auto w-full "
              onClick={() => {

                if (selectedService === null || selectedService === undefined || selectedService === ""){
                    toast.error(`Please Select course`, {
                        position: toast.POSITION.TOP_CENTER,
                      });
                      return;
                }
                if (feesOffered === null || feesOffered === undefined || feesOffered === ""){
                    toast.error(`Fees Offered can't be null`, {
                        position: toast.POSITION.TOP_CENTER,
                      });
                      return;
                }
                
                setNoModalOpen(true);
              }}
            >
              No
            </button>
          </div>
        </div>

        {/* Update Status Button */}
        <div>
          <button
            className={`my-4  rounded py-2 px-4 w-full mx-[.5%] bg-blue-500 text-white`}
            onClick={() => {
                if (selectedService === null || selectedService === undefined || selectedService === ""){
                    toast.error(`Please Select course`, {
                        position: toast.POSITION.TOP_CENTER,
                      });
                      return;
                }
              setVisitDemoModalOpen(true);
            }}
          >
            Update Visit & Demo Happened
          </button>
        </div>
        {/* Here is the code of did you talk to customer */}
      </div>
      {/* End of button of yes & no */}

      {/* Yes Modal */}
      <YesModal
        yesModalOpen={yesModalOpen}
        setYesModalOpen={setYesModalOpen}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        feesOffered={feesOffered}
        setFeesOffered={setFeesOffered}
      />

      {/* No Modal Modal */}
      <NoModal
        noModalOpen={noModalOpen}
        setNoModalOpen={setNoModalOpen}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        feesOffered={feesOffered}
        setFeesOffered={setFeesOffered}
      />

      {/* Visit Demo Modal */}
      <VisitDemoModal
        visitDemoModalOpen={visitDemoModalOpen}
        setVisitDemoModalOpen={setVisitDemoModalOpen}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        feesOffered={feesOffered}
        setFeesOffered={setFeesOffered}
      />
    </>
  );
};

export default LeadFollowUpForm;
