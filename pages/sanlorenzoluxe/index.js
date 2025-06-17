import React, {Fragment} from 'react';
import Hero from '../../components/hero/aboutHero';
import Collection from "../../components/Collection/Collection"
import PageTitle from '../../components/pagetitle/PageTitle'
import About2 from '../../components/about2/about2';
import Practice2 from '../../components/Practice2';
import Navbar from '../../components/Navbar/Navbar'
import Features from '../../components/Features/Features';
import Testimonial from '../../components/Testimonial/Testimonial';
import FunFact2 from '../../components/FunFact2/FunFact2';
import Attorney from '../../components/attorneys';
import BlogSection from '../../components/BlogSection/BlogSection';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import LuxeCTA from '../../components/ConsultingArea/LuxeCTA';

const AboutPage =() => {
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
export default AboutPage;

