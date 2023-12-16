
import React, { useContext, useEffect, useState } from 'react'
import PaymentRefundLap from './PaymentRefundLap';
import { CircularProgress } from '@mui/material';
import { DataContext } from '../../../context';
import { DateRangePicker } from "react-date-range";
import { CloseOutlined } from "@mui/icons-material";
import ExcelDownloadButton from '../../../component/ExcelDownloadButton/ExcelDownloadButton';

const PaymentRefundDetails = () => {

    const { paymentRefundFeesDetailsFunc,
        refundPaymentObj
    } = useContext(DataContext);
    const [isFeesDate, setisFeesDate] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const [filteredData, setFilteredData] = useState();

    useEffect(() => {
        paymentRefundFeesDetailsFunc();
    }, [])


    const handleSelect = (date) => {
        setisFeesDate(false);
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        let filtered = refundPaymentObj?.filter((product) => {
            let productDate = new Date(product?.LeadStatusDate);
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
        setFilteredData(filtered);
    };

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };







    return (
        <>
            <div className="  overflow-x-auto">
                <div className="w-full rounded">
                    <div className='ml-auto flex'>
                        {isFeesDate ? (
                            <ExcelDownloadButton
                                data={filteredData?.map((element, index) => ({
                                    "S. No.": index + 1,
                                    "Name": element?.lead_obj?.LeadName,
                                    "Phone": element?.lead_obj?.LeadPhone,
                                    "Total Fees": element?.total_fees,
                                    "Collected Fees": element?.payment_done,
                                    "Pending Fees": element?.pending_fees,
                                    "Refund Fees": element?.FeeRefunded,
                                    "Refund Date": format(new Date(element?.FeeRefundedDateTime), "dd MMM yy h a"),
                                }))}
                                fileName={"Today call's"}
                            />
                        ) : (
                            <ExcelDownloadButton
                                data={data?.map((element, index) => ({
                                    "S. No.": index + 1,
                                    "Name": element?.lead_obj?.LeadName,
                                    "Phone": element?.lead_obj?.LeadPhone,
                                    "Total Fees": element?.total_fees,
                                    "Collected Fees": element?.payment_done,
                                    "Pending Fees": element?.pending_fees,
                                    "Refund Fees": element?.FeeRefunded,
                                    "Refund Date": format(new Date(element?.FeeRefundedDateTime), "dd MMM yy h a"),
                                }))}
                                fileName={"Today's Call"}
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

            <div className='md:block hidden h-[100vh]'>
                {
                    refundPaymentObj ?
                        <PaymentRefundLap refund_data={refundPaymentObj} /> :
                        <div className='h-[65%] flex items-center justify-center'>
                            <CircularProgress />
                        </div>

                }

            </div>
            <div className='block md:hidden h-[100vh]'>
                {
                    refundPaymentObj ?
                        <PaymentRefundLap refund_data={refundPaymentObj} /> :
                        <div className='h-[80%] flex items-center justify-center'>
                            <CircularProgress />
                        </div>

                }

            </div>

        </>
    )
}


export default PaymentRefundDetails
