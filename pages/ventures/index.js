import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle'
import Practice3 from '../../components/Practice3/Practice3';
import Navbar from '../../components/Navbar/Navbar'
import Features2 from '../../components/Features2/Features2';
import Testimonial from '../../components/Testimonial/Testimonial';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Pricing from '../../components/Pricing/Pricing';
import Hero from '../../components/hero/ventureHero';

const PracticePage =() => {

    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />
            <Hero />
           
            <Practice3 />

            <Newsletter />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PracticePage;

