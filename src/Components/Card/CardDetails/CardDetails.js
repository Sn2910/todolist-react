import React, { useState } from 'react'
import {Calendar, CheckCircle, CheckSquare, Delete, Edit2, Edit3, List, Tag, Trash2, Type } from 'react-feather'
import AddTask from '../../AddTask/AddTask'
import Modal from '../../Modal/Modal'
import Chip from '../../Chip/Chip'
import './CardDetails.css'
import { useEffect } from 'react'

function CardDetails(props) {
  const [activeColor, setActiveColor] = useState("")
  const {title,labels,descr,date,tasks} = props.card
  const calculatePercent = () => {
    if (!values.tasks?.length) return 0;
    const completed = values.tasks?.filter((item) => item.completed)?.length;
    return (completed / values.tasks?.length) * 100;
  };

  const colors = [
        "#a8193d",
        "#4fcc25",
        "#1ebffa",
        "#8da377",
        "#9975bd",
        "#cf61a1",
        "#240959"
  ]
  const [values, setValues] = useState({...props.card})
  useEffect(()=>{
   props.updateCard(props.card.id,props.boardId, values)
  },[values])

  const updateDate = (date) => {
    if (!date) return;

    setValues({
      ...values,
      date,
    });
  };
  const addLabel = (value, color) => {
    const index = values.labels?.findIndex((item) => item.text === value);
    if (index > -1) return;
    const label ={
      text:value,
      color,
    }
    setActiveColor("");
    setValues({
      ...values,
      labels: [...values.labels, label],
    });
  };

  const removeLabel = (label) => {
    const tempLabels = values.labels.filter((item) => item.text !== label.text);

    setValues({
      ...values,
      labels: tempLabels,
    });
  };
  const addTask = (value) => {
    const task = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setValues({
      ...values,
      tasks: [...values.tasks, task],
    });
  };

  const removeTask = (id) => {
    const tasks = [...values.tasks];

    const tempTasks = tasks.filter((item) => item.id !== id);
    setValues({
      ...values,
      tasks: tempTasks,
    });
  };

  const updateTask = (id, value) => {
    const tasks = [...values.tasks];

    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0) return;

    tasks[index].completed = value;

    setValues({
      ...values,
      tasks,
    });
  };

  
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
                    text ={values.title} 
                    default = {values.title}
                    placeholder = "Enter the title"
                    buttonText = "Set Title"
                    onSubmit ={(value)=>setValues({...values,title:value})}
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
                    text ={values.descr} 
                    default = {values.descr}
                    placeholder = "Enter the description"
                    buttonText = "Set Description"
                    onSubmit ={(value)=>setValues({...values,descr:value})}
                    />
                </div>
            </div>
            <div className="carddetails">
              <div className="carddetails_title">
                 <Calendar />
                    <h4>Date</h4>
               </div>
                <div className="carddetails_body">
                <input
            type="date"
            defaultValue={values.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDate(event.target.value)}
          />
                </div>
            </div>
            <div className="carddetails">
              <div className="carddetails_title">
                   <Tag />
                    <h4>Labels</h4>
               </div>
                  <div className="carddetails_labels">
                    {
                      values.labels?.map((label,index)=>
                      <Chip 
                      close
                      onClose ={()=>removeLabel(label.text)}
                      key = {label.text +index}
                      color = {label.color}
                      text ={label.text}
                      
                      />)
                    }
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
                    text ="Add Label"
                    placeholder = "Enter the title"
                    buttonText = "Add"
                    onSubmit ={(value)=>addLabel(value,activeColor)}
                    />
                </div>
            </div>
            <div className="carddetails">
              <div className="carddetails_title">
                   <CheckSquare />
                    <h4>Tasks</h4>
               </div>
               <div className="task_progress_bar">
                <div className="task_progess" 
                style={{
                  width: `${calculatePercent()}%`,
                  backgroundColor: calculatePercent() === 100 ? "limegreen" : "",
                }}></div>
              </div>
              <div className="task_list">
                <div className="tasks">
                  {values.tasks?.map((task) =>(
                    <>
                     <div key ={task.id} className="task_input">
                     <input type="checkbox" 
                     defaultValue={task.completed}
                     onChange={(event) =>
                      updateTask(task.id, event.target.checked)}

                     />
                       <p className={task.completed ? "completed" : ""}>{task.text}</p>
                     </div>
                    
                     
                     
                     <Trash2  onClick={() => removeTask(task.id)} />
                   
                     </>
                  )
                  
                  )}
                 
                  
                </div>
              </div>
              
                <div className="carddetails_body">
                  <AddTask
                    text ={"Add a Task"} 
                    placeholder = "Enter the task"
                    buttonText = "Add Task"
                    onSubmit={addTask}
                    />
                </div>
            </div>

       </div>


      </Modal>
    
  )
}

export default CardDetails
