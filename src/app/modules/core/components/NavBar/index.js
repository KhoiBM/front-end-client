/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavBtn, NavBtnLink, NavRLinks, NavSLinks } from './NavbarElements'
import { Switch, Route } from 'react-router-dom'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { NotificationBar } from '../NotificationBar';
import { AccountMenu } from '../AccountMenu';
import { ServicesMenu } from '../ServicesMenu';
import { CategoriesMenu } from '../CategoriesMenu';
import { ShoppingCartMenu } from '../ShoppingCartMenu';

export function Navbar({ toggle }) {

    const token = localStorage.getItem("pps-token");

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 30) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
        return () => {
            window.removeEventListener("scroll", changeNav);
        };
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>

                    <NavbarContainer>
                        <NavLogo to='/core/home_page' onClick={toggleHome}>
                            RIO Studio
                    </NavLogo>


                        <NavMenu>
                            <NavItem>

                                <ServicesMenu />

                            </NavItem>

                            <NavItem>
                                <CategoriesMenu />
                            </NavItem>

                            <NavItem>
                                <NavRLinks to='/core/product_list_page'
                                    smooth={true}
                                    duration={500} spy={true}
                                    exact={true}
                                    offset={-80}
                                >
                                    Tất cả sản phẩm
                                </NavRLinks>
                            </NavItem>
                            {
                                token && token != null ?
                                    <>
                                        <ShoppingCartMenu />

                                        <NotificationBar />

                                        <AccountMenu />


                                    </>
                                    :
                                    <>

                                        <NavBtn>
                                            <NavBtnLink to='/auth/signin'
                                                smooth={true}
                                                duration={500} spy={true}
                                                exact={true}
                                                offset={-80}>
                                                Đăng nhập
                                    </NavBtnLink>
                                        </NavBtn>
                                    </>
                            }

                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}


