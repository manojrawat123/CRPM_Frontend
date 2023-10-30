import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API_BASE_URL from "../../config";


const PaymentRedirectLink = () => {
    
    const token = localStorage.getItem('token')
    const navigate = useNavigate();

    const redirectandgetFunc = ()=>{


        const currentURL = window.location.href;
        axios.get(`${API_BASE_URL}/paymentlinkurl/?url=${currentURL}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((value)=>{
            console.log(value.data);
            window.location.href = `https://www.codingbytes.com/instamojo_payment.php?purpose=${value?.data?.Package}&amount=${value?.data?.PaymentAmount}&representative_id=${value?.data?.RepID}&expirydate=0000-00-00&expirytime=00:00:00`
        }).catch((err)=>{
            console.log(err);
        })
    }

   
    
    // Redirect URL
    
    
    useEffect(() => {
        // Get the current URL and update the state with it
        redirectandgetFunc()
     
    }, []);
  
    return (
      <div>
        <p>Current URL: </p>
      </div>
    );
}

export default PaymentRedirectLink
