import React from 'react'
import Link from 'next/link';

import { FcGoogle } from "react-icons/fc";
import { RiFacebookBoxFill, RiTwitterXFill, RiLinkedinBoxFill } from "react-icons/ri";

const LoginForm = () => {
  return (
         <form className='bg-gray-100 shadow-2xl mx-auto mt-20 border lg:w-[500px] w-[290px] rounded-2xl p-4'>
                  <div className='flex flex-col gap-4 items-center w-full'>
                    <h1 className='text-2xl font-bold'>Logga in</h1>
                    <div className='block'>
                      <h2 className='font-semibold mb-2'>Email</h2>
                      <input type='email' placeholder='Email' className='border w-fit p-2 rounded-md' />
                    </div>
                    <div>
                      <h2 className='font-semibold mb-2'>Password</h2> 
                      <input type='password' placeholder='Password' className='border w-fit p-2 rounded-md' />
                    </div>
                    <div className='flex flex-col gap-4 w-fit'>
                      <Link href="/" className='bg-blue-500 w-full p-2 rounded-md text-white transition ease-in-out duration-300 hover:bg-blue-800 text-center'>Logga in</Link>
                      <Link href="/Register" className='border border-gray-300 w-fit p-2 rounded-md bg-gray-200 transition ease-in-out duration-300 hover:bg-black hover:text-white text-center'>Skapa ett konto</Link>
                    </div>
                    <div className='flex flex-row gap-2 w-full items-center'>
                      <span className='block w-full h-[1px] bg-black'></span>
                      <h3>Eller</h3>
                      <span className='block w-full h-[1px] bg-black'></span>
                    </div>
                    <div className='flex flex-col gap-4 w-full pb-4'>
                      <button className='border w-full p-2 rounded-md flex flex-row justify-center gap-4 items-center transition ease-in-out duration-300 hover:bg-gray-200'><FcGoogle className='text-lg'/> Logga in med Google</button>
                      <button className='border w-full p-2 rounded-md flex flex-row justify-center gap-4 items-center transition ease-in-out duration-300 hover:bg-gray-200'><RiFacebookBoxFill className='text-lg text-blue-700' /> Logga in med Facebook</button>
                      <button className='border w-full p-2 rounded-md flex flex-row justify-center gap-4 items-center transition ease-in-out duration-300 hover:bg-gray-200'><RiTwitterXFill className='text-lg' /> Logga in med Twitter</button>
                      <button className='border w-full p-2 rounded-md flex flex-row justify-center gap-4 items-center transition ease-in-out duration-300 hover:bg-gray-200'><RiLinkedinBoxFill className='text-lg text-blue-500' /> Logga in med LinkedIn</button>
                    </div>
                  </div>
            </form>
  )
}

export default LoginForm