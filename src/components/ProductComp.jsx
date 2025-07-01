import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import { fetchApi } from '../redux/ContentSlice'

export const ProductComp = () => {
    //hook dispatch -- props
    const dispatch = useDispatch()
  return (
    <div style={{textAlign:"center"}}>
        <h1>PRODUCT COMP</h1>
        <div className='row'>
        <div className='card' style={{width:"16rem"}}>
            <h1>IPHONE 16</h1>
            <p>price =1000$</p>
            <button className='btn btn-info' onClick={()=>{dispatch(addToCart({id:1,name:"iphone16",price:1000}))}}>add to cart</button>
        </div>
        <div className='card' style={{width:"16rem"}}>
            <h1>IPHONE 15</h1>
            <p>price =900$</p>
            <button className='btn btn-info' onClick={()=>{dispatch(addToCart({id:2,name:"iphone15",price:900}))}}>add to cart</button>
        </div>
        </div>

        <button onClick={()=>{dispatch(fetchApi())}}>CALL API</button>
    </div>
  )
}
