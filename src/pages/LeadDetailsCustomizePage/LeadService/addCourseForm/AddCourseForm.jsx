import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import API_BASE_URL from "../../../../config";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";

const AddCourseForm = (props) => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [leadSelectedService, setLeadSelectedService] = useState();
  const [loadingButton, setLoadingButton] = useState(false);
  useEffect(() => {
    const filter_service_id = props.leadObj?.LeadServiceInterested.map((element) => {
      return element.id;
    });
    setLeadSelectedService(filter_service_id);
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-4xl font-extrabold text-green-500 underline text-center ">
        Add Course
      </h1>
      <Formik
        initialValues={{ course: "", classMode: "online" }}
        onSubmit={(values) => {
          let newArr = [...leadSelectedService, parseInt(values.course)]
          setLoadingButton(true);
          console.log(leadSelectedService);
          axios
            .put(
              `${API_BASE_URL}/lead/${id}/`,
              {
                LeadServiceInterested: newArr,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((value) => {
              toast.success("Course Added SucessFully", {
                position: toast.POSITION.TOP_CENTER,
              });
              props.leadFollowUpFunc();
            })
            .catch((err) => {
              console.log(values.course);
              console.log(values);
              console.log(err);
              toast.error("Some Error Occured", {
                position: toast.POSITION.TOP_CENTER,
              });
            })
            .finally(() => {
              setLoadingButton(false);
            });
        }}
      >
        <Form className="mt-4 border border-solid border-gray-600 rounded-2xl p-4">
          <div className="mb-4">
            <label
              htmlFor="course"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Select Course:
            </label>
            <Field
              as="select"
              name="course"
              className="block w-full bg-gray-200 border border-gray-400 text-gray-700 rounded py-2 px-3 focus:outline-none focus:bg-white"
            >
              <option value="">Select a Course</option>
              {props.avaliableServices?.map((element, index) => (
                <option key={index} value={element.id}>
                  {element.ServiceName}
                </option>
              ))}
            </Field>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Class Mode:
            </label>
            <div>
              <label className="inline-flex items-center">
                <Field
                  type="radio"
                  name="classMode"
                  value="online"
                  className="text-green-500 form-radio"
                />
                <span className="ml-2">Online</span>
              </label>
              <label className="ml-4 inline-flex items-center">
                <Field
                  type="radio"
                  name="classMode"
                  value="offline"
                  className="text-green-500 form-radio"
                />
                <span className="ml-2">Offline</span>
              </label>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none"
            >
              {loadingButton ? (
                <CircularProgress color="inherit" size={19} />
              ) : (
                "Add Course"
              )}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddCourseForm;
