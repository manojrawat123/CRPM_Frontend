// src/components/StudentDetailList.js
import axios from "axios";
import React, { useState, useEffect } from "react";
import API_BASE_URL, { API_ROUTE_URL } from "../../config";
import { NavLink } from "react-router-dom";
import { copy } from "clipboard";

const StudentDetailsAndUpdateLink = () => {
  const [customer, setCustomer] = useState();
  const [linkCopy, setLinkCopy] = useState(false);

  const token = localStorage.getItem("token");

  const customerGetFunc = () => {
    axios
      .get(`${API_BASE_URL}/customer/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((values) => {
        setCustomer(values.data);
        console.log(values.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    customerGetFunc();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center font-bold underline text-xl my-4">
        Student Update Link & Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customer?.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow text-center">

            
                
<p className="font-bold text-lg text-center">


<strong>{user.LeadID.LeadName}</strong>
</p>
            {console.log(`${API_BASE_URL}/${user?.StudentID?.CustomerPhoto}`)}
            {user?.StudentID?.CustomerPhoto ? (

              
              <div className="text-center flex items-center justify-center">

              <img
                src={`${API_BASE_URL}${user?.StudentID?.CustomerPhoto}`} // Replace with the user's image URL
                alt={user.name}
                className="w-32 h-32  cover mb-2 rounded"
                />
                </div>
            ) : null}
            
            <p>
              <strong>Lead ID:</strong> {user.LeadID.id}
            </p>
            <p>
              <strong>Lead Source:</strong>{" "}
              {user.LeadID.LeadScourceId.LeadSource}
            </p>
            <p>
              <strong>Lead Date:</strong> {user.LeadID.LeadDate}
            </p>
            <p>
              <strong>Customer ID:</strong> {user.StudentID.CustomerID}
            </p>
            <p>
              <strong>Representative:</strong>{" "}
              {user.LeadID.LeadRepresentativePrimary.name}
            </p>

            {user?.StudentID?.CustomerPhoto ? (
              <>
                <p>
                  <strong>Date of Birth:</strong> {user.StudentID.CustomerDOB}
                </p>
                <p>
                  <strong>Gender:</strong> {user.StudentID.CustomerGender}
                </p>
                <p>
                  <strong>Occupation:</strong>{" "}
                  {user.StudentID.CustomerOccupation}
                </p>
                <p>
                  <strong>Current Address:</strong>{" "}
                  {user.StudentID.CustomerShippingAddress}
                </p>
              </>
            ) : null}

            {!user.StudentID.CustomerPhoto ? (
              <div className="text-center">
                <NavLink
                  target="_blank"
                  to={`/customer_registration_form/${user.StudentID.CustomerID}`}
                >
                  <button
                    className={
                      " border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 mx-4 mt-2 p-2 rounded-xl transition duration-300 ease-in-out  sm:mr-16"
                    }
                  >
                    Open Update Link
                  </button>
                </NavLink>

                <br />

                <button
                  className={
                    " border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 mx-4 mt-2 p-2 rounded-xl transition duration-300 ease-in-out  sm:mr-16"
                  }
                  onClick={() => {
                    copy(
                      `${API_BASE_URL}/customer_registration_form/${user.StudentID.CustomerID}`
                    );
                    setLinkCopy(true);
                    setTimeout(() => {
                      setLinkCopy(false);
                    }, 2000);
                  }}
                >
                  {linkCopy ? "    Copied     " : "Copy Update Link"}
                </button>

                <br />

                <a
                  href={`http://whatsapp.com/${user.LeadID.LeadPhone}`}
                  target="_blank"
                >
                  <button
                    className={
                      " border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 mx-4 mt-2 p-2 rounded-xl transition duration-300 ease-in-out  sm:mr-16"
                    }
                  >
                    Whatsapp
                  </button>
                </a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDetailsAndUpdateLink;
