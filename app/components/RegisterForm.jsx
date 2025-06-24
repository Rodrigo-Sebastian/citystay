'use client';

import Link from 'next/link';
import React, { useState } from 'react'
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";

const RegisterForm = () => {

    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(<PiEyeLight />);

    const handlePassword = () => {
        if(type === 'password'){
            setType('text');
            setIcon(<PiEyeLight />);
        } else {
            setType('password');
            setIcon(<PiEyeSlashLight />);
        }
    };

  return (
    <form className='bg-gray-100 shadow-2xl mx-auto mt-20 border lg:max-w-[500px] max-w-[350px] rounded-2xl p-8'>
        <div className='flex flex-col gap-4 items-center w-full py-4'>
            <h1 className='text-2xl font-bold'>Register</h1>
            <div className='block w-full'>
                <h2 className='font-semibold mb-2'>Namn</h2>
                <input type='name' placeholder='Namn' className='border w-full p-2 rounded-md' />
            </div>
            <div className='block w-full'>
                <h2 className='font-semibold mb-2'>Efternamn</h2>
                <input type='lastname' placeholder='Lastname' className='border w-full p-2 rounded-md' />
            </div>
            <div className='block w-full'>
                <h2 className='font-semibold mb-2'>Email</h2>
                <input type='email' placeholder='Email' className='border w-full p-2 rounded-md' />
            </div>
            <div className='block w-full'>
                <h2 className='font-semibold mb-2'>Password</h2> 
                <div className='flex gap-2 w-full items-center'>
                <input type={type} name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} className='border w-full p-2 rounded-md' />
                <span className='cursor-pointer' onClick={handlePassword}>{icon}</span>
                </div>
            </div>
            <div className='block w-full'>
                <h2 className='font-semibold mb-2'>Confirm Password</h2> 
                <div className='flex gap-2 w-full items-center'>
                    <input type={type} name='password' placeholder='Confirm Password' onChange={(e) => setPassword(e.target.value)} className='border w-full p-2 rounded-md' />
                    <span className='cursor-pointer' onClick={handlePassword}>{icon}</span>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-full'>
                <Link href="/Login" className='bg-blue-500 w-full p-2 rounded-md text-white transition ease-in-out duration-300 hover:bg-blue-800 text-center'>Registrera dig</Link>
                <Link href="/Login" className='border border-gray-300 w-full p-2 rounded-md bg-gray-200 transition ease-in-out duration-300 hover:bg-black hover:text-white text-center'>Logga in</Link>
            </div>
        </div>
    </form>
  )
}

export default RegisterForm