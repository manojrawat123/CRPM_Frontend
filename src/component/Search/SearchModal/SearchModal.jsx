import React from 'react'
import Modal from 'react-modal';
import LeadSupport from '../../../pages/Lead/LeadSupport';


const SearchModal = (props) => {
  return (
    <>
        <Modal
        isOpen={
            props?.modalIsOpen
        } 
        onRequestClose={() => 
            props.setModalIsOpen(false)
        }
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          content: {
            // top: '50%',
            // left: '50%',
            // right: 'auto',
            // bottom: 'auto',
            // marginRight: '-50%',
            // transform: 'translate(-50%, -50%)',
            

          },
        }}
      >
             <div
  className={`fixed ${props.modalIsOpen ? 'block' : 'hidden'}`}
  style={{ top: '2.40rem', right: '2.40rem' }}
>
  <button
    className="hover:bg-red-500 text-red-500 hover:text-white p-2 text-4xl font-extrabold"
    onClick={() => props?.setModalIsOpen(false)}>
    X
  </button>
</div>
          <table className="min-w-full my-10">
          <thead  className='bg-purple-500 text-white'>
            <tr className=" border border-gray-300">
              <th className="px-4 py-2 border border-gray-300">S.No</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">
                Lead Details
              </th>
              <th className="px-4 py-2 border border-gray-300">Lead Date & Time</th>
              <th className="px-4 py-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.filterLead?.map((lead, index)=>{
                return <LeadSupport lead={lead} index={index} key={index} />
            })}
           
          </tbody>
        </table>
        </Modal>
    </>
  )
}

export default SearchModal
