import React from "react";
import { FaShoppingCart, FaCreditCard, FaClock } from 'react-icons/fa';

const Collection = () => {
    
    const MicroMarketFeatures = [
        {
            Id: '1',
            sTitle: 'Fresh Food & Beverages',
            slug: 'fresh-food-beverages',
            description: 'Refrigerated cases with fresh salads, sandwiches, fruits, and beverages. Our curated selection ensures residents have access to healthy, convenient meal options 24/7.',
            des2: 'Premium Selection',
            icon: FaShoppingCart,
        },
        {
            Id: '2',
            sTitle: 'Smart Self-Checkout',
            slug: 'smart-self-checkout',
            description: 'Advanced kiosks with card, cash, and fingerprint payment options. Secure, intuitive technology makes purchasing quick and convenient for all residents.',
            des2: 'Seamless Technology',
            icon: FaCreditCard,
        },
        {
            Id: '3',
            sTitle: '24/7 Availability',
            slug: 'twenty-four-seven-availability',
            description: 'Round-the-clock access for ultimate resident convenience. Whether it\'s early morning or late night, our micro markets are always accessible when you need them.',
            des2: 'Always Open',
            icon: FaClock,
        },
    ];

    return (
        <section className="bg-[#f5f5f5] pt-[95px] pb-[70px]">
            <div className="wraper">
                <div className="col-span-12 text-center">
                    <div className="mb-[60px]">
                        <span className="text-[16px] text-[#ada282]">Modern Convenience Solutions</span>
                        <h2 className=" text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-[#c0b596]">What Makes Our Micro Markets Special</h2>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    {MicroMarketFeatures.map((feature, Pitem) => {
                        const Icon = feature.icon;
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
                            before:absolute before:content-[''] before:left-0 before:bottom-0 before:w-[30px] before:h-[2px] before:bg-[#c0b596]">{feature.sTitle}</h3>
                                        <p className="text-[#777] text-[16px] font-bold">{feature.des2}</p>
                                        <p className="text-[#777] text-[16px] font-normal">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Collection;