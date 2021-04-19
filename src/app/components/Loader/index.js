/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Container, makeStyles, CircularProgress, Paper } from '@material-ui/core';
import { useWait } from 'src/app/utils';
const useStyles = makeStyles(theme => ({
    loaderContainer: {
        width: "100%",
        height: "100%",
        position: "absolute",
        // backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",


    },
    loaderWrapper: {
        // backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30rem",
        height: "10rem",
        zIndex: 999


    }

}));
export const Loader = (props) => {
    const classes = useStyles();
    const { loading } = props

    return (
        <>

            {loading &&
                <div className={classes.loaderContainer} >
                    <div className={classes.loaderWrapper}>
                        <CircularProgress color="primary" />
                    </div>
                </div>


            }

        </>
    )
}


