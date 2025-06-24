import React from 'react'
import { RiTwitterXLine, RiInstagramLine, RiFacebookFill } from "react-icons/ri";


const Footer = () => {

    const footerLinks = [
        {id: 0, name: 'Populärt', url: '/'},
        {id: 1, name: 'Konst och kultur', url: '/'},
        {id: 2, name: 'Friluftsliv', url: '/'},
        {id: 3, name: 'Berg', url: '/'},
        {id: 4, name: 'Strand', url: '/'},
        {id: 5, name: 'Kategorier', url: '/'},
    ]

    const footerInfoHelp = [
        {id: 0, name: 'Hjälpcenter', url: '/'},
        {id: 1, name: 'StayCover', url: '/'},
        {id: 2, name: 'Antidiskriminering', url: '/'},
        {id: 3, name: 'Stöd för funktionsnedsättning', url: '/'},
        {id: 4, name: 'Avbokningsalternativ', url: '/'},
        {id: 5, name: 'Rapportera grannskapsproblem', url: '/'},
    ]

    const footerInfoUser = [
        {id: 0, name: 'Hyr ut ditt boende på Citystay', url: '/'},
        {id: 1, name: 'StayCover för värdar', url: '/'},
        {id: 2, name: 'Värdresurser', url: '/'},
        {id: 3, name: 'Community-form', url: '/'},
        {id: 4, name: 'Delta i en gratis värdskapslektion', url: '/'},
        {id: 5, name: 'Hitta en medvärd', url: '/'},
    ]

    const footerInfoSite = [
        {id: 0, name: 'Pressrum', url: '/'},
        {id: 1, name: 'Nya funktioner', url: '/'},
        {id: 2, name: 'Lediga tjänster', url: '/'},
        {id: 3, name: 'Investera', url: '/'},
        {id: 4, name: 'Nödboenden', url: '/'},
    ]

  return (
    <footer className='bg-zinc-100 lg:pb-8 mx-auto p-4'>
        <div className='footer-container pt-5'>
            <h1 className='font-semibold text-2xl'>Inspiration för framtida resor</h1>
            {/* Top Footer Links */}
            <div className='mt-5'>
                <ul className='lg:flex items-center gap-7 hidden'>
                    {footerLinks.map((link) =>(
                        <li key={link.id}>
                            <a href={link.url} className='text-[12px] lg:text-lg font-medium text-gray-600 transition ease-in-out duration-300 hover:underline'>{link.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <hr className='my-10 border-gray-300' />
            {/* Middle Footer Links */}
            <div className='flex flex-col gap-6 p-4 lg:flex-row lg:justify-between mb-20 lg:p-0'>
                <div>
                    <h1 className='font-semibold mb-4'>Stöd</h1>
                    <ul className='flex flex-col items-start gap-2'>
                        {footerInfoHelp.map((link) =>(
                            <li key={link.id}>
                                <a href={link.url} className='font-medium text-gray-600 transition ease-in-out duration-300 hover:underline'>{link.name}</a>
                            </li>
                        ))}
                    </ul>   
                </div>
                <hr className='lg:hidden'/>
                <div>
                    <h1 className='font-semibold mb-4'>Användarinformation</h1>
                    <ul className='flex flex-col items-start gap-2'>
                        {footerInfoUser.map((link) =>(
                            <li key={link.id}>
                                <a href={link.url} className='font-medium text-gray-600 transition ease-in-out duration-300 hover:underline'>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr className='lg:hidden'/>
                <div>
                    <h1 className='mb-4 text-blue-500 font-bold'>Citystay</h1>
                    <ul className='flex flex-col items-start gap-2'>
                        {footerInfoSite.map((link) =>(
                            <li key={link.id}>
                                <a href={link.url} className='font-medium text-gray-600 transition ease-in-out duration-300 hover:underline'>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className='my-10 border-gray-300' />
            {/* Bottom Footer Links */}
            <div className='flex flex-col items-start gap-4 p-4 lg:flex-row justify-between lg:items-center lg:p-0 pb-5'>
                <div className="lg:flex flex-col items-start lg:flex-row lg:items-center gap-2 hidden">
                    <h2>&copy; {new Date().getFullYear()} CityStay. Alla rättigheter reserverade.</h2>
                    <ul className='flex items-center gap-5'>
                        <li className='flex items-center gap-2'>
                            <span className='h-[2px] w-[2px] bg-black rounded-full'></span>
                            <a>Integritet</a>
                        </li>
                        <li className='flex items-center gap-2'>
                            <span className='h-[2px] w-[2px] bg-black rounded-full'></span>
                            <a>Vilkor</a>
                        </li>
                        <li className='flex items-center gap-2'>
                            <span className='h-[2px] w-[2px] bg-black rounded-full'></span>
                            <a>Rodrigo Sebastian</a>
                        </li>
                        <li className='flex items-center gap-2'>
                            <span className='h-[2px] w-[2px] bg-black rounded-full'></span>
                            <a>Github</a>
                        </li>
                    </ul>
                </div>
                <div className=" flex items-center gap-5">
                    <span className='text-md bg-black rounded-md text-white p-1'>
                        <RiTwitterXLine />
                    </span>
                    <span className='text-md bg-black rounded-md text-white p-1'>
                        <RiInstagramLine />
                    </span>
                    <span className='text-md bg-black rounded-md text-white p-1'>
                        <RiFacebookFill /> 
                    </span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer