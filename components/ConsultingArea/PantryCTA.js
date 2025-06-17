import React from 'react'
import ConsultingFrom from '../ConsultingFrom/ConsultingFrom'

const LuxeCTA = (props) => {
    return (
        <>
            {/* Primary CTA - Request Installation Consultation */}
            <section id='consultingcontact' className="relative bg-center bg-cover bg-no-repeat py-[100px] z-10 
       before:content-[''] before:bg-[rgba(21,26,48,0.9)] before:w-full before:h-full before:absolute before:left-0 before:-z-10 before:top-0" style={{ backgroundImage: `url('/images/contact/1.jpg')`, backgroundSize: 'cover' }}>
                <div className="wraper">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-5 md:col-span-12 ">
                            <div className="contact-text md:mb-[30px]">
                                <div className="title">
                                    <span className="text-[16px] text-[#ada282]">Ready to Add 24/7 Convenience?</span>
                                    <h2 className="text-[36px] md:text-[26px] font-medium text-white pb-[20px] md:pb-[10px] relative 
                            before:absolute before:content-[''] before:left-[-68px] 
                            before:top-[30px] before:transform before:-translate-y-1/2 
                            before:w-[60px] before:h-[1px] before:bg-[#c0b596] md:before:hidden">Transform Your Property Today</h2>
                                </div>
                                <span className="text-[18px] text-[#c0b596]">Get a free consultation and site assessment for your micro market installation</span>
                                
                                
                                <div className="mt-[25px] space-y-[10px]">
                                    <div className="flex items-center text-[#c0b596]">
                                        <span className="w-[4px] h-[4px] bg-[#c0b596] rounded-full mr-[10px]"></span>
                                        <span className="text-[16px]">Zero Installation Costs</span>
                                    </div>
                                    <div className="flex items-center text-[#c0b596]">
                                        <span className="w-[4px] h-[4px] bg-[#c0b596] rounded-full mr-[10px]"></span>
                                        <span className="text-[16px]">24/7 Resident Convenience</span>
                                    </div>
                                    <div className="flex items-center text-[#c0b596]">
                                        <span className="w-[4px] h-[4px] bg-[#c0b596] rounded-full mr-[10px]"></span>
                                        <span className="text-[16px]">Professional Service & Support</span>
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

            {/* Secondary CTA - Learn More About Process */}
            <section className="bg-[#f5f5f5] py-[80px]">
                <div className="wraper">
                    <div className="text-center max-w-[800px] mx-auto">
                        <span className="text-[16px] text-[#ada282]">Simple Installation Process</span>
                        <h2 className="text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] md:pb-[10px] relative 
                before:absolute before:content-[''] before:left-[50%] 
                before:bottom-0 before:transform before:-translate-x-1/2 
                before:w-[60px] before:h-[3px] before:bg-[#c0b596]">How The Resident's Pantry Works</h2>
                        
                        <p className="text-[18px] text-[#666] leading-[28px] mt-[30px] mb-[40px]">
                            We make it incredibly easy for property managers to add this valuable amenity. Our turnkey solution requires minimal effort from you while providing maximum value to your residents.
                        </p>
                        
                        <div className="bg-white p-[40px] rounded-[10px] shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-[30px]">
                            <h3 className="text-[24px] font-medium text-[#333] mb-[20px]">What We Handle</h3>
                            <div className="grid grid-cols-2 md:grid-cols-1 gap-[30px] text-left">
                                <div>
                                    <h4 className="text-[18px] font-medium text-[#ada282] mb-[10px]">Complete Installation</h4>
                                    <p className="text-[16px] text-[#666]">Professional setup of kiosks, refrigeration, and security systems</p>
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-medium text-[#ada282] mb-[10px]">Regular Restocking</h4>
                                    <p className="text-[16px] text-[#666]">Fresh food delivery and inventory management</p>
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-medium text-[#ada282] mb-[10px]">24/7 Monitoring</h4>
                                    <p className="text-[16px] text-[#666]">Remote monitoring and technical support</p>
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-medium text-[#ada282] mb-[10px]">Ongoing Maintenance</h4>
                                    <p className="text-[16px] text-[#666]">Equipment servicing and cleaning protocols</p>
                                </div>
                            </div>
                        </div>
                        
                        <button className="bg-[#ada282] hover:bg-[#c0b596] text-white px-[40px] py-[15px] text-[18px] font-medium rounded-[5px] transition-all duration-300 mr-[20px] md:mr-0 md:mb-[15px]" onClick={() => window.location.href = '/contact'}>
                            Learn More About Installation
                        </button>
                        
                        <p className="text-[16px] text-[#999] mt-[20px] italic">
                            * We only need space, power, and internet connection from you
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LuxeCTA;