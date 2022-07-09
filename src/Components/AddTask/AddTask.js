import React, { useState } from 'react'
import { X, Plus} from 'react-feather'
import './AddTask.css'

function AddTask(props) {
    const [showTask, setShowTask] = useState(true)
    const[inputVal, setInputVal] = useState(props.text||"")
  return (
    <div className='addTask'>
        {showTask ?
        (<p className={`addcard ${props.boardDisplay}`} onClick={() => setShowTask(false)}>
        {/* <Plus />  */}
        {props.text}
    </p>)
     :( <form 
           className="input_task"
           onSubmit={(event) =>{
            event.preventDefault();
            if(props.onSubmit)props.onSubmit(inputVal)
             setInputVal("")
             setShowTask(true)
           }}
     
        >
        <input 
        type="text" 
        value={inputVal}
        placeholder={props.placeholder}
        onChange={(e)=>setInputVal(e.target.value)}
        />
        <div className="addTask_footer">
        <button type='submit' >{props.buttonText || "Add Card"}</button>
        < X onClick={() => setShowTask(true)} />
      </div>
      </form>)
        
        }
        
      
    </div>
  )
}

export default AddTask
