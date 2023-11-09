import React, { useState } from 'react';

const CustomRadioButton = (props) => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    "Distance Issue",
    "Pricing Issue",
    "Already Taken Service",
    "Quality Issue",
    "Not Interested Anymore",
    "Did Not Enquire",
    "Only Wanted Information",
    "Other",
  ];

  const handleOptionChange = (event) => {
    props.setLeadStatus(event.target.value);
  };

  return (
    <div className='mx-4'>
      {options.map((option, index) => {
       return <div key={index} className="mb-2">
          <input
            type="radio"
            id={`option${index}`}
            name="issueType"
            value={option}
            onChange={handleOptionChange}
            className="mr-2"
          />
        <label htmlFor={`option${index}`}>{option}</label>
        </div>
})}
    </div>
  );
};

export default CustomRadioButton;
