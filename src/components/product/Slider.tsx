"use client"

import { useState } from 'react';
import { Swiper as SwiperObject } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './Slider.css';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

interface Props {
    images: string[];
    title: string;
    className?: string;
}
export const Slider = ({ images, title, className }: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

    return (
        <div className={className}>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                } as React.CSSProperties
                }
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {/* Slider principal */}
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                width={1024}
                                height={1024}
                                src={`/products/${image}`}
                                alt={title}
                                className='rounded-lg object-fill'
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {/* Slider secundario */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    images.map(image => (
                        <SwiperSlide key={image}>
                            <Image
                                width={300}
                                height={300}
                                src={`/products/${image}`}
                                alt={title}
                                className='rounded-lg object-fill'
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div >
    );
};
