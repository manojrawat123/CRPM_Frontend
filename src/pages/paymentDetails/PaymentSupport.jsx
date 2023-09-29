import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PaymentSupport = (props) => {
  const [leadObj, setLeadObj] = useState();
  const [paidFees, setPaidFees] = useState();
  const [isConverted, setIsConverted] = useState(false);
  const authToken = localStorage.getItem('token');
  const [representative, setRepresentative] = useState()
  const id = props?.payment?.lead

  const getConvertedLead = () => {
    axios.get(`http://localhost:8000/getfeesdetailspaymentid/${props.payment.payment_id}/`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    }).then((value) => {
      console.log(value.data);
      setPaidFees(value.data[0]?.fee_received ? value.data[0]?.fee_received : 0)
      setRepresentative(value.data[0]?.updated_by)
      setIsConverted(true)
    }).catch((err) => {
      console.log(err);
      setIsConverted(false)
    })
  }

  useEffect(() => {

    getConvertedLead();
  }, [])


  useEffect(() => {
    getConvertedLead()
  }, [isConverted])


  return (
    <>
      <tr key={props?.index}>
        <td className="border border-black px-4 py-2">{props.index + 1}</td>
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
          {props?.payment?.payment_date}
          <br />
          <span className="font-bold">Name: </span>
          {props?.payment?.name}
          <br />
          <span className='font-bold'>
            Email:
          </span>
          {props?.payment?.email}
          <br />

        </td>
        <td className='border border-black px-4 py-2'>
          <span className='font-bold'>
            <br />
            Payment Type:
          </span>
          {props?.payment?.payment_type}
          <br />
          <span className="font-bold">
            Payment Mode:
          </span>
          {props?.payment?.payment_mode}
          <br />
          <span className="font-bold">
            Amount :
          </span>
          {props?.payment?.payment_amount}
          <br />
          <span className="font-bold">Remaining:</span>
          {props?.payment?.payment_amount - paidFees}
          <br />
          <span className="font-bold">Representative:</span>
          {representative}
        </td>
        <td className="border border-black px-4 py-2">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
                Show Detail
          </button>
        </td>
      </tr>
    </>
  )
}

export default PaymentSupport