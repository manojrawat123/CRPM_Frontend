import React, { useContext, useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import simply2cloud from "../../img/simply2cloud2.jpg";
import { DataContext } from '../../context';
import { useParams } from 'react-router-dom';

const InvoicePreview = (props) => {
  const downloadPdf = () => {
    const element = document.getElementById('pdf-content'); // Replace 'pdf-content' with the id of the HTML element you want to convert

    html2pdf(element);
  };

  const {registeredStudentDetailFunc,register_student_detail_obj } = useContext(DataContext);
   
  const { id } = useParams();
  useEffect(()=>{
    registeredStudentDetailFunc(id);
  },[])

  const dataArray = [{"Item":props.values.Item ,"Qty":props.values.Quantity, "Rate":props.values.ItemAmount, "Taxable Amount":props.values.CustomerGST,"IGST":props.values.IGST, "CGST":props.values.CGST, "SGST":props.values.SGST}]

  return (
    <>
    <div className='p-4' id='pdf-content'>
      <div className="grid grid-cols-2">
        <div className=" ">
          {/* Left Top Section */}
          <img src={simply2cloud} alt="Company Logo" className="" />
          <div className="mt-4">
            <h1 className='font-bold'>Simply 2 Cloud PVT LTD</h1>
            <p>F-19/8, 1st Floor, Rohini Sector 8, Delhi-110085</p>
            GSTIN: 07ABACS1243F1ZR <br />
            CIN: U74999DL2018PTC332052
          </div>
        </div>
        <div className="flex justify-end  p-4 ">
          {/* Right Top Section */}
          <div className='text-center'>
          <h1 className='font-bold'>Taxes Invoice</h1>
<p>Invoice Number :{props.values.InvoiceNumber}</p>
<p>Invoice Date : {props.values.InvoiceDate}</p>
<p className='mb-2'>Payment Due Date : {register_student_detail_obj?.fees_details[register_student_detail_obj?.fees_details?.length - 1].next_due_date}</p>
            <button className=" text-green-700  outline-green-500    rounded">Payment Due</button>
          </div>
        </div>
      </div>
     
      <div className="flex justify-between mt-4">
        <div className="w-1/3">
          {/* Column 1 */}
          <div className='font-bold'>Customer Name</div>
          <div>{props?.values?.CustomerName}</div>
          <div  className='font-bold'>Company Name</div>
          <div  className=''>{props.values?.company ? props.values?.company : "---"}</div>
        </div>
        
        <div className="w-1/3">
          {/* Column 2 */}
          <div  className='font-bold'>Billing Address</div>
          {register_student_detail_obj.converted_data?.StudentID.CustomerBillingAddress}
        </div>
        <div className="w-1/3">
          {/* Column 3 */}
          <div  className='font-bold'>Shipping Address</div>
          <div>{register_student_detail_obj.converted_data?.StudentID?.CustomerBillingAddress}</div>
        </div>
      </div>
      <br /><br />
      {/* Place of Supply */}
      <div>Place of Supply</div>
      <hr className='text-black bg-black'/>
      <br /><br />

      {/* Tabel Row */}
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400">S.No.</th>
            <th className="border border-gray-400"> Item </th>
            <th className="border border-gray-400">Qty </th>
            <th className="border border-gray-400">Rate</th>
            <th className="border border-gray-400"> Taxable Amount</th>
            <th className="border border-gray-400" >
              <div>

                <div className='grid grid-cols-3'>
                  <div>IGST</div>
                  <div>CGST</div>
                  <div>SGST</div>
                </div>
                <div className='grid grid-cols-6 pb-3'>
                  <div>%</div>
                  <div>Amt</div>
                  <div>%</div>
                  <div>Amt</div>
                  <div>%</div>
                  <div>Amt</div>
                </div>
              </div>
            </th>

          
          </tr>

          
        </thead>
        <tbody className='text-center'>
          {dataArray.map((element,index)=>{
            return (
<tr  className="border border-gray-400 py-8" key={index}>
            <td   className="border border-gray-400 py-3">{index +1}</td>
            <td  className="border border-gray-400 py-3">{element.Item}</td>
            <td  className="border border-gray-400 py-3">{element.Qty}</td>
            <td  className="border border-gray-400 py-3">{element.Rate}</td>
            <td  className="border border-gray-400 py-3">{element.Rate}</td>
            <td className='text-center'> 
            
            <div className='grid grid-cols-6'>
                  <div>0</div>
                  <div>0</div>
                  <div>0</div>
                  <div>0</div>
                  <div>0</div>
                  <div>0</div>
                </div>
            </td>
          </tr>
            )
          })}
          
        </tbody>
      </table>


{/* Last Tabel */}
<div className='grid grid-cols-2'>
  <div>
    {/* This is an empty div */}
  </div>
      <div className="mt-8">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 text-center  py-3">Taxable Value</th>
              <th className="border border-gray-400 text-center py-3">6000</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 - Taxable Value */}
           
            {/* Row 2 - CGST */}
            <tr>
              <td className="border border-gray-400 mx-3 px-4 py-3">Central Goods and Services Tax (CGST)</td>
              <td className="border border-gray-400 mx-3 px-4 py-3">0</td>
            </tr>
            {/* Row 3 - SGST */}
            <tr>
              <td className="border border-gray-400 mx-3 px-4 py-3">State Goods and Services Tax (SGST)</td>
              <td className="border border-gray-400 mx-3 px-4 py-3">0</td>
            </tr>
            {/* Row 4 - IGST */}
            <tr>
              <td className="border border-gray-400 mx-3 px-4 py-3">Integrated Goods and Services Tax (IGST)</td>
              <td className="border border-gray-400 mx-3 px-4 py-3">0</td>
            </tr>
            {/* Row 5 - Total Payable */}
            <tr>
              <td className="border border-gray-400 mx-3 px-4 py-3">Total Payable</td>
              <td className="border border-gray-400 mx-3 px-4 py-3">6000</td>
            </tr>
            {/* Row 6 - Total Paid */}
            <tr>
              <td className="border border-gray-400 mx-3 px-4 py-3">Total Paid</td>
              <td className="border border-gray-400 mx-3 px-4"></td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>


      </div>

      <button onClick={downloadPdf}>Download PDF</button>

      <div
        className={`fixed ${props.modalIsOpen ? 'block' : 'hidden'}`}
        style={{ top: '2.53rem', right: '2.53rem' }}
      >
        <button
          className="hover:bg-red-500 text-red-500 hover:text-white p-4 text-4xl font-extrabold"
          onClick={() => props.setModalIsOpen(false)}
        >
          X
        </button>
      </div>
    </>

  );
};

export default InvoicePreview;
