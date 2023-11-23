import React from 'react'
import Skeleton from 'react-loading-skeleton'

const PaymentLoadingForm = () => {
  return (
    <div className="w-[100%] py-10 bg-blue-50">
        
    <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
      <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Payment Form</h2>
    
      
          
            <div className="px-6 pb-4">
              <h4 className="text-green-600 mb-2 text-center underline text-xl">Account</h4>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  
          <Skeleton height={35}/>


                </div>

                <div>
                 
          <Skeleton height={35}/>

                </div>
              </div>

              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                 
          <Skeleton height={35}/>
                </div>

                <div>
                 
          <Skeleton height={35}/>
                </div>
              </div>


              <div>
                <h4 className="text-green-600 mb-2 underline text-xl text-center">Payment Details</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4">
                <div className="w-full ">
                  <h4 className="text-green-600 mb-2">Payment Date</h4>
                 
          <Skeleton height={35}/>
                </div>
                <div className="w-full ">


                  <h4 className="text-green-600 mb-2">Payment Time</h4>
                  
          <Skeleton height={35}/>
                </div>
              </div>

              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-green-600 mb-2">Purpose</h4>
                  
          <Skeleton height={35}/>
                </div>

                <div>
                  <h4 className="text-green-600 mb-2">Payment Type</h4>
                  
          <Skeleton height={35}/>
                </div>
                
              </div>


              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-green-600 mb-2">Payment Mode</h4>
                  
          <Skeleton height={35}/>
                </div>

                <div>
                  <h4 className="text-green-600 mb-2">Payment Amount</h4>
                  
          <Skeleton height={35}/>
                </div>
              </div>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-green-600 mb-2">Payment Currency</h4>
                  
          <Skeleton height={35}/>
                </div>
              </div>
              <div className="mb-4 px-8">
              
                <Skeleton height={45}/>
                
              </div>
            </div>
        
      
    </div>
  </div>
  )
}

export default PaymentLoadingForm
