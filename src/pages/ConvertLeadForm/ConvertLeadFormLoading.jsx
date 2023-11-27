import { CircularProgress } from '@mui/material'
import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ConvertLeadFormLoading = () => {
    return (
        <div>


            <div className="w-[100%] py-4 bg-blue-50">

                <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-3 my-4 px-16 md:w-[50%] md:mx-auto">
                    <div className=''><Skeleton count={1} height={30} /></div>
                    <div>

                        <div className=''><Skeleton count={1} height={30} /></div>
                    </div>

                    <div>
                        <div className=''><Skeleton count={1} height={30} /></div>
                    </div>

                    <div>
                        <div className=''><Skeleton count={1} height={30} /></div>
                    </div>
                </div>
                <div className="md:w-[80%] w-[95%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">

                    <div className='flex items-center justify-center h-[70vh]' >
                        <CircularProgress size={50} />
                    </div>
                    <div className='md:mx-10 mx-4 mb-4'><Skeleton count={1} height={40} className='w-full  text-white py-2 px-4 rounded transition duration-300'/></div>
                </div>
            </div>
        </div>
    )
}

export default ConvertLeadFormLoading
