import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ReactLoadingForm = () => {
  return (
    
    <div className="px-6 pb-4">
      <h4 className="text-green-600 mb-2 text-center underline text-xl">Lead Details</h4>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="w-full ">
            <h4 className="text-green-600 mb-2">Lead Date</h4>
            <Skeleton height={35}/>
          </div>
        </div>

        <div>
          <div className="w-full">
            <h4 className="text-green-600 mb-2">Lead Time</h4>
            <Skeleton height={35}/>
          </div>
        </div>
      </div>

      {/* Second Input Tag */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-green-600 mb-2">Student Name</h4>
          <Skeleton height={35}/>
        </div>

        <div>
          <h4 className="text-green-600 mb-2">Student Email</h4>
          <Skeleton height={35}/>
        </div>
      </div>

      {/* ... (remaining fields) ... */}
      
      {/* ... (remaining fields) ... */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div>
            <h4 className="text-green-600 mb-2">Lead Source</h4>
            <Skeleton height={35}/>
          </div>
        </div>

        <div>
          <div>
            <h4 className="text-green-600 mb-2">Lead Source Details</h4>
            <Skeleton height={35}/>
          </div>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div>
            <h4 className="text-green-600 mb-2">Country Code</h4>
            <Skeleton height={35}/>
          </div>
        </div>

        <div>
          <div>
            <h4 className="text-green-600 mb-2">Country</h4>
            <Skeleton height={35}/>
          </div>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-green-600 mb-2">Location</h4>
          <Skeleton height={35}/>
        </div>

        <div>
          <div>
            <h4 className="text-green-600 mb-2">Phone Number</h4>
            <Skeleton height={35}/>
          </div>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div>
            <h4 className="text-green-600 mb-2">State</h4>
            <Skeleton height={35}/>
          </div>
        </div>

        <div>
          <div>
            <h4 className="text-green-600 mb-2">Parent Name</h4>
            <Skeleton height={35}/>
          </div>
        </div>
      </div>


      {/* Remaining Field */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div>
            <h4 className="text-green-600 mb-2">Lead Representative</h4>
            <Skeleton height={35}/>
          </div>
        </div>
        <div>
          {/* Placeholder */}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">


        <div>
          {/* Placeholder */}
        </div>
      </div>
      {/* Remaining Field end */}
      {/* end remaining fileds */}
      <div>
        <h4 className="text-green-600 mb-2 underline text-xl text-center">Course Details</h4>
      </div>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-green-600 mb-2">Course</h4>
         

          <Skeleton height={35}/>
        </div>

        <div>
          <h4 className="text-green-600 mb-2">Class Mode</h4>
          <Skeleton height={35}/>
        </div>
      </div>
      {/* Button Code */}
      <div className="mb-4">
        
          <Skeleton height={35}/>
        
      </div>
    </div>
  )
}

export default ReactLoadingForm
