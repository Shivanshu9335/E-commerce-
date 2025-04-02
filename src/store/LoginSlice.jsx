import { getValue } from "@mui/system";
import { createSlice } from "@reduxjs/toolkit";

let data = JSON.parse(localStorage.getItem("Login"))
const initialState = {

  getValue: {
     email: data? data.email :  " ",
    Login: data? data.Login : false,
  },
};

export const Login = createSlice({
  name: "counter",
  initialState,
  reducers: {
    ChangeRouter:((state,action)=>{
        console.log(action.payload)
        state.getValue = action.payload 
    })
  },
});

// Action creators are generated for each case reducer function
export const {ChangeRouter} = Login.actions;

export default Login.reducer;
