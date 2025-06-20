import React from 'react'
import Link from "next/link";
import Logo from '/public/images/logo.png'
import Practices from '../../api/Practices';
import Image from 'next/image';

const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className="relative bg-[#F5F5DC] z-10">
            <div className="pt-[100px] pb-[90px] md:py-[90px] md:pb-[20px] overflow-hidden relative -z-10">
                <div className="wraper">
                    <div className="grid grid-cols-12 gap-8 md:gap-6">
                        {/* Company Info - Takes up more space */}
                        <div className="col-span-5 md:col-span-12 md:mb-[40px]">
                            <div className="mb-7">
                                <Link className="text-[45px] font-bold flex items-center text-[#282e3f]" href="/">
                                    <Image src={Logo} alt="San Lorenzo Investments" />
                                </Link>
                            </div>
                            <p className="text-[#282e3f] text-[16px] mb-[20px] leading-[26px]">
                                San Lorenzo Investments, LLC is a diversified holding company specializing in luxury experiences, 
                                premium mobility solutions, convenience services, and exclusive floating venues across multiple markets.
                            </p>
                            <ul className="flex items-center gap-[15px] pt-[15px]">
                                <li><Link className="footer-social-link" onClick={SubmitHandler} href="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link className="footer-social-link" onClick={SubmitHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link className="footer-social-link" onClick={SubmitHandler} href="/"><i className="ti-linkedin"></i></Link></li>
                                <li><Link className="footer-social-link" onClick={SubmitHandler} href="/"><i className="ti-pinterest"></i></Link></li>
                                <li><Link className="footer-social-link" onClick={SubmitHandler} href="/"><i className="ti-vimeo-alt"></i></Link></li>
                            </ul>
                        </div>
                        
                        {/* Quick Links */}
                        <div className="col-span-3 md:col-span-6 sm:col-span-12 md:mb-[40px]">
                            <div className="mb-7">
                                <h3 className="text-[28px] font-medium font-heading-font text-[#282e3f] capitalize">Quick Links</h3>
                            </div>
                            <ul className="space-y-[8px]">
                                <li><Link className="footer-link" href="/">Home</Link></li>
                                <li><Link className="footer-link" href="/the-residents-pantry">The Resident's Pantry</Link></li>
                                <li><Link className="footer-link" href="/the-estate-rovers">Estate Rovers</Link></li>
                                <li><Link className="footer-link" href="/aqua-loft">Aqua Loft</Link></li>
                                <li><Link className="footer-link" href="/ventures">Our Brands & Services</Link></li>
                                <li><Link className="footer-link" href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="col-span-4 md:col-span-6 sm:col-span-12 md:mb-[40px]">
                            <div className="mb-7">
                                <h3 className="text-[28px] font-medium font-heading-font text-[#282e3f] capitalize">Contact Us</h3>
                            </div>
                            <ul className="space-y-[12px]">
                                <li className="text-[#282e3f] text-[16px]">
                                    <strong>Email:</strong><br/>
                                    <a href="mailto:contact@sanlorenzoinvestments.com" className="footer-email-link">
                                        contact@sanlorenzoinvestments.com
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wraper">
                <div className=" border-t-1 border-[rgba(192,181,150,.3)] relative">
                    <div className="h-[1px] absolute left-[15px] top-0 bg-[#ffffff0d] w-[calc(100%+30px)]"></div>
                    <p className="text-center text-[#282e3f] text-[14px] py-[20px]"> Privacy Policy | &copy; 2025 San Lorenzo Investments, LLC. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;