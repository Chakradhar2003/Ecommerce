import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Add, AddCircle, Brightness1, Remove, RemoveCircle } from '@material-ui/icons'
const Cart = () => {
    return (
        <>
            <Navbar />
            <div className='p-5 w-full'>
                <h1 className='text-4xl text-center'>YOUR CART</h1>
                <div className="top flex flex-row pt-12 justify-around items-center">
                    <button className='border-2 text-xs sm:text-xl font-semibold border-black p-1 shadow-xl'>Continue Shopping</button>
                    <span className='underline text-xs sm:text-lg'>Shopping Bag (2)</span>
                    <span className='underline text-xs sm:text-lg'>Wishlist (0)</span>
                    <button className='border-2 text-xs sm:text-xl text-white  bg-black font-semibold border-black p-1 shadow-xl'>Checkout Now</button>
                </div>
                <div className='bottom flex flex-col lg:flex-row'>
                    <div className=" flex px-5 mt-8 flex-col w-full lg:w-2/3">
                        <div className='flex flex-row my-2 justify-self-center '>
                            <img src="https://media1.popsugar-assets.com/files/thumbor/r-H2D7LclaSMDAoEV9iBbODdRJs/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/07/27/995/n/1922729/8d82874962e1c1ce7992d1.75767700_/i/best-nike-training-shoes.jpg" alt="" className='w-[100px] shadow-xl rounded-xl h-[100px] sm:h-[150px] sm:w-[150px] object-cover' />
                            <div className='sm:ml-10 sm:text-xl  ml-5 text-xs w-1/3'>
                                <p className='sm:mb-1 '><b>Product: </b>Nike Sneakers</p>
                                <p className='sm:mb-1'><b>ID: </b>9321239376</p>
                                <p className=' text-xs sm:mb-1' ><Brightness1 className='text-red-600 p-1 pl-0 sm:p-0' /></p>
                                <p className='sm:mb-1'><b>Size: </b>38</p>

                            </div>
                            <div className=' sm:text-xl font-semibold text-center sm:w-1/3 text-xs'>
                                <p className='p-3 sm:text-2xl whitespace-nowrap' ><Add className='p-1' />1<Remove className='p-1' /></p>
                                <p className='sm:text-3xl font-normal text-lg'>30 $</p>
                            </div>

                        </div>
                        <hr className='' />

                        <div className='flex flex-row my-2 justify-self-center'>
                            <img src="https://images.pexels.com/photos/3399995/pexels-photo-3399995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='w-[100px] shadow-xl rounded-xl h-[100px] sm:h-[150px] sm:w-[150px] object-cover' />
                            <div className='ml-5 sm:ml-10 sm:text-xl text-xs w-1/3'>
                                <p className='sm:mb-1'><b>Product: </b>T Shirt</p>
                                <p className='sm:mb-1'><b>ID: </b>93212373289</p>
                                <p className='sm:mb-1'><Brightness1 className='text-gray-600 p-1 pl-0 sm:p-0' /></p>
                                <p className='sm:mb-1'><b>Size: </b>36</p>

                            </div>
                            <div className=' font-semibold text-center sm:w-1/3'>
                                <p className='p-3 text-xs sm:text-2xl whitespace-nowrap' ><Add className='p-1' />2<Remove className='p-1' /></p>
                                <p className='sm:text-3xl font-normal text-lg'>80 $</p>
                            </div>

                        </div>
                    </div>
                    <div className=' w-full p-5 h-fit mt-8 border-slate-200 border-2 md:w-3/4 mx-auto lg:w-1/4'>
                        <h1 className='text-center text-2xl '>ORDER SUMMARY</h1>
                        <div className='flex row justify-between mb-2 mt-4'>
                            <p className='font-semibold'>Subtotal</p>
                            <p>$ 880</p>
                        </div>
                        <div className='flex row justify-between my-2'>
                            <p className='font-semibold'>Shipping cost</p>
                            <p>$ 5.90</p>
                        </div>
                        <div className='flex row justify-between my-2'>
                            <p className='font-semibold'>Discount</p>
                            <p>-$ 5.90</p>
                        </div>
                        <div className='flex row justify-between my-2 text-2xl'>
                            <p className='font-semibold'>Total</p>
                            <p>$ 80</p>
                        </div>
                        <button className='w-full m-auto border-black bg-black text-white p-2'>CHECKOUT</button>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Cart
