import React from 'react';
import Link from "next/link";;
import Practices from '../../api/Practices';


const Practice = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="bg-[#f5f5f5] pt-[95px] pb-[70px]">
            <div className="wraper">
                <div className="col-span-12 text-center">
                    <div className="mb-[60px]">
                        <span className="text-[16px] text-[#ada282]">How Can We Help You</span>
                        <h2 className=" text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-[#c0b596]">Our Ventures & Brands</h2>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    {Practices.map((practice, Pitem) => {
                        const Icon = practice.Icon;
                        return (
                            <div className="col-span-6 md:col-span-6 sm:col-span-12 mb-5" key={Pitem}>
                                <div className="group flex sm:mx-[80px] col:mx-0">
                                    <div className="h-[80px] w-[80px]">
                                        <div className="h-[80px] w-[80px] leading-[75px]  rounded-[50%] text-center align-middle">
                                            <Icon className="text-[50px] col:text-[40px] col:leading-[45px] transition-all text-[#c0b596] group-hover:text-[#999] mx-auto" />
                                        </div>
                                    </div>
                                    <div className="pl-[24px]">
                                        <h3 className="text-[#373737] text-[24px] col:text-[20px] font-medium pb-[10px] relative mb-[10px]
                            before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] before:h-[2px] before:bg-[#c0b596]"><Link onClick={ClickHandler} href='/[slug]' as={`/${practice.slug}`}>{practice.sTitle}</Link></h3>
                                        <p className="text-[#777] text-[16px] font-bold">{practice.des2}</p>
                                        <p className="text-[#777] text-[16px] font-normal">{practice.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}


export default Practice;