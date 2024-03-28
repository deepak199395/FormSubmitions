import { createSlice } from "@reduxjs/toolkit";

export const userSlice= createSlice({
    name:'user',
    initialState:{
        data:[]
    },
    reducers:{
   addUser(state,action){
    state.data.push(action.payload)
   }
    }
})

export const {addUser}=userSlice.actions
export default userSlice.reducer