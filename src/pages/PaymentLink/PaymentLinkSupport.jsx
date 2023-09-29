import React, { useState } from 'react'

const PaymentLinkSupport = (props) => {
  console.log(props);
  const [buttonText, setButtonText] = useState("Copy");
    const copyToClipboard = () => {
      const textField = document.createElement('textarea');
      textField.innerText = props?.items?.PaymentLink;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand('copy');
      textField.remove();

      setButtonText("Copied");
      setTimeout(() => {
        setButtonText("Copy") 
      }, 2000);
    };

  
    return (
        <>
        <tr key={props?.index}>
            <td className="border border-black px-4 py-2">{props.index + 1}</td>
            <td className="border border-black px-4 py-2">
                {props?.items?.Package}
              </td>
            <td className='border border-black px-4 py-2'>
             {props?.items?.PaymentAmount}
              </td>
              <td  className='border border-black px-4 py-2'> {props?.items?.Package}</td>

              <td  className='border border-black px-4 py-2'>{props?.items?.PaymentLink}   
              
              <button onClick={copyToClipboard}  className="mx-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded border border-gray-500"
>{buttonText}</button>
              </td>
            
          </tr>
        </>
      )
}

export default PaymentLinkSupport