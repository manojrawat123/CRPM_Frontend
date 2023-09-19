import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { DataContext } from '../context'
import axios from 'axios';

const LeadServices = () => {
    
    const { id } = useParams();
    const [myId, setMyId] = useState(id);
    const { brand ,service , setService} = useContext(DataContext);
    

    const brandIds = localStorage.getItem("brand");

    useEffect(()=>{
        const apiUrl = `http://localhost:8000/services/${brandIds}/`;
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
    <div className='text-xl font-bold border border-solid py-2 border-green-500'>
    <span className='mr-10 ml-2'>  Lead Id: <span>{myId}</span> </span>
    <span className='mr-10 ml-2'> Brand Id: <span>{brand}</span> </span>
        <NavLink to={`/convertlead/${id}`}>
        <button
              type="button"
              className="bg-green-500 mx-2 text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300"
              >
              Convert Lead
        </button>
              </NavLink>
        <NavLink to={`/payment/${id}`}>
        <button
              type="button"
              className="bg-green-500 mx-2 text-white py-1 px-2 rounded hover:bg-green-600 transition duration-300"
              >
              Add Payment
        </button>
              </NavLink>

    </div>

    <div>

    <table className=' w-full border-collapse rounded rounded-corners'>
    <tbody>
      <tr>
        <td className="p-2"></td>
        <td className="p-2"></td>
      </tr>

      {service?.map((element, index)=>{
        return (
          
          <tr key={index}>

          <td className='mr-8 w-[13rem]  border border-solid py-2 border-green-500 px-2'>{element?.ServiceName}</td>
          
          <td className='ml-8  border border-solid py-2 border-green-500 px-2'>{element.serviceMode}</td> 
          </tr>          
          )
      })}
       </tbody>
    </table>
    </div>   
    </>
  )
}

export default LeadServices
