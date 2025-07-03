import React, { useEffect, useReducer, useState } from "react";

let newtask = {
  title:"",
  description:"",
  
};


export function FormInput() {
  let [task, tasklist] = useState([]);

  function handleChange(event) {
    
  }
  function handleSubmit(event) {
    event.preventDefault();
    tasklist([...task, newtask]);  
  }
  return (
    <>
      <h3>Create list..</h3>
      <div id="formInput">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="title"
              value={task.title}
              placeholder="Enter Title"
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="description"
              value={task.description}
              placeholder="Enter the description"
              onChange={handleChange}
            />
          </label>    
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default task;



