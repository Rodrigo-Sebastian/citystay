import React from 'react'
import { PiWarehouseDuotone, 
        PiBuildingApartmentLight, 
        PiSnowflakeLight, 
        PiSunHorizon,
        PiSwimmingPoolLight,
        PiWheelchairDuotone,  
    } from "react-icons/pi";


const Navigation = () => {

    const navigation = [
        {id: 0, name: 'Hem', icon: <PiWarehouseDuotone/>, path: '/'},
        {id: 1, name: 'Lägenhet', icon: <PiBuildingApartmentLight/>, path: '/'},
        {id: 2, name: 'Stugor', icon: <PiSnowflakeLight/>, path: '/'},
        {id: 3, name: 'Sommar', icon: <PiSunHorizon/>, path: '/'},
        {id: 4, name: 'Pool', icon: <PiSwimmingPoolLight/>, path: '/'},
        {id: 5, name: 'Handikap', icon: <PiWheelchairDuotone/>, path: '/'},
        {id: 6, name: 'Minihus', icon: <PiWarehouseDuotone/>, path: '/'},
        {id: 7, name: 'Hotell', icon: <PiBuildingApartmentLight/>, path: '/'},
        {id: 8, name: 'berget', icon: <PiSnowflakeLight/>, path: '/'},
        {id: 9, name: 'stranden', icon: <PiSunHorizon/>, path: '/'},
        {id: 10, name: 'Simbasäng', icon: <PiSwimmingPoolLight/>, path: '/'},
        {id: 11, name: 'hiss', icon: <PiWheelchairDuotone/>, path: '/'},
        {id: 12, name: ' garage', icon: <PiWarehouseDuotone/>, path: '/'},
        {id: 13, name: 'Hostel', icon: <PiBuildingApartmentLight/>, path: '/'},
        {id: 14, name: 'Vinter', icon: <PiSnowflakeLight/>, path: '/'},
        {id: 15, name: 'Ledighet', icon: <PiSunHorizon/>, path: '/'},
    ]

  return (
    <nav className='navigation pt-6 mx-auto lg:w-full p-4'>
        <ul className='flex flex-row items-center justify-between gap-8 ml-8 lg:ml-0 overflow-x-auto'>
            {navigation.map((item) => (
                <li key={item.id}>
                    <a href={item.path} className='relative flex flex-col items-center gap-2 group'>
                        <span className='lg:text-2xl'>{item.icon}</span>
                        <h1 className='text-sm lg:text-md mb-2'>{item.name}</h1>
                        {/* underline hover effect */}
                        <span className='absolute left-0 bottom-0 w-0 h-[2px] rounded-full bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navigation