import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { AddtoCart } from "../store/Cartsilces";
import { addtoWish } from "../store/WishSliced";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const ViewDetails = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const obj = location.state.ele;
  const allProducts = location.state.arr;
  const filteredArr = allProducts.filter(item => item.category === obj.category);

  const [selectedImage, setSelectedImage] = useState("");

  const handleClick = (url) => {
    setSelectedImage(url);
  };

  return (
    <section className="py-8 md:py-16 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left: Product Images */}
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full h-[70vh] object-center object-cover"
              src={selectedImage || obj.thumbnail}
              alt="Product preview"
            />
            <div className="flex justify-between mt-2">
              {obj.images.map((img, index) => (
                <img
                  key={index}
                  onClick={() => handleClick(img)}
                  src={img}
                  alt={`Product thumbnail ${index}`}
                  className="bg-red-50 w-28 cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="mt-6 bg-[#0000004d] max-h-max pb-10 p-5 rounded-3xl sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {obj.title}
            </h1>
            <div className="mt-4 sm:flex sm:items-center sm:gap-4">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ${obj.price}
              </p>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                  </svg>
                ))}
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(5.0)</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 sm:flex sm:gap-4">
              <button
                onClick={() => dispatch(addtoWish(obj))}
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-transparent hover:bg-[#00000062] hover:text-white rounded-lg border border-gray-200"
              >
                ❤️ Add to favorites
              </button>
              <button
                onClick={() => dispatch(AddtoCart(obj))}
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-white bg-[#0000003a] border-2 border-gray-200 hover:bg-[#00000062] mt-4 sm:mt-0 rounded-lg"
              >
                🛒 Add to cart
              </button>
            </div>

            {/* Description Accordion */}
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "white", fontFamily: "monospace" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Summary</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <p><span className="text-blue-200 text-lg">Description</span>: {obj.description}</p>
                <p><span className="text-blue-200 text-lg">Rating</span>: {obj.rating}</p>
                <p><span className="text-blue-200 text-lg">Return policy</span>: {obj.returnPolicy}</p>
                <p><span className="text-blue-200 text-lg">Warranty Info</span>: {obj.returnPolicy}</p>
              </AccordionDetails>
            </Accordion>

            {/* Reviews Accordion */}
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <Accordion sx={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "white", fontFamily: "monospace" }}>
              <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
                <Typography className="text-amber-100 text-2xl">Rating</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <h1 className="text-blue-100 text-2xl mb-2">Reviewer Ratings</h1>
                  <div className="flex items-center mb-4">
                    <img
                      className="w-10 h-10 me-4 rounded-full"
                      src="/docs/images/people/profile-picture-5.jpg"
                      alt="Reviewer"
                    />
                    <div className="font-medium dark:text-white">
                      <p>Jese Leos
                        <time className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-1 space-x-1">
                    <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 22 20">
                      <path d="..." />
                    </svg>
                    <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 22 20">
                      <path d="..." />
                    </svg>
                    <h3 className="ms-2 text-sm font-semibold text-gray-900 dark:text-white">
                      Thinking to buy another one!
                    </h3>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="p-2 text-[#f3f3f3] mt-3">
          <h1 className="text-center text-2xl mb-2 font-sans font-semibold">Related Products</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
            {filteredArr.map((ele, i) => (
  <div key={i} className="bg-[#00000059] p-4 rounded-lg text-white flex flex-col items-center">
    <img src={ele.thumbnail} alt={ele.title} className="w-full h-40 object-cover rounded mb-2" />
    <h2 className="text-lg font-bold text-center">{ele.title}</h2>
    <p className="mb-2">${ele.price}</p>
    
    <div className="flex gap-2">
      <button
        onClick={() => dispatch(addtoWish(ele))}
        className="bg-transparent border border-gray-200 text-white px-3 py-1 rounded hover:bg-[#0000006a] text-sm"
      >
        ❤️ Wishlist
      </button>
      <button
        onClick={() => dispatch(AddtoCart(ele))}
        className="bg-[#0000003a] text-white border-2 border-gray-200 px-3 py-1 rounded hover:bg-[#00000062] text-sm"
      >
        🛒 Add to Cart
      </button>
    </div>
  </div>
))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewDetails;
