import React from 'react'
import { NavLink } from 'react-router-dom'

const ViewStaffSupport = (props) => {


  return (
    <>
    
    <tbody className='md:table-footer-group hidden'>
    <tr className="bg-white border-b">
        <td className="py-2 px-4 border">{props?.staff?.name}</td>
        <td>{props?.staff.email}</td>
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
      </tbody>



      <tbody className='tabel md:hidden'>
        <tr className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

          <td className="border border-gray-300 px-4 py-2">

            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Name</div>
              <div className='col-span-3'>{props?.staff?.name}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Email</div>
              <div className='col-span-3 overflow-x-auto'> {props?.staff.email}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Designation</div>
              <div className='col-span-3'>{props?.staff?.designation}</div>
            </div>

            <div className='flex items-center justify-center my-2'>
          
            <NavLink to={`/editstaff/${props?.staff?.id}`}>
          <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded border">
          &nbsp; &nbsp; &nbsp;  &nbsp; Edit &nbsp; &nbsp; &nbsp; &nbsp;
          </button>
          </NavLink>
            </div>
            <div className='flex items-center justify-center my-2'>
          
          <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded border">
          &nbsp; &nbsp; &nbsp;  Delete  &nbsp; &nbsp; &nbsp;
          </button>
            </div>
          </td>
        </tr>
      </tbody>
      </>
  )
}

export default ViewStaffSupport
