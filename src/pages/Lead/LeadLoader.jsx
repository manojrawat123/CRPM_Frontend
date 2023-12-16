import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingTabel = () => {
    return (
        <>
        
            {[1, 2, 3].map((element, index) => {
                return (<tr key={index} className='hidden md:table-row-group'>
                    <td className="border border-gray-300 p-2">
                        <div className='grid grid-cols-3 gap-10'>
                            <div className='col-span-3 mx-4'><Skeleton count={1} height={30} /></div>
                        </div>
                    </td>
                    <td className="border border-gray-300 p-2">
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={2} height={30} /></div>
                            <div className='col-span-3'><Skeleton count={2} height={30} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={2} height={30} /></div>
                            <div className='col-span-3'><Skeleton count={2} height={30} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={2} height={30} /></div>
                            <div className='col-span-3'><Skeleton count={2} height={30} /></div>
                        </div>
                    </td>
                    <td className="border border-gray-300 p-2">
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={30} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={30} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={2} height={30} /></div>
                            <div className='col-span-3'><Skeleton count={2} height={30} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={2} height={30} /></div>
                            <div className='col-span-3'><Skeleton count={2} height={30} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={30} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={30} /></div>
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

export default LoadingTabel



{/* <button
onClick={() => setShowCalendar(!showCalendar)}
className={`mx-10 mt-8 p-2 rounded-full transition duration-300 ease-in-out ${
  showCalendar
    ? "border border-red-500 hover:bg-red-500 hover:text-white text-red-500 fixed top-[4rem] left-[2rem]"
    : "border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 relative left-[2rem] "
}`}
>
{showCalendar ? <CloseOutlined /> : "Filter Lead's"}
</button>

<div className={showCalendar ? "hidden" : " inline-block"}>

  
        &nbsp;&nbsp;&nbsp;

</div>


)} */}
