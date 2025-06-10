import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader'
import { useFetchApi } from '../../hooks/FetchApi'
import { toast } from 'react-toastify'

export const ApiDemo2 = () => {
    
    const {data,error,loading,callApi} = useFetchApi("https://node5.onrender.com/user/user")

    const deleteUser = async (id) => {
        //delete
        const res = await axios.delete(
          `https://node5.onrender.com/user/user/${id}`
        );
        console.log(res);
    
        if (res.status == 204) {
          toast.success("user deleted successfully..");
          callApi()
          
        }
      };

  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 2</h1>

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
                    <th>ACTION</th>
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
                            <td>
                                <button className='btn btn-danger' onClick={()=>{deleteUser(user._id)}}>DELETE</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
