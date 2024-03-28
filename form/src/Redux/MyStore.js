import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./UserSlice"

const Mystore=configureStore({
    reducer:{
   user:userReducers
    }
})


export default Mystore;