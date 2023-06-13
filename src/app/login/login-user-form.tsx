import React from 'react'

export default function LoginUserForm() {
  return (
        <div className="h-screen overflow-hidden flex items-center justify-center" >
            <div className="w-full h-screen md:flex">
            <div
                className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-[#0a7f94] to-gray-200 i justify-around items-center hidden rounded-tr-2xl rounded-lr-2xl">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">House NET</h1>
                    <p className="text-white mt-1">Your Automation tool to gain clean leads</p>
                    <button type="submit" className="block w-28 bg-white text-gray-600 mt-4 py-2 rounded-2xl font-bold mb-2 hover:bg-gray-400 hover:text-white hover:shadow-md">Read More</button>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form className="bg-white">
                    <div className='w-full flex-col flex justify-center items-center'>
                        
                        <div className='flex flex-row'><h1 className="text-[#02b0cd] font-bold text-2xl mb-1 custom-smaller-width mr-2">House</h1>
                        <p className="text-[#c9caca] font-bold text-2xl mb-1 custom-smaller-width">Net</p>
                        </div>
                        <div className='ml-5 mr-5 flex flex-row flex-inline text-xxs'>
                            <p className="text-sm font-normal text-gray-600 mb-7 custom-smaller-width sm:text-center flex flex-row ml-50 mr-1">Welcome</p>
                            <p className="text-sm font-normal text-gray-600 mb-7 custom-smaller-width sm:text-center flex flex-row ml-50"> back</p>
                        </div>
                        
                    </div>
                    <div className="w-full flex-col flex justify-center items-center">
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd" />
                            </svg>
                            <input className="pl-2 outline-none border-none w-full" type="text" name="" id="" placeholder="Full name" />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                </svg>
                                <input className="pl-2 outline-none border-none w-full" type="text" name="" id="" placeholder="Username" />
                        </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <input className="pl-2 outline-none border-none w-full" type="text" name="" id="" placeholder="Email Address" />
                       </div>
                       <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                        fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <input className="pl-2 outline-none border-none w-full" type="text" name="" id="" placeholder="Password" />
                        </div>
                        <button type="submit" className="block w-full bg-[#01bed2] mt-4 py-2 rounded-2xl text-white font-semibold mb-2  hover:bg-[#4dd1e0] hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width">Login</button>
                        <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
                    </div>
                </form>
            </div>
        </div>
        </div>
  )
}
