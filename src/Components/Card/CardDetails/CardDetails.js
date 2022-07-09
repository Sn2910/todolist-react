import React, { useState } from 'react'
import {Calendar, CheckCircle, CheckSquare, Delete, Edit2, Edit3, List, Tag, Trash2, Type } from 'react-feather'
import AddTask from '../../AddTask/AddTask'
import Modal from '../../Modal/Modal'
import './CardDetails.css'

function CardDetails(props) {
  const [activeColor, setActiveColor] = useState("")
  const colors = [
        "#a8193d",
        "#4fcc25",
        "#1ebffa",
        "#8da377",
        "#9975bd",
        "#cf61a1",
        "#240959"
  ]
  
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
                <div className="carddetails_body">
                  <AddTask
                    text ={"your Title"} 
                    placeholder = "Enter the title"
                    buttonText = "Set Title"
                    />
                </div>
            </div>
            <div className="carddetails">
              <div className="carddetails_title">
                   <List />
                    <h4>Description</h4>
               </div>
                <div className="carddetails_body">
                  <AddTask
                    text ={"your description"} 
                    placeholder = "Enter the description"
                    buttonText = "Set Description"
                    />
                </div>
            </div>
            <div className="carddetails">
              <div className="carddetails_title">
                 <Calendar />
                    <h4>Date</h4>
               </div>
                <div className="carddetails_body">
                 <input type= "date" />
                </div>
            </div>
            <div className="carddetails">
              <div className="carddetails_title">
                   <Tag />
                    <h4>Labels</h4>
               </div>
                  <div className="carddetails_color">
                  {colors.map((color,index)=>
                   <li 
                   key={index} 
                   style= {{backgroundColor:color}}
                   className = {color === activeColor ? "active" : ""}
                   onClick = {()=>setActiveColor(color)}
                   
                   />
                   
                  )}
                  </div>
                    <div className="carddetails_body">
                  <AddTask
                    text ={"your Title"} 
                    placeholder = "Enter the title"
                    buttonText = "Add Label"
                    />
                </div>
            </div>
            <div className="carddetails">
              <div className="carddetails_title">
                   <CheckSquare />
                    <h4>Tasks</h4>
               </div>
               <div className="task_progress_bar">
                <div className="task_progess"></div>
              </div>
              <div className="task_list">
                <div className="tasks">
                  <div className="task_input">
                  <input type="checkbox" />
                  <p>Task1</p>
                  </div>
                 
                  <div className="task_edit">
                  <Edit2 />
                  <Trash2 />
                  </div>
                  
                </div>
              </div>
                <div className="carddetails_body">
                  <AddTask
                    text ={"yourTitle"} 
                    placeholder = "Enter the task"
                    buttonText = "Add Task"
                    />
                </div>
            </div>

       </div>


      </Modal>
    
  )
}

export default CardDetails
