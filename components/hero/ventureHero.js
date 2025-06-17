import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from "next/link";


const Hero = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="hero relative h-[95vh] lg:h-[500px] col:h-[450px] overflow-hidden z-20 flex flex-col justify-center">
            <div className="hero-slider flex flex-col">
            <div className="slide-inner slide-bg-image h-[95vh] lg:h-[500px] col:h-[450px] relative">
                <div 
                    className="absolute inset-0 bg-[url('/images/slider/venture=hero.webp')] bg-cover bg-center bg-no-repeat"
                >
                </div>
                <div className="absolute inset-0 bg-onyx-charcoal/90 z-10"></div>
                <div className="relative z-20 h-full flex items-center justify-center">
                    <div className="wraper w-full">
                        <div className="slide-caption max-w-[700px] mx-auto text-center">
                            <p className="text-white text-[20px] font-light col:text-[18px]"> From premium furnishings to innovative mobility solutions, San Lorenzo Investments elevates experiences through strategically curated ventures that define tomorrow's luxury standards.</p>
                            <h2 className="text-white text-[60px] leading-[90px] lg:text-[42px] lg:leading-[56px] 
                     col:text-[25px] col:leading-[35px] font-normal my-[33px] md:my-[20px]"><span>Curating Excellence</span> <br /> <span>Across Luxury Markets</span></h2>
                            
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Hero;