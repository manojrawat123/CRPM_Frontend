
import React, { useContext, useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DataContext } from "../../context";
import PaymentSupport from "./PaymentSupport";
import PaymentLoading from "./PaymentLoading";
import ExcelDownloadButton from "../../component/ExcelDownloadButton/ExcelDownloadButton";
import { CircularProgress } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import { format } from "date-fns";

const PaymentDetails = () => {



  const { getPaymentAllFunc, paymentAllObj,getPaymentFilterFunc,filterPaymentObj } = useContext(DataContext);
  const [isFeesDate, setisFeesDate] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    getPaymentAllFunc()
  }, []);

  const handleSelect = (date) => {
    setisFeesDate(false);
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    getPaymentFilterFunc(date.selection.startDate,date.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  if (!paymentAllObj) {
    return <>
      <div className="flex justify-center items-center h-[70vh] m-20 bg-gray-200">
        <CircularProgress />
      </div>
    </>

  }

  return (
    <>
      <div className="overflow-x-auto">
        <div className="w-full rounded">
          <div className='ml-auto flex'>
            {isFeesDate ? (
              <ExcelDownloadButton
                data={filterPaymentObj?.map((element, index) => ({
                  "S. No.": index + 1,
                  Name: element.name,
                  Email: element.email,
                  "Recipt Number": element.payment_confirmation_id,
                  "Payment Date": element?.payment_date ? format(new Date(element?.payment_date), "dd MMM yyyy h a") : null,
                  "Payment Type": element.payment_type_id?.payment_type_display,
                  "Payment Mode": element?.payment_mode_id?.payment_mode_display,
                  "Amount": element.payment_amount,
                  "Pending Amount": element?.fees_data != false ? parseInt(element.payment_amount, 10) - parseInt(element?.fees_data?.fee_received) : element?.payment_amount,
                  "Payment Status": element?.fees_data != false && (parseInt(element.payment_amount, 10) - parseInt(element?.fees_data?.fee_received) == 0) ? "Payment Done ✔️" : "Payment Pending ❗",

                }))}
                fileName={"Payment Detail"}
              />
            ) : (
              <ExcelDownloadButton
                data={paymentAllObj?.map((element, index) => ({
                  "S. No.": index + 1,
                  Name: element.name,
                  Email: element.email,
                  "Recipt Number": element.payment_confirmation_id,
                  "Payment Date": element?.payment_date ? format(new Date(element?.payment_date), "dd MMM yyyy h a") : null,
                  "Payment Type": element.payment_type_id?.payment_type_display,
                  "Payment Mode": element?.payment_mode_id?.payment_mode_display,
                  "Amount": element.payment_amount,
                  "Pending Amount": element?.fees_data != false ? parseInt(element.payment_amount, 10) - parseInt(element?.fees_data?.fee_received) : element?.payment_amount,
                  "Payment Status": element?.fees_data != false && (parseInt(element.payment_amount, 10) - parseInt(element?.fees_data?.fee_received) == 0) ? "Payment Done ✔️" : "Payment Pending ❗",

                }))}
                fileName={"Payment Detail"}
              />
            )}
            {
              isFeesDate ?
                null
                :
                <button variant="outlined"
                  className={" border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out  sm:mr-16 " + `${isFeesDate ? '' : " ml-auto "}`}
                  onClick={() => {
                    setisFeesDate(true);
                  }}
                >
                  Reset Filter
                </button>
            }
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className={`mx-4 mt-8 p-2 rounded-full transition duration-300 ease-in-out sm:mr-16 ${isFeesDate ? " ml-auto " : ""} ${showCalendar
                ? "border border-red-500 hover:bg-red-500 hover:text-white text-red-500"
                : "border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 "
                }`}
            >
              {showCalendar ? <CloseOutlined /> : "Filter Lead's"}
            </button>
            {showCalendar && (
              <div
                className={` absolute z-10  text-center shadow-2xl overflow-hidden bg-white px-12 right-0 top-[9rem] rounded-xl transition-height duration-500 overflow-x-scroll`}
              >
                <DateRangePicker
                  ranges={[selectionRange]}
                  onChange={handleSelect}
                  className="w-full max-w-full"
                />
              </div>
            )}
          </div>
        </div>
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
              <th className="px-4 py-2 border border-gray-300">
                Payment Details
              </th>
            </tr>
          </thead>

          {paymentAllObj ? (
            isFeesDate ? (
              paymentAllObj?.map((payment, index) => (
                <PaymentSupport payment={payment} index={index} key={index} />
              ))
            ) : (
              filterPaymentObj?.map((payment, index) => (
                <PaymentSupport payment={payment} index={index} key={index} />
              ))
            )
          ) : (
            <PaymentLoading />
          )}
        </table>
      </div>
    </>
  );
};

export default PaymentDetails;
