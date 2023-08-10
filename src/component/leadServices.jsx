import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../context'
import axios from 'axios';

const LeadServices = () => {
    
    const { id } = useParams()
    const [myId, setMyId] = useState(id)
    const { brand } = useContext(DataContext)
    const [service , setService] = useState()

    useEffect(()=>{
        const apiUrl = 'http://localhost:8000/services/';
        const token = localStorage.getItem("token");

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        axios.get(apiUrl, config)
      .then((response) => {
        console.log('Response data:', response.data);
        const data = response.data    
        setService(response.data)    
      })
      .catch((error) => {
        console.error('Error:', error.message);
        localStorage.removeItem("token");
        navigate("/login")
      });
    },[])

  return (
    <>
    <div className=''>
    <span className='mr-10'>  Lead Id: {myId} </span>
       <span> Brand Id: {brand}</span>
    </div>

    <div>

    <table>
      {service?.map((element, index)=>{
        return (
          <>
          <tr>

          <td className='mr-8 text-left'>{element?.ServiceName}</td>
          
          <td className='ml-8 text-right w-[5rem]'>{element.serviceMode}</td> 
          </tr>
          </>
          )
      })}
    </table>




    </div>

    
    
    
    </>
  )
}

export default LeadServices
