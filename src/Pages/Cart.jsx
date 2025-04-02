import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecreaseCart, deleteCart, increaseCart } from '../store/Cartsilces';
import { addtoWish } from '../store/WishSliced';
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Cart = () => {

  // This is not a cart part 
  let text = "India has won the the chamoniom trophy" // find the longest world 

 let dispatch = useDispatch();


  let store = useSelector((slice)=> slice.cart)
  let cart = store.cartArr
  console.log(cart)
  

  // Increase the cartItem -->>
  const handleIncrese = (item ,i)=>{
    dispatch(increaseCart(i))
  }

  /// Delete the CartItem----->>
  const handleDelete = (i)=>{
    console.log(cart)
    let cartItem = [...cart]
    cartItem.splice(i,1)
    localStorage.setItem('Add',JSON.stringify(cartItem))
    dispatch(deleteCart(cartItem))
  }

  // find the total collection ---->>>
  let sum = 0;
  let discount = 0;
  cart.forEach(element => {
     sum = sum + element.price;
     discount = discount + (element.discountPercentage/100) *element.price
  });

  let shipping =(sum *4)/ 100
  let tax = sum * 5 /100

  let final = sum - shipping + tax+ discount
  return (
    <section className="py-8 antialiased md:py-16">
      {cart.length > 0 ? (
        <div className="mx-auto max-w-screen-xl  bg-[#00000085] px-4 py-3 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Shopping Cart
          </h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {store.cartArr.map((ele, i) => {
                  return (
                    <div
                      key={ele.thumbnail}
                      className="rounded-lg border border-gray-200  p-4 shadow-sm  md:p-6"
                    >
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a href="#" className="shrink-0 md:order-1">
                          <img
                            className="h-20 w-20 "
                            src={ele.thumbnail}
                            alt="imac image"
                          />
                        </a>
                        <label htmlFor="counter-input" className="sr-only">
                          Choose quantity:
                        </label>
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="flex items-center">
                            <button
                              onClick={() => dispatch(DecreaseCart({ ele, i }))}
                              type="button"
                              id="decrement-button"
                              data-input-counter-decrement="counter-input"
                              className="inline-flex h-10  w-12  shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                              <svg
                                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M1 1h16"
                                />
                              </svg>
                            </button>
                            <span className="p-3 text-white text-xl">{ele.quantity}</span>
                            <button
                              type="button"
                              id="increment-button"
                              onClick={() => handleIncrese(ele, i)}
                              data-input-counter-increment="counter-input"
                              className="inline-flex h-10 w-12 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                            >
                              <svg
                                className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 1v16M1 9h16"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="text-end md:order-4 md:w-32">
                            <p className="text-lg font-bold text-gray-900 dark:text-white">
                              ${ele.price.toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <a
                            href="#"
                            className="text-lg font-medium text-gray-900 hover:underline dark:text-white"
                          >
                            {ele.title}
                          </a>
                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => dispatch(addtoWish(ele))}
                              type="button"
                              className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                            >
                              <svg
                                className="me-1.5 h-5 w-5"
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
                              Add to Favorites
                            </button>
                            <button
                              onClick={() => handleDelete(i)}
                              type="button"
                              className="inline-flex items-center text-sm hover:cursor-pointer font-medium text-red-600 hover:underline dark:text-red-500"
                            >
                              <svg
                                className="me-1.5 h-5 w-5"
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
                                  d="M6 18 17.94 6M18 18 6.06 6"
                                />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 p-4 shadow-sm0 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  Order summary
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-lg text-white font-normal ">
                        Original price
                      </dt>
                      <dd className="text-lg font-medium text-gray-900 dark:text-white">
                        ${sum.toFixed(2)}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-lgfont-normal text-white text-lg ">
                        Savings
                      </dt>
                      <dd className="text-lg font-medium text-green-600">
                        ${discount.toFixed(2)}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-lg font-normal text-white">
                        Shipping-charge
                      </dt>
                      <dd className="text-lg font-medium text-gray-900 dark:text-white">
                        ${shipping.toFixed(2)}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-lg font-normal text-white">
                        Tax
                      </dt>
                      <dd className="text-lg font-medium text-gray-900 dark:text-white">
                        ${tax.toFixed(2)}
                      </dd>
                    </dl>
                  </div>
                  <dl className="flex items-center justify-between gap-4 border-t border-gray-700 pt-2 dark:border-gray-900">
                    <dt className="text-lg font-bold text-gray-900  dark:text-white">
                      Total
                    </dt>
                    <dd className="text-lg font-bold text-gray-900 dark:text-white">
                      ${final.toFixed(2)}
                    </dd>
                  </dl>
                </div>
                <Link to={"/orderPage"}
                
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Proceed to Checkout
                </Link>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-900 dark:text-gray-400">
                    or
                  </span>
                  <Link to={'/products'}
                    href="#"
                    title
                    className="inline-flex text-white    items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex gap-2 items-center justify-center  '>
          <p className='text-cyan-400 text-6xl'>
            <TiShoppingCart />
          </p>
          <span className="text-4xl text-amber-200 text-center font-bold">Cart is Empty</span>
        </div>
      )}
    </section>
  );
}

export default Cart