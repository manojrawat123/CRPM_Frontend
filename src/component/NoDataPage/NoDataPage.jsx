import React from 'react'

const NoDataPage = (props) => {
    return (
        <>
        <div className="flex items-center justify-center h-[20rem]">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-2 text-gray-600">No data available !</h2>
                <p className="text-gray-500">Sorry, there is {props.status} to display. </p>
            </div>
        </div>
        </>
    )
}

export default NoDataPage
