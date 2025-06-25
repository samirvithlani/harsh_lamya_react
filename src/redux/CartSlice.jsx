import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    //reducer //action
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        //state ->initalSatte
        //action ={action,payload:object}
        //cart/addtocart
        //addtocar({name:1111})
        //action -->payload
        addToCart:(state,action)=>{
            console.log(state.cart)
            console.log(action)
            state.cart.push(action.payload)
        }
    }

})

export default cartSlice.reducer /// -->store...
export const { addToCart} = cartSlice.actions
