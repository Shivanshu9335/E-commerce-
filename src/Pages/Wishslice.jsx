import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddtoCart } from '../store/Cartsilces';
import { DeleteWish } from '../store/WishSliced';

const Wishslice = () => {
  const store = useSelector((slice) => slice.wish);
  const dispatch = useDispatch();

  const handleDelete = (ele, i) => {
    dispatch(DeleteWish(i));
  };

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-center bg-[#000000ad] text-gray-100 border-collapse rounded-md overflow-hidden">
          <thead className="text-base md:text-lg uppercase bg-[#1a1a1a]">
            <tr>
              <th className="px-4 py-3">S no</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {store.value.map((ele, i) => (
              <tr key={i} className="bg-[#ffffff0c] border-b border-gray-700">
                <td className="px-4 py-3">{i + 1}</td>
                <td className="px-6 py-3">{ele.title}</td>
                <td className="px-6 py-3">
                  <img src={ele.thumbnail} alt={ele.title} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="px-6 py-3">${ele.price}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                    <button
                      onClick={() => dispatch(AddtoCart(ele))}
                      className="bg-cyan-200 hover:bg-cyan-300 text-black px-3 py-1 rounded-xl text-sm"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleDelete(ele, i)}
                      className="bg-red-200 hover:bg-red-300 text-black px-3 py-1 rounded-xl text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishslice;
