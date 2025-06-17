import React from 'react'
import ConsultingFrom from '../ConsultingFrom/ConsultingFrom'

const ConsultingArea = (props) => {
    return (
        <section id='consultingcontact' className="relative bg-center bg-cover bg-no-repeat py-[100px] z-10 
   before:content-[''] before:bg-[rgba(21,26,48,0.9)] before:w-full before:h-full before:absolute before:left-0 before:-z-10 before:top-0" style={{ backgroundImage: `url('/images/contact/1.jpg')`, backgroundSize: 'cover' }}>
            <div className="wraper">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-5 md:col-span-12 ">
                        <div className="contact-text md:mb-[30px]">
                            <div className="title">
                                <span className="text-[16px] text-[#ada282]">Strategic Partnership Opportunities</span>
                                <h2 className="text-[36px] md:text-[26px] font-medium text-white pb-[20px] md:pb-[10px] relative 
                        before:absolute before:content-[''] before:left-[-68px] 
                        before:top-[30px] before:transform before:-translate-y-1/2 
                        before:w-[60px] before:h-[1px] before:bg-[#c0b596] md:before:hidden">Get in Touch with Us</h2>
                            </div>
                            
                            <p className="mt-[30px] text-[#ddd] leading-[30px] text-[16px]">Whether you're seeking luxury furnishings, exploring innovative mobility solutions, or planning an exclusive floating experience, our diversified portfolio of premium ventures is designed to exceed your expectations and elevate your projects.</p>
                        </div>
                        <div className="mt-[25px]">
                                    <span className="text-[16px] text-[#c0b596]">Contact us directly at: <br />
                                        <a href="mailto:contact@sanlorenzoinvestments.com" className="text-[#ada282] hover:text-white transition-all">contact@sanlorenzoinvestments.com</a>
                                    </span>
                                </div>
                    </div>
                    <div className="col-span-7 md:col-span-12">
                        <ConsultingFrom/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConsultingArea;