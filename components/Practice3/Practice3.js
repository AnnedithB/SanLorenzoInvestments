import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Practice3 = (props) => {

    const Ventures = [
        {
            Id: '1',
            sImg: '/images/brands/1.png',
            sTitle: 'San Lorenzo Luxe Furnishing',
            slug: 'sanlorenzoluxe',
            description: 'Sophisticated commercial-grade furniture featuring premium Teak and yacht-inspired fabrics for hospitality, corporate, and residential developments throughout South Florida',
            des2: 'Premium Commercial Furnishings',
        },
        {
            Id: '2',
            sImg: '/images/brands/3.jpeg',
            sTitle: 'The Resident\'s Pantry',
            slug: 'the-residents-pantry',
            description: 'Revolutionary 24/7 unmanned convenience stores for residential communities with zero investment required from property owners',
            des2: 'Residential Micro Markets',
        },
        {
            Id: '3',
            sImg: '/images/brands/4.webp',
            sTitle: 'Estate Rovers',
            slug: 'the-estate-rovers',
            description: 'Luxury street-legal electric vehicles designed for premium properties, corporate campuses, and exclusive communities',
            des2: 'Private Mobility Solutions',
        },
        {
            Id: '4',
            sImg: '/images/brands/2.jpeg',
            sTitle: 'Aqua Loft',
            slug: 'aqua-loft',
            description: 'Exclusive floating venues and private charters creating unforgettable luxury experiences on Miami\'s pristine waters',
            des2: 'Private Charters & Floating Venues',
        },
    ];

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="bg-[#f5f5f5] pt-[95px] pb-[70px]">
            <div className="wraper">
                <div className="col-span-12 text-center">
                    <div className="mb-[60px]">
                        <span className="text-[16px] text-[#ada282]">Our Portfolio</span>
                        <h2 className=" text-[36px] md:text-[26px] font-medium text-[#333] pb-[20px] relative before:absolute before:content-['']
             before:left-[50%] before:bottom-0 before:transform before:-translate-x-1/2 before:w-[60px] before:h-[3px]
              before:bg-[#c0b596]">How Can We Help You</h2>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3">
                    {Ventures.map((venture, Pitem) => (
                        <div className="col-span-4 md:col-span-6 sm:col-span-12 mb-5 flex" key={Pitem}>
                            <Link href={`/${venture.slug}`} onClick={ClickHandler} className="w-full">
                                <div className="group border border-[#c0b596] hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col">
                                    <div className="h-[200px] w-full overflow-hidden flex-shrink-0">
                                        <Image 
                                            src={venture.sImg} 
                                            alt={venture.sTitle}
                                            width={400}
                                            height={200}
                                            className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="text-center py-[40px] px-[30px] flex-grow flex flex-col justify-center">
                                        <h3 className="text-[#373737] text-[24px] col:text-[20px] font-medium relative pt-[24px] mb-[10px] hover:text-[#c0b596] transition-all
                        before:absolute before:content-[''] before:left-1/2 before:top-[10px] before:transform before:-translate-x-1/2 before:w-[65px] before:h-[1px] before:bg-[#c0b596]">
                                            {venture.sTitle}
                                        </h3>
                                        <p className="text-[#777] text-[16px] font-normal">{venture.des2}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Practice3;