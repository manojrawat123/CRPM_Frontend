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

      <tbody className='md:table-footer-group hidden'>
        <tr key={props?.index}>
          <td className="border border-black px-4 py-2">
            {props?.items?.Package}
          </td>
          <td className='border border-black px-4 py-2'>
            {props?.items?.PaymentAmount}
          </td>
          <td className='border border-black px-4 py-2'> {props?.items?.Package}</td>

          <td className='border border-black px-4 py-2'>{props?.items?.PaymentLink}

            <button onClick={copyToClipboard} className="mx-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded border border-gray-500"
            >{buttonText}</button>
          </td>
        </tr>
      </tbody>




      <tbody className='tabel md:hidden'>
        <tr  className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>

          <td className="border border-gray-300 px-4 py-2">

            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Course Name</div>
              <div className='col-span-3'> {props?.items?.Package}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Payment Amount</div>
              <div className='col-span-3'>{props?.items?.PaymentAmount}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Course Name</div>
              <div className='col-span-3'>{props?.items?.Package}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold '>Payment Link</div>
              <div className='col-span-3  overflow-x-auto'>{props?.items?.PaymentLink}</div>
            </div>
            <div className='flex items-center justify-center'>
              <button onClick={copyToClipboard} className="mx-4 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded border border-gray-500"
              >{buttonText}</button>
            </div>






          </td>
        </tr>
      </tbody>
    </>
  )
}

export default PaymentLinkSupport