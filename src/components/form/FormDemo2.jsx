import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {
    const {register,handleSubmit} = useForm()
    //register object..
    //handlesibm function....
    const submitHandler = (data)=>{
        console.log("data..",data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 2</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <div>
                <label>GENDER</label><br></br>
                MALE : <input type='radio' {...register("gender")} value="male"></input> <br></br>
                FEMALE : <input type='radio' {...register("gender")} value="female"></input>
            </div>
            <div>
                CRICKEt : <input type='checkbox' {...register("hobbies")} value="cricket"></input><br></br>
                chess : <input type='checkbox' {...register("hobbies")} value="chess"></input><br></br>
                rading : <input type='checkbox' {...register("hobbies")} value="reading"></input><br></br>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
