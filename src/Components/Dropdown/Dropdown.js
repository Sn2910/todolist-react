import React, { useEffect, useRef } from 'react'
import "./Dropdown.css"
function Dropdown(props) {
  let dropdownref = useRef()
  const handleClickOutside = (event) => {
    if(dropdownref && !dropdownref.current.contains(event.target)){
      if(props.onClose)
           props.onClose() 
      else
      return ""
    }      
    
  };
useEffect(() => {
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    // Unbind the event listener on clean up
    document.removeEventListener("mousedown", handleClickOutside);
  };
})
  return (
    <div ref = {dropdownref} className='dropdown'>
      {props.children}
    </div>
  )
}

export default Dropdown
