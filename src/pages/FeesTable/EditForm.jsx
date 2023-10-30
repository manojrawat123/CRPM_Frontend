import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import API_BASE_URL from "../../config";


function EditForm(props) {
  const [receiptNumber, setReceiptNumber] = useState(props?.fees_data?.receipt_number);
  const [totalFees, setTotalFees] = useState(props?.total_fees);
  const token = localStorage.getItem("token")
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Here, you can send the data to an API endpoint or handle it as needed
    console.log('Receipt Number submitted:', receiptNumber);
    axios.put(`${API_BASE_URL}/feetracer/${props?.fees_data?.id}/`,{
        receipt_number: receiptNumber

    }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((value)=>{
        console.log(value);
      })

      axios.put(`${API_BASE_URL}/convertedlead/${props?.fees_data?.converted_id}/`,{
        TotalFee:  totalFees
      },{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    
    // You can reset the form or perform other actions here
    setTotalFees('');
    setReceiptNumber(''); // Clear the Receipt Number field
  };

  return (
    <form onSubmit={handleSubmit}>
         <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Customer Name
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          value={props.name}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Fees ID
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          value={props?.fees_data?.id}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Total Fees
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          value={totalFees}
          onChange={(e)=>{
            setTotalFees(e.target.value)
          }}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Receipt Number
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          value={receiptNumber}
          onChange={(e) => setReceiptNumber(e.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default EditForm;
