import React, { useState } from 'react'

export const UseStateDemo3 = () => {
    const [marks, setmarks] = useState([12,22])
    const addMarks  = ()=>{
        const randommark = Math.floor(Math.random()*26)
        // var x = [...marks,randommark]
        // setmarks(x)
        setmarks([...marks,randommark])
        //spread operator
        // marks.push(randommark)
        // console.log(marks)
        // var x = marks;
        // setmarks(x)

        // console.log("beofre push",marks)
        // var x = marks.push(randommark)
        // console.log("after push",marks)
        //  setmarks(marks)

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo3</h1>
        {
            marks.map((m)=>{
                return <li>{m}</li>
            })
        }
        <button onClick={()=>{addMarks()}}>new marks</button>
    </div>
  )
}
