import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApi = createAsyncThunk(
    "content/fetchContent",
    async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user")
        return res.data.data
    }

)
const contentSlice = createSlice({
    name:"content",
    initialState:{
        data:null,
        isLoading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchApi.pending,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchApi.fulfilled,(state,action)=>{
            state.data = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchApi.rejected,(state,action)=>{
            state.error = action.payload;
            state.isLoading = false
        })
    }

})


export default contentSlice.reducer
