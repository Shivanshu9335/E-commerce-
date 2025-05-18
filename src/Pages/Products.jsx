import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddtoCart } from "../store/Cartsilces";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { addtoWish } from "../store/WishSliced";
import Watches from "../componets/Watches";
import { Skeleton } from "@mui/material";
import Stack from "@mui/material/Stack";

const Products = (props) => {
  const [skelton, setskelton] = useState(true);
  const dispatch = useDispatch();

  const [arr, setarr] = useState([]);

  async function getdata() {
    let res = await fetch("https://dummyjson.com/products?limit=0");
    let data = await res.json();
    setarr(data.products);
    setskelton(false);
  }

  useEffect(() => {
    getdata();
  }, []);

  // Add to cart handler
  const handleCart = (ele) => {
    let obj = { ...ele };
    obj.quantity = 1;
    dispatch(AddtoCart(obj));
  };

  // Pagination
  const [currentPage, setcurrentPage] = useState(1);
  const itemperPage = 8;
  const lastIndex = currentPage * itemperPage;
  const firstIndex = lastIndex - itemperPage;
  const slicedArr = arr.slice(firstIndex, lastIndex);
  const noofBtn = Math.ceil(arr.length / itemperPage);

  const handlePrev = () => {
    if (currentPage > 1) setcurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < noofBtn) setcurrentPage(currentPage + 1);
  };

  // Filter array with safe checks for undefined and empty search
  const filterArr = arr.filter((item) => {
    if (!item.category) return false; // no category, skip
    if (!props.search) return true;   // no search input, include all
    return item.category
      .toLowerCase()
      .includes(props.search.toLowerCase());
  });

  // Decide which array to show
  const displayArr = props.search ? filterArr : slicedArr;

  // Watches category for slider
  const watchItem = arr.filter(
    (item) => item.category && item.category.toLowerCase().includes("watch")
  );

  return (
    <div>
      {skelton ? (
        <div className="fixed top-0 right-0 left-0 bottom-0 bg-red-400">
          <div className="bg-white h-full grid md:grid-cols-3 p-4 lg:grid-cols-4 grid-cols-2 gap-3 px-18 pt-18 text-white">
            {Array(8)
              .fill("")
              .map((_, i) => (
                <Stack key={i} spacing={0.5}>
                  <Skeleton
                    variant="rectangular"
                    sx={{ borderRadius: "1rem" }}
                    width={250}
                    height={230}
                  />
                  <Skeleton variant="rounded" width={200} height={15} />
                  <Skeleton variant="text" width={140} sx={{ fontSize: "1rem" }} />
                </Stack>
              ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="font-[sans-serif] p-4 gap-2 mx-auto max-w-[1400px]">
            <h2 className="text-xl sm:text-3xl font-semibold text-gray-200 mb-6 sm:mb-8">
              Products --
            </h2>

            <div className="m-8 max-w-max max-h-max p-2 border border-gray-200 bg-[#0000009d] mb-4">
              <h1 className="text-3xl font-semibold pl-6 text-white font-serif">
                Watches
              </h1>
              <Watches watchItem={watchItem} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {displayArr.map((ele) => (
                <div
                  key={ele.id} // better to use unique id
                  className="group p-1 bg-[#0000004f] overflow-hidden cursor-pointer relative"
                >
                  <Link
                    to={"/veiw"}
                    state={{ ele, arr }}
                    className="w-full max-h-max overflow-hidden"
                  >
                    <img
                      src={ele.thumbnail}
                      alt="Product"
                      className="aspect-[3/4] w-full object-contain object-top hover:scale-110 transition-all duration-700"
                    />
                  </Link>
                  <div className="p-4 relative">
                    <div
                      className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
                          transition-all duration-500
                          left-0 right-0
                          group-hover:bottom-20
                          lg:bottom-5 lg:opacity-1 lg:group-hover:opacity-100
                          max-lg:bottom-20 max-lg:py-3"
                    >
                      <button
                        onClick={() => dispatch(addtoWish(ele))}
                        type="button"
                        title="Add to wishlist"
                        className="font-bold text-white text-3xl hover:cursor-pointer outline-none border-none"
                      >
                        <FaRegHeart />
                      </button>
                      <button
                        onClick={() => handleCart(ele)}
                        type="button"
                        title="Add to cart"
                        className="text-4xl hover:cursor-pointer text-amber-50"
                      >
                        <AiOutlineShoppingCart />
                      </button>
                    </div>
                    <div className="z-20 relative">
                      <h6 className="text-xl text-amber-100 truncate">{ele.title}</h6>
                      <h6 className="text-white text-lg mt-2">${ele.price.toFixed(2)}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <nav aria-label="Page navigation flex example">
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setcurrentPage(1)}
                className="bg-black text-white rounded-md p-1 mx-1"
              >
                &larr;
              </button>
              <button
                onClick={handlePrev}
                className="bg-black text-white rounded-md p-1 mx-1"
              >
                Prev
              </button>
              {Array(noofBtn)
                .fill(" ")
                .map((_, i) =>
                  i + 1 >= currentPage && i + 1 < currentPage + 5 ? (
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
                  ) : null
                )}
              {currentPage < noofBtn - 4 && (
                <button className="text-white font-semibold rounded-md p-1 px-3 mx-1">
                  ...
                </button>
              )}
              <button
                onClick={handleNext}
                className="bg-black text-white rounded-md p-1 mx-1"
              >
                Next
              </button>
              <button
                onClick={() => setcurrentPage(noofBtn)}
                className="bg-black text-white rounded-md p-1 mx-1"
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
