/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavBtn, NavBtnLink, NavRLinks, NavSLinks } from './NavbarHomePageElements'
import { Switch, Route } from 'react-router-dom'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { SearchBar, ShoppingCartMenu, NotificationBar, AccountMenu } from 'src/app/modules/core/components';
import config from 'src/environments/config';

export function NavbarHomePage({ toggle }) {

    const token = localStorage.getItem("pps-token");

    const role = localStorage.getItem("role");

    const useRoleName = config.useRoleName;

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

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>

                    <NavbarContainer>
                        <NavLogo to='/core/home_page' onClick={scrollToTop}>
                            IRO Studio
                    </NavLogo>


                        <NavMenu>
                            <NavItem>

                                <SearchBar />

                            </NavItem>
                            <NavItem>
                                <NavSLinks to='services'
                                    smooth={true}
                                    duration={500}
                                    exact="true"
                                    offset={-80}
                                    spy={true}
                                >
                                    Dịch vụ
                                    </NavSLinks>
                            </NavItem>

                            <NavItem>
                                <NavSLinks to='categories'
                                    smooth={true}
                                    duration={500}
                                    exact="true"
                                    offset={-80}
                                    spy={true}
                                >
                                    Thể loại
                                    </NavSLinks>
                            </NavItem>

                            <NavItem>
                                <NavRLinks to={
                                    {
                                        pathname: `/navigation`,
                                        search: ``,
                                        state: {
                                            data: {
                                                locationObject: {
                                                    pathname: `/core/product_list_page`,
                                                    search: ``,
                                                    state: {
                                                        data: {}
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                    smooth={true}
                                    duration={500}
                                    exact="true"
                                    offset={-80}
                                    spy={true}
                                    onClick={scrollToTop}

                                >
                                    Tất cả sản phẩm
                                </NavRLinks>
                            </NavItem>
                            <ShoppingCartMenu />
                            {
                                token && token != null ?
                                    <>

                                        {
                                            role == useRoleName.customer &&
                                            <>
                                                <NotificationBar />
                                                <AccountMenu />
                                            </>
                                        }
                                    </>
                                    :
                                    <>

                                        <NavBtn>
                                            <NavBtnLink to='/auth/signin'
                                                smooth={true}
                                                duration={500}
                                                exact="true"
                                                offset={-80}
                                                spy={true}
                                            >
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


