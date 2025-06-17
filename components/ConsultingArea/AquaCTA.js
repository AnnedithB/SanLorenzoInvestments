import React from 'react'
import ConsultingFrom from '../ConsultingFrom/ConsultingFrom'

const LuxeCTA = (props) => {
    return (
        <>
            {/* Primary CTA - Request Event Quote */}
            <section id='consultingcontact' className="relative bg-center bg-cover bg-no-repeat py-[100px] z-10 
       before:content-[''] before:bg-[rgba(21,26,48,0.9)] before:w-full before:h-full before:absolute before:left-0 before:-z-10 before:top-0" style={{ backgroundImage: `url('/images/contact/1.jpg')`, backgroundSize: 'cover' }}>
                <div className="wraper">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-5 md:col-span-12 ">
                            <div className="contact-text md:mb-[30px]">
                                <div className="title">
                                    <span className="text-[16px] text-[#ada282]">Ready for an Exclusive Experience?</span>
                                    <h2 className="text-[36px] md:text-[26px] font-medium text-white pb-[20px] md:pb-[10px] relative 
                            before:absolute before:content-[''] before:left-[-68px] 
                            before:top-[30px] before:transform before:-translate-y-1/2 
                            before:w-[60px] before:h-[1px] before:bg-[#c0b596] md:before:hidden">Book Your Floating Event Today</h2>
                                </div>
                                <span className="text-[18px] text-[#c0b596]">Request a personalized quote for your luxury floating venue or private charter experience</span>
                                
                                
                                <div className="mt-[25px] space-y-[10px]">
                                    <div className="flex items-center text-[#c0b596]">
                                        <span className="w-[4px] h-[4px] bg-[#c0b596] rounded-full mr-[10px]"></span>
                                        <span className="text-[16px]">Luxury Floating Venues</span>
                                    </div>
                                    <div className="flex items-center text-[#c0b596]">
                                        <span className="w-[4px] h-[4px] bg-[#c0b596] rounded-full mr-[10px]"></span>
                                        <span className="text-[16px]">Professional Event Coordination</span>
                                    </div>
                                    <div className="flex items-center text-[#c0b596]">
                                        <span className="w-[4px] h-[4px] bg-[#c0b596] rounded-full mr-[10px]"></span>
                                        <span className="text-[16px]">Full Catering & Bar Service</span>
                                    </div>
                                </div>
                                
                                <div className="mt-[25px]">
                                    <span className="text-[16px] text-[#c0b596]">Contact us directly at: <br />
                                        <a href="mailto:contact@sanlorenzoinvestments.com" className="text-[#ada282] hover:text-white transition-all">contact@sanlorenzoinvestments.com</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-7 md:col-span-12">
                            <ConsultingFrom/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Secondary CTA - Schedule Venue Tour */}
            <section className="bg-[#f5f5f5] py-[80px]">
                <div className="wraper">
                    <div className="text-center max-w-[800px] mx-auto">
                        <span className="text-[16px] text-[#ada282]">Exclusive Floating Experiences</span>
                        <h2 className="text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] md:pb-[10px] relative 
                before:absolute before:content-[''] before:left-[50%] 
                before:bottom-0 before:transform before:-translate-x-1/2 
                before:w-[60px] before:h-[3px] before:bg-[#c0b596]">Schedule Your Venue Tour</h2>
                        
                        <p className="text-[18px] text-[#666] leading-[28px] mt-[30px] mb-[40px]">
                            Experience our luxury floating venues firsthand with a personalized tour. From intimate 6-guest vessels to spacious 25+ guest houseboats, discover the perfect setting for your next event on Miami's beautiful waters.
                        </p>
                        
                        <div className="bg-white p-[40px] rounded-[10px] shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-[30px]">
                            <h3 className="text-[24px] font-medium text-[#333] mb-[20px]">Available Venue Options</h3>
                            <div className="grid grid-cols-2 md:grid-cols-1 gap-[30px] text-left">
                                <div>
                                    <h4 className="text-[18px] font-medium text-[#ada282] mb-[10px]">Intimate Vessels (6-12 guests)</h4>
                                    <p className="text-[16px] text-[#666]">Perfect for private celebrations, romantic occasions, and small gatherings</p>
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-medium text-[#ada282] mb-[10px]">Mid-Size Venues (12-18 guests)</h4>
                                    <p className="text-[16px] text-[#666]">Ideal for corporate meetings, family celebrations, and social events</p>
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-medium text-[#ada282] mb-[10px]">Large Venues (18-25+ guests)</h4>
                                    <p className="text-[16px] text-[#666]">Spacious options for weddings, corporate retreats, and major celebrations</p>
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-medium text-[#ada282] mb-[10px]">Custom Experiences</h4>
                                    <p className="text-[16px] text-[#666]">Tailored packages with specialized amenities and services</p>
                                </div>
                            </div>
                        </div>
                        
                        <button className="bg-[#ada282] hover:bg-[#c0b596] text-white px-[40px] py-[15px] text-[18px] font-medium rounded-[5px] transition-all duration-300 mr-[20px] md:mr-0 md:mb-[15px]" onClick={()=>{window.location.href='/contact'}}>
                            Schedule Venue Tour
                        </button>
                        
                        <p className="text-[16px] text-[#999] mt-[20px] italic">
                            * All venues include professional crew, safety equipment, and event coordination services
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LuxeCTA;