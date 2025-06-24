import React from 'react'
import Link from 'next/link';
import { FiSearch } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { PiUserCircleLight } from "react-icons/pi";

const ResponsiveHeader = () => {
  return (
    <header className='sticky bottom-0 z-10 bg-white'>
        <nav className='p-4'>
            <ul className='flex items-center justify-center gap-8'>
                <Link href="/" className='responsive-link flex flex-col items-center gap-2'>
                    <span className='text-3xl text-gray-500'><FiSearch/></span>
                    <h1 className='text-gray-500'>Utforska</h1>
                </Link>
                <Link href="/" className='flex flex-col items-center gap-2'>
                    <span className='text-3xl text-gray-500'><CiHeart/></span>
                    <h1 className='text-gray-500'>Önskelista</h1>
                </Link>
                <Link href="/" className='flex flex-col items-center gap-2'>
                    <span className='text-3xl text-gray-500'><PiUserCircleLight /></span>
                    <h1 className='text-gray-500'>Logga in</h1>
                </Link>
            </ul>
        </nav>
    </header>
  )
}

export default ResponsiveHeader