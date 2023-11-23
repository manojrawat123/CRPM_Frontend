import React from 'react'
import Skeleton from 'react-loading-skeleton'

const RegisterStudentLoading = () => {
  return (
    <>
        
    {[1, 2, 3].map((element, index) => {
        return (<tr key={index} className='hidden md:table-row-group'>
            <td className="border border-gray-300 p-2">
            <div className='grid grid-cols-5 gap-10'>
                    <div className='col-span-2'><Skeleton count={4} height={30} /></div>
                    <div className='col-span-3'><Skeleton count={4} height={30} /></div>
                </div>
          
            
            </td>
            <td className="border border-gray-300 p-2">
            <div className='grid grid-cols-5 gap-10'>
                    <div className='col-span-2'><Skeleton count={3} height={30} /></div>
                    <div className='col-span-3'><Skeleton count={3} height={30} /></div>
                </div>
            </td>
            <td className="border border-gray-300 p-2">
            <div className='grid grid-cols-5 gap-10'>
                    <div className='col-span-2'><Skeleton count={5} height={30} /></div>
                    <div className='col-span-3'><Skeleton count={5} height={30} /></div>
                </div>
            </td>
            <td className="border border-gray-300 p-2"><div className='col-span-2 mx-5'><Skeleton count={1} height={30} />
                </div>
            </td>
            
        </tr>)
    })}



    {[1, 2, 3].map((element, index) => {
        return (<tr key={index} className='md:hidden table-row-group'>
            <td className="border border-gray-300 p-2">
                

                <div className='grid grid-cols-5 gap-10'>
                    <div className='col-span-2'><Skeleton count={10} height={30} /></div>
                    <div className='col-span-3'><Skeleton count={10} height={30} /></div>
                </div>
                
                <div className='flex items-center justify-center'>
                    <Skeleton count={1} height={40} width={200} className=' mx-auto' />
                </div>
               

            </td>
            
        </tr>)
    })}
</>
  )
}

export default RegisterStudentLoading
