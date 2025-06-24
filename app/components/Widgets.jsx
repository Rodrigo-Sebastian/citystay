import React from 'react'

import { CiWifiOn } from "react-icons/ci";
import { IoTvOutline } from "react-icons/io5";
import { PiOvenLight, 
        PiShowerLight, 
        PiBathtubLight, 
        PiDeskLight, 
        PiPersonSimpleSnowboardLight,
        PiBuildingApartmentLight,
        PiSwimmingPoolLight,
        PiSunHorizonLight, 
    } from "react-icons/pi";

const Widgets = () => {

    const widgets = [
        {id: 0, icon: <CiWifiOn />, title: 'Wifi'},
        {id: 1, icon: <IoTvOutline />, title: 'Tv'},
        {id: 2, icon: <PiOvenLight />, title: 'Kök'},
        {id: 3, icon: <PiShowerLight />, title: 'Dusch'},
        {id: 4, icon: <PiBathtubLight />, title: 'Badkar'},
        {id: 5, icon: <PiDeskLight />, title: 'Skrivbord'},
        {id: 6, icon: <PiPersonSimpleSnowboardLight />, title: 'Vinteraktiviteter'},
        {id: 7, icon: <PiBuildingApartmentLight />, title: 'Lägenhet'},
        {id: 8, icon: <PiSwimmingPoolLight />, title: 'Pool'},
        {id: 9, icon: <PiSunHorizonLight />, title: 'Sommaraktiviteter'},
    ];

  return (
    <div className='my-20 flex flex-col gap-8 lg:w-[1200px] mx-auto justify-center'>
        <h1 className='text-2xl text-center font-bold lg:text-start lg:text-6xl'>Berätta för dina gäster <br/> vad du kan erbjuda!</h1>
        <div className='flex flex-row flex-wrap gap-4 w-full mx-auto justify-center'>
            {widgets.map((widget) => (
                <div key={widget.id} className='border p-4 w-[200px] h-[100px] rounded-xl flex flex-col gap-2 items-start shadow-md'>
                    <span className='text-xl'>{widget.icon}</span>
                    <h1>{widget.title}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Widgets