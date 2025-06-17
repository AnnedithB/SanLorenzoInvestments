import React from "react";
import { FaAnchor, FaUsers, FaUtensils, FaShieldAlt, FaWater, FaCocktail } from 'react-icons/fa';

const Collection = () => {
    
    const AquaFeatures = [
        {
            Id: '1',
            sTitle: 'Luxury Floating Venues',
            slug: 'luxury-floating-venues',
            description: 'Premium houseboats with full living spaces, elegant terraces, and sophisticated amenities. Perfect for intimate gatherings or large celebrations on Miami\'s beautiful waters.',
            des2: 'Exclusive Spaces',
            icon: FaAnchor,
        },
        {
            Id: '2',
            sTitle: 'Multiple Guest Capacities',
            slug: 'multiple-guest-capacities',
            description: 'Flexible venue options accommodating 6-25+ guests with various configurations. From intimate private charters to large corporate events and celebrations.',
            des2: 'Scalable Options',
            icon: FaUsers,
        },
        {
            Id: '3',
            sTitle: 'Full Catering Services',
            slug: 'full-catering-services',
            description: 'Professional catering and bar service coordination for all events. Gourmet dining experiences with premium beverages and customizable menu options.',
            des2: 'Culinary Excellence',
            icon: FaUtensils,
        },
        {
            Id: '4',
            sTitle: 'Professional Crew',
            slug: 'professional-crew',
            description: 'Experienced navigation crew and safety professionals ensure smooth sailing and guest comfort. Full-service staff for event coordination and hospitality.',
            des2: 'Expert Service',
            icon: FaShieldAlt,
        },
        {
            Id: '5',
            sTitle: 'Miami Waters Location',
            slug: 'miami-waters-location',
            description: 'Stunning Miami waterways provide the perfect backdrop for any event. Scenic routes and exclusive anchorage spots for unforgettable experiences.',
            des2: 'Prime Location',
            icon: FaWater,
        },
        {
            Id: '6',
            sTitle: 'Premium Bar Service',
            slug: 'premium-bar-service',
            description: 'Full-service bar with premium spirits, craft cocktails, and wine selections. Professional bartenders create custom drink experiences for your event.',
            des2: 'Craft Beverages',
            icon: FaCocktail,
        },
    ];

    return (
        <section className="bg-[#f5f5f5] pt-[95px] pb-[70px]">
            <div className="wraper">
                <div className="col-span-12 text-center">
                    <div className="mb-[60px]">
                        <span className="text-[16px] text-[#ada282]">Luxury Floating Experiences</span>
                        <h2 className=" text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-[#c0b596]">What Makes Aqua Loft Special</h2>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    {AquaFeatures.map((feature, Pitem) => {
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