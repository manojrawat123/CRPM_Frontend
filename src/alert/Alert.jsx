import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context';

const Alert = () => {
    const { registerSucessfully, setRegisterSucessfully } = useContext(DataContext);


  const [alertClasses, setAlertClasses] = useState('');
  const [message, setMessage] = useState('');
  const [display, setDisplay] = useState('hidden');
  


  useEffect(() => {
    setRegisterSucessfully("")
    if (registerSucessfully === 'success') {
      setAlertClasses('bg-green-500');
      setMessage('Lead successfully added');
      setDisplay('block');
      setTimeout(() => {
        
      }, 6000);
    } else if (registerSucessfully === 'error') {
      setAlertClasses('bg-red-500');
      setMessage(`Oops! Something went wrong. Lead could not be added. 
       Perhaps! You are not connected to Internet`);
      setDisplay('block');
    }
  }, [registerSucessfully,display]);
  return (
    <div className={`p-4 mb-4 rounded-lg text-white shadow-lg ${alertClasses} ${display} text-center w-[100%] fixed z-50`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* {registerSucessfully === 'success' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-green-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-red-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
             
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                 onClick={()=>{
                setDisplay("hidden")
              }}
              />
            </svg>
          )} */}
         
        </div>
        <button className="text-sm text-white opacity-75 hover:opacity-100 focus:outline-none" onClick={()=>{
            setDisplay(" hidden ")
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M17.293 6.293a1 1 0 010 1.414L13.414 11l3.879 3.879a1 1 0 11-1.414 1.414L12 12.414l-3.879 3.879a1 1 0 11-1.414-1.414L10.586 11 6.707 7.121a1 1 0 111.414-1.414L12 9.586l3.879-3.879a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="mt-2">{message}</p>
      <br />
      <button className={`border border-solid border-white py-2 px-8 rounded-lg  ${
  alertClasses === 'bg-red-500' ? 'bg-red-600' : 'bg-green-600'
}`  } 
onClick={()=>{
    setDisplay("hidden")
}}>Ok</button>
    </div>
  );
};

export default Alert;
