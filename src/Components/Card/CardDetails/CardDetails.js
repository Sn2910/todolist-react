import React, { useState } from 'react'
import { Type } from 'react-feather'
import Modal from '../../Modal/Modal'
import './CardDetails.css'

function CardDetails(props) {
  
  return (
    

      <Modal
        onClose= {()=>props.onClose()}
      >
       <div className="carddetails_container">
           <div className="carddetails">
              <div className="carddetails_title">
                <Type />
                <h4>Title</h4>
               </div>
            </div>

       </div>


      </Modal>
    
  )
}

export default CardDetails
