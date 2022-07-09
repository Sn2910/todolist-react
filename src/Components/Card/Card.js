import React, {useState} from 'react'
import Chip from '../Chip/Chip'
import { CheckSquare, Clock, Edit2} from 'react-feather'
import Dropdown from '../Dropdown/Dropdown'
import CardDetails from './CardDetails/CardDetails'
import './Card.css'
function Card(props) {
  const[showDropdown, setDropdown] = useState(false)
  const[showModal,setShowModal] =useState(false)
 
  return (
    <>
    {showModal && 
    <CardDetails onClose ={() => setShowModal(false)} 
    card ={props.card}
    updateCard ={props.updateCard}
    boardId={props.boardId}

    
    /> } 
    <div className='card' onClick={()=> setShowModal(true)}>
     
      <div className="card_header">
           <div className="card_header_label">
           { props.card?.labels?.map((label,index)=>
             <Chip 
             key = {index}
             text = {label.text}
             color = {label.color}/>
           )}
         
           
          
           </div>
           <div className="card_delete_dropdown" onClick={()=>setDropdown(true)}>

           <Edit2 className='editsvg'/>
           {showDropdown &&
            <Dropdown onClose ={()=> setDropdown(false)}>
              <div className="card_dropdown">
              <p className='delete_Card' onClick={()=>props.removeCard(props.card?.id, props.boardId)}>Delete Card</p>
              </div>
            </Dropdown>
            }
           </div>  
      </div>
      <div className="card_body">
         <p>{props.card?.title} </p>
      </div>
      <div className="card_footer">
        {props.card?.date &&  <p><Clock />
        {props.card?.date}</p>}
     
        <p><CheckSquare />
        1/4</p>
      </div>
    </div>
    </>
  )
 
}

export default Card
