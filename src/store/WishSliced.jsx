import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  value: JSON.parse(localStorage.getItem('wish'))|| [],
};

export const WishSliced = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addtoWish:(state,action) =>{
      // console.log(action.payload)
      let find = false;
      for(let i= 0;i<state.value.length;i++){
        if(state.value[i].id === action.payload.id){
          find = true
        }
      }
      if(find){
        toast.warning("Item already added " ,{position:"top-center"})
      }
       else{
         state.value.push(action.payload); 
         localStorage.setItem('wish',JSON.stringify(state.value))

         toast.success("Item added Succesfully " ,{position:"top-center"})
       }
    },

    DeleteWish:(state,action)=>{
      // console.log(action.payload)
      state.value.splice(action.payload, 1);
      localStorage.setItem('wish',JSON.stringify(state.value))
    }
  },
});

// Action creators are generated for each case reducer function
export const {addtoWish,DeleteWish} = WishSliced.actions;

export default WishSliced.reducer;
