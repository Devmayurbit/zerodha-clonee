import React from 'react'
import Hero from './Hero';
import Team from './Team';
import Navbar from '../Navbar';
import OpenAccount from '../OpenAccounts';
import Footer from '../Footer';


function AboutPage() {
    return (
            <>
            <Navbar />
            <Hero />
            <Team />
            <OpenAccount />
            <Footer />
        </>
      );
}

export default AboutPage;