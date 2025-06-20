import simg from '/public/images/practice/img-1.png'
import simg2 from '/public/images/practice/img-2.jpg'
import simg3 from '/public/images/practice/img-3.jpg'
import simg4 from '/public/images/practice/img-4.jpg'

// Import React Icons
import { FaSwimmingPool, FaTree, FaBuilding, FaUtensils } from 'react-icons/fa'

const Practices = [
    {
        Id: '1',
        sImg: simg,
        sTitle: 'Pool Areas & Outdoor Sanctuaries',
        slug: 'pool-areas-outdoor-sanctuaries',
        description: 'Premium outdoor furniture collection featuring weather-resistant Teak construction and commercial-grade upholstery. Designed to withstand various climates nationwide while maintaining luxurious comfort and aesthetic appeal.',
        des2: 'Poolside Excellence',
        icon: FaSwimmingPool,
    },
    {
        Id: '2',
        sImg: simg2,
        sTitle: 'Patios & Outdoor Spaces',
        slug: 'patios-outdoor-spaces',
        description: 'Sophisticated outdoor living solutions including modular seating, elegant dining collections, and statement pieces that seamlessly blend indoor luxury with outdoor durability.',
        des2: 'Outdoor Living Solutions',
        icon: FaTree,
    },
    {
        Id: '3',
        sImg: simg3,
        sTitle: 'Common Rooms & Lounges',
        slug: 'common-rooms-lounges',
        description: 'Timeless furniture collections for residential associations and corporate spaces. From grand lobby pieces to intimate conversation areas, each piece elevates the communal experience.',
        des2: 'Communal Excellence',
        icon: FaBuilding,
    },
    {
        Id: '4',
        sImg: simg4,
        sTitle: 'Restaurants & Dining Areas',
        slug: 'restaurants-dining-areas',
        description: 'Commercial-grade dining furniture that combines durability with refined aesthetics. Perfect for upscale restaurants, hotel dining rooms, and corporate dining facilities.',
        des2: 'Dining Sophistication',
        icon: FaUtensils,
    },
]

export default Practices;