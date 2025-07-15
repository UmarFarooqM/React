import React, { useState } from 'react'
// rfce
import {useDispatch} from "react-redux"
import {addTodo} from "../features/todo/todoSlice"

function Addtodo() {
    const [input,setInput] = useState("")
    const dispatch = useDispatch()
    
    const addTodoHandler= (e)=>{
        e.preventDefault() 
        //dispatch reducer store
        dispatch(addTodo(input)) //action.payload
        setInput("")
    }

  return (
    <form onSubmit={addTodoHandler} >
        <input type="text" placeholder='enter todo' id="todoInput" value={input} onChange={(e)=> setInput(e.target.value)} required/>
        <button type='submit'>Add todo</button>
    </form>
  )
}

export default Addtodo
