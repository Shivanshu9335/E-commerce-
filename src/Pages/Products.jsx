// let displayArr = props.search ? filterArr : slicedArr // when the allcondition -->>>

import React, { useEffect, useState } from "react";
import { GoMoveToStart } from "react-icons/go";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { AddtoCart } from "../store/Cartsilces";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { addtoWish } from "../store/WishSliced";
import Watches from "../componets/Watches";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { current } from "@reduxjs/toolkit";
import { Skeleton } from "@mui/material";
import { GrEzmeral, GrFreebsd } from "react-icons/gr";
import { green } from "@mui/material/colors";
import { MdStart } from "react-icons/md";

const Products = (props) => {
  const [skelton, setskelton] = useState(true);
  let dispatch = useDispatch();

  const [arr, setarr] = useState([]);

  async function getdata() {
    let res = await fetch("https://dummyjson.com/products?limit=0");
    let data = await res.json();
     setarr(data.products);
    setskelton(false);
  }
  // console.log(skelton);

  useEffect(() => {
    getdata();
  }, []); 

  // Addthe cart
  const handleCart = (ele) => {
    let obj = { ...ele };
    obj.quantity = 1;
    dispatch(AddtoCart(obj));
  };

  // Pagination part start here --------->>>>>>>>>>>>>>>>>>>
  const [currentPage, setcurrentPage] = useState(1);

  let itemperPage = 8;
  let lastIndex = currentPage * itemperPage;
  let firstIndex = lastIndex - itemperPage;
  let slicedArr = arr.slice(firstIndex, lastIndex);
  let noofBtn = Math.ceil(arr.length / itemperPage);

  // Click the both button-->>>>>>>>>>..
  const handlePrev = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < noofBtn) {
      setcurrentPage(currentPage + 1);
    }
  };

  // for the searched part start here ---->>
  // console.log(arr)
  let filterArr = arr.filter((item) =>
    item.category.toLowerCase().includes(props.search.toLowerCase())
  );
  // console.log(filterArr)

  let displayArr = [];
  if (props.search) {
    displayArr = filterArr;
  } else {
    displayArr = slicedArr;
    // console.log(slicedArr)
  }

  // start silder part here --->>>
  let watchItem = arr.filter((item) => item.category.includes("watch"));

  return (
    <div className="">
      {skelton ? (
        <div className="fixed top-0 right-0 left-0  bottom-0 bg-red-400 ">
          <div className=" bg-white h-full  grid md:grid-cols-3 p-4 lg:grid-cols-4 grid-cols-2 gap-3 px-18 pt-18  text-white">
            {Array(8)
              .fill("")
              .map((ele, i) => {
                return (
                  <Stack spacing={0.5}>
                    <Skeleton
                      variant="rectangular"
                      sx={{ borderRadius: "1rem" }}
                      width={250}
                      height={230}
                    />
                    <Skeleton variant="rounded" width={200} height={15} />
                    <Skeleton
                      variant="text"
                      width={140}
                      sx={{ fontSize: "1rem" }}
                    />
                  </Stack>
                );
              })}
          </div>
        </div>
      ) : (
        <div>
          <div className="font-[sans-serif]  p-4 gap-2 mx-auto  max-w-[1400px]">
            <h2 className="text-xl sm:text-3xl font-semibold text-gray-200 mb-6 sm:mb-8">
              Products --
            </h2>

            <div className="m-8 max-w-max max-h-max p-2 border border-gray-200 bg-[#0000009d] mb-4">
              <h1 className="text-3xl font-semibold pl-6  text-white font-serif">
                Watches
              </h1>
              <Watches watchItem={watchItem} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  sm:gap-6">
              {displayArr.map((ele, i) => {
                return (
                  <div
                    key={ele.thumbnail}
                    className="group  p-1 bg-[#0000004f] overflow-hidden cursor-pointer relative"
                  >
                    <Link
                      to={"/veiw"}
                      state={{ ele, arr }}
                      className="w-full max-h-max  overflow-hidden"
                    >
                      <img
                        src={ele.thumbnail}
                        alt="Product "
                        className="aspect-[3/4]  w-[full]  object-contain object-top hover:scale-110 transition-all duration-700"
                      />
                    </Link>
                    <div className="p-4 relative">
                      <div
                        className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
                          transition-all duration-500
                          left-0 right-0
                          group-hover:bottom-20
                          lg:bottom-5 lg:opacity-1  text- lg:group-hover:opacity-100
                          max-lg:bottom-20 max-lg:py-3 "
                      >
                        <button
                          onClick={() => dispatch(addtoWish(ele))}
                          type="button"
                          title="Add to wishlist"
                          className="font-bold text-white text-3xl hover:cursor-pointer  outline-none border-none"
                        >
                          <FaRegHeart />
                        </button>
                        <button
                          onClick={() => handleCart(ele)}
                          type="button"
                          title="Add to cart"
                          className=" text-4xl hover:cursor-pointer text-amber-50"
                        >
                          <AiOutlineShoppingCart />
                        </button>
                      </div>
                      <div className="z-20 relative ">
                        <h6 className="text-xl  text-amber-100 truncate">
                          {ele.title}
                        </h6>
                        <h6 className=" text-white text-lg mt-2">
                          ${ele.price.toFixed(2)}
                        </h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <nav aria-label="Page navigation  flex  example">
            <ul className="flex flex-wrap items-center text-center  p-2 justify-center text-base">
              <div
                onClick={() => setcurrentPage(1)}
                className="font-extrabold   bg-blue-300  text-3xl    mr-2"
              >
                <GoMoveToStart />
              </div>
              <li>
                <a
                  onClick={handlePrev}
                  href="#"
                  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight  text-white  bg-[#000000cb]"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>
              {Array(noofBtn)
                .fill(0)
                .map((ele, i) => {
                  return (
                    <li className="" key={i}>
                      <a
                        onClick={() => setcurrentPage(i + 1)}
                        href="#"
                        className={`flex items-center justify-center px-4 h-10 leading-tight text-white ${
                          currentPage === i + 1
                            ? "bg-green-500"
                            : "bg-[#000000cb]"
                        } `}
                      >
                        {i + 1}
                      </a>
                    </li>
                  );
                })}
              <li>
                <a
                  onClick={handleNext}
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight bg-[#000000cc] text-white text-xl"
                >
                  <span className="sr-only text-white">Next</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
              <div
                onClick={() => setcurrentPage(noofBtn)}
                className="font-bold text-3xl bg-blue-300 mr-2"
              >
                <MdStart />
              </div>
            </ul>



            
            <div className="flex justify-center mt-4">
              {/*  ['', '', '', '', '', '','', '', '','','',''] */}

              {/* 25 --> no of btn */}

              <button
                onClick={() => setcurrentPage(1)}
                className="bg-black text-white rounded-md p-1  mx-1"
              >
                &larr;
              </button>
              <button
                onClick={handlePrev}
                className="bg-black text-white rounded-md p-1  mx-1"
              >
                Prev
              </button>
              {Array(noofBtn)
                .fill(" ")
                .map((ele, i) => {
                  //    4 >=1  && 4 < 6
                  return (
                   i + 1 >= currentPage &&
                    i + 1 < currentPage + 5 && (
                      <button
                        style={{ margin: "1px" }}
                        key={i + 1}
                        onClick={() => setcurrentPage(i + 1)}
                        className={`${
                          currentPage === i + 1 ? "bg-green-400" : "bg-white"
                        } text-black rounded-md p-1 w-10`}
                      >
                        {i + 1}
                      </button>
                    )
                  );
                })}
              {currentPage < noofBtn - 4 && (
                <button className=" text-white font-semibold rounded-md p-1 px-3 mx-1 ">
                  ...
                </button>
              )}
              <button
                onClick={handleNext}
                className="bg-black text-white rounded-md p-1 mx-1 "
              >
                Next
              </button>
              <button
                onClick={() => setcurrentPage(noofBtn)}
                className="bg-black text-white rounded-md p-1 mx-1 "
              >
                &rarr;
              </button>
            </div>
            
          </nav>
        </div>
      )}
    </div>
  );
};

export default Products;
