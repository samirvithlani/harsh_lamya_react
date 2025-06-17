import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

export const AddUserForm = () => {

    const {register,handleSubmit} =useForm()
    const submithandler = async(data)=>{
        data.isActive = data.isActive == "true"?true:false
        const res = await axios.post("https://node5.onrender.com/user/user",data)
        console.log(res.data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ADD USER</h1>
        <form onSubmit={handleSubmit(submithandler)}>
                <div>
                    <label>NAME</label>
                    <input type='text' {...register("name")}></input>
                </div>
                <div>
                    <label>AGE</label>
                    <input type='text' {...register("age")}></input>
                </div>
                <div>
                    <label>email</label>
                    <input type='text' {...register("email")}></input>
                </div>
                <div>
                    <label>isActive</label>
                    <input type='text' {...register("isActive")}></input>
                </div>
                <div>
                    <label>password</label>
                    <input type='text' {...register("password")}></input>
                </div>
                <div>
                    <input type='submit'></input>
                </div>
        </form>
    </div>
  )
}
