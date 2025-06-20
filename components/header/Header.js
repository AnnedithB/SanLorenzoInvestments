import React, { useState } from 'react'
import Link from "next/link";
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '/public/images/logo.png'
import Image from 'next/image';


const Header = (props) => {

    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault()
    }


    return (
        <header className=" relative z-[111]">
           
            <div className="wpo-site-header bg-[#F5F5DC] relative">
                <div className="wraper">
                    <div className="flex items-center justify-between md:py-6 sm:py-6">
                        <MobileMenu />

                        <div className="logo w-[255px] md:w-[200px] md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 sm:w-[180px] col:w-[160px]">
                            <Link onClick={ClickHandler} className="text-[45px] col:text-[25px] font-bold flex items-center justify-center text-[#2F2F2F]" href="/">
                                <Image className="w-full" src={Logo} alt="" /></Link>
                        </div>
                        <ul className="md:hidden mr-[-50px] lg-[-10px]">
                            <li className="relative inline-block group">
                                <Link onClick={ClickHandler} href="/" className="relative text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-[#2F2F2F] hover:text-[#8B6914] block uppercase font-base-font font-normal transition-all
                                ">Home</Link>
                                
                            </li>
                            <li className="relative inline-block group">
                                <Link onClick={ClickHandler} href="/ventures" className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-[#2F2F2F] hover:text-[#8B6914] block uppercase font-base-font font-normal transition-all
                              ">Brands & Services</Link>
                                
                            </li>
                            
                            <li className="relative inline-block">
                                <Link onClick={ClickHandler} href="/contact" className="relative group text-[15px] lg:text-[14px] py-[35px] xl:py-[30px] px-[18px] xl:px-[6px] text-[#2F2F2F] hover:text-[#8B6914] block uppercase font-base-font font-normal transition-all
                               ">Contact</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;