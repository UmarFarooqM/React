import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";


export function DataComponent(){

    const {state, fetchData} = useContext(DataContext);
    return (

        <div id="div">
            <button onClick={fetchData}> Fetch Data</button>
            {state.loading && <p> Loading</p>}
            {state.error &&
            <p> Error: {state.error.message}</p> }

            {state.data && state.data.map(post=> <p  key ={post.id}>{post.title}</p>)}
        </div>
    )




}