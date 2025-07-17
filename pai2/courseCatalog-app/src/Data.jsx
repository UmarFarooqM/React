import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Data() {
  let [currentpage,setCurrentpage] = useState(1);
   const [data,useData] = useState([])
  let limit =5
         async function fetchData(){
              try {
                let res = await fetch(`https://dummyjson.com/products`)
                let data = await res.json()
                useData(data)
                console.log(data)
              } catch (error) {
                alert(error.message)
              }
         }
         console.log(data.products)
         fetchData()
      // useEffect(()=>
      //     fetchData()
      //     ,[])
  
      let firstindexof = currentpage - limit
      let lastindexof = currentpage * limit

      products = data.slice(firstindexof,lastindexof)

    return (
      <div>
        {!data && <p> loading...</p>}
          <h1>To do list</h1>
        {products.map((ele)=>{
          <ul key={ele.id}>
              <li> {ele.title}</li>

              <button onClick={(prev)=>setCurrentpage(prev-1) } >prev</button>
               <button onClick={(prev)=>setCurrentpage(prev+1) } >next</button>
          </ul>
        })}
      </div>
    )
  
  
}

export default Data
