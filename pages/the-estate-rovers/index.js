import React, {Fragment} from 'react';
import Hero from '../../components/hero/roverHero';
import Collection from "../../components/Collection/RoverCollection"
import About2 from '../../components/about2/roverAbout';
import Practice2 from '../../components/Practice2';
import Navbar from '../../components/Navbar/Navbar'

import Attorney from '../../components/attorneys/RoverServices';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import LuxeCTA from '../../components/ConsultingArea/RoverCTA';

const RoverPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />
            <Hero />
            <Collection/>
            <About2 />
            <Attorney/>
            <LuxeCTA/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default RoverPage;
