import React from 'react'

import { PiHouseLineLight, PiClockLight, PiChatDotsLight } from "react-icons/pi";

const RegisterWidget = () => {

    const features = [
        {id: 0, icon: <PiHouseLineLight />, title: 'Skapa annons', description: 'Skapa en annons för ditt boende på några minuter.'},
        {id: 1, icon: <PiClockLight />, title: 'Få bokningar', description: 'Få bokningar från gäster som är intresserade av att bo hos dig.'},
        {id: 2, icon: <PiChatDotsLight />, title: 'Kommunicera', description: 'Kommunicera med gäster och svara på frågor.'}
    ];

  return (
    <div className='flex flex-wrap lg:flex-row justify-center items-center gap-12 my-20 lg:text-center'>
        {features.map((features) => (
            <div key={features.id} className='flex flex-col items-center text-center'>
                <span className='text-4xl p-4 bg-gray-200 rounded-xl'>{features.icon}</span>
                <h1 className='font-semibold mt-4'>{features.title}</h1>
                <p className='w-[250px]'>{features.description}</p>
            </div>
        ))}
    </div>
  )
}

export default RegisterWidget