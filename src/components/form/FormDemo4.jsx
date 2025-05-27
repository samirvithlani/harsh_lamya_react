import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {

    const {register,handleSubmit,formState:{errors}} = useForm()
    console.log(errors)

    const submitHandler = (data)=>{
        console.log(data)
    }

    const validationSchema = {
        nameValidator:{
            required:{
                value:true,
                message:"name is required*"
            }
        },
        refCodeValidation:{
            required:{
                value:true,
                message:"ref code is required"
            },
            validate:(value)=>{
                var refcodellist =["royal","dp","mm","jagrut"]
                //return value == "royal" || "invalid ref code..."
                return refcodellist.includes(value) || "invalud ref code..."
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM DEMO 4</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",validationSchema.nameValidator)}></input>
                {
                    errors.name?.message
                }
            </div>
            <div>
                <label>REF CODE</label>
                <input type='text' {...register("refcode",validationSchema.refCodeValidation)}></input>
                {
                    errors.refcode?.message
                }
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
    </div>
  )
}
