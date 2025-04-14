import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const [isLoading, setisLoading] = useState(true)
    setTimeout(() => {
        setisLoading(false)
    }, 3000);
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo2</h1>
        {
            isLoading == true && <h1>Loading....</h1>
        }
        <button onClick={()=>{setisLoading(false)}}>stop</button>
    </div>
  )
}
