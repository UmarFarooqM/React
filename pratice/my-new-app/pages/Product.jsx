import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Product =()=>{

    const[Products, setProducts] = useState([]);

    useEffect(()=>{

        axios.get("")
        .then((res)=>{
            setProducts(res.data)
        }).catch((error)=>{
            console.log(error)

        })
    },[])

    console.log(products)


    return(
        <div>

            {products && products.map((el)=>{
                <div> 
                    <img src={el?.image} alt={el?.title}/>
                
                </div>
            })}
        </div>
    )
}