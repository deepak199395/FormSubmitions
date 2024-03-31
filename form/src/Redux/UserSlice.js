import { createSlice } from "@reduxjs/toolkit";

export const userSlice= createSlice({
    name:'user',
    initialState:{
        data:[]
    },
    reducers:{
        //add user  reducer
   addUser(state,action){
    state.data.push(action.payload)
   },
   // add products reducer
   addProduct(state,action){
    state.data.push(action.payload)
   },
    },
});

export const {addUser,addProduct}=userSlice.actions
export default userSlice.reducer