/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, Grid, Button, Box, Tooltip, Zoom } from '@material-ui/core';
import { Stage } from 'react-konva';
import { StageKonvaContainer } from '../StageKonvaContainer';
import { VscOpenPreview } from 'react-icons/vsc'
const useStyles = makeStyles(theme => ({
    rootGridContainer: {
        width: "100%",
        height: "auto",
        minHeight: "70vh",
        // background: "red",
        borderTop: "1px solid rgb(0,0,0,0.23)",
    },
    gridItemStage: {
        borderRight: "1px solid rgba(0, 0, 0, 0.23)",
        display: 'flex',
        justifyContent: "center !important",
        alignItems: "center",
        position: "relative",
    },
    gridItemPreview: {
        width: "100%",
        height: "auto",
        minHeight: "70vh",
        maxHeight: "70vh",
        // background: "red",
        overflow: "scroll"

    },
    photoPreview: {
        objectFit: "contain",
        maxWidth: "80%",
        maxHeight: "80%",
        width: 'auto',
        height: 'auto',

    },
    previewCardWrapper: {
        width: "100%",
        height: "auto",
        maxHeight: "12vh !important",
        borderTop: "1px solid rgb(0,0,0,0.23)",
    },
    buttonPreview: {
        position: "absolute",
        right: theme.spacing(2),
        bottom: theme.spacing(2),
    }

}))
export const MainStageBar = (props) => {
    const classes = useStyles();
    const { bgPhoto, dragUrl, stageRef } = props
    const [imagePreviews, setImagePreviews] = useState([]);

    useEffect(() => {
        console.log("imagePreviews: ")
        console.log(imagePreviews)
    }, [bgPhoto, stageRef, imagePreviews])

    const handlePreview = () => {
        const image = stageRef.current.toImage({
            callback(img) {
                // console.log(img);

                setImagePreviews(imagePreviews.concat(img))
            },
            quality: 1,
            pixelRatio: 2
        });
    };
    return (
        <>
            <Grid container className={classes.rootGridContainer}>

                <Grid item xs={10} sm={10} md={10} className={classes.gridItemStage}>
                    <StageKonvaContainer bgPhoto={bgPhoto} dragUrl={dragUrl} stageRef={stageRef} />
                    <br />
                    <Tooltip TransitionComponent={Zoom} placement="left" title={"Xem trước"} >
                        <Button size="small" className={classes.buttonPreview} onClick={handlePreview}><VscOpenPreview /></Button>
                    </Tooltip>


                </Grid>

                <Grid item xs={2} sm={2} md={2} className={classes.gridItemPreview}>
                    {imagePreviews && imagePreviews != null && imagePreviews.length > 0 &&
                        imagePreviews.map((imagePreview, index) => (
                            <Box key={index} className={classes.previewCardWrapper}>
                                <img src={imagePreview.src} className={classes.photoPreview} />
                            </Box>

                        ))
                    }
                </Grid>

            </Grid>

        </>
    )
}


{/* <img
                        style={{ height: "100px" }}
                        src={bgPhoto && bgPhoto != null ? bgPhoto : ""}
                        onClick={() => {

                        }}
                    /> */}