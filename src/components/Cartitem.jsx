import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import {BsArrowLeft}  from 'react-icons/bs';


const Cartitem = () => {
  
  return (
    <div>
      <div className='w-11/12 m-auto py-10'>
        <h1 className='text-xl font-bold'>Shopping Cart</h1>
        <p className='text-sm text-gray-400'>There are 1 Item in your Cart</p>
        <section className='flex justify-between item-center space-x-10'>
          <div className='w-{60%} space-y-3'>
            <table className='w-full'>
              <thead className='border-b'>
                <tr>
                  <td className='text-gray-40 py-2'>Product</td>
                  <td  className='text-gray-40 py-2'>Price</td>
                  <td  className='text-gray-40 py-2'>Quantity</td>
                  <td  className='text-gray-40 py-2'>Total</td>
                  <td  className='text-gray-40 py-2'>Delete</td>
                </tr>
              </thead>
              <tbody className='space-y-10'>
                <tr className='border-dashed border-b'>
                  <td className='py-5'>
                    <div className='flex items-center space-x-3 py-2'>
                      <img src='' alt="" />
                      <div>
                      <h1 className='text-xl font-bold'>Glass</h1>
                      <p className='font-mono'>lorem, ipsum</p>

                    </div>
                    
                    </div>
                  
                  </td>
                  <td className='text-sm'>24rupees</td>
                  <td>
                    <div className='border w-14 p-2'>
                      <input  className="w-20 h-1 outline-0 p-0"type="number" />
                    </div>
                  </td>
                  <td>24 rupees</td>
                  <td>
                    <button>
                      <AiFillDelete size={'1.5rem'}/>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='my-5'>
              <button className='flex items-center space-x-3  bg-gray-200 font-semibold rounded p-2'>
              <BsArrowLeft/>
              <span>Continue Shopping</span>

               </button>
            </div>
           <div className='w-[50%] h-fit border rounded p-7 space-y-5'>
            <div className='flex justify-between items-center border-b border-dashed p-2'>
            <h1>Sub Total</h1>
            <p>24rupees</p>
           </div>
           <div className='flex justify-between items-center border-b border-dashed p-2'>
            <h1>Discount</h1>
            <p>0rupees</p>
           </div> 
           <div className='flex justify-between items-center border-b  p-2'>
            <h1>Shipping</h1>
            <p>24rupees</p>
           </div> 
           <div className='flex justify-between items-center  p-2'>
            <h1>Sub Total</h1>
            <p>224rupees</p>
           </div>
           <button className='w-full p-2 bg-gray-800 text-center text-white'></button>
          </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Cartitem

