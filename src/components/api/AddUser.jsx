import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AddUser = () => {

    const navigate = useNavigate()

    const AddUser =async()=>{

        const data  ={
            name:"rajan",
            age:25,
            email:"rajan@gmail.com",
            isActive:true,
            password:"rajan123"
        }

        try{

            const res = await axios.post("https://node5.onrender.com/user/user",data)
            console.log(res.data)
            console.log(res.status)
            if(res.status ==201){
                toast.success("user addedd....")
                navigate("/apidemo2")
            }

        }catch(err){

            console.log(err.response.data)

        }

    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>AddUser</h1>
        <button onClick={()=>{AddUser()}}>ADD USER</button>
    </div>
  )
}
