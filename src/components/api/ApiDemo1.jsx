import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader'

export const ApiDemo1 = () => {
    const [users, setusers] = useState([])
    const [loading, setloading] = useState(false)
    const getAPi = async()=>{

       setloading(true)
       const res = await axios.get("https://node5.onrender.com/user/user")
       console.log(res)
       console.log(res.data)
       console.log(res.data.message)
       console.log(res.data.data)
       setusers(res.data.data)
       setloading(false)
    }
    useEffect(()=>{
        getAPi()
    },[])
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        {/* {
            loading&&<h1>Loading...</h1>
        } */}
        {
            loading && <Loader/>
        }
        {/* <button onClick={()=>{getAPi()}}>GET</button> */}
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>EMAIL</th>
                    <th>STATUS</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return<tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.isActive ? "ACTIVE":"NOt active"}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
