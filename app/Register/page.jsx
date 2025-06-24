import React from 'react'
import RegisterForm from '../components/RegisterForm'
import RegisterWidget from '../components/RegisterWidget'
import LoginHeader from '../Login/LoginHeader'

const page = () => {
  return (
    <section>
        <LoginHeader />
        <div className='flex flex-col lg:flex-row items-center justify-center gap-32 m-auto mt-20'>
            <div className='lg:w-[700px] flex justify-center'>
            <h1 className='text-2xl lg:text-5xl text-center'>
                Det är enkelt att registerar dig hos <span className='text-5xl lg:text-8xl text-blue-500 font-bold'>CityStay</span> <br/> 
            </h1>
            </div>
        </div>
        <RegisterForm />
        <RegisterWidget />
    </section>
  )
}

export default page