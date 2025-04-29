import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
    const {register,handleSubmit,formState:{errors}}=useForm()
    console.log("error",errors)
    const submitHandler = (data)=>{
        alert("Form Submitted")
        console.log("data",data)
    }
    const validationSchema = {

        ageValidator:{
            required:{
                value:true,
                message:"Age is required *"
            },
            min:{
                value:18,
                message:"Age should be greater than 18 *"
            },
            max:{
                value:60,
                message:"Age should be less than 60 *"
            }
        },
        emailValidator:{
            required:{
                value:true,
                message:"Email is required *"
            },
            minLength:{
                value:5,
                message:"Email should be greater than 5 characters *"
            },
            maxLength:{
                value:50,
                message:"Email should be less than 50 characters *"
            },
        },
        contactValidator:{
            required:{
                value:true,
                message:"Contact is required *"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"Contact should be of 10 digits *"
            }
        }
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>FORM WITH VALIDATION..</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name",{required:{value:true,message:"Name is required *"}})}></input>
                {/* {errors.name && errors.name.message} */}
                {errors.name?.message}
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age",validationSchema.ageValidator)}></input>
                {errors.age?.message}
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email",validationSchema.emailValidator)}></input>
                {
                    errors.email?.message
                }
            </div>
            <div>
                <label>CONTACT</label>
                <input type='text' {...register("contact",validationSchema.contactValidator)}></input>
                {
                    errors.contact?.message
                }
            </div>
            <div>
                <input type='submit' value='Submit'></input>
            </div>
        </form>
    </div>
  )
}
