import React from 'react'
import abImg from '/public/images/loft/2.jpg'
import abImg2 from '/public/images/loft/3.jpg'
import abImg3 from '/public/images/loft/4.jpg'
import abImg4 from '/public/images/loft/5.jpg'
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
                                <span className="text-[16px] text-[#ada282]">Aqua Loft Excellence</span>
                                <h2 className="text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative 
                        before:absolute before:content-[''] before:left-[-68px] 
                        before:top-[30px] before:transform before:-translate-y-1/2 
                        before:w-[60px] before:h-[1px] before:bg-[#c0b596] md:before:hidden">Luxury Floating Events & Charters</h2>
                            </div>
                            <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">Aqua Loft specializes in luxury floating venues and private charters on Miami's pristine waters. Our premium houseboats provide the perfect setting for corporate events, private celebrations, weddings, and exclusive gatherings with unparalleled elegance and comfort.</p>
                            <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">Our fleet features various capacity options from intimate 6-guest vessels to spacious 25+ guest floating venues, each equipped with full living spaces, elegant terraces, and luxury amenities. Professional navigation crews ensure safe and smooth sailing while our event coordination team handles every detail of your experience.</p>
                            <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">We offer complete event services including gourmet catering, premium bar service, entertainment coordination, and customizable experiences. Whether hosting a corporate retreat, celebrating a milestone, or creating an unforgettable wedding venue, Aqua Loft delivers exclusive floating experiences that exceed expectations.</p>
                            <div className="mb-[50px] col:mb-[20px]">
                                <Link href="/contact" className="bg-[#c0b596] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[10px]  capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#d4c291]
                        col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
                        ">Request Event Quote</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-12">
                        <div className="relative mb-[20px]">
                            <div className="max-w-[520px] ml-auto">
                                <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                                    <div className="relative">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg} alt="Luxury Floating Venue" />
                                    </div>
                                    <div className="relative md:hidden">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg2} alt="Private Charter Experience" />
                                    </div>
                                    <div className="relative md:hidden">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg3} alt="Event Hosting" />
                                    </div>
                                    <div className="relative md:hidden">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg4} alt="Miami Waters" />
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