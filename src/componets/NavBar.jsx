import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Login } from "@mui/icons-material";
import { ChangeRouter } from "../store/LoginSlice";

const Navbar = ({ search }) => {
  // use the log-out page ---->>>
  let login1 = useSelector((slice) => slice.Login);
  console.log(login1)
  let login = (login1.getValue.Login);

  let dispatch = useDispatch()
  const handleCLick = ()=>{
     dispatch(ChangeRouter({email:'',Login:false}));
       localStorage.setItem(
         "Login",
         JSON.stringify({ email: "", Login: false })
       );
  }

  const cartItems = useSelector((state) => state.cart.cartArr.length);
  // console.log(cartItems)
  const wishItems = useSelector((state) => state.wish.value.length);

  const [showMenu, setShowMenu] = useState(false);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = inputRef.current.value.trim();
    if (!searchValue) {
      return toast.warning("Please enter some text", {
        position: "top-center",
      });
    }
    search(searchValue);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-md bg-[#000000] text-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link to={"/products"} className="text-2xl font-semibold">
          Ecom-Shop
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSubmit}
          className="hidden md:flex items-center border px-3 py-2 rounded"
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full"
          />
          <button type="submit" className="text-gray-300">
            <CiSearch size={20} />
          </button>
        </form>

        {/* Icons and Buttons */}
        <ul className="flex items-center space-x-6">
          <Link to={"/wish"} className="relative">
            <FaRegHeart size={24} className="text-indigo-200" />
            {wishItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">
                {wishItems}
              </span>
            )}
          </Link>
          <Link to={"/cart"} className="  relative">
            <AiOutlineShoppingCart size={26} className="text-indigo-200" />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">
                {cartItems}
              </span>
            )}
          </Link>
          {login === false && (
            <li>
              <Link
                to={"/login"}
                className="px-4   font-serif  border-2 border-gray-300 py-1.5 bg-fuchsia-500 text-black rounded-lg hover:bg-cyan-400"
              >
                Login
              </Link>
            </li>
          )}
          {login === false && (
            <li>
              <Link
                to={"/signup"}
                className="px-2  font-serif border-2 border-gray-300   py-1.5 bg-yellow-300 text-black rounded-lg hover:bg-yellow-400"
              >
                Sign Up
              </Link>
            </li>
          )}
          {login ===true && <li>
            <p
              onClick={handleCLick}
              to={"/signup"}
              className="px-2  font-serif border-2 border-gray-300   py-1.5 bg-yellow-300 text-black rounded-lg hover:bg-yellow-400"
            >
            LogOut
            </p>
          </li>}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setShowMenu(!showMenu)}
        >
          <VscThreeBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden bg-gray-900 text-white p-4 absolute top-full w-full">
          <ul className="flex flex-col space-y-3">
            <li>
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 rounded bg-gray-700"
              />
            </li>
            {JSON.parse(localStorage.getItem("Login")).Login === true && (
              <li>
                <Link
                  to={"/login"}
                  // onClick={handleClick}
                  className="w-full px-3 py-2 bg-cyan-300 text-black rounded-lg hover:bg-cyan-400"
                >
                  Login
                </Link>
              </li>
            )}
            <li>
              <button className="w-full px-3 py-2 bg-cyan-300 text-black rounded-lg hover:bg-cyan-400">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
