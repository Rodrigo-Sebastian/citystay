'use client'; 
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/images/citystay-logo.png';
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa6";
import Navigation from '../Navigation';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='lg:sticky top-0 z-20 bg-white'>
      <header className='hidden lg:flex flex-col items-center justify-between p-4 border-b pb-10'>
        <div className='header-navigation flex items-center justify-between w-full'>
          <Link href="/"> 
            <Image src={Logo} alt="CityStay Logo" width="150" height="100" />          
          </Link>
          {/* Search Bar */}
          <div className='flex flex-row items-center justify-between  px-4 py-2 border border-gray-400 rounded-full shadow-xl'>
            {/* Navigation */}
            <form className='flex flex-row items-center justify-between gap-6 pl-6 w-full'>
              <div className='flex flex-col border-l pl-2'>
                <label className='text-sm font-semibold'>Var</label>
                <input id='location' name="location" type='text' placeholder='Sök destination' className='outline-none text-sm  text-gray-700 placeholder-gray-500 bg-transparent'/>
              </div>
              <div className='flex flex-col border-l pl-2'>
                <label className='text-sm font-semibold '>Incheckning</label>
                <input id='checkin' name="location" type="text" placeholder='Lägg till datum' className='outline-none text-sm  text-gray-700 bg-transparent'/>
              </div>
              <div className='flex flex-col border-l pl-2'>
                <label className='text-sm font-semibold '>Utcheckning</label>
                <input id='checkout' name='locaiton' type='text' placeholder='Lägg till datum' className='outline-none text-sm  text-gray-700 placeholder-gray-500 bg-transparent'/>
              </div>
              <div className='flex flex-col border-l pl-2'>
                <label className='text-sm font-semibold '>Gäster</label>
                <input id='guest' name='guests' placeholder='Antal gäster' className='outline-none text-sm text-gray-700 placeholder-gray-500 bg-transparent'/>
              </div>
            </form>
            {/* Button */}
            <button className='p-3 rounded-full bg-blue-500 transition ease-in-out duration-300 hover:bg-blue-800'>
              <span className='text-white text-lg'>
                <FiSearch />
              </span>
            </button>
          </div>
          {/* User componenet */}
          <div className='flex items-center gap-6'>
            <h1 className='font-semibold text-sm md:hidden xl:block'>Hyr ut ditt boende på Citystay</h1>
            <button onClick={ToggleMenu} className='flex items-center w-fit p-2 gap-6 border rounded-full cursor-pointer transition ease-in-out duration-300 hover:shadow-xl'>
              <span className='text-xl'>
                <RxHamburgerMenu />
              </span>
              <div className='p-2 rounded-full bg-blue-500'>
                <span className='text-white text-lg'>
                  <FaUser />
                </span>
              </div>
            </button>
          </div>
          {/* User componenet - Widown */}
          {
            isOpen && (
            <div className='absolute top-20 z-10 right-[105px] border rounded-xl bg-white shadow-lg  w-[250px]'>
              <nav className='mt-4'>
                <ul className='flex flex-col gap-4'>
                  <Link href="/Register" className='p-2 hover:bg-gray-100'>
                    <span className='font-semibold'>Bli medlem</span>
                  </Link>
                  <Link href="/Login" className='p-2 hover:bg-gray-100'>
                    <span className='font-bold'>Logga in</span>
                  </Link>
                  <hr />
                  <Link href="/" className='p-2 hover:bg-gray-100'>
                    <span>Present kort</span>
                  </Link>
                  <Link href="/" className='p-2 hover:bg-gray-100'>
                    <span>Hyr ut ditt boende</span>
                  </Link>
                  <Link href="/" className='p-2 hover:bg-gray-100'>
                    <span>Hjälp center</span>
                  </Link>
                </ul>
              </nav>
            </div>
            )
          }
        </div>
      </header>
      <Navigation />
    </div>
  )
}

export default Header