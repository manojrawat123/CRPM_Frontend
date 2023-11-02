import React from 'react'

const DateAndTimeInput = (props) => {
    
    const hours = Array.from({ length: 10 }, (_, index) => 9 + index);

    return (
        <>
        <div className=' text-left mx-5'>{props.selectedButtonObj.id === 1 ? "Enrolment Date" : ""} {props.selectedButtonObj.id === 2 ? "Visit Date" : ""} {props.selectedButtonObj.id === 3 ? "Demo Date" : ""} {props.selectedButtonObj.id === 4 ? "Follow Up Date" : ""}:</div>               
            <input type="date"
                value={props.leadStatusDate}
                className='mx-5 w-[94%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded' onChange={(e) => {
                    props.setLeadStatusDate(e.target.value);
                }} /> <br />

            <div className=' text-left mx-5'>{props.labelTime}{props.selectedButtonObj.id === 1 ? "Enrolment Time" : ""} {props.selectedButtonObj.id === 2 ? "Visit Time" : ""} {props.selectedButtonObj.id === 3 ? "Demo Time" : ""}{props.selectedButtonObj.id === 4 ? "Follow Up Time" : ""}:</div>
            <select id="selectOption"
                value={props.leadStatusTime}
                className='mx-5 w-[94%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 focus:border-2 p-2 rounded' onChange={(e) => {
                    props.setLeadStatusTime(e.target.value)
                }}>
                <option value={""}>Please Select</option>
                {hours.map((hour) => (
                    <option key={hour} value={`${hour}:00`}>
                        {hour}:00 {hour < 12 ? 'am' : 'pm'}
                    </option>
                ))}
            </select>
        </>
    )
}

export default DateAndTimeInput
