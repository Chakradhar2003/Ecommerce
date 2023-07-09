import React from 'react'
import photo from '../components/bg2.jpg'
const Register = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-pink-500 h-screen w-screen relative">
            <div className='flex justify-center items-center flex-col top-0 bottom-0 my-20 border-2 mx-32 left-0 right-0 absolute rounded-lg shadow-xl shadow-gray-700'>
                <h1 className='text-4xl mb-8 text-white font-semibold mt-2 '>Create an Account</h1>
                <form className='flex flex-col  '>
                    <input type="text" placeholder='name' className='bg-transparent p-1 border-2 rounded-lg mb-2 ' />
                    <input type="text" placeholder='last name' className='bg-transparent p-1 border-2 rounded-lg mb-2' />
                    <input type="text" placeholder='username' className='bg-transparent p-1 border-2 rounded-lg mb-2' />
                    <input type="email" placeholder='email' className='bg-transparent p-1 border-2 rounded-lg mb-2' />
                    <input type="password" placeholder='password' className='bg-transparent p-1 border-2 rounded-lg mb-2' />
                    <input type="password" placeholder='confirm password' className='bg-transparent p-1 border-2 rounded-lg mb-2' />
                    <p className='text-white font-semibold'>
                        By creating an account, I consent to the processing of my personal data in accoradance with the <b>Privacy Policy</b>
                    </p>
                    <button className='mx-auto border-2 w-1/4 my-5 p-2 rounded-lg text-white text-xl font-bold shadow-xl shadow-gray-700 '>Create</button>
                </form>
            </div>
        </div>
    )
}

export default Register
