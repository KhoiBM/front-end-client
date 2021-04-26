/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavBtn, NavBtnLink, NavRLinks, NavSLinks } from './NavbarElements'
import { Switch, Route } from 'react-router-dom'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { ShoppingCartMenu } from '../ShoppingCartMenu';
import { NotificationBar } from '../NotificationBar';
import { AccountMenu } from '../AccountMenu';
import { CategoriesMenu } from '../CategoriesMenu';
import { ServicesMenu } from '../ServicesMenu';
import { SearchBar } from '../SearchBar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    activeNavLink: {
        fontWeight: "bold",
        fontSize: "5rem !important",
        color: "#000 !important",
    },
    linkItemText: {
        whiteSpace: "wrap",
        height: "50px",
        // border: "1px solid red",
        display: "flex !important",
        alignItems: "center",
        flexWrap: "wrap"

    }
}))
export function Navbar({ toggle }) {

    const classes = useStyles();

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

                                <ServicesMenu />

                            </NavItem>

                            <NavItem>
                                <CategoriesMenu />
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
                                    onClick={scrollToTop}
                                // activeClassName={classes.activeNavLink}
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
                                                duration={500}
                                                exact="true"
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


