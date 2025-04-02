import React from 'react'
import { useSelector } from 'react-redux'

const Order = () => {
  let ctx = useSelector((slice)=> slice.Login)
  console.log(ctx)
  return (
    <div>
      <h1 className='text-center text-5xl font-bold mt-40 font-serif text-white'> ✅ Order Confirmed </h1>

    </div>
  )
}

export default Order