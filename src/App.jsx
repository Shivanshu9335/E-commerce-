import { useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./componets/NavBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Wishslice from "./Pages/Wishslice";
import { ToastContainer, toast } from "react-toastify";

import Cart from "./Pages/Cart";
import Veiwdetails from "./Pages/Veiwdetails";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login ";
import Order from "./Pages/Order";
import { useSelector } from "react-redux";
// import { Login } from "@mui/icons-material";

function App() {

  let selector = useSelector((slice)=> slice.Login)
  // console.log(selector.Login)
  let loginVal = selector.getValue.Login
  console.log(loginVal)
  
  // use the search values --->>>>>>
  const [searchedVal, setsearchedVal] = useState('');
  function search(ans) {
    console.log(ans);
    setsearchedVal(ans)
  }

  return (
    <>
      <BrowserRouter>
        <div className="">
          <NavBar search={search} />
        </div>
        <div className="h-[70px] "></div>
        <Routes>
          <Route path="/" element={ loginVal === true ? <Home/>  : <Navigate to={'/login'}/>   } />
          <Route path="/products" element={ loginVal === true ? <Products search={searchedVal}/>:  <Navigate to={'/login'}/>} />
          <Route path="/cart" element={  loginVal === true ? <Cart /> : <Navigate to={'/login'}/> } />
          <Route path="/veiw" element={  loginVal === true ? <Veiwdetails />  : <Navigate to={'/login'}/> } />
          <Route path="/wish" element={  loginVal === true ? <Wishslice /> : <Navigate to={'/login'}/>  } />
          <Route path="/signup" element={ loginVal === false?  <SignUp />: <Navigate to={'/products'} /> } />
          <Route path="/login" element={loginVal === false ?  <Login/>:<Navigate to={'/products'}/> } />
          <Route path="/orderPage" element={  loginVal === true ? <Order /> :<Navigate to={'/login'}/>  } />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
