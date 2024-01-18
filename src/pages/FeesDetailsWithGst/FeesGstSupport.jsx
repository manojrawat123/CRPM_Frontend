import React from 'react';
import MyModal from '../FeesTable/Modal';


const FeesGstSupport = (props) => {
console.log(props);

  return (
    <>
    
    <tbody className='md:table-footer-group hidden'>
      <tr key={props?.index} className={props.index % 2 === 0 ? `bg-green-100` : `bg-gray-100`}>
        <td className="border border-gray-300 py-2 px-10">

          <span className='font-bold '>
            Customer Name:&nbsp;
          </span>
          {props?.fees?.lead?.LeadName}
          <br />
          <span className='font-bold'>Lead Scource:</span>&nbsp;
          {props?.fees?.lead?.LeadSource}
          <br />
          <span className='font-bold'>Package:</span>&nbsp;&nbsp;
          {props?.fees?.converted_id?.PaymentID.payment_purpose?.ServiceName}
          <br />
          <span className='font-bold'>Representative:</span>&nbsp;
          {props?.fees?.lead?.LeadRepresentativePrimary.name}
          <br />
         
        
        </td>
        <td className='border border-gray-300 px-4 py-2'>
          <span className="font-bold">Pending Fees:</span>&nbsp;
          {parseInt(props?.fees?.converted_id?.TotalFee, 10) - parseInt(props?.fees?.paid_fees, 10) }

          <br />
          <span className="font-bold">
            Fees:&nbsp;&nbsp;&nbsp;
          </span>
          {props?.fees?.fee_received}
          <br />
          <span className="font-bold">Total Fees:</span>&nbsp;
          {props?.fees.converted_id?.TotalFee}
          <br />
          <span className="font-bold">Include Gst:</span>&nbsp;
          {`${(parseInt(props?.fees?.fee_received, 10) * 0.18).toFixed(2)}`}
          {console.log(props?.fees?.converted_id?.fee_received)}
          <br />
          
        </td>
        <td className="border border-gray-300 py-2 px-10">
        <span className="font-bold">
            Receipt No. :
          </span>
          {props?.fees?.receipt_number}
          <br />
        <span className="font-bold">Payment Date:</span>&nbsp;
          {props?.fees?.fee_payment_datetime}
          <br />
          <span className='font-bold'>Payment Mode:</span>&nbsp;
          {props?.fees?.payment_mode?.payment_mode}
          <br />
          
          <span className='font-bold'>Payment Type:</span>&nbsp;
          {props?.fees?.payment_type?.payment_type_display}
          <br />
        </td>

        <td className="border border-gray-300 px-4 py-2 text-center">
          <MyModal fees_data={props?.fees} name={props?.fees?.lead?.LeadName} total_fees={props?.fees.converted_id?.TotalFee} />
        </td>
      </tr>
      </tbody>

      <tbody className='tabel md:hidden'>
        <tr className={`${props.index % 2 == 0 ? `bg-[#f5f5dc]` : `bg-white`}  `}>
          <td className="border border-gray-300 px-4 py-2">
          <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Customer Name</div>
              <div className='col-span-3'>
              {props?.fees?.lead?.LeadName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Package</div>
              <div className='col-span-3'>
              {props?.fees?.converted_id?.CourseID?.ServiceName}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Representative</div>
              <div className='col-span-3'>
              {props?.fees?.lead?.LeadRepresentativePrimary?.name}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Lead Scource</div>
              <div className='col-span-3'>
              {props?.fees?.lead?.LeadScourceId?.LeadSource}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Pending Fees:</div>
              <div className='col-span-3'>  {parseInt(props?.fees?.converted_id?.TotalFee, 10) - parseInt(props?.fees?.paid_fees, 10) }</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Total Fees</div>
              <div className='col-span-3'>
              {props?.fees.converted_id?.TotalFee}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'> Fees Recived </div>
              <div className='col-span-3'>
              {props?.fees?.fee_received}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Include GST</div>
              <div className='col-span-3'>
              {`${(parseInt(props?.fees?.fee_received, 10) * 0.18).toFixed(2)}`}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Payment Mode :</div>
              <div className='col-span-3'> {props?.fees?.payment_mode?.payment_mode}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Payment Type</div>
              <div className='col-span-3'>
              {props?.fees?.payment_type?.payment_type_display}</div>
            </div>
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>Payment Date</div>
              <div className='col-span-3'>
              {props?.fees?.fee_payment_datetime}</div>
            </div>
            
            
            
           
            <div className='grid grid-cols-5 gap-10'>
              <div className='col-span-2 font-bold'>  Receipt No.</div>
              <div className='col-span-3'>
              {props?.fees?.receipt_number}</div>
            </div>
            <div className='flex items-center justify-center'>
          
            <MyModal fees_data={props?.fees} name={props?.fees.lead?.LeadName} total_fees={props?.fees.converted_id?.TotalFee} />
         
            </div>
          </td>
        </tr>
      </tbody>
    </>
  )
}

export default FeesGstSupport