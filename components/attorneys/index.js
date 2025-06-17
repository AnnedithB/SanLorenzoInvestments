import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const Clientele = [
    {
        id: '1',
        AtImg: '/images/clients/2.png',
        name: 'Hotels & Hospitality',
        title: 'Luxury Resorts & Boutique Hotels',
        description: 'Luxury resorts, boutique hotels, and exclusive clubs throughout Miami and South Florida trust Terra Luxe for creating memorable guest experiences through exceptional furnishings.'
    },
    {
        id: '2',
        AtImg: '/images/clients/3.png',
        name: 'Corporate Headquarters',
        title: 'Fortune 500 Companies',
        description: 'Fortune 500 companies and prestigious firms choose our furniture for executive offices, reception areas, and outdoor corporate spaces that reflect their commitment to excellence.'
    },
    {
        id: '3',
        AtImg: '/images/clients/4.png',
        name: 'Fine Dining Establishments',
        title: 'Michelin-Starred Restaurants',
        description: 'Michelin-starred restaurants and upscale dining venues rely on our commercial-grade pieces to create ambiance that matches their culinary artistry.'
    },
    {
        id: '4',
        AtImg: '/images/clients/5.png',
        name: 'Luxury Real Estate',
        title: 'Premier Developers',
        description: 'Premier developers and residential associations partner with us to furnish common areas, pool decks, and outdoor spaces that enhance property values and resident satisfaction.'
    },
    {
        id: '5',
        AtImg: '/images/clients/2.png',
        name: 'Exclusive Residential Communities',
        title: 'High-End Condominiums',
        description: 'High-end condominiums and gated communities choose Terra Luxe to create sophisticated communal spaces that reflect their residents\' refined tastes.'
    }
];

const Attorney = (props) => {

    return (
        <section className="attorney-sec relative py-[100px]">
            <div className="wraper">
                <div className="col-span-12 text-center">
                    <div className="mb-[60px]">
                        <span className="text-[16px] text-[#ada282]">Trusted by South Florida's Finest</span>
                        <h2 className=" text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative before:absolute before:content-[''] before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px] before:bg-[#c0b596]">Premium Partnerships Across Prestigious Industries</h2>
                    </div>
                </div>
                <div className="team-slider relative">
                    <Slider {...settings}>
                        {Clientele.map((client, aitem) => (
                            <div className="overflow-hidden relative shadow-[1px_1px_5px_rgba(0,0,5,8%)] group" key={aitem}>
                                <div className="expert-img h-[300px] overflow-hidden">
                                    <Image 
                                        className="w-full h-full object-cover" 
                                        src={client.AtImg} 
                                        alt={client.name}
                                        width={400}
                                        height={300}
                                    />
                                </div>
                                <div className="relative text-center mt-[-40px] bg-[#f5f5f5] transform translate-y-[40px] transition ease-in-out duration-300 group-hover:translate-y-0 group-hover:bg-[#fff] p-[20px]">
                                    <h3 className="text-[24px] col:text-[20px] font-medium pt-[30px] pb-[8px] font-heading-font text-[#282e3f]">{client.name}</h3>
                                    <span className="text-[#ada282] text-[16px] font-normal">{client.title}</span>
                                    <p className="text-[#666] text-[14px] mt-[15px] leading-[20px]">{client.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Attorney;