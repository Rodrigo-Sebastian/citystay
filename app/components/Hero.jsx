'use client';

import React, { useRef } from 'react';
import { IoHeartOutline, IoStarSharp, IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {

    const sampleData = [
        {
            id: 0,
            title: "Mysigt Lägenhet i Stockholm",
            rating: 4.8,
            info: "4 gäster · 2 sovrum · 2 sängar · 1 badrum",
            price: "1,200 SEK /",
            images: [
                "/images/apartment-1.jpg",
                "/images/apartment-2.jpg",
                "/images/apartment-3.jpg",
                "/images/apartment-4.jpg",
            ]
        },
        /* Second Sample */
        {
            id: 1,
            title: "Trevligt stuga i Halmstad",
            rating: 3.8,
            info: "3 gäster · 2 sovrum · 2 sängar · 1 badrum",
            price: "800 SEK /",
            images: [
                "/images/apartment-2.jpg",
                "/images/apartment-1.jpg",
                "/images/apartment-4.jpg",
                "/images/apartment-3.jpg",
            ]
        },
        /* Third Sample */
        {
            id: 2,
            title: "Bekvämt hus i Göteborg",
            rating: 4.2,
            info: "2 gäster · 1 sovrum · 2 sängar · 1 badrum",
            price: "1,500 SEK /",
            images: [
                "/images/apartment-3.jpg",
                "/images/apartment-2.jpg",
                "/images/apartment-1.jpg",
                "/images/apartment-4.jpg",
            ]
        },
        /* Fourth Sample */
        {
            id: 3,
            title: "Trevligt Lägenhet i Malmö city",
            rating: 4.8,
            info: "5 gäster · 3 sovrum · 3 sängar · 1 badrum",
            price: "2,000 SEK /",
            images: [
                "/images/apartment-4.jpg",
                "/images/apartment-1.jpg",
                "/images/apartment-3.jpg",
                "/images/apartment-2.jpg",
            ]
        },
        /* fifth Sample */
        {
            id: 4,
            title: "Trevligt Lägenhet i Malmö city",
            rating: 4.8,
            info: "5 gäster · 3 sovrum · 3 sängar · 1 badrum",
            price: "2,000 SEK /",
            images: [
                "/images/apartment-4.jpg",
                "/images/apartment-1.jpg",
                "/images/apartment-3.jpg",
                "/images/apartment-2.jpg",
            ]
        },
        /* sixth Sample */
        {
            id: 5,
            title: "Trevligt Lägenhet i Malmö city",
            rating: 4.8,
            info: "5 gäster · 3 sovrum · 3 sängar · 1 badrum",
            price: "2,000 SEK /",
            images: [
                "/images/apartment-4.jpg",
                "/images/apartment-1.jpg",
                "/images/apartment-3.jpg",
                "/images/apartment-2.jpg",
            ]
        },
         /* seventh Sample */
         {
            id: 6,
            title: "Trevligt Lägenhet i Malmö city",
            rating: 4.8,
            info: "5 gäster · 3 sovrum · 3 sängar · 1 badrum",
            price: "2,000 SEK /",
            images: [
                "/images/apartment-4.jpg",
                "/images/apartment-1.jpg",
                "/images/apartment-3.jpg",
                "/images/apartment-2.jpg",
            ]
        },
         /* eight Sample */
         {
            id: 7,
            title: "Trevligt Lägenhet i Malmö city",
            rating: 4.8,
            info: "5 gäster · 3 sovrum · 3 sängar · 1 badrum",
            price: "2,000 SEK /",
            images: [
                "/images/apartment-4.jpg",
                "/images/apartment-1.jpg",
                "/images/apartment-3.jpg",
                "/images/apartment-2.jpg",
            ]
        },
         /* ninenth Sample */
         {
            id: 8,
            title: "Trevligt Lägenhet i Malmö city",
            rating: 4.8,
            info: "5 gäster · 3 sovrum · 3 sängar · 1 badrum",
            price: "2,000 SEK /",
            images: [
                "/images/apartment-4.jpg",
                "/images/apartment-1.jpg",
                "/images/apartment-3.jpg",
                "/images/apartment-2.jpg",
            ]
        },
         /* tenth Sample */
         {
            id: 9,
            title: "Trevligt Lägenhet i Malmö city",
            rating: 4.8,
            info: "5 gäster · 3 sovrum · 3 sängar · 1 badrum",
            price: "2,000 SEK /",
            images: [
                "/images/apartment-4.jpg",
                "/images/apartment-1.jpg",
                "/images/apartment-3.jpg",
                "/images/apartment-2.jpg",
            ]
        },
    ];

    return (
        <div className='w-full h-full flex flex-row justify-center items-center flex-wrap gap-8 lg:p-4 my-12'>
            {sampleData.map((item, index) => {
                const swiperRef = useRef(null); // Skapa en ref för varje Swiper-komponent
                return (
                    <div key={item.id} className='flex flex-col max-w-[290px] gap-4'>
                        {/* Carousel */}
                        <div className='relative'>
                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, Pagination]}
                                navigation={{
                                    nextEl: `.swiper-button-next-${index}`,  // Unik klass för varje Swiper
                                    prevEl: `.swiper-button-prev-${index}`,  // Unik klass för varje Swiper
                                }}
                                pagination={{
                                    clickable: true,
                                    renderBullet: (index, className) => {
                                        return (
                                            `<span class="${className} custom-bullet"></span>` // Lägg till en anpassad CSS-klass
                                        );
                                    },
                                }}
                                className='h-80'
                            >
                                {item.images.map((image, index) => (
                                    <SwiperSlide key={index}>
                                        <img src={image} alt={item.title} className='h-full w-full object-cover rounded-xl' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Like Heart Icon */}
                            <div className='absolute top-2 right-2 z-10 bg-white p-2 rounded-full'>
                                <span><IoHeartOutline /></span>
                            </div>

                            {/* Custom navigation buttons inside the image */}
                            <div className={`swiper-button-next-${index} absolute cursor-pointer top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-500 p-1 rounded-full z-10`}>
                                <span className="text-2xl"><IoChevronForwardOutline /></span>
                            </div>
                            <div className={`swiper-button-prev-${index} absolute cursor-pointer top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-500 p-1 rounded-full z-10`}>
                                <span className="text-2xl"><IoChevronBackOutline /></span>
                            </div>
                        </div>

                        {/* Details info */}
                        <div className='flex flex-col gap-2 p-2'>
                            <div className='flex flex-row justify-between items-center'>
                                <h3 className='font-semibold'>{item.title}</h3>
                                <div>
                                    <span className='flex flex-row items-center gap-1'><IoStarSharp /> {item.rating}</span>
                                </div>
                            </div>
                            <div>
                                <span className='text-gray-500'>{item.info}</span>
                            </div>
                            <div className='flex flex-row justify-start gap-1 items-center'>
                                <h1 className='font-semibold'>{item.price}</h1>
                                <p>natten</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
    }

export default Hero