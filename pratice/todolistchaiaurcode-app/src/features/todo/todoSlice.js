import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1, text:"hello umar"}]

}//state 

export const todoSlice = createSlice({
        name: 'todo',
        initialState,
        reducers :{
            //properties and functions
            //reference no call
            //state values of initialstate handto actions are value are like id to remove
            addTodo:  (state,action)=>{
                const todo={
                    id: Date.now(), //else fetch
                    text : action.payload // payload is also a object payload.text
                }
                state.todos.push(todo)
            },
            removeTodo: (state,action)=>{
                //action they sent id to delete
                state.todos = state.todos.filter((todo)=> todo.id !==action.payload)
            },
        }

})

export const {addTodo,removeTodo} = todoSlice.actions
//individauls
export default todoSlice.reducer

//all also