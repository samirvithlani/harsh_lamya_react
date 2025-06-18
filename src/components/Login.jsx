import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = async(data) => {
    try{
    const res = await axios.post("https://node5.onrender.com/user/login",data)
    console.log(res)
    if(res.status==200){
        toast.success("user loggedin...")
        localStorage.setItem("id",res.data.data._id) //token..
    }
    }catch(err){
        console.log(err)
    }

  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>LOGIN COMPONENT</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>EMAIL</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <label>PASSWORD</label>
          <input type="text" {...register("password")}></input>
        </div>
        <div>
            <input type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};
