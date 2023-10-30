import React from 'react'
import Modal from 'react-modal';
import LeadUpdateForm from './LeadUpdateForm';


const LeadUpdateModel = (props) => {
  return (
    <>
        <Modal
        isOpen={
            props?.myProps.modalIsOpen
        } 
        onRequestClose={() => 
            props.myProps.setModalIsOpen(false)
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
       <LeadUpdateForm leadId={props?.leadId} modalIsOpen={props?.myProps.modalIsOpen} setModalIsOpen={props?.myProps.setModalIsOpen}/>
        </Modal>
    </>
  )
}

export default LeadUpdateModel
