import React from 'react';
import data from '../data';

const JobSearchForm = () => {


  return (
    <>
    <div className='mx-7 mt-10'>
    <form>
      <div className='grid grid-cols-10 gap-10'>
        
        <div className='col-span-3'>
        <div className="relative inline-block">
  <select
    className="block appearance-none w-full bg-white border border-gray-300 rounded py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500"
  >
    <option value="">All</option>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg
      className="fill-current h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 12l-6-6 1.5-1.5L10 9.9l4.5-4.5L16 6l-6 6z"
      />
    </svg>
  </div>
</div>

</div>
    
    
        <div className='col-span-3'>
<label htmlFor="duration" className=" text-gray-700 font-bold mb-2 mr-2">
  Lead Date:  
</label>
<select
  id="duration"
  className="border-2 border-solid border-gray-400 rounded h-[2rem] w-full"
>
  <option value="">-------------Select--------------------</option>
  <option value="30">30 minutes</option>
  <option value="60">1 hour</option>
  <option value="90">1 hour 30 minutes</option>
  <option value="120">2 hours</option>
</select>
</div>


        <div className='col-span-3'>
<label htmlFor="duration" className=" text-gray-700 font-bold mb-2 mr-2">
  Team Representative:  
</label>
<select
  id="duration"
  className="border-2 border-solid border-gray-400 rounded h-[2rem] w-full"
>
  <option value="">-------------Select--------------------</option>
  <option value="30">30 minutes</option>
  <option value="60">1 hour</option>
  <option value="90">1 hour 30 minutes</option>
  <option value="120">2 hours</option>
</select>
</div>




        <div className='text-center mt-5'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Search
</button>

        </div>
      </div>
    </form>
</div>


    <div className=" mx-7 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-x-auto border-2">
        <table className="min-w-full divide-y divide-gray-200 table-fixed">
        <thead className="bg-gray-50">
        <tr>
  <th className="px-2 py-3 text- font-bold text-left uppercase w-[.5rem]">S. No</th>
  <th className="px-6 py-3 text- font-bold text-left uppercase w-[9rem]">Name</th>
  <th className="px-6 py-3 text- font-bold text-left uppercase w-56">Course Details</th>
  <th className="px-6 py-3 text- font-bold text-left uppercase w-[16rem]">Time</th>
  <th className="px-6 py-3 text- font-bold text-left uppercase">Other Details</th>
  <th className="px-6 py-3 text- font-bold text-left uppercase "></th>
</tr>


</thead>
<tbody className="bg-white divide-y divide-gray-200">
  {data.map((item, index) => (
    <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
      <td className="px-6 py-4 text-sm text-gray-900">{index + 1}.</td>
      <td className="px-6 py-4 text-sm text-gray-900">{item.name}</td>
      <td className="px-6 py-4 text-sm text-gray-900">

      <div>
    <span className='font-bold text-black'>Course: </span>
        {item.course}
        </div>

        <div>
    <span className='font-bold text-black'>Lead Source: </span>
        {item.leadSource}
        </div>
      
        <div>
    <span className='font-bold text-black'>Class Mode: </span>
        {item.classMode}
        </div>
      
        <div>
    <span className='font-bold text-black'>Follow Up Status: </span>
        {item.leadSource}
        </div>
     
        
        </td>


      <td className="px-6 py-4 text-sm text-gray-900 w-40">
        <div>
          <span className='font-bold text-black'>Follow up Date &amp; Time: </span>
          {item.followupDateTime}
        </div>
        <div>
          <span className='font-bold text-black'>Lead Date &amp; Time: </span>
          {item.leadDateTime}
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-900">
      
      <div>
    <span className='font-bold text-black'>UTM Content: </span>
    {item.utmContent}
        </div>
      
      <div>
    <span className='font-bold text-black'>Event Status: </span>
    {item.eventStatus}
        </div>
     
      <div>
    <span className='font-bold text-black'>Representative: </span>
    {item.Representative}
        </div>
      
      <div>
    <span className='font-bold text-black'>Remarks: </span>
    {item.remarks}
        </div>
      
      <div>
    <span className='font-bold text-black'>Events: </span>
    {item.events}
        </div>
      
      </td>
    <td>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded whitespace-nowrap mr-4">
  More Detail
</button>



    </td>
    </tr>
    
  ))}
</tbody>

        </table>
      </div>
    </div>

    </>
  );
};

export default JobSearchForm;
