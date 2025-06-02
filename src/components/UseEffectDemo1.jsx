import React, { useEffect, useState } from 'react'

export const UseEffectDemo1 = () => {

    const [count, setcount] = useState(0)
    
    useEffect(()=>{
        console.log("useEffect..")
    },[count])
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE EFFECT DEMO</h1>
            <button onClick={()=>{setcount(count+1)}} >{count}+</button>
        
    </div>
  )
}
