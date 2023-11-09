import React from 'react'

const VisitInputFiled = (props) => {
  return (
    <div>
    <label htmlFor="visitHappenedDate" className='mx-6'>{props.selectedButton == 1 ?"Visit Happened Date:" : null}{props.selectedButton == 2 ?"Demo happned Date:": null}</label>
    <input
      type="date"
      id="visitHappenedDate"
      className='mx-5 w-[94%] h-[2.5rem] my-2 border border-gray-700 focus:border-green-500 p-2 rounded'
      value={props.visitHappenedDate}
      onChange={(e) => props.setVisitHappenedDate(e.target.value)}
    />
    
    <label htmlFor="visitHappenedTime" className='mx-6'>{props.selectedButton == 1 ?"Visit Happened Time:": null}{props.selectedButton == 2 ?"Demo Happned Time:": null}</label>
    <input
      type="time"
      id="visitHappenedTime"
      className='mx-5 w-[94%] h-[2.5rem] my-2 border border-gray-700 focus-border-green-500 p-2 rounded'
      value={props.visitHappenedTime}
      onChange={(e) => props.setVisitHappenedTime(e.target.value)}
    />
    
    <label htmlFor="nextFollowupDate" className='mx-6'>{props.selectedButton == 1 ?"Next Follow-up Date:": null}{props.selectedButton == 2 ?"Next Followup Date:": null}</label>
    <input
      type="date"
      id="nextFollowupDate"
      className='mx-5 w-[94%] h-[2.5rem] my-2 border border-gray-700 focus-border-green-500 p-2 rounded'
      value={props.nextFollowupDate}
      onChange={(e) => props.setNextFollowupDate(e.target.value)}
    />
    
    <label htmlFor="visitAttendedBy" className='mx-6'>{props.selectedButton == 1 ?"Visit Attended By:": null}{props.selectedButton == 2 ?"Demo Given By:": null}</label>
    <select name="" id="" className='mx-5 w-[94%] h-[2.5rem] my-2 border border-gray-700 focus-border-green-500 p-2 rounded'
   value={props?.visitAttendedBy}
   onChange={(e)=>{
        props.setVisitAttendedBy(e.target.value)
    }}>
    <option value="">Please Select</option>
    <option value="employee1">Employe 1</option>
    <option value="employee2">Employe 2</option>
    <option value="employee3">Employe 3</option>
    <option value="employee4">Employe 4</option>
    </select>
  </div>
  )
}

export default VisitInputFiled
