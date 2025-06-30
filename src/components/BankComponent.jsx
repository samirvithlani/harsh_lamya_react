import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { depositAction } from '../redux/BankSlice'

export const BankComponent = () => {

    const [depositamount, setdepositamount] = useState(0)
    const dispath = useDispatch()
    const deposithandler = ()=>{
        console.log(depositamount)
        dispath(depositAction(parseInt(depositamount)))
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>BankComponent</h1>
            <div>
                <label>DEPOSIT</label>
                <input type='text' onChange={(event)=>{setdepositamount(event.target.value)}}></input>
            </div>
            <div>
                <button onClick={()=>{deposithandler()}}>deposit</button>
            </div>
    </div>
  )
}
