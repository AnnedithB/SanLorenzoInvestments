import React, {Fragment} from 'react';
import Hero from '../../components/hero/aboutHero';

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

const AboutPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-1'} topbarNone={'topbar-none'} />
            <Hero />
            <About2 />
            <Practice2 />
            <Testimonial tClass={'pt-[100px] sm:pt-[20px]'}/>
            <FunFact2/>
            <Attorney/>
            <BlogSection />
            <Newsletter />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AboutPage;

