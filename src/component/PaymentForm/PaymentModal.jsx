import React from 'react'
import Modal from 'react-modal';
import PaymentForm from './Payment';

const PaymentModal = (props) => {
  return (
    <>
        <Modal
        isOpen={
            props?.myProps?.paymentModalIsOpen
        } 
        onRequestClose={() => 
            props.myProps.setModalIsOpen(false)
        }
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
          content: {
           
          },
        }}
      >
       <PaymentForm leadId={props?.leadId} modalIsOpen={props?.myProps.paymentModalIsOpen} setModalIsOpen={props?.myProps.paymentModalIsOpen}/>
        </Modal>
    </>
  )
}

export default PaymentModal
