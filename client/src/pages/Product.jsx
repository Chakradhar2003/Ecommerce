import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Brightness1, Remove } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState({});
    const [colors, setColors] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setColors(res.data.colors)
                setProduct(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, [id])
    return (
        <>
            <Navbar />
            <div className='flex pt-5 -mb-28 w-full sm:flex-row flex-col pb-40'>
                <div className='flex-1 h-1/2'>
                    <img src={product.img} alt="" className='h-[250px] sm:h-[500px] w-full object-cover mx-auto px-5 ' />
                </div>
                <div className='flex-1 px-5 py-2 h-fit'>
                    <h1 className='text-3xl font-bold pb-1'>{product.title}</h1>
                    <span className='block w-full text-lg pb-1'>{product.desc}</span>
                    <h2 className='text-3xl font-sans font-light'>$ {product.price}</h2>
                    <div className='pt-2 text-lg flex justify-between pr-10'>
                        <span>Color<span>{product.color.map((c => {

                            <Brightness1 style={{ color: product.color[0] }} />


                        }))


                        }
                        </span>
                            <Brightness1 style={{ color: "red" }} /></span>
                        <div>
                            <p className='inline '>Size</p>
                            <select name="" id="" className=' outline-none border-2 border-black light p-1 ml-3 text-sm rounded-lg'>

                                <option value="" >XS</option>
                                <option value="" >S</option>
                                <option value="" >M</option>
                                <option value="" >L</option>
                                <option value="" >XL</option>
                                <option value="" >XXL</option>
                            </select>
                        </div>
                    </div>
                    <div className='pt-10 text-lg flex justify-between pr-10'>
                        <span><Remove /><p className='inline p-2 m-2 border-2 border-teal-500 rounded-xl'>1</p><Add /></span>
                        <button className='border-2 px-2 border-teal-500 py-1 hover:bg-gray-300 cursor-pointer font-bold'>Add to cart</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </>
    )
}

export default Product
