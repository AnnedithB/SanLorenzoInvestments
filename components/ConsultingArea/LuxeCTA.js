import React from 'react'
import ConsultingFrom from '../ConsultingFrom/ConsultingFrom'

const LuxeCTA = (props) => {
    return (
        <>
            {/* Primary CTA - Request Consultation */}
            <section id='consultingcontact' className="relative bg-center bg-cover bg-no-repeat py-[100px] z-10 
       before:content-[''] before:bg-[rgba(21,26,48,0.9)] before:w-full before:h-full before:absolute before:left-0 before:-z-10 before:top-0" style={{ backgroundImage: `url('/images/contact/1.jpg')`, backgroundSize: 'cover' }}>
                <div className="wraper">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-5 md:col-span-12 ">
                            <div className="contact-text md:mb-[30px]">
                                <div className="title">
                                    <span className="text-[16px] text-[#ada282]">Ready to Transform Your Space?</span>
                                    <h2 className="text-[36px] md:text-[26px] font-medium text-white pb-[20px] md:pb-[10px] relative 
                            before:absolute before:content-[''] before:left-[-68px] 
                            before:top-[30px] before:transform before:-translate-y-1/2 
                            before:w-[60px] before:h-[1px] before:bg-[#c0b596] md:before:hidden">Connect with Our Design Specialists</h2>
                                </div>
                                <span className="text-[18px] text-[#c0b596]">Get a personalized consultation for your luxury furnishing project</span>
                                <p className="mt-[30px] text-[#ddd] leading-[30px] text-[16px]">Whether you're creating memorable guest experiences for luxury hospitality, designing sophisticated corporate spaces, or developing exclusive residential communities, our design specialists will work with you to curate the perfect furnishing solution that reflects your vision and exceeds expectations.</p>
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

            {/* Secondary CTA - Showroom Visit */}
            <section className="bg-[#f5f5f5] py-[80px]">
                <div className="wraper">
                    <div className="text-center max-w-[800px] mx-auto">
                        <span className="text-[16px] text-[#ada282]">Experience Terra Luxe in Person</span>
                        <h2 className="text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] md:pb-[10px] relative 
                before:absolute before:content-[''] before:left-[50%] 
                before:bottom-0 before:transform before:-translate-x-1/2 
                before:w-[60px] before:h-[3px] before:bg-[#c0b596]">Visit Our Upcoming Miami Showroom</h2>
                        
                        <p className="text-[18px] text-[#666] leading-[28px] mt-[30px] mb-[40px]">
                            Our state-of-the-art Miami showroom will showcase our complete collection in beautifully designed room settings. Schedule your private appointment to experience the Terra Luxe difference firsthand.
                        </p>
                        
                        <div className="bg-white p-[40px] rounded-[10px] shadow-[0_5px_20px_rgba(0,0,0,0.1)] mb-[30px]">
                            <h3 className="text-[24px] font-medium text-[#333] mb-[20px]">What to Expect</h3>
                            <div className="grid grid-cols-2 md:grid-cols-1 gap-[30px] text-left">
                                <div>
                                    <h4 className="text-[18px] font-medium text-[#ada282] mb-[10px]">Complete Collection Display</h4>
                                    <p className="text-[16px] text-[#666]">See and touch our premium Teak furniture and yacht-inspired fabrics</p>
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-medium text-[#ada282] mb-[10px]">Design Consultation</h4>
                                    <p className="text-[16px] text-[#666]">Meet with our specialists for personalized project guidance</p>
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-medium text-[#ada282] mb-[10px]">Room Settings</h4>
                                    <p className="text-[16px] text-[#666]">Experience furniture in beautifully curated environments</p>
                                </div>
                                <div>
                                    <h4 className="text-[18px] font-medium text-[#ada282] mb-[10px]">Material Samples</h4>
                                    <p className="text-[16px] text-[#666]">Take home samples to ensure perfect color coordination</p>
                                </div>
                            </div>
                        </div>
                        
                        <button className="bg-[#ada282] hover:bg-[#c0b596] text-white px-[40px] py-[15px] text-[18px] font-medium rounded-[5px] transition-all duration-300 mr-[20px] md:mr-0 md:mb-[15px]" onClick={()=>{window.location.href='/contact'}}>
                            Schedule Showroom Visit
                        </button>
                        
                        <p className="text-[16px] text-[#999] mt-[20px] italic">
                            * Miami showroom opening Q3 2025
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LuxeCTA;