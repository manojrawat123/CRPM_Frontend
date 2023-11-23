import React from 'react'

const MessageSheduleSupport = (props) => {
  return (
    <>
    
    <tbody className='md:table-footer-group hidden'>  
   <tr key={props?.index}>
              <td className="border px-4 py-2">{props?.element?.LeadName}</td>
              <td className="border px-4 py-2">{props?.element?.LeadPhone}</td>
              <td className="border px-4 py-2">{props?.element?.LeadServiceInterested?.map((element, index)=>{
                return <>{element.ServiceName} {index !=0 ? <>,</>: null}</>
              })}</td>
              <td className="border px-4 py-2">{props?.element?.LeadSource}</td>
              <td className="border px-4 py-2">{props?.element?.LeadStatus}</td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded"
                type='button'
                onClick={() => {
                  const newEmailContainer = myEmailContainer?.filter((element2) => {
                    return props?.element.LeadEmail !== element2?.LeadEmail;
                  });
                  setMyEmailContainer(newEmailContainer);
                }}
              >
                  Remove
                </button>
              </td>
            </tr>
            </tbody>



            {/* Mobile Schedule */}
            <tbody className='tabel md:hidden'>
        <tr  className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

          <td className="border border-gray-300 px-4 py-2">
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Name</div>
              <div className='col-span-3'>{props?.element?.LeadName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Lead Phone:</div>
              <div className='col-span-3'>{props?.element?.LeadPhone}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead CourseName:</div>
              <div className='col-span-3'>{props?.element?.LeadServiceInterested?.map((element, index)=>{
                return <>{element.ServiceName} {index !=0 ? <>,</>: null}</>
              })}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Scource:</div>
              <div className='col-span-3'>{props?.element?.LeadSource}</div>
            </div>


            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Status:</div>
              <div className='col-span-3'>{props?.element?.LeadStatus}</div>
            </div>
           


            <div className='flex items-center justify-center'>
            <button className="bg-red-500 text-white px-4 py-2 rounded"
                type='button'
                onClick={() => {
                  const newEmailContainer = myEmailContainer?.filter((element2) => {
                    return props?.element.LeadEmail !== element2?.LeadEmail;
                  });
                  setMyEmailContainer(newEmailContainer);
                }}
              >
                  Remove
                </button>
            </div>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default MessageSheduleSupport