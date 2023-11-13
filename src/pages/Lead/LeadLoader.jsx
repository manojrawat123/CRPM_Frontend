import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingTabel = () => {
    return (
        <>
            {[1, 2, 3].map((element, index) => {
                return (<tr key={index}>
                    <td className="border border-gray-300 p-2">
                        <div className='grid grid-cols-3 gap-10'>
                            <div className='col-span-3 mx-4'><Skeleton count={1} height={25} /></div>
                        </div>
                    </td>
                    <td className="border border-gray-300 p-2">
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                    </td>
                    <td className="border border-gray-300 p-2">
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                    </td>
                    <td className="border border-gray-300 p-2"><div className='col-span-2 mx-5'><Skeleton count={1} height={30} />
                        </div>
                    </td>
                    
                </tr>)
            })}
        {/* </tbody> */}
        {/* <tbody className='md:hidden block'>
            {[1, 2, 3].map((element, index) => {
                return (<tr key={index}>
                    <td className="border border-gray-300 p-2">
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                    </td>
                    <td className="border border-gray-300 p-2">
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                    </td>
                    <td className="border border-gray-300 p-2">
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                        <div className='grid grid-cols-5 gap-10'>
                            <div className='col-span-2'><Skeleton count={1} height={20} /></div>
                            <div className='col-span-3'><Skeleton count={1} height={20} /></div>
                        </div>
                    </td>
                    
                </tr>)
            })}
        </tbody> */}
        </>
    )
}

export default LoadingTabel
