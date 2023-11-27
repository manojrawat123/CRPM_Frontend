import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API_BASE_URL from "../../config";
import { format } from 'date-fns';
import Skeleton from 'react-loading-skeleton';


const AssignBatchesLoading = () => {

  return (
    <> {[1, 2, 3].map((element, index) => {
        return (<tr key={index} className='hidden md:table-row-group'>
            <td className="border border-gray-300 p-2">
            <div className='grid grid-cols-5 gap-10'>
                    <div className='col-span-2'><Skeleton count={5} height={30} /></div>
                    <div className='col-span-3'><Skeleton count={5} height={30} /></div>
                </div>
           
            </td>
            <td className="border border-gray-300 p-2">
                <div className='grid grid-cols-5 gap-10'>
                    <div className='col-span-2'><Skeleton count={5} height={30} /></div>
                    <div className='col-span-3'><Skeleton count={5} height={30} /></div>
                </div>
                
              
            </td>
            <td className="border border-gray-300 p-2">
                    <div><Skeleton count={1} height={130} /></div>
               
                
                
                
            </td>
            <td className="border border-gray-300 p-2">
                <div className='grid grid-cols-5 gap-10'>
                    <div className='col-span-2'><Skeleton count={3} height={30} /></div>
                    <div className='col-span-3'><Skeleton count={3} height={30} /></div>
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
                        
                       
                       

                    </td>
                    
                </tr>)
            })}
    </>
  )
}

export default AssignBatchesLoading;
