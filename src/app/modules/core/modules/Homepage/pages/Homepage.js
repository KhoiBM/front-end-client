import React, { useState, useEffect } from 'react'
import config from 'src/environments/config';
import { NavbarHomePage, FirstSection, ServicesSection, CategoriesSection, InfoSection } from '../components';
import { FooterBar } from '../../../components';
import { Loader } from 'src/app/components';
import { useLoadingEffect, useScrollToTop } from 'src/app/utils';
import { useLocation } from 'react-router-dom';

const Homepage = () => {
    const { pathname } = useLocation();
    const { scrollToTop } = useScrollToTop()
    const [isOpen, setIsOpen] = useState(false);
    const useDataInfoSection = config.useDataInfoSection
    console.log(isOpen);
    const toggle = () => {
        console.log("toggle:" + !isOpen)
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        // window.scrollTo(0, 0);
        scrollToTop()
    }, [pathname])

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()

    return (
        <>
            {/* {<Loader loading={loading} />} */}
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
