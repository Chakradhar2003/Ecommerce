import React from 'react'

const Login = () => {
    return (

        <div className="bg-gradient-to-r from-blue-500 to-pink-500 h-screen w-screen relative">
            <div className='flex justify-center items-center flex-col top-0 bottom-0 my-20 border-2 mx-32 left-0 right-0 absolute rounded-lg shadow-xl shadow-gray-700'>
                <h1 className='text-4xl mb-8 text-white font-semibold mt-2 '>Sign In</h1>
                <form className='flex flex-col  '>


                    <input type="text" placeholder='username' className='bg-transparent p-1 border-2 rounded-lg mb-2' />

                    <input type="password" placeholder='password' className='bg-transparent p-1 border-2 rounded-lg mb-2' />

                    <button className='mx-auto border-2 w-1/2 my-5 p-2 rounded-lg text-white text-xl font-bold shadow-xl shadow-gray-700 '>Login</button>
                    <a>Do not remember the password?</a>
                    <a>Create a new account</a>
                </form>
            </div>
        </div>

    )
}

export default Login
