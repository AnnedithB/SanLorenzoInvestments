import React from 'react'
import Link from 'next/link'

const Newsletter = (props) => {
    return (
        <section className="bg-[#ffffff] pt-[100px] pb-[100px]">
            <div className="wraper">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-2 md:col-span-1"></div>
                    <div className="col-span-8 md:col-span-10 col:col-span-12">
                        <div className="text-center max-w-[800px] col:w-full mx-auto">
                            <h3 className="text-[36px] sm:text-[28px] font-medium mb-[30px] text-[#282e3f]">Discover Our Value</h3>
                            <p className="text-[18px] text-[#282e3f] mb-[40px] leading-[1.6]">
                                Discover how our diversified portfolio creates exceptional value across luxury markets, or explore strategic partnership opportunities with San Lorenzo Investments.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/ventures" className="bg-[#c0b596] hover:bg-[#333333] text-white px-[30px] py-[15px] rounded-[5px] transition-all duration-300">
                                    Explore Our Brands
                                </Link>
                                <Link href="/contact" className="bg-transparent hover:bg-[#F5F5DC] text-[#282e3f] border border-[#282e3f] hover:border-[#F5F5DC] px-[30px] py-[15px] rounded-[5px] transition-all duration-300">
                                    Partner With Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 md:col-span-1"></div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;