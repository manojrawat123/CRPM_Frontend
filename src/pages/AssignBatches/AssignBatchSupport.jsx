import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import API_BASE_URL from "../../config";
import { format } from 'date-fns';


const MySupport = (props) => {

  const [leadObj, setLeadObj] = useState([]);
  const [batchObj, setBatchObj] = useState();
  const [batchId, setBatchId] = useState();
  const [batchStudentData, setBatchStudentData] = useState();
  const [brandObj, setBrandObj] = useState();
  const convertedId = props?.items?.ConvertedID
  const id = props?.items?.LeadID
  console.log("id", id);
  console.log("leadId", props?.items.LeadID);

  const authToken = localStorage.getItem('token');

  console.log(props.items)

  const leadFunc = () => {
    axios.get(`${API_BASE_URL}/lead/${id}/`, {
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    }).then((value) => {
      console.log("Lead Data", value.data)
      setLeadObj(value.data);
    })
  }

  const brandFunc = () => {
    axios.get(`${API_BASE_URL}/brand/${props.items.Brand}/`, {
      headers: {
        "Authorization": `Bearer ${authToken}`
      }
    }).then((value) => {
      console.log('Brand Object', value.data);

      setBrandObj(value.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  // Batch Request 
  const batchFetchFunc = () => {
    axios.get(`${API_BASE_URL}/batch/`, {
      headers: {
        "Authorization": `Bearer ${authToken}`
      }
    }).then((value) => {
      console.log("Batch Data:", value.data);
      setBatchObj(value.data);
    }).catch((err) => {
      console.log(err);
    })
  }

  const batchByConvertedId = () => {
    axios.get(`${API_BASE_URL}/batchstudent/${convertedId}/`, {
      headers: {
        "Authorization": `Bearer ${authToken}`
      }
    }).then((value) => {
      console.log("Batch Student Data!!", value.data);
      setBatchStudentData(value.data?.BatchID);
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        leadFunc(),
      ]);
    }
    fetchData();
    batchFetchFunc();
    batchByConvertedId();
    brandFunc()
  }, [])

  return (
    <>
    <tbody className='md:table-footer-group hidden'>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">

          <span className='font-bold mr-4'>
            Name -
          </span>
          {leadObj?.LeadName}
          <br />
          <span className='font-bold mr-4'>
            Lead Scource -
          </span>
          {leadObj?.LeadSource}
          <br />
          <span className='font-bold mr-4'>
            Lead Representative -
          </span>
          {props?.items?.UpdateBY}
          <br />
          <span className='font-bold mr-4'>
            Package -
          </span>
          {props?.items?.CourseName}
          <br />
          <span className='font-bold mr-4'>
            Phone -
          </span>
          {leadObj?.LeadPhone}
          <br />


          <span className='font-bold mr-4'>
            Brand Name -
          </span>
          {brandObj?.BrandName}


        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className='font-bold mr-4'>

            Converted ID - </span> {props?.items?.ConvertedID}
          <br />
          <span className='font-bold mr-4'>
            Lead Id -
          </span>
          {props?.items?.LeadID}
          <br />
          <span className='font-bold mr-4'>
            Lead Date -
          </span>
           {leadObj?.LeadDateTime ? format(new Date(leadObj?.LeadDateTime?.substring(0, 10)), "dd MMM yyyy") :  "----"}
          <br />
          <span className='font-bold mr-4'>
            Converted Date -
          </span>
          {props?.items?.ConvertedDateTime ? format(new Date(props?.items?.ConvertedDateTime?.substring(0, 10)), "dd MMM yyyy") :  "----"}
          <br />
          <span className='font-bold mr-4'>
            Course Start Date -
          </span>
           {props?.items?.CourseStartDate ? format(new Date(props?.items?.CourseStartDate), "dd MMM yyyy") :  "----"}
          <br />
          <span className='font-bold mr-4'>
            Course End Date -
          </span>
           {props?.items?.CourseEndDate ? format(new Date(props?.items?.CourseEndDate), "dd MMM yyyy") :  "----"}
          <br />
          <span className='font-bold mr-4'>
            Course Expiry Date -
          </span>
          {props?.items?.CourseExpiryDate ? format(new Date(props?.items?.CourseExpiryDate), "dd MMM yyyy") :  "----"}
          <br />
        </td>
       
        <td className="px-6 py-4 whitespace-nowrap">

          {batchStudentData ? <>{batchStudentData?.BatchName} &nbsp; &nbsp;
            <br />
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
              type="button"
              onClick={() => {
                axios.delete(`${API_BASE_URL}/batchstudent/${convertedId}/`, {
                  headers: {
                    "Authorization": `Bearer ${authToken}`
                  }
                }).then((value) => {
                  console.log(value.data);
                  batchByConvertedId();
                  setBatchStudentData(false);
                }).catch((err) => {
                  console.log(err);
                })
              }}
            >
              Remove
            </button></> : ""}

        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          {!batchStudentData ? <> <select
            id="selectOption"
            name="selectOption"
            value={batchId}
            onChange={(e) => {
              setBatchId(e.target.value);
            }}
            className=" px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value={null}>Select Batch</option>
            {batchObj?.map((element, index) => {
              return <option value={element.BatchID} key={index}>{element.BatchName}</option>
            })}
          </select> &nbsp;
            <button
              className='bg-blue py-1 px-4 hover:bg-blue-600 bg-blue-500 rounded text-white font-bold'
              onClick={() => {
                if (batchId != null && batchId != undefined) {
                  axios.post(`${API_BASE_URL}/batchstudent/`, {
                    BatchID: batchId,
                    CustomerID: props?.items?.StudentID,
                    ConvertedID: props?.items?.ConvertedID,
                    LeadId: props?.items?.LeadID,
                  }, {
                    headers: {
                      "Authorization": `Bearer ${authToken}`
                    }
                  }).then((value) => {
                    console.log(value.data);
                    batchByConvertedId()

                  }).catch((err) => {
                    console.log(err);
                  })
                }
              }}>Assign</button></> : ""}


        </td>
      </tr>
      </tbody>


      {/* <tbody className='tabel md:hidden'>
        <tr  className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

          <td className="border border-gray-300 px-4 py-2">

            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Name</div>
              <div className='col-span-3'>{props.lead.LeadName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Lead Source:</div>
              <div className='col-span-3'>{props.lead.LeadSource}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Status:</div>
              <div className='col-span-3'>{props.lead.LeadStatus}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Representative:</div>
              <div className='col-span-3'>{props?.lead?.LeadRepresentativePrimary?.name}</div>
            </div>


            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Course Name:</div>
              <div className='col-span-3'> {props.lead.LeadServiceInterested?.map((value, index) => {
                return <span key={index}>{index == 0 ? null : <>,</>} {value?.ServiceName}</span>
              })
              }</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Added Date:</div>
              <div className='col-span-3'> {leadDate}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Last Call</div>
              <div className='col-span-3'>
                {myDate}</div>
            </div>


            <div className='flex items-center justify-center'>
              <NavLink to={`/leaddetails/${props.lead.id}`}>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
                >
                  Show Detail
                </button>
              </NavLink>
            </div>
          </td>
        </tr>
      </tbody> */}
    </>
  )
}

export default MySupport;