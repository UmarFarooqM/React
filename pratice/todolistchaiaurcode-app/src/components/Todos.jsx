import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {removeTodo} from "../features/todo/todoSlice"

function Todos() {
    //method is is
    const todos = useSelector(state=> state.todos)
    const dispatch = useDispatch()
  return (

    <>
    <div style={{margin:"20px", padding:"20px"}}>TODO LIST's</div>
        {  todos.map((todo)=>{
            return(
        <li key={todo.id}  style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px',
        marginBottom: '6px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: 'darkblue'
      }}> {todo.text}
        {/* if we use display(key ) it automatically exectues and we cannot use call() so we use callback*/}
        <button style={{backgroundColor: 'red',
          color: 'white',
          border: 'none',
          margin:"20px",
          borderRadius: '4px',
          cursor: 'pointer',
          padding: '4px 8px'}}onClick={()=> dispatch(removeTodo(todo.id))}>X delete</button>
        </li>
            )
        })}
    
    </>
  )
}

export default Todos
