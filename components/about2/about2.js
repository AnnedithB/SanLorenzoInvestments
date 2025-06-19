import React from 'react'
import abImg from '/public/images/about/why-1.png'
import abImg2 from '/public/images/about/why-1.webp'
import abImg3 from '/public/images/about/why-3.png'
import abImg4 from '/public/images/about/why-4.png'
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
                                <span className="text-[16px] text-[#ada282]">The Terra Luxe Difference</span>
                                <h2 className="text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative 
                        before:absolute before:content-[''] before:left-[-68px] 
                        before:top-[30px] before:transform before:-translate-y-1/2 
                        before:w-[60px] before:h-[1px] before:bg-[#c0b596] md:before:hidden">Why Choose Terra Luxe</h2>
                            </div>
                            <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">Every piece is meticulously crafted from premium Teak wood, selected for its natural beauty, durability, and resistance to South Florida's demanding climate conditions. Our upholstery and fabrics draw inspiration from luxury yacht interiors, engineered to withstand sun, salt, and moisture while maintaining their luxurious appearance. These sophisticated, timeless designs complement both contemporary and classic architectural styles, creating spaces that feel both current and enduring.</p>
                            <p className="text-[#666] text-[15px] leading-[28px] mb-[30px]">Built to withstand high-traffic environments while maintaining residential-level comfort and style, our furniture delivers commercial-grade performance perfect for hospitality and corporate applications. From initial consultation to final installation, our dedicated team manages every aspect of your furnishing project, ensuring timely delivery and flawless execution that exceeds expectations.</p>
                            <div className="mb-[50px] col:mb-[20px]">
                                <Link href="/contact" className="bg-[#c0b596] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[10px]  capitalize inline-block mt-[6px] transition ease-in-out duration-300 hover:bg-[#d4c291]
                        col:mb-[5px] col:mt-[15px] col:text-[15px] col:px-[18px] col:py-[8px] 
                        ">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-12">
                        <div className="relative mb-[20px]">
                            <div className="max-w-[520px] ml-auto">
                                <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
                                    <div className="relative">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg} alt="Terra Luxe Collection 1" />
                                    </div>
                                    <div className="relative md:hidden">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg2} alt="Terra Luxe Collection 2" />
                                    </div>
                                    <div className="relative md:hidden">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg3} alt="Terra Luxe Collection 3" />
                                    </div>
                                    <div className="relative md:hidden">
                                        <Image className="w-full h-[240px] object-cover rounded-lg" src={abImg4} alt="Terra Luxe Collection 4" />
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