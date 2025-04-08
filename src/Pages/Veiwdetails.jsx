import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { AddtoCart } from "../store/Cartsilces";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { addtoWish } from "../store/WishSliced";

const Veiwdetails = () => {
  let dispatch = useDispatch();
  let location = useLocation();
  // console.log(location.state)
  let obj = location.state.ele;

  // show related products
  let allProducts = location.state.arr;
  // console.log(allProducts)
  let filteredArr = allProducts.filter(
    (item) => item.category === obj.category
  );
  // console.log(filteredArr)

  // When click the images show replace the image->>>>
  const [selectedImage, setselectedImage] = useState("");
  const handleClick = (url) => {
    console.log(url);
    setselectedImage(url);
  };
  return (
    <section className="py-8  md:py-16  antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0  max-w-md lg:max-w-lg mx-auto">
            {/* <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt /> */}
            <img
              className="w-full h-[70vh]  object-center object-cover"
              src={selectedImage ? selectedImage : obj.thumbnail}
              alt
            />
            <div className="flex justify-between">
              {obj.images.map((img) => {
                return (
                  <img
                    onClick={() => handleClick(img)}
                    src={img}
                    alt="one"
                    className=" bg-red-50 w-28 "
                  />
                );
              })}
            </div>
          </div>

          <div className="mt-6  bg-[#0000004d] max-h-max pb-10  p-5 rounded-3xl sm:mt-8 lg:mt-0"> 
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {obj.title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ${obj.price}
              </p>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                  <svg
                    className="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                </div>
                <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                  (5.0)
                </p>
              </div>
            </div>
            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <div
                onClick={() => dispatch(addtoWish(obj))}
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-[#ffffff00] hover:bg-[#00000062] hover:text-white rounded-lg border border-gray-200"
                role="button"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                  />
                </svg>
                Add to favorites
              </div>
              <a
                onClick={() => dispatch(AddtoCart(obj))}
                className="text-white bg-[#0000003a] border-2 border-gray-200 hover:bg-[#00000062] hover:text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
                role="button"
              >
                <svg
                  className="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                  />
                </svg>
                Add to cart
              </a>
            </div>
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <div>
              <article>
                <Accordion
                  sx={{
                    // backgroundColor: "transparent",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    color: "white",
                    fontFamily: "monospace",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">Summary-</Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ backgroundColor: "", color: "white" }}
                  >
                    <p>
                      <span className="text-blue-200 text-lg ">
                        Description
                      </span>{" "}
                      -{obj.description}
                    </p>
                    <p>
                      <span className="text-blue-200 text-lg ">Rating </span> ={" "}
                      {obj.rating}
                    </p>
                    <p>
                      <span className="text-blue-200 text-lg ">
                        Return policy
                      </span>{" "}
                      = {obj.returnPolicy}
                    </p>
                    <p>
                      <span className="text-blue-200 text-lg ">
                        WarrantyInformation
                      </span>{" "}
                      = {obj.returnPolicy}
                    </p>
                  </AccordionDetails>
                </Accordion>
              </article>
            </div>
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

            <Accordion
              sx={{
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                color: "white",
                fontFamily: "monospace",
              }}
            >
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  component="span"
                  className="text-amber-100 text-2xl"
                >
                  Rating
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>
                  <div>
                    <h1 className="text-blue-100 text-2xl">
                      Reveiwers Ratings--{" "}
                    </h1>

                    <div className="flex items-center mb-4">
                      <img
                        className="w-10 h-10 me-4 rounded-full"
                        src="/docs/images/people/profile-picture-5.jpg"
                        alt
                      />
                      <div className="font-medium dark:text-white">
                        <p>
                          Jese Leos{" "}
                          <time
                            dateTime="2014-08-16 19:00"
                            className="block text-sm text-gray-500 dark:text-gray-400"
                          >
                            Joined on August 2014
                          </time>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                      <svg
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>

                      <svg
                        className="w-4 h-4 text-gray-300 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                        Thinking to buy another one!
                      </h3>
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>

        </div>
        <div className=" p-2 text-[#f3f3f3] mt-3 ">
          <h1 className="text-center text-2xl mb-2 font-sans  font-semibold ">
            Related Project
          </h1>
          <div className=" grid lg:grid-cols-4 gap-1  md:grid-cols-3 grid-cols-2">
            {filteredArr.map((ele, i) => {
              return (
                <div className="bg-[#00000059] p-1">
                  <img src={ele.thumbnail} alt="" />
                  <div className="flex justify-between mb-4 text-lg font-san text-blue-100">
                    <span>{ele.title}</span>
                    <span className="text-white">{ele.price}</span>
                  </div>
                  <div className="flex mb-2 justify-between">
                    <button
                      onClick={() => dispatch(AddtoCart(ele))}
                      className="w-[40%]   text-gray-900 bg-cyan-300 py-1.5 rounded-2xl hover:bg-blue-500 hover:text-white cursor-pointer"
                    >
                      Add to Cart
                    </button>{" "}
                    <button
                      onClick={() => dispatch(addtoWish(ele))}
                      className="w-[40%] text-gray-900 bg-cyan-300 py-1.5 p-1 rounded-2xl hover:bg-blue-500 hover:text-white cursor-pointer"
                    >
                      Add to Wishlist
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Veiwdetails;
