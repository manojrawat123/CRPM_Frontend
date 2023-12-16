import Modal from "react-modal";
import React from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import AddCourseForm from "./addCourseForm/AddCourseForm";
import { Delete } from "@mui/icons-material";
import axios from "axios";
import API_BASE_URL from "../../../config";
import { toast } from "react-toastify";

const LeadFollowUpLeadService = (props) => {
  const brand = localStorage.getItem("brand");
  const { id } = useParams();
  const [addCourseModal, setAddCourseModal] = useState(false);
  const token = localStorage.getItem("token");
  const serviceIntrestead = props.leadObj.LeadServiceInterested.map((element)=>{
    return element.id
  })

  return (
    <>
      <Modal
        isOpen={addCourseModal}
        onRequestClose={() => setAddCourseModal(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          },
          content: {},
        }}
      >
        <AddCourseForm
          avaliableServices={props.avaliableServices}
          leadFollowUpFunc={props.leadFollowUpFunc}
          leadObj={props.leadObj}
        />
      </Modal>

      <div className="mx-4">
        <div className=" grid sm:grid-cols-2 grid-cols-1 text-center bg-gray-200 border border-solid border-green-500 my-4 rounded-xl">
          <h1 className="text-xl font-bold p-2 ">Lead Id: {id}</h1>
          <div className=" text-xl font-bold p-2">
            Brand: <span className="text-base">{props.leadObj?.Brand?.BrandName}</span>
          </div>
        </div>

        <div className=" grid grid-cols-8 gap-x-5 border border-green-600 p-1 text-left font-semibold text-lg rounded-t-xl">
          <div className="col-span-3 font-bold"> Course</div>
          <div className="col-span-3 text-gray-700 overflow-auto font-bold">
            Course Mode
          </div>
          <div className="col-span-2">
            Action
          </div>
        </div>
        {props.leadObj?.LeadServiceInterested?.map((element, index) => {
          return (
            <div
              className={
                `${index == props?.leadObj?.LeadServiceInterested.length - 1
                  ? `rounded-b-xl`
                  : null
                }` +
                " grid grid-cols-8 gap-x-5 border border-green-600 p-2 text-left text-green-600 font-semibold "
              }
            >
              <div className="col-span-3 font-bold">
                {" "}
                {element?.ServiceName}
              </div>
              <div className="col-span-3 text-gray-700 overflow-auto">
                {element.serviceMode}
              </div>

              <div className="col-span-2">
                <button
                  type="submit"
                  onClick={()=>{
                    axios.put(`${API_BASE_URL}/lead/${id}/`,{
                      LeadServiceInterested :
                      serviceIntrestead.filter((elementch)=>{
                        return elementch != element.id
                      })
                       
                       
                    }, {
                      headers: {
                        "Authorization": `Bearer ${token}`
                      }
                    }).then((value)=>{
                      toast.success('Course Removed Sucessfully ', {
                        position: toast.POSITION.TOP_CENTER,
                      });
                      props.leadFollowUpFunc();
                    }).catch((err)=>{
                      console.log(err);
                      toast.error(`Could't remove Course `, {
                        position: toast.POSITION.TOP_CENTER,
                      });
                    })
                  }}
                  className="w-full text-red-500 py-2 px-4 rounded flex items-center justify-center  transition duration-300"
                >
                  <Delete className="mr-2" /> {/* Add the dustbin icon */}

                </button>

              </div>
            </div>
          );
        })}

        <div className="text-xl font-bold border-2 border-solid  border-green-500 rounded-xl my-4">
          <div className=" text-center bg-gray-200 rounded-t-xl">
            <h1 className="text-xl font-bold p-2 text-center">Actions</h1>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1">
            <NavLink to={`/convertlead/${id}`}>
              <button
                type="button"
                className="bg-green-500 mx-auto text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300 w-[90%] block my-2"
              >
                Convert Lead
              </button>
            </NavLink>
            <NavLink to={`/payment/${id}`}>
              <button
                type="button"
                className="bg-green-500  text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300 w-[90%] mx-auto block my-2"
              >
                Add Payment
              </button>
            </NavLink>
            <button
              onClick={() => {
                setAddCourseModal(true);
              }}
              type="button"
              className="bg-green-500 mx-auto text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300 w-[90%] block my-2"
            >
              Add Course
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadFollowUpLeadService;
