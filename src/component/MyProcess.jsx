import React, { useContext, useState } from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { NavLink, useNavigate } from 'react-router-dom';
import { countryList } from '../data';
import { DataContext } from '../context';


const LoginForm = () => {
  const { number, setNumber, code, setCode, country, setCountry } = useContext(DataContext)
  const [isError, setIsError] = useState();
  const navigate = useNavigate();
  return (
    <section className="gradient-form h-[100vh] bg-neutral-200  dark:bg-neutral-700">
      <div className=" h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200 md:w-[55%] mx-auto">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-xl dark:bg-neutral-800">

              {/* Left column container */}
              <div className="px-4 md:px-0">
                <div className="md:mx-6 md:p-12">
                  {/* Logo */}
                  <div className="text-center">

                    <h4 className="mb-12 mt-1 pb-1 text-xl font-bold">
                      Welcome to Coding Bytes
                    </h4>
                  </div>

                  <form onSubmit={(e)=>{
                    e.preventDefault()
                       
                       if (number.length < 6 || number.length > 10) {
                        setIsError(true)
                        return;
                        
                      } else {
                        setIsError(false)
                        navigate("/dashboard")
                      }
                      
                  }}>
                    <div className='text-center'>{isError ?<span className='text-red-500'>Invalid phone number.</span>  : <></>}</div>
                    {/* Username input */}
                    <div
                      className="relative my-4"
                      data-te-input-wrapper-init
                    >
                      <select
                        className="border-b border-gray-300 outline-none peer text-lg block min-h-[auto] w-full bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-gray-600 focus:border-b-2"
                        id="exampleFormControlInput11"
                        onChange={(e) => {
                          setCode(e.target.value)
                        }}
                        required
                      >
                        <option value={""}>Select your country Code</option>
                        {countryList.map((country, index) => (
                          <option key={index} value={country?.code}>
                            {country.code}
                          </option>
                        ))}
                        {/* Add more country code options as needed */}
                      </select>

                    </div>

                    {/* Password input */}
                    
                    <div
                      className="relative my-4"
                      data-te-input-wrapper-init
                    >
                      <input
                        type="number"
                        className=" border-b border-gray-300 outline-none peer  block min-h-[auto] w-full pl-8 bg-transparent py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:border-gray-600  focus:border-b-2"
                        id="exampleFormControlInput11"
                        placeholder='Plese enter your mobile number'
                        onChange={(e) => {
                          setNumber(e.target.value)
                        }}
                        name='number'
                        required
                      />
                      <LocalPhoneIcon className='absolute top-2 border-r border-black' />
                    </div>

                    {/* Submit button */}
                    <div className="mb-12 pb-1 pt-1 text-center">

                      <button
                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 font-semibold mt-5 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        type="submit"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        style={{
                          background:
                            'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                        }}
                      >
                        Proceed
                      </button>
                    </div>
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

export default LoginForm;
