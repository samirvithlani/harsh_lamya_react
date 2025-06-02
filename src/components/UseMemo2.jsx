import React, { useMemo, useState } from 'react'

export const UseMemo2 = () => {
    //const [fruits, setfruits] = useState(["apple","banana","mango","kiwi","watermelon","litchi"])
    var fruits = useMemo(()=>{
        return ["apple","banana","mango","kiwi","watermelon","litchi"]
    },[])
    const [query, setquery] = useState("")
    
    const searchFruit = (event)=>{

        setquery(event.target.value)
        //var x= fruits.filter((fr)=>fr.includes(query))
        //setfruits(x)

    }
    var filteredFruits = fruits.filter((fr)=>fr.includes(query))
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE MEMO 2</h1>
        <input type='text' onChange={(event)=>{searchFruit(event)}}></input>
        {
            fruits.map((fr)=>{
                return <li>{fr}</li>
            })
        }
    </div>
  )
}
