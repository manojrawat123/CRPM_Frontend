import React from 'react'
import Skeleton from 'react-loading-skeleton'

const StaffLoading = () => {
  return (
    <>
        {[1, 2, 3, 4, 5, 6].map((element, index) => {
        return (<tr key={index} className='hidden md:table-row-group'>
            <td className="border border-gray-300 p-2">
           <Skeleton height={35}/>
            </td>
            <td className="border border-gray-300 p-2">
            <Skeleton height={35}/>
            </td>
            <td className="border border-gray-300 p-2">
            <Skeleton height={35}/>
            </td>
            <td className="border border-gray-300 p-2">
<div className='grid grid-cols-2 gap-5'>
            <Skeleton height={35}/>
            <Skeleton height={35}/>
            </div>
            </td>
            
        </tr>)
    })}



    {[1, 2, 3, 4, 5, 6].map((element, index) => {
        return (<tr key={index} className='md:hidden table-row-group'>
            <td className="border border-gray-300 p-2">
                

                <div className='grid grid-cols-5 gap-10'>
                    <div className='col-span-2'><Skeleton count={4} height={30} /></div>
                    <div className='col-span-3'><Skeleton count={4} height={30} /></div>
                </div>
                
                <div className='flex items-center justify-center my-2'>
                    <Skeleton count={1} height={30} width={100} className=' mx-auto' />
                </div>
                <div className='flex items-center justify-center'>
                    <Skeleton count={1} height={30} width={100} className=' mx-auto' />
                </div>
               

            </td>
            
        </tr>)
    })}   
    </>
  )
}

export default StaffLoading
