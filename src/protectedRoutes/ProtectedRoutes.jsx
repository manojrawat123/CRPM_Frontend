import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { DataContext } from "../context";


const ProtectedRoutes = () => {
    
    const { profileFunc } = useContext(DataContext);
    const navigate = useNavigate()
      useEffect(()=>{
        profileFunc()
        if (!localStorage.getItem("token")){
            return navigate("/login");
        }
    },[])


  return (
    <>
      <Outlet />
    </>
  )
  
}

export default ProtectedRoutes