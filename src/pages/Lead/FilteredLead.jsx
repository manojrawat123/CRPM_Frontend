// OptionsForm.js
import React, { useContext, useEffect, useState } from 'react';
import LeadTable from './LeadTabel';
import { DataContext } from '../../context';
import { DateRangePicker } from 'react-date-range';

const OptionsForm = () => {
  const [datetime, setdatetime] = useState('');
  const [username, setusername] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const { leads, setLead ,getLeadFunc} = useContext(DataContext);
  
  useEffect(()=>{
    console.log(leads)
  },[datetime])

  const dateFilterFunc = (e) => {
    e.preventDefault();
    alert(e.target.time.value);
    alert(e.target.username.value);
  };


  // Date Range 
  const handleSelect = (date)=>{
    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);

  }

  const selectionRange = {
    startDate: startDate,
    endDate : endDate,
    key: "selection"
  };

  // Date End Range

  return (
    <>
    <div className="w-2/3 mx-auto mt-8 items-center">
      <form className=" " onSubmit={dateFilterFunc}>
        <div className='sm:flex '>
        <div className="w-1/2 mr-4">
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        </div>

        <div className="w-1/2 mr-4">
          <label htmlFor="username" className="block text-green-700 font-bold mb-2">
          Team Repersentative:
          </label>
          <select
            id="username"
            name='username'
            className="w-full py-2 px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          >
            <option value="">----Select-----</option>
            <option value="username_value1">Manoj Rawat</option>
            {/* <option value="username_value2"></option> */}
            {/* Add more option as needed */}
          </select>
        </div>
        </div>
        <br />
        <div className='text-center'>
            
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue"
          >
          Submit
        </button>
            </div>
      </form>
    </div>
    <LeadTable />
    </>
  );
};

export default OptionsForm;
