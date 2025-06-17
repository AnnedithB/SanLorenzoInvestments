import React from "react";
import { FaCar, FaBatteryFull, FaCogs, FaShieldAlt, FaPalette, FaWrench } from 'react-icons/fa';

const Collection = () => {
    
    const RoverFeatures = [
        {
            Id: '1',
            sTitle: 'Street-Legal Certification',
            slug: 'street-legal-certification',
            description: 'DOT-compliant low-speed vehicles certified for public roads up to 25mph. Full lighting packages, mirrors, seat belts, and safety features meet all regulatory requirements.',
            des2: 'Road Ready',
            icon: FaShieldAlt,
        },
        {
            Id: '2',
            sTitle: 'Premium Battery Systems',
            slug: 'premium-battery-systems',
            description: '48v-72v lithium battery options providing 40+ mile range. Fast charging capabilities and long-lasting performance for extended use throughout the day.',
            des2: 'Extended Range',
            icon: FaBatteryFull,
        },
        {
            Id: '3',
            sTitle: 'Advanced Technology',
            slug: 'advanced-technology',
            description: 'Multimedia systems with Apple CarPlay integration, LED lighting packages, GPS navigation, and premium sound systems for the ultimate driving experience.',
            des2: 'Smart Features',
            icon: FaCogs,
        },
        {
            Id: '4',
            sTitle: 'Custom Design Options',
            slug: 'custom-design-options',
            description: 'Choose from premium color options, luxury seating configurations, custom wraps, and branded designs. Make your fleet uniquely yours.',
            des2: 'Personalized Style',
            icon: FaPalette,
        },
        {
            Id: '5',
            sTitle: 'All-Terrain Capability',
            slug: 'all-terrain-capability',
            description: 'Rugged suspension and tire options for various terrains. From smooth pavement to rough trails, our vehicles handle it all with comfort and stability.',
            des2: 'Versatile Performance',
            icon: FaCar,
        },
        {
            Id: '6',
            sTitle: 'Professional Service',
            slug: 'professional-service',
            description: 'Complete maintenance packages, warranty coverage, and 24/7 support. Our certified technicians ensure your fleet stays operational and reliable.',
            des2: 'Full Support',
            icon: FaWrench,
        },
    ];

    return (
        <section className="bg-[#f5f5f5] pt-[95px] pb-[70px]">
            <div className="wraper">
                <div className="col-span-12 text-center">
                    <div className="mb-[60px]">
                        <span className="text-[16px] text-[#ada282]">Premium Mobility Solutions</span>
                        <h2 className=" text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-[#c0b596]">Why Choose Estate Rovers</h2>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    {RoverFeatures.map((feature, Pitem) => {
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