import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader'
import { useFetchApi } from '../../hooks/FetchApi'

export const ApiDemo2 = () => {
    
    const {data,error,loading} = useFetchApi("https://node5.onrender.com/user/user")

  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 2</h1>
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
                    data.map((user)=>{
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
