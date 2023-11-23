import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_BASE_URL from "../../config";
import { format } from 'date-fns';


const PaymentSupport = (props) => {
  // const [leadObj, setLeadObj] = useState();
  // const [paidFees, setPaidFees] = useState();
  // const [isConverted, setIsConverted] = useState(false);
  // const authToken = localStorage.getItem('token');
  // const [representative, setRepresentative] = useState()
  // const id = props?.payment?.lead

  // const getConvertedLead = () => {
  //   axios.get(`${API_BASE_URL}/getfeesdetailspaymentid/${props.payment.payment_id}/`, {
  //     headers: {
  //       'Authorization': `Bearer ${authToken}`
  //     }
  //   }).then((value) => {
  //     console.log(value.data);
  //     setPaidFees(value.data[0]?.fee_received ? value.data[0]?.fee_received : 0)
  //     setRepresentative(value.data[0]?.updated_by)
  //     setIsConverted(true)
  //   }).catch((err) => {
  //     console.log(err);
  //     setIsConverted(false)
  //   })
  // }
  // console.log(props)

  // useEffect(() => {

  //   getConvertedLead();
  // }, [])


  // useEffect(() => {
  //   getConvertedLead()
  // }, [isConverted])
console.log(props)

  return (
    <>
    <tbody className='md:table-footer-group hidden'>
      <tr key={props?.index}>
        <td className="border border-black px-4 py-2">
        <span className="font-bold">Name: </span>
          {props?.payment?.name}
          <br />
          <span className="font-bold">Representative:</span>
          {props?.payment?.lead_id?.LeadRepresentativePrimary?.name}
          <br /><span className='font-bold'>
            Email:
          </span>
          {props?.payment?.email}
          <br />
        </td>
        <td className="border border-black px-4 py-2">
          <span className='font-bold'>
            Payment Id:
          </span>

          {props?.payment?.payment_id}
          <br />
          <span className='font-bold '>
            Payment Confirmation Id:
          </span>
          {props?.payment?.payment_confirmation_id}
          <br />
          <span className='font-bold'>Payment Date:</span>
          {props?.payment?.payment_date ? format(new Date(props?.payment?.payment_date) , "dd MMM yyyy h a") : null}
          {/* {props?.payment?.payment_date} */}
          <br />
        </td>
        <td className='border border-black px-4 py-2'>
          <span className='font-bold'>
            <br /> 
            Payment Type:
          </span>
          {props?.payment?.payment_type_id?.payment_type_display}
          <br />
          <span className="font-bold">
            Payment Mode:
          </span>
          {props?.payment?.payment_mode_id?.payment_mode_display}
          <br />
          <span className="font-bold">
            Amount :
          </span>
          {props?.payment?.payment_amount}
          <br />
          <span className="font-bold">Remaining:</span>
          {/* {props?.payment?.payment_amount - paidFees} */}
          <br />
          
        </td>
        <td className="border border-black px-4 py-2">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
                Show Detail
          </button>
        </td>
      </tr>
      </tbody>
    </>
  )
}

export default PaymentSupport