import React from 'react'
import abImg from '/public/images/rp/3.jpg'
import abImg2 from '/public/images/rp/4.webp'
import abImg3 from '/public/images/rp/2.jpg'
import abImg4 from '/public/images/rp/1.jpg'
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
                                <span className="text-[16px] text-[#ada282]">The Resident's Pantry Advantage</span>
                                <h2 className="text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative 
                        before:absolute before:content-[''] before:left-[-68px] 
                        before:top-[30px] before:transform before:-translate-y-1/2 
                        before:w-[60px] before:h-[1px] before:bg-[#c0b596] md:before:hidden">Why Property Owners Choose Us</h2>
                            </div>
                            <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">Our micro markets are unmanned retail spaces designed specifically for residential complexes, providing 24/7 convenience to your residents without any cost to you as the property owner. We handle everything from installation to daily operations, requiring only space, power, and an internet connection from your end.</p>
                            <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">Each micro market features state-of-the-art refrigerated cases stocked with fresh foods, healthy salads, gourmet sandwiches, premium beverages, fresh fruits, and vegetables. Our advanced self-checkout kiosks accept credit cards, debit cards, cash, and even fingerprint payments, making transactions seamless for residents of all ages.</p>
                            <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">We partner with local operators who restock regularly, ensuring fresh inventory and optimal variety. This amenity helps you retain current residents while attracting new ones, as modern renters increasingly value convenience and accessibility in their living spaces.</p>
                            <div className="mb-[50px] col:mb-[20px]">
                                <Link href="/contact" className="bg-[#c0b596] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[10px]  capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#d4c291]
                        col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
                        ">Request Installation Consultation</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-12">
                        <div className="relative mb-[20px]">
                            <div className="max-w-[520px] ml-auto">
                                <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                                    <div className="relative">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg} alt="Micro Market Installation" />
                                    </div>
                                    <div className="relative md:hidden">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg2} alt="Fresh Food Selection" />
                                    </div>
                                    <div className="relative md:hidden">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg3} alt="Self-Checkout System" />
                                    </div>
                                    <div className="relative md:hidden">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg4} alt="Resident Convenience" />
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