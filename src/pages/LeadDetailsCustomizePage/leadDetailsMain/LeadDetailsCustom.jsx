import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API_BASE_URL from '../../../config'

const LeadDetailsCustom = (props) => {

    const { id } = useParams()
    const authToken = localStorage.getItem("token");
    const [leadObj, setLeadObj] = useState();
    const [leadFollowUpObj, setLeadFollowUpObj] = useState();

    const leadFollowUpFunc = () => {

        axios.get(`${API_BASE_URL}/leadfollowup/${id}/`, {
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        }).then((values) => {
            console.log(values);
            setLeadObj(values.data[0].LeadID);
            console.log(values.data[0].LeadID);
        }).catch((err) => {
            console.log(err);
        })


    }
    useEffect(()=>{
        leadFollowUpFunc()
    },[])



    return (
        <>

        </>
    )
}

export default LeadDetailsCustom
