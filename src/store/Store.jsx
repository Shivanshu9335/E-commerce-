

import { configureStore } from "@reduxjs/toolkit";
import  Cartsilces  from "./Cartsilces";
import  WishSliced  from "./WishSliced";
import  Login  from "./LoginSlice";

export const Store = configureStore({
  reducer: {
    cart: Cartsilces,
    wish:WishSliced,
    Login: Login
  },
});