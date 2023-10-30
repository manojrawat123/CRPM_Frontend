import React, { useEffect } from 'react';
import axios from 'axios';
import PaymentLinkSupport from './PaymentLinkSupport';
import { useState } from 'react';
import PaymentModal from './PaymentModal';
import API_BASE_URL from "../../config";


const PaymentLink = () => {

  const [data, setPaymentLink] = useState()
  const authToken = localStorage.getItem("token");
  const getPaymentLink = ()=>{
    axios.get(`${API_BASE_URL}/paymentlink/`,{
    headers: {
      'Authorization': `Bearer ${authToken}`
    }
}).then((value)=>{
    setPaymentLink(value.data)
  }).catch((err)=>{
    console.log(err);
  })
  }


  useEffect(()=>{
        getPaymentLink()
  },[])

  
  
  
  return (
    <div className=' m-8'>
      <PaymentModal />
        <div className="py-4">
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 border border-black px-4 py-2">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-black">
                S.No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider  border border-black">
                Course Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider  border border-black">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border border-black">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider  border border-black">
                Payment Link
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
        
          {data?.map((item, index) => (
              <PaymentLinkSupport items={item} key={index} index={index}/>
            ))}
         
            
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default PaymentLink
