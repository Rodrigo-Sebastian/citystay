import React from 'react'
import Image from 'next/image'

import LoginHeader from './LoginHeader'
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer/Footer';

import LoginLogo from '../../public/images/mobile.avif';
import LoginMap from '../../public/images/login-img.png';
import Widgets from '../components/Widgets';



const page = () => {
  return (
    <>
      <LoginHeader/>
      {/* Hero */}
      <div className='flex flex-col lg:flex-row items-center justify-center gap-32 m-auto mt-20'>
        <div className='lg:w-[700px] flex justify-center'>
          <h1 className='text-2xl lg:text-5xl text-center'>
            Välkomen till <span className='text-5xl lg:text-8xl text-blue-500 font-bold'>CityStay</span> <br/> 
            Här kan du hitta och boka boende i hela Sverige. <br/>
          </h1>
        </div>
        <div className='w-[350px] lg:w-[500px]'>
          <Image src={LoginMap} alt='google mapp img' width={500} height={300} className='rounded-lg' />
        </div>
      </div>
      {/* Login form */}
      < LoginForm />
      {/* Info */}
      <div className='mt-20 flex flex-col gap-8 items-center justify-center mx-auto'>
          <h1 className='text-center text-2xl font-bold lg:text-6xl lg:w-[600px]'>Den mest använda hyres app för boende runt om i världen!</h1>
          <Image alt='Login-img' src={LoginLogo} width={600} height={400}/>
      </div>
      {/* Widgets */}
      <Widgets />
      <Footer />
    </>
  )
}

export default page