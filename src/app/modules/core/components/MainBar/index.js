/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import config from 'src/environments/config'
import { AppBar, Toolbar, IconButton, Menu, MenuItem, makeStyles, Typography, ListItemIcon, ListItem, ListItemText, List, Divider, useTheme, Drawer, Hidden } from '@material-ui/core'
import { RiAccountBoxLine } from 'react-icons/ri';
import { FooterBar } from '../FooterBar'
import { Navbar } from '../NavBar';

const useStyles = makeStyles((theme) => ({
    root: {

    },
    bg: {

    },
    content: {
        width: "100%",
        minHeight: "1000px",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        marginTop: theme.spacing(10),
        // background: "red"
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



