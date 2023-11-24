import React, { useContext, useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DataContext } from "../../context";
import axios from "axios";
import API_BASE_URL from "../../config";
import PaymentSupport from "./PaymentSupport";
import PaymentLoading from "./PaymentLoading";



const PaymentDetails = () => {
  const { GetFeesAll, allFeesObj } =
    useContext(DataContext);
  const [isFeesDate, setisFeesDate] = useState(true);
  const [filteredallFeesObj, setFilteredAllFeesObj] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [paymentObj, setPaymentObj] = useState();


  const token = localStorage.getItem("token");

  useEffect(()=>{
    axios.get(`${API_BASE_URL}/payments/`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((value)=>{
        console.log(value.data);
        setPaymentObj(value.data);
      })
  },[])

  const handleSelect = (date) => {
    setisFeesDate(false);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    let filtered = paymentObj?.filter((product) => {
      let productDate = new Date(product?.payment_date);
      if (date.selection.endDate == date.selection.startDate) {
        productDate.setHours(0, 0, 0, 0);
        return productDate.getTime() === date.selection.startDate.getTime();
      } else if (date.selection.startDate && date.selection.endDate) {
        return (
          productDate <= date.selection.endDate &&
          productDate >= date.selection.startDate
        );
      } else if (date.selection.endDate != date.selection.startDate) {
        return (
          productDate >= date.selection.startDate &&
          productDate <= date.selection.endDate
        );
      }
    });
    setFilteredAllFeesObj(filtered);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  useEffect(() => {
    GetFeesAll();
  }, []);

  return (
    <>
      <div className="m-4">
        <h1 className="text-center text-xl font-bold">Payment Details {isFeesDate? "-- This Month": ""}</h1>
      </div>

      <div className="text-center mt-8 overflow-x-auto">
  <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto rounded">
    <DateRangePicker
      ranges={[selectionRange]}
      onChange={handleSelect}
      className="w-full max-w-full"
    />
  </div>
</div>
      <div className="text-center my-4">
        <button
          type="button"
          onClick={() => {
            setisFeesDate(true);
          }} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Show all data
        </button>
      </div>

      <div className="m-8">
      <table className="min-w-full">
          <thead className="bg-purple-500 text-white hidden md:table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-black">Lead Detail</th> 
              <th className="px-4 py-2 border border-black">Details</th>
              <th className="px-4 py-2 border border-black">More Details</th>
              <th className="px-4 py-2 border border-black">Actions</th>
            </tr>
          </thead>

          <thead className="bg-purple-500 text-white md:hidden table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Payment Details</th>
            </tr>
          </thead>  

            {paymentObj ? isFeesDate ? paymentObj?.map((payment, index) => (
                  <PaymentSupport
                    payment={payment}
                    index={index}
                    key={index}
                  />
                ))
              : filteredallFeesObj?.map((payment, index) => (
                  <PaymentSupport
                    payment={payment}
                    index={index}
                    key={index}
                  />
                )) : <PaymentLoading />}
        </table>
      </div>
    </>
  );
};

export default PaymentDetails;
