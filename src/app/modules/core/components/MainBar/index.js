/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import config from 'src/environments/config'
import { AppBar, Toolbar, IconButton, Menu, MenuItem, makeStyles, Typography, ListItemIcon, ListItem, ListItemText, List, Divider, useTheme, Drawer, Hidden } from '@material-ui/core'
import { RiAccountBoxLine } from 'react-icons/ri';
import bgAuth from "src/app/assets/image/bg_auth.jpeg"
import { FooterBar } from '../FooterBar'
import { Navbar } from '../NavBar';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    bg: {
        backgroundImage: `url(${bgAuth})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        // background: "red"
        // overflowY: "hidden"
    },
    content: {
        minHeight: "100vh"

    }
}));

export const MainBar = (props) => {
    const classes = useStyles();

    useEffect(() => {
        // document.body.classList.add(classes.bg)
    }, [])


    return (
        <>
            <div className={classes.root}>
                <Navbar />
                <main className={classes.content}>
                    {props.children}
                </main>
                <FooterBar />
            </div>
        </>
    )
}



