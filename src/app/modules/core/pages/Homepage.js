import React, { useState } from 'react'
import { FooterBar, FirstSection, ServicesSection, InfoSection, CategoriesSection, NavbarHomePage } from '../components';
import config from 'src/environments/config';

const Homepage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const useDataInfoSection = config.useDataInfoSection
    console.log(isOpen);
    const toggle = () => {
        console.log("toggle:" + !isOpen)
        setIsOpen(!isOpen);
    }

    return (
        <>
            {/* <p>Homepage</p> */}
            <NavbarHomePage toggle={toggle} />
            <FirstSection />
            <ServicesSection />
            <CategoriesSection />
            <InfoSection {...useDataInfoSection.homeObjOne} />
            <FooterBar />
        </>
    )
}

export default Homepage
