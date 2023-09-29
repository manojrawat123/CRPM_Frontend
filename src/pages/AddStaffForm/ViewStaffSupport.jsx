import React from 'react'
import { NavLink } from 'react-router-dom'

const ViewStaffSupport = (props) => {


  return (
    <tr className="bg-white border-b">
        <td className="py-2 px-4 border">{props?.staff?.name}</td>
        <td className="py-2 px-4 border">{props?.staff?.designation}</td>
        <td className="py-2 px-4 border">
          <NavLink to={`/editstaff/${props?.staff?.id}`}>
          <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded border">
            Edit
          </button>
          </NavLink>
          <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded border">
            Delete
          </button>
        </td>
      </tr>
  )
}

export default ViewStaffSupport
