import React, { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Data() {
  let [currentpage,setCurrentpage] = useState(1);
   const [data,useData] = useState([])
   const [search,setSearch]=useState("")
   const ref = useRef()
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
      useEffect(()=>
          fetchData()
          ,[])
  
      let firstindexof = currentpage - limit
      let lastindexof = currentpage * limit
    
      data.filter((ele)=> ele == data.title)
      products = data.slice(firstindexof,lastindexof)

    return (
      <div>
        {!data && <p> loading...</p>}
          <h1>To do list</h1>
          <input type="text" placeholder='search productname'   value={(e)=> setSearch(search)} onChange={(e)=> e.target.value}/>
        {products.map((ele)=>{
          <ul key={ele.id}>
              <li> {ele.title}</li>
              <li>{ele.price}</li>
              <li>{ele.thumbnail}</li>
              <button onClick={()=>setCurrentpage(currentpage-1) } disabled={currentpage==1} >prev</button>
               <button onClick={()=>setCurrentpage(currentpage+1) } >next</button>
          </ul>
        })}
      </div>
    )
  
  
}

export default Data
