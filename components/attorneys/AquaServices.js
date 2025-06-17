import React from "react";
import Link from "next/link";

const services = [
    {
        id: 1,
        title: "Private Charter Experiences",
        description: "Exclusive floating venues for intimate gatherings and special occasions with personalized service.",
        icon: "fi flaticon-yacht"
    },
    {
        id: 2,
        title: "Corporate Event Hosting",
        description: "Professional event coordination for business retreats, meetings, and corporate entertainment.",
        icon: "fi flaticon-business"
    },
    {
        id: 3,
        title: "Floating Venue Rentals",
        description: "Luxury houseboats available for weddings, celebrations, and exclusive private events.",
        icon: "fi flaticon-calendar"
    },
    {
        id: 4,
        title: "Luxury Accommodations",
        description: "Premium living spaces with elegant terraces and sophisticated amenities for overnight stays.",
        icon: "fi flaticon-hotel"
    },
    {
        id: 5,
        title: "Catering & Entertainment",
        description: "Full-service catering coordination with gourmet dining and premium bar service options.",
        icon: "fi flaticon-catering"
    },
    {
        id: 6,
        title: "Professional Crew Services",
        description: "Experienced navigation crew and event staff ensuring safety, comfort, and exceptional service.",
        icon: "fi flaticon-crew"
    }
];

const targetClients = [
    "Corporate Events & Retreats",
    "Private Celebrations", 
    "Wedding & Special Events",
    "Luxury Experience Seekers",
    "Business Entertainment",
    "Exclusive Private Parties"
];

const Attorney = () => {
    return (
        <section className="py-[120px] md:py-[80px] bg-[#f8f6f0]">
            <div className="wraper">
                <div className="text-center mb-[60px]">
                    <span className="text-[16px] text-[#ada282]">Comprehensive Floating Solutions</span>
                    <h2 className="text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px]">
                        Our Services & Target Clients
                    </h2>
                </div>
                
                <div className="grid grid-cols-12 gap-6 mb-[80px]">
                    {services.map((service) => (
                        <div key={service.id} className="col-span-4 md:col-span-6 col:col-span-12">
                            <div className="bg-white p-[30px] rounded-lg border border-[#c0b596] shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                <div className="mb-[20px]">
                                    <i className={`${service.icon} text-[40px] text-[#c0b596]`}></i>
                                </div>
                                <h3 className="text-[20px] font-semibold text-[#333] mb-[15px]">
                                    {service.title}
                                </h3>
                                <p className="text-[#666] text-[15px] leading-[24px]">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-[40px] rounded-lg border border-[#c0b596] shadow-sm">
                    <div className="text-center mb-[40px]">
                        <h3 className="text-[28px] font-medium text-[#333] mb-[15px]">
                            Perfect For These Event Types
                        </h3>
                        <p className="text-[#666] text-[16px]">
                            We specialize in creating unforgettable floating experiences for discerning clients
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-3 md:grid-cols-2 col:grid-cols-1 gap-4 mb-[40px]">
                        {targetClients.map((client, index) => (
                            <div key={index} className="text-center p-[20px] bg-[#f8f6f0] border border-[#c0b596] rounded-lg transition-colors duration-300">
                                <h4 className="text-[18px] font-semibold text-[#333]">{client}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="/contact" className="bg-[#c0b596] cursor-pointer text-[16px] font-semibold text-white px-[38px] py-[12px] capitalize inline-block transition ease-in-out duration-300 hover:bg-[#d4c291]">
                            Request Event Quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Attorney; 