import simg from '/public/images/practice/img-1.png'
import simg2 from '/public/images/practice/img-2.jpg'
import simg3 from '/public/images/practice/img-3.jpg'
import simg4 from '/public/images/practice/img-4.jpg'

// Import React Icons
import { FaCouch, FaShoppingCart, FaCar, FaShip } from 'react-icons/fa'

const Practices = [
    {
        Id: '1',
        sImg: simg,
        sTitle: 'Terra Luxe Furnishing',
        slug: 'sanlorenzoluxe',
        description: 'Sophisticated commercial-grade furniture featuring premium Teak and yacht-inspired fabrics for hospitality, corporate, and residential developments nationwide',
        des2: 'Premium Commercial Furnishings',
        Icon: FaCouch,
    },
    {
        Id: '2',
        sImg: simg2,
        sTitle: 'The Resident\'s Pantry',
        slug: 'the-residents-pantry',
        description: 'Revolutionary 24/7 unmanned convenience stores for residential communities with zero investment required from property owners',
        des2: 'Residential Micro Markets',
        Icon: FaShoppingCart,
    },
    {
        Id: '3',
        sImg: simg3,
        sTitle: 'Estate Rovers',
        slug: 'the-estate-rovers',
        description: 'Luxury street-legal electric vehicles designed for premium properties, corporate campuses, and exclusive communities',
        des2: 'Private Mobility Solutions',
        Icon: FaCar,
    },
    {
        Id: '4',
        sImg: simg4,
        sTitle: 'Aqua Loft',
        slug: 'aqua-loft',
        description: 'Exclusive floating venues and private charters creating unforgettable luxury experiences on Miami\'s pristine waters',
        des2: 'Private Charters & Floating Venues',
        Icon: FaShip,
    },
]

export default Practices;