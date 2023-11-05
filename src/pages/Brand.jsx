import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context";
import { Navigate, useNavigate } from "react-router-dom";

import lotus from "../img/lotus.webp";


const MyBrand = () => {
    const { brandarr } = useContext(DataContext);
    const navigate = useNavigate()
    
    useEffect(()=>{
      if (localStorage.getItem("brand")){
       navigate("/dashboard")
      }
    },[])
    
  return (
    <section className="gradient-form h-[100vh] bg-neutral-200  dark:bg-neutral-700">
      <div className=" h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 md:w-[55%] mx-auto">
          <div className="w-full">
    <div className="mt-10 bg-white p-10 rounded">
     <div className="flex justify-center items-center">
      <img src={lotus} alt="" className="mx-auto w-48" />
     </div>
          <h1 className="text-xl text-center font-sans font-bold p-2 w-full underline rounded-lg my-4">Select your brand</h1>
        <div className="items-center justify-between space-y-5 ">

          {brandarr?.map((value, index)=>{
            return (
                <div key={index}>
           <button
  className="w-[80%] bg-gradient-to-r from-blue-300 to-blue-500 hover:from-blue-400 hover:to-blue-600 text-white border border-solid border-gray-900 font-bold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mx-10 transition duration-300"
  type="button"
  style={{
    background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
  }}
  onClick={() => {
    localStorage.setItem("brand", value?.id);
    navigate("/dashboard");
  }}
>
  {value.BrandName}
</button>

          </div>
            )
          })}
        </div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
};

export default MyBrand;
