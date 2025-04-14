import React, { useState } from 'react'

export const UseStateDemo1 = () => {
    //var count =0;
    //hook :
    const[count,setCount]=useState(0)
    //count ---> variable
    //setCount --> function set --> count -->value -->setCount
    const increseCount = ()=>{
       // count++;
        setCount(count+1)
        console.log("count ",count)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo1</h1>
       {/* <button onClick={increseCount}>increse..</button>      */}
       <button onClick={()=>{
        increseCount()
       }}>increse..</button>     
       <h1>COUNT = {count}</h1>
    </div>
  )
}
