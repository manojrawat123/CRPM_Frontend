import React, { useContext, useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { DataContext } from '../context';

const PaymentForm = () => {
  
  const {profileFunc} = useContext(DataContext)
  useEffect(()=>{
    profileFunc();
  },[])
  return (
    <div className="w-[100%] py-10 bg-blue-50">
      <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
        <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Payment Form</h2>
        <form>
          <div className="px-6 pb-4">
            <h4 className="text-green-600 mb-2 text-center underline text-xl">Account</h4>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
              <div className="w-full  relative ">
              
                <input
                  type="text"
                  placeholder="Recipt No"
                  
                  required
                  className={" w-full pl-9 py-2 px-3 border peer border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600 " }
                />
              <InsertDriveFileIcon className='absolute  peer-focus:text-green-600 top-2 left-2 border-r-2 '/>
              </div>
              </div>
              
              <div>
              <div className={"w-full pl-2 relative col-span-1 "}>
                
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                />
                <PersonIcon className={'absolute top-2 peer-focus:text-green-600 border-r-2 left-2 '}/>
              </div>
              </div>
            </div>

            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="w-full relative">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full pl-9 py-2 px-3 peer border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              <MailIcon className='absolute top-2 left-2 border-r-2  peer-focus:text-green-600 '/>
              </div>
              </div>

              <div>
              <div className="w-full relative">
                <input
                  type="number"
                  placeholder="Phone Number"
                  required
                  className="pl-8 w-full py-2 px-3 border peer border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                />
                <LocalPhoneIcon className='absolute top-2 border-r-2 left-2  peer-focus:text-green-600'/>
              </div>
              </div>
            </div>
           
           


            <div>
              <h4 className="text-green-600 mb-2 underline text-xl text-center">Payment Details</h4>
              </div>    
            <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
              <div className="w-full ">
                <h4 className="text-green-600 mb-2">Payment Date</h4>
                <input
                  type="date"
                  className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                />
              </div>
              <div className="w-full pl-2">
                
               
              <h4 className="text-green-600 mb-2">Payment Time</h4>
                <input
                  type="time"
                  
                  className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                />
               
              </div>
            </div>
           
              
          
    
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
              <h4 className="text-green-600 mb-2">Purpose</h4>
            <select
                  className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                >
                  <option value="">----Select------</option>
                  <option>Purpose 1</option>
                  <option>Purpose 2</option>
                  <option>Purpose 3</option>
                </select>

                </div>
                
                <div>

                <h4 className="text-green-600 mb-2">Representative</h4>
                <select
                  className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                  >
                  <option value="">----Select------</option>
                  <option>Representative 1</option>
                  <option>Representative 2</option>
                  <option>Representative 3</option>
                </select>
                  </div>
            </div>


            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
              <h4 className="text-green-600 mb-2">Payment Mode</h4>
            <select
                  className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
                >
                <option value="">----Select------</option>
                  <option>Cash</option>
                  <option>Net Banking</option>
                  <option>Card</option>
                </select>

                </div>
                
                <div>

                <h4 className="text-green-600 mb-2">Amount</h4>
                <input
                type="number"
                required
                className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
              />
                  </div>
            </div>
        

           
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
              >
                PAY NOW
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
