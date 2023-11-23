import React from 'react'
import Skeleton from 'react-loading-skeleton'

const LoadingPending = () => {
  return (
    <div className="w-[100%] py-10 bg-blue-50">
        <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
          <h2 className='bg-gray-100 py-4 px-6 mb-6 text-center'>
           <span className=" text-green-600 text-3xl  font-semibold "> Payment Form  <Skeleton className='inline-block'/></span> <br className='sm:hidden'/> 
          </h2>
          
                <div className="px-6 pb-4">
                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Student</h4>
                      <Skeleton height={35}/>
                    </div>
                    <div>
                      <h4 className="text-green-600 mb-2">Payment ID</h4>
                      <Skeleton height={35}/>
                    </div>
                  </div>

                  <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-green-600 mb-2">Next Due Date</h4>
                      <Skeleton height={35}/>
                    </div>

                    <div>
                      <h4 className="text-green-600 mb-2">Fees Paid</h4>
                      <Skeleton height={35}/>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-green-600 mb-2">Receipt Number</h4>
                    <Skeleton height={35}/>
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
        </div>
      </div>
  )
}

export default LoadingPending
