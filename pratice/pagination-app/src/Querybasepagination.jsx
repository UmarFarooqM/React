import { useEffect, useState } from "react";


function Querybasepagination(){

    const[currentpage,setcurrentPage] = useState(1)
    const [posts,setPosts] = useState([]);
    const postperpage =5
     async function fetchpost(){
        let resp = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        //instead of currentpage use page and in dependency array use [page]
        //query page is ?_page={page}
        let data = await resp.json()
        setPosts(data)
    }

        useEffect(()=>{
            fetchpost();
        },[])
        let lastindexof = postperpage * currentpage //2 *5 = 10
        let firstindexof = lastindexof - postperpage // 10-5
        let currentpost= posts.slice(firstindexof,lastindexof) // this is the logic based pagination
    return (
        <div>

            <h2>Page : {currentpage}</h2>
            <ul >
                {currentpost.map(post=>(    
                    <p key={post.id} style={{margin:'20px' , background:"blue"}}> id: {post.id} <span> Title: {post.title}</span></p>
                ))}
                <button onClick={()=> setcurrentPage(currentpage=>currentpage -1)} disabled={currentpage===1}> prev</button>
                <button   onClick={()=> setcurrentPage(currentpage=>currentpage+1)}> next</button>
            </ul>
        </div>  
    )
}
export default Querybasepagination