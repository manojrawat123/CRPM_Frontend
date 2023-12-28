import React, { useContext,useEffect,useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { DataContext } from "../context";
import { NavLink } from "react-router-dom";
import lotus from "../img/lotus.webp";
import Cookies from "js-cookie";

const MyLogin = () => {


  const {loginFunc, invalidInfo, internalError,isLoading,setIsLoading,} = useContext(DataContext);
useEffect(()=>{
  setIsLoading(false)
  console.log(document.cookie)
},[])
  

  return (
    <section className="gradient-form h-[100vh] bg-neutral-200  dark:bg-neutral-700">
      <div className=" h-full p-10">
        <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 md:w-[55%] mx-auto">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-xl dark:bg-neutral-800">
              {/* Left column container */}
              <div className="px-4 md:px-0">
                <div className="md:mx-6 md:p-12">
                  {/* Logo */}
                  <div className="text-center">
                    <img
                      className="mx-auto w-48"
                      src={lotus}
                      alt="logo"
                    />
                    <h4 className="mb-12 mt-1 pb-1 text-xl font-bold">
                      Welcome to CRMHUT
                    </h4>
                  </div>
                {invalidInfo?
                    <h1 className="text-red-600 text-center">Incorrect Email or password</h1>: ""}
  {internalError?
                    <h1 className="text-red-600 text-center">Internal Server Error</h1>: ""}
                  <form onSubmit={loginFunc}>
                    {/* Username input */}
                    <div className="relative my-4" data-te-input-wrapper-init>
                      <input
                        type="email"
                        id="username"
                        name="username"
                        required
                        className=" border border-gray-300 outline-none peer  block min-h-[auto] w-full pl-8 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-orange-600  focus:border rounded"
                        placeholder="Enter your Email"
                      />
                      <PersonIcon className="absolute top-2 border-r border-black peer-focus:text-violet-700" />
                    </div>
                    {/* Password input */}
                    <div className="relative my-4" data-te-input-wrapper-init>
                      <input
                        type="password"
                        name="password"
                        required
                        className=" border border-gray-300 outline-none peer  block min-h-[auto] w-full pl-8 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-orange-600  focus:border rounded"
                        id="exampleFormControlInput11"
                        placeholder="Enter Your Password"
                      />
                      <LockIcon className="absolute top-2 border-r border-black peer-focus:text-violet-700" />
                    </div>

                    {/* Submit button */}

{/* Loading Button */}
    <div className="mb-12 pb-1 pt-1 text-center">
      <button
        className={`mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]`}
        type="submit"
        data-te-ripple-init
        data-te-ripple-color="light"
        style={{
          background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
        }}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Login'}
      </button>
      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </div>
  


{/* End of Loading Button */}


                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyLogin;
