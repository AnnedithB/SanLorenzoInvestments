import React from 'react'
import abImg from '/public/images/estaterover/1.webp'
import abImg2 from '/public/images/estaterover/5.webp'
import abImg3 from '/public/images/estaterover/6.webp'
import abImg4 from '/public/images/estaterover/7.webp'
import Link from "next/link";
import Image from 'next/image';

const About2 = (props) => {

    return (
        <section className="pt-[120px] pb-[100px] md:py-[80px]">
            <div className="wraper">
                <div className="grid grid-cols-12 items-center gap-3">
                    <div className="col-span-6 md:col-span-12">
                        <div className="mb-[20px]">
                            <div className="text-left sm:text-center">
                                <span className="text-[16px] text-[#ada282]">Estate Rovers Excellence</span>
                                <h2 className="text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative 
                        before:absolute before:content-[''] before:left-[-68px] 
                        before:top-[30px] before:transform before:-translate-y-1/2 
                        before:w-[60px] before:h-[1px] before:bg-[#c0b596] md:before:hidden">Premium Mobility for Every Need</h2>
                            </div>
                            <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">Estate Rovers specializes in street-legal luxury golf carts and low-speed vehicles (LSVs) designed for discerning clients who demand both performance and elegance. Our vehicles combine cutting-edge technology with premium craftsmanship to deliver unparalleled mobility solutions.</p>
                            <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">From 4-seater intimate configurations to spacious 8-seater models, our vehicles feature 48v-72v lithium battery systems providing 40+ mile range and speeds up to 25mph. Each vehicle is DOT-compliant with full safety features including LED lighting packages, mirrors, seat belts, and advanced braking systems.</p>
                            <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">Perfect for luxury resorts, corporate campuses, gated communities, and high-end residential properties, our vehicles offer multimedia systems with Apple CarPlay, custom color options, and all-terrain capabilities. We provide complete fleet solutions including sales, rentals, maintenance, and custom builds tailored to your specific requirements.</p>
                            <div className="mb-[50px] col:mb-[20px]">
                                <Link href="/contact" className="bg-[#c0b596] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[10px]  capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#d4c291]
                        col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
                        ">Request Custom Quote</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-12">
                        <div className="relative mb-[20px]">
                            <div className="max-w-[520px] ml-auto">
                                <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                                    <div className="relative">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg} alt="Luxury Golf Cart Fleet" />
                                    </div>
                                    <div className="relative md:hidden">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg2} alt="Street Legal LSV" />
                                    </div>
                                    <div className="relative md:hidden">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg3} alt="Custom Design Options" />
                                    </div>
                                    <div className="relative md:hidden">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg4} alt="Premium Features" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2; 