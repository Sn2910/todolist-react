import React, { useState } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Siderbar/Sidebar'
import Board from '../Board/Board'
import './Main.css'
import AddTask from '../AddTask/AddTask'

function Main() {
  const [boards, setBoards]  = useState([
   {
      id: Date.now() + Math.random()*2,
      title: "Brainstorm",
      cards:
       [
           {
            id: Date.now() + Math.random()*2,
            title: "Card 1",
            labels: [
              { 
                 text:"backend",
                 color: "pink",
              }
            ],
            tasks: [],
            descr: "Create a Wireframe",
            date:"",
  
           },
           {
            id: Date.now() + Math.random()*2,
            title: "Card 2",
            labels: [
              { 
                 text:"frontend",
                 color: "blue",
              }
            ],
            tasks: [],
            descr: "Build your ideas",
            date:"",
  
           },
        ] 
    }
  ])
  const addCard = (title, bid) =>{
    const card ={
      id: Date.now() + Math.random()*2,
      title,
      labels:[],
      tasks: [],
      descr: "",
      date:"",

    }
    const boardIndex = boards.findIndex((item)=>item.id === bid) 
    if(boardIndex < 0) return;
     const tempBoards = [...boards]
     tempBoards[boardIndex].cards.push(card)
     setBoards(tempBoards)
  }
  const removeCard = (cid, bid) =>{
    const bIndex = boards.findIndex((item)=>item.id === bid) 
    if(bIndex < 0) return;
    const cIndex = boards[bIndex].cards.findIndex((item)=>item.id === cid) 
    if(cIndex < 0) return;
    const tempBoards = [...boards]
    tempBoards[bIndex].cards.splice(cIndex,1)
    setBoards(tempBoards)

  }
  const addBoard =(title)=>{
   setBoards([...boards,
    {
      id: Date.now() + Math.random()*2,
      title,
      cards:[],
   }])

  }
  const removeBoard = (boardId) =>{
   /*  const boardIndex = boards.findIndex((item)=>item.id == boardId) 
    if(boardIndex < 0) return */
    const tempBoards = boards.filter((item)=> item.id !== boardId)
    setBoards(tempBoards)
  }
  const updateCard = (cid, bid, card) => {
    const bIndex = boards.findIndex((item)=>item.id === bid) 
    if(bIndex < 0) return;
    const cIndex = boards[bIndex].cards.findIndex((item)=>item.id === cid) 
    if(cIndex < 0) return;
    const tempBoards = [...boards]
    tempBoards[bIndex].cards[cIndex] =card
    setBoards(tempBoards)
  }
  return (
    <div>
      <Header />
      <Sidebar />
      <main>
       <div className="board_outer_container">
            <div className="board_container">
              {boards.map((board)=>
              <Board 
                  key ={board.id}
                  board ={board}
                  removeBoard ={removeBoard} 
                  addCard = {addCard}
                  removeCard ={removeCard}
                  updateCard = {updateCard}
                        
              />
               
              )}
              
              <AddTask 
                    boardDisplay = "addBoardDisplay"
                    text  = "Add Board"
                    buttonText = "Add Board"
                    placeholder = "Enter the title of the Board"
                    onSubmit ={(value) => addBoard(value)}
                   
                   
               />

            </div>
       </div>
      </main>
    </div>
  )
}


export default Main;
