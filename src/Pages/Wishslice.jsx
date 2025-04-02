import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddtoCart,  } from '../store/Cartsilces';
import { DeleteWish } from '../store/WishSliced';

const Wishslice = () => {
    let store = useSelector((slice) => slice.wish);
    let dispatch = useDispatch()

    console.log(store.value);

    // Use the the delete section--->>> 
    const handleDelete = (ele,i)=>{
      
       dispatch(DeleteWish(i))
    }
  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-[80%] m-auto text-sm text-center rtl:text-right bg-[#000000ad] text-gray-100 ">
          <thead className="  text-lg  uppercase">
            <tr>
              <th scope="col" className="px- py-3">
                S no
              </th>
              <th scope="col" className="px-6 py-3">
               title
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
               Price
              </th>
              <th scope="col" className="px-6 py-3">
                Button
              </th>
            </tr>
          </thead>
          <tbody>
            {
              store.value.map((ele,i)=>{
                return (
                  <tr className="bg-[#ffffff0c] border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {i + 1}
                    </th>
                    <td className="px-6 py-4">{ele.title}</td>
                    <td className="px-6 py-4">
                      <img src={ele.thumbnail} className="w-20" alt="" />
                    </td>
                    <td className="px-6 py-4">$2999</td>
                    <td className='flex gap-2 text-center justify-center items-center  h-[105px]'>
                      <button onClick={()=>dispatch(AddtoCart(ele))} className="bg-cyan-200 hover:bg-cyan-300 rounded-2xl px-3 py-1.5 text-black">
                        Add to cart
                      </button>
                      <button onClick={()=> handleDelete(ele,i)} className="bg-cyan-200 hover:bg-cyan-300 rounded-2xl px-3 py-1.5 text-black">
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wishslice