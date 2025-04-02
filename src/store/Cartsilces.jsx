// const [arr, setarr] = useState([])
  // const [arr, setarr] = useState(
  //   JSON.parse(localStorage.getItem("sign")) || []
  // );

import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { toast } from "react-toastify";
const initialState = {
  cartArr: JSON.parse(localStorage.getItem('Add')) ||[],
};

export const Cartsilces = createSlice({
  name: "counter",
  initialState,
  
  reducers: {
    AddtoCart: (state, action) => {
      let find = false;
      for (let i = 0; i < state.cartArr.length; i++) {
        if (state.cartArr[i].id === action.payload.id) {
          find = true;
        }
      }
      if (find===true) {
        toast.warning("Item already Added",{ position:"top-center" });
      } else {
        state.cartArr.push(action.payload);
        
        let copyArr = [...state.cartArr]
        localStorage.setItem('Add',JSON.stringify(copyArr))
        // console.log(copyArr)

        toast.success("item added successfully", { position: "top-center" });
        
      }
    },

    increaseCart: (state, action) => {
      state.cartArr[action.payload].price += state.cartArr[action.payload].price / state.cartArr[action.payload].quantity ;
      state.cartArr[action.payload].quantity += 1;
    },

    DecreaseCart:(state,action)=>{
      //  console.log(action.payload)
      if(action.payload.ele.quantity >1){
        state.cartArr[action.payload.i].price -=
          state.cartArr[action.payload.i].price /
          state.cartArr[action.payload.i].quantity;
        state.cartArr[action.payload.i].quantity -= 1;
      }
    },
    deleteCart:(state,action)=>{
      state.cartArr =  action.payload
    }
  },

});

// Action  creators are generated for each case reducer function
export const { AddtoCart, increaseCart ,DecreaseCart,deleteCart} = Cartsilces.actions;

export default Cartsilces.reducer;
