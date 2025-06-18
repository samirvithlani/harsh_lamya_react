import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

export const ApiDemo3 = () => {

    const callAPi = async()=>{
        const res = await axios.get("http://localhost:3000/user/users",{
            headers:{
                "Authorization":"token" //localstorge.gettam
            }
        })
        console.log(res)
    }
    useEffect(() => {
      
        callAPi()
      
    }, [])
    
  return (
    <div>ApiDemo3</div>
  )
}
