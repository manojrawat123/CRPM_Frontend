import Cookies from 'js-cookie';
import React, { useContext, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
// import { DataContext } from "../context";


const ProtectedRoutes = () => {
    const navigate = useNavigate()
      useEffect(()=>{
        console.log("Hello This is running!!")
        if (!Cookies.get("token")){
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