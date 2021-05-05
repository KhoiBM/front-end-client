/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { makeStyles, GridList, GridListTile, GridListTileBar, IconButton, Paper, Grid, CardMedia, Divider } from '@material-ui/core';
import { Loader } from 'src/app/components';
import { useScrollToTop } from 'src/app/utils';


const useStyles = makeStyles(theme => ({
    rootContainer: {
        width: "100%",
        height: "1070px",
        // backgroundColor: "blue",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid red",
        padding: theme.spacing(2),
        // backgroundColor: "#f7f3e9 !important",
        // backgroundColor: "var(--tertiary-color-main) !important",
        backgroundColor: "#fff !important",

    },

    title: {
        // color: theme.palette.primary.light,
    },
    titleBar: {
        // background: "rgba(0, 0, 0, 0.23)"
    },
    rootGrid: {
        width: "100%",
        height: "100%",
        // border: "1px solid red",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
    },
    gridItemShowPhoto: {
        width: "100%",
        height: "70%",
        // background: "red",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        transition: "all 0.2 ease -in -out",
    },
    gridItemGridList: {
        // backgroundColor: "blue",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        width: "100%",
        height: "30%",
        display: 'flex',
        justifyContent: "flex-start",
        alignItems: "center"
    },
    rootGridList: {
        width: "100%",
        height: "100%",
        display: 'flex',
        // flexWrap: 'nowrap',
        // justifyContent: 'space-around',
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: theme.palette.background.paper,
        // border: "1px solid red",
        // border: "1px solid rgba(0, 0, 0, 0.23)",

    },
    gridList: {
        // width: "auto",
        width: "130%",
        height: "100%",
        display: 'flex',
        // justifyContent: "space-between !important",
        justifyContent: "flex-start !important",
        alignItems: "center",
        flexWrap: 'nowrap',
        gap: theme.spacing(2),
        // border: "1px solid red",
        // backgroundColor: "blue",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)

    },
    cardMedia: {
        objectFit: "contain",
        maxWidth: "90%",
        maxHeight: "90%",
        width: 'auto',
        height: 'auto',
        // border: "1px solid blue",

    },
    cardMediaShow: {
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "100%",
        width: 'auto',
        height: 'auto',
        // border: "1px solid blue",
    },
    gridListTile: {
        // // width: "100px",
        // // minWidth: "100%",
        // display: 'flex',
        // justifyContent: "center !important",
        // alignItems: "center",
        // border: "1px solid rgba(0, 0, 0, 0.23)",

        // '& .MuiGridListTile-tile': {
        //     display: 'flex',
        //     justifyContent: "center !important",
        //     alignItems: "center",
        //     // border: "1px solid ",
        //     // borderColor: theme.palette.primary.main

        // }


        overflow: "scroll !important",
        width: "200px !important",
        height: "200px !important",
        // maxHeight: "10vh !important",
        display: 'flex',
        justifyContent: "center !important",
        alignItems: "center",

        '& .MuiGridListTile-tile': {
            display: 'flex',
            // justifyContent: "center !important",
            alignItems: "center !important",
            // border: "1px solid red",

        },
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2 ease -in -out",

        '&:hover': {
            transform: "scale(1.02)",
            transition: "all 0.2 ease -in -out",
            cursor: "pointer"
        },
    }
}))


export const GridPhotoList = (props) => {
    const classes = useStyles();

    const { scrollToTop } = useScrollToTop()


    const { photoList } = props

    const [photoToShow, setPhotoToShow] = useState()

    const [photoListMap, setPhotoListMap] = useState([])
    useEffect(() => {
        loadInit()

    }, [photoList])

    useEffect(() => {
        setPhotoToShow(photoListMap[0])
    }, [photoListMap])



    const loadInit = () => {
        // console.log("GridPhotoList:" + JSON.stringify(photoList))
        if (photoList && photoList != null) {
            setPhotoListMap(photoList.map((url) => `${url}?timestamp=${new Date().getTime()}`))
        }

    }



    return (
        <>
            {/* {<Loader loading={loading} />} */}
            <Paper className={classes.rootContainer} elevation={0}>

                <Grid container className={classes.rootGrid} spacing={5}>

                    <Grid item xs={12} sm={12} md={12} className={classes.gridItemShowPhoto}>

                        <img
                            className={classes.cardMediaShow}
                            src={photoToShow}
                            onClick={() => {

                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} className={classes.gridItemGridList}>
                        <div className={classes.rootGridList}>
                            <GridList className={classes.gridList} cols={2.5} spacing={0} >
                                {photoList && photoList != null && photoList.length > 0 && photoList.map((url, index) => (
                                    <GridListTile key={index} className={classes.gridListTile}>
                                        <img
                                            className={classes.cardMedia}
                                            src={url}
                                            onClick={async () => {
                                                await scrollToTop()
                                                setPhotoToShow(url)

                                            }}
                                        />
                                    </GridListTile >
                                ))}
                            </GridList >
                        </div>
                    </Grid>

                </Grid>

            </Paper >
        </>
    )
}
