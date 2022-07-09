import React from 'react'
import { MoreVertical } from 'react-feather'
import Card from '../Card/Card'
import AddTask from '../AddTask/AddTask'
import './Board.css'
import Dropdown from '../Dropdown/Dropdown'
import { useState } from 'react'


function Board(props) {
  const[showDropdown, setShowDropdown] = useState(false)
  return (
    <div className='board'>
      <div className="board_header">
        <div className="board_title">
            <h4>{props.board?.title}<span> {`${props.board?.cards?.length}`}</span></h4>
            <div className="board_delete_dropdown" onClick={()=>setShowDropdown(true)}>
            <MoreVertical  />
            {showDropdown &&
            <Dropdown onClose ={()=> setShowDropdown(false)}>
              <div className="board_dropdown">
              <p className='delete_board' onClick={()=>props.removeBoard(props.board?.id)}>Delete Board</p>
              </div>
            </Dropdown>
            }
            </div>
        </div>
      </div>
     <div className="board_card">
       {props.board?.cards?.map((card)=>
     (<Card 
      key = {card.id}
      card = {card}
      boardId= {props.board?.id}
      removeCard = {props.removeCard}
     />
      ))}    
      <AddTask 
      text  = "Add Card"
      placeholder = "Enter the title of the Card"
      onSubmit = {(value)=>props.addCard(value, props.board?.id)}
      />
     </div>
    </div>
  )
}

export default Board
