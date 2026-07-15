import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let initialState = {
    loading : false ,
    message : "",
    error   : ""
}

export const userRegister = createAsyncThunk(
    '/user/auth',
    async (formData, thunkAPi)=>{
       try {
        let resp = await axios.post('http://localhost:4000/api/auth/user/register', formData)
        return resp.data;
       } catch (error) {
        return thunkAPi.rejectWithValue(
                error.response?.data || error.message
            )
       } 
    }
)

let userRegisterSlice = createSlice({
    name : 'userRegister',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder 
 
        .addCase(userRegister.pending, (state)=>{
            state.loading = true
        })
        .addCase(userRegister.fulfilled,(state,action)=>{
            state.loading = false 
            state.message = action.payload.message
            state.error   = ""
        }) 
        .addCase(userRegister.rejected, (state, action)=>{
            state.loading = false,
            state.error = action.payload
        });
    }
})

export default userRegisterSlice.reducer;