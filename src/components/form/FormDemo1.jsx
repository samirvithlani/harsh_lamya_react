import React, { useState } from 'react'

export const FormDemo1 = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [isSubbmited, setisSubbmited] = useState(false)
    const [color, setcolor] = useState("black")
    const nameHandler = (event)=>{
        console.log(event.target.value)
        setname(event.target.value)
    }
    const submitData = ()=>{
        //alert("name = "+name  + " email = "+email)
        setisSubbmited(true)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 1</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {name}
        </div>
        <div>
            <label>EMAIL</label>
            <input type='text' onChange={(event)=>{setemail(event.target.value)}}></input>
            {email}
        </div>
        <div>
            <label>COLOR</label>
            <input type='color' onChange={(event)=>{setcolor(event.target.value)}}></input>
        </div>
        <div>
            <button onClick={()=>{submitData()}}>submit</button>
        </div>
        {
            isSubbmited && <div style={{color:color}}>
            <h1>OUTPUT</h1>
            <h1>NAME = {name}</h1>
            <h1>EMAIL = {email}</h1>
        </div>
        }
        
    </div>
  )
}
