import React, { useEffect } from 'react';
import axios from 'axios';
import PaymentLinkSupport from './PaymentLinkSupport';
import { useState } from 'react';
import PaymentModal from './PaymentModal';
import API_BASE_URL from "../../config";
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import PaymentLinkLoader from './PaymentLoader/PaymentLinkLoader';


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
     <NavLink to={"/createpaymentlink"}>
     <Button variant="outlined">

      Create Payment
      <ArrowForward className='inline-block'/>
      </Button>
     </NavLink>
        <div className="py-4"> 
      <div className="overflow-x-auto">
      <table className="min-w-full">
          <thead className="bg-purple-500 text-white hidden md:table-header-group">
            <tr className="border border-gray-300">
              
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider  border border-black">
                Course Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider  border border-black">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider border border-black">
                Service
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider  border border-black">
                Payment Link
              </th>
            </tr>
          </thead>

          <thead className="bg-purple-500 text-white md:hidden table-header-group">
            <tr className="border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">Payment Links</th>
            </tr>
          </thead>

        
          {data ?   data?.map((item, index) => (
              <PaymentLinkSupport items={item} key={index} index={index}/>
            )) : <PaymentLinkLoader />}
         
        </table>
      </div>
    </div>
    </div>
  )
}

export default PaymentLink
