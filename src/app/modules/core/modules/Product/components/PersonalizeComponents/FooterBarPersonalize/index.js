/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'
import { makeStyles, Grid, Paper, GridList, GridListTile, Zoom, Tooltip } from '@material-ui/core';
import { GridSelectPhotoList } from '../GridSelectPhotoList';
import { GridBackgroudPhotoList } from '../GridBackgroudPhotoList';
const useStyles = makeStyles(theme => ({
    rootGridContainer: {
        width: "100%",
        height: "auto",
        minHeight: "15vh",
        maxHeight: "15vh",
        // background: "red",
    },
    gridItem1: {
        width: "100%",
        height: "auto",
        minHeight: "15vh",
        maxHeight: "15vh",
        // background: "green",
        // background: "var(--tertiary-color-main) !important",
        backgroundColor: "#fff !important",
    }
}))

export const FooterBarPersonalize = (props) => {
    const classes = useStyles();

    const { recordForFooterBarPersonalize, setBgPhoto } = props

    const tooltipRef = useRef(null)

    useEffect(() => {
        tooltipRef.current.blur()
    }, [])
    useEffect(() => {
        console.log("recordForFooterBarPersonalize: " + JSON.stringify(recordForFooterBarPersonalize))
    }, [recordForFooterBarPersonalize])


    return (
        <>
            <Tooltip ref={tooltipRef} TransitionComponent={Zoom} placement="top" title="Vui lòng ấn vào ảnh trong khu vực này để thay đổi hình nền thiết kế">

                <Grid container className={classes.rootGridContainer}>

                    <Grid item xs={12} sm={12} md={12} className={classes.gridItem1}>
                        {recordForFooterBarPersonalize && recordForFooterBarPersonalize != null &&
                            <GridBackgroudPhotoList recordForBackgroudPhotoList={recordForFooterBarPersonalize} setBgPhoto={setBgPhoto} />
                        }
                    </Grid>

                </Grid>

            </Tooltip>

        </>
    )
}
