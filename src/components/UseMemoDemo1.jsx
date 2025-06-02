import React, { useMemo, useState } from 'react'

export const UseMemoDemo1 = () => {
    const [flag, setflag] = useState(false)
    const [flag2, setflag2] = useState(false)
    //var randomNo = Math.floor(Math.random()*1000)
    var randomNo = useMemo(()=>{
        return Math.floor(Math.random()*1000)
    },[flag2])

    console.log(randomNo)
    
   

  return (
    <div style={{textAlign:"center"}}>
        <h1>UseMemoDemo1</h1>
        {flag==true?"TRUE":"FALSE"}
    </div>
  )
}
