import React from 'react'
import Skeleton from 'react-loading-skeleton';

const LeadFollowUpFormLoading = () => {
  return (
   <>
   <div className="text-center   ">
        <h1 className=" text-2xl  font-bold p-2 col-span-3 text-center underline text-green-500  bg-gray-200 h-12 rounded-t-xl">
          
        </h1>
      </div>
      <div className="mx-4 pt-3 rounded grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="">
        <Skeleton height={35} />
          <div className="my-4 mx-4">
          <Skeleton height={35} />
          </div>

          <div className={` grid grid-cols-2 gap-4 mx-4 mb-4`}>
          <Skeleton height={35} />

          <Skeleton height={35} />
          </div>
        </div>

        {/* Update Status Button */}
        <div>
        <Skeleton height={35} />
        </div>
        {/* Here is the code of did you talk to customer */}
      </div>
      {/* End of button of yes & no */}

     
   
   </>
  )
}

export default LeadFollowUpFormLoading