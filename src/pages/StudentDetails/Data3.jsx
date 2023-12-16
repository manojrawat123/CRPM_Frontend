import React from 'react'

const Data3 = ({ message_log }) => {


    return (
        <>
            <div className="py-1 text-center bg-gray-200 border border-solid border-green-500 my-2 rounded-xl">
                <h1 className="text-center font-bold text-green-500 p-1">Message Details</h1>
            </div>
            {message_log?.length == 0 ? <><div className="flex items-center justify-center h-[50%]">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-2 text-gray-600">No data available !</h2>
                    <p className="text-gray-500">Sorry, there is no data to display.</p>
                </div>
            </div></> : <div className="overflow-x-auto border border-green-500 rounded-xl">
                <table className="min-w-full table-auto border-collapse rounded-md overflow-hidden">
                    <thead>
                        <tr className="bg-green-200">
                            <th className="border border-green-500 p-2">Date</th>
                            <th className="border border-green-500 p-2">Message</th>
                        </tr>
                    </thead>
                    <tbody className='border border-green-500'>
                        {message_log?.map((element, index) => (
                            <tr key={index} className='border border-green-500'>
                                <td className="border border-green-500 p-2">{element.Date}</td>
                                <td className="border border-green-500 p-2">{element.MessageBody}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}


        </>

    )
}

export default Data3
