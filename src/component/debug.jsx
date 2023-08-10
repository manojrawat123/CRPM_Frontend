



// import React, { useContext } from 'react';
// import PersonIcon from '@mui/icons-material/Person';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import MailIcon from '@mui/icons-material/Mail';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import { countryList } from '../data';
// import { DataContext } from '../context';

// const MyDashboard = () => {
//      const {number, setNumber, code, setCode, country,setCountry,addLeadFunc} = useContext(DataContext)

//     return (<>   <div className="w-[100%] py-10 bg-blue-50">
//         <div className="w-[80%] mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
//             <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">Add New Lead</h2>
//             <form onSubmit={addLeadFunc}>
//                 <div className="px-6 pb-4">
//                     <h4 className="text-green-600 mb-2 text-center underline text-xl">Lead Details</h4>
//                     <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                             <div className="w-full ">
//                                 <h4 className="text-green-600 mb-2">Lead Date</h4>
//                                 <input
//                                     type="date"
//                                     className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                                 />
//                             </div>

//                         </div>

//                         <div>
//                             <div className="w-full">
//                                 <h4 className="text-green-600 mb-2">Lead Time</h4>
//                                 <input
//                                     type="time"
//                                     className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                                 />

//                             </div>

//                         </div>
//                     </div>

//                     {/* Second Input Tag */}
//                     <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>


//                             <h4 className="text-green-600 mb-2">Student Name</h4>
//                             <div className={"w-full relative col-span-1 "}>
//                                 <input
//                                     type="text"
//                                     placeholder="Name"
//                                     required
//                                     className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                                 />
//                                 <PersonIcon className={'absolute top-2 peer-focus:text-green-600 border-r-2 left-2 '} />
//                             </div>
//                         </div>

//                         <div>
//                             <h4 className="text-green-600 mb-2">Student Email</h4>
//                             <div className="w-full relative">
//                                 <input
//                                     type="email"
//                                     placeholder="Email"
//                                     required
//                                     className="w-full pl-9 py-2 px-3 peer border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                                 />
//                                 <MailIcon className='absolute top-2 left-2 border-r-2  peer-focus:text-green-600 ' />
//                             </div>

//                         </div>
//                     </div>

//                     <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                             <div>
//                                 <h4 className="text-green-600 mb-2">Lead Source</h4>
//                                 <select
//                                     className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                                 >
//                                     <option value="">--------Select------</option>
//                                     <option>Purpose 1</option>
//                                     <option>Purpose 2</option>
//                                     <option>Purpose 3</option>
//                                 </select>

//                             </div>
//                         </div>

//                         <div>
//                             <div>
//                                 <h4 className="text-green-600 mb-2">Lead Scource Details</h4>
//                                 <input
//                                     type="text"
//                                     required
//                                     className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                                     placeholder='Lead Source Details'
//                                 />
//                             </div>
//                         </div>
//                     </div>


//                     <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                             <div>

//                                 <h4 className="text-green-600 mb-2">Country Code</h4>

//                                 <select 
//                                 className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                                 value={code}
//                                 onChange={(e)=>{
//                                     setCode(e.target.value)
//                                 }}>


//                                     <option value="">--------Select------</option>
//                                     {countryList.map((country, index) => (
//                                         <option key={index} value={country?.code}>
//                                             {country.code}
//                                         </option>
//                                     ))}
//                                 </select>

//                             </div>

//                         </div>

//                         <div>
//                             <div>

//                                 <h4 className="text-green-600 mb-2">Country</h4>
//                                 <select className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600">
//                                     <option value="">--------Select------</option>
//                                     {countryList.map((country, index) => (
//                                         <option key={index} value={country?.name}>
//                                             {country.name}
//                                         </option>
//                                     ))}
//                                 </select>

//                             </div>
                           
//                         </div>
//                     </div>



//                     <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>


//                             <h4 className="text-green-600 mb-2">Location</h4>
//                             <div className='relative'>

//                                 <input
//                                     type="text"
//                                     required
//                                     className="pl-8 w-full py-2 px-3 border peer border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                                     placeholder='Location'
//                                 />
//                                 <LocationOnIcon className='absolute top-2 border-r-2 left-2  peer-focus:text-green-600' />
//                             </div>

//                         </div>

//                         <div>
//                             <div>
//                                 <h4 className="text-green-600 mb-2">Phone Number</h4>

//                                 <div className="w-full relative">
//                                     <input
//                                         type="number"
//                                         placeholder="Phone Number"
//                                         required 
//                                         value={number}
//                                         onChange={(e)=>{
//                                             setNumber(e.target.value)
//                                         }}
//                                         className="pl-8 w-full py-2 px-3 border peer border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                                     />
//                                     <LocalPhoneIcon className='absolute top-2 border-r-2 left-2  peer-focus:text-green-600' />
//                                 </div>


//                             </div>

//                         </div>
//                     </div> 
                    
                    
//                     <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>


//                             <div>
//                                 <h4 className="text-green-600 mb-2">State</h4>
//                                 <input
//                                     type="text"
//                                     required
//                                     className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                                     placeholder='State'
//                                 />
//                             </div>

//                         </div>

//                         <div>
//                             <div>
//                             <div>
//                                 <h4 className="text-green-600 mb-2">Parent Name</h4>
//                                 <input
//                                     type="text"
//                                     required
//                                     className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                                     placeholder='Parent Name'
//                                 />
//                             </div>


//                             </div>

//                         </div>
//                     </div>
                   
//                     <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>


//                             <div>
//                                 <h4 className="text-green-600 mb-2">Lead Representative</h4>
//                                 <select
//                                     className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                                 >
//                                     <option value="">--------Select------</option>
//                                     <option>Purpose 1</option>
//                                     <option>Purpose 2</option>
//                                     <option>Purpose 3</option>
//                                 </select>
//                             </div>

//                         </div>

//                         <div>
//                             <div>
                           


//                             </div>

//                         </div>
//                     </div>




//                     <div>
//                         <h4 className="text-green-600 mb-2 underline text-xl text-center">Course Details</h4>
//                     </div>
//                     <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                             <h4 className="text-green-600 mb-2">Course</h4>
//                             <select
//                                 className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                             >
//                                 <option value="">----Select------</option>
//                                 <option>Course 1</option>
//                                 <option>Course 2</option>
//                                 <option>Course 3</option>
//                             </select>

//                         </div>

//                         <div>

//                             <h4 className="text-green-600 mb-2">Class Mode</h4>
//                             <select
//                                 className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
//                             >
//                                 <option value="">----Select------</option>
//                                 <option>Online</option>
//                                 <option>Offline</option>
//                             </select>
//                         </div>
//                     </div>


                  


//                     <div className="mb-4">
//                         <button
//                             type="submit"
//                             className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
//                         >
//                           Submit
//                         </button>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     </div>
//     </>)
// }

// export default MyDashboard
