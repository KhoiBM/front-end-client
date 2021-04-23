/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, Grid, Button, Box, Tooltip, Zoom } from '@material-ui/core';
import { Stage } from 'react-konva';
import { StageKonvaContainer } from '../StageKonvaContainer';
import { VscOpenPreview } from 'react-icons/vsc'
import { PreviewDesignedPhoto } from '../PreviewDesignedPhoto';
import { useRefresh } from 'src/app/utils';
import { AiOutlinePlusSquare, AiOutlineClose } from 'react-icons/ai';

import { v4 as uuidv4 } from 'uuid';
import { v5 as uuidv5 } from 'uuid';


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
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "auto",
        // background: "red",
        padding: theme.spacing(2),
    },
    gridItemPreview: {
        width: "100%",
        height: "auto",
        minHeight: "70vh",
        maxHeight: "70vh",
        // background: "red",
        overflow: "scroll",
        padding: theme.spacing(2)

    },
    photoPreview: {
        objectFit: "contain",
        maxWidth: "80%",
        maxHeight: "80%",
        width: 'auto',
        height: 'auto',
        // border: "1px solid rgba(0, 0, 0, 0.23)",

    },
    previewCardWrapper: {
        overflow: "scroll !important",
        width: "100% !important",
        height: "auto",
        maxHeight: "12vh !important",
        display: "flex",
        justifyContent: "center !important",
        alignItems: "center !important",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        marginBottom: theme.spacing(2),
        position: "relative",
    },
    buttonShowPreview: {
        position: "absolute",
        right: theme.spacing(3),
        bottom: theme.spacing(3),
        zIndex: 5
    },
    buttonCreatePreviewPhoto: {
        position: "absolute",
        right: theme.spacing(3),
        top: theme.spacing(3),
        zIndex: 5
    },
    deleteIcon: {
        color: "red"
    },
    deleteIconWrapper: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(0.5),
        zIndex: 5
    }

}))

export const MainStageBar = (props) => {
    const classes = useStyles();

    const { bgPhoto, dragUrl, stageRef } = props

    const [previewDesignedPhotoModal, setPreviewDesignedPhotoModal] = useState({ isOpen: false })

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const [photoPreviews, setPhotoPreviews] = useState([]);

    // const [photoPreview, setPhotoPreview] = useState([]);

    useEffect(() => {
        console.log("photoPreviews: ")
        console.log(photoPreviews)
    }, [bgPhoto, stageRef, photoPreviews])


    useEffect(() => {
    }, [bgPhoto, stageRef])



    const handleCreatePreviewPhoto = () => {
        const image = stageRef.current.toImage({
            callback(img) {
                // console.log(img);

                setPhotoPreviews(photoPreviews.concat({
                    id: uuidv4(),
                    photoPreview: img
                }))
            },
            quality: 1,
            pixelRatio: 2
        });
    };

    const handlePreview = () => {
        const image = stageRef.current.toImage({
            async callback(img) {
                // console.log(img);
                setPreviewDesignedPhotoModal({
                    isOpen: true,
                    photoPreview: img,
                    handleCloseModal
                })
            },
            quality: 1,
            pixelRatio: 2
        });


    };

    const handleCloseModal = () => {
        setPreviewDesignedPhotoModal({ isOpen: false })
        handleRefresh()
    }
    return (
        <>
            <Grid container className={classes.rootGridContainer}>

                <Grid item xs={10} sm={10} md={10} className={classes.gridItemStage}>

                    <Tooltip TransitionComponent={Zoom} placement="left" title={"Tạo ảnh xem trước thiết kế"} >
                        <Button size="small" className={classes.buttonCreatePreviewPhoto} onClick={handleCreatePreviewPhoto}>
                            <AiOutlinePlusSquare style={{ fontSize: "30px" }} /> Tạo ảnh xem trước thiết kế
                        </Button>
                    </Tooltip>

                    <StageKonvaContainer bgPhoto={bgPhoto} dragUrl={dragUrl} stageRef={stageRef} />

                    <Tooltip TransitionComponent={Zoom} placement="left" title={"Xem trước"} >
                        <Button size="small" className={classes.buttonShowPreview} onClick={handlePreview}>
                            <VscOpenPreview style={{ fontSize: "30px" }} />
                        </Button>
                    </Tooltip>


                </Grid>

                <Grid item xs={2} sm={2} md={2} className={classes.gridItemPreview}>
                    {photoPreviews && photoPreviews != null && photoPreviews.length > 0 &&
                        photoPreviews.map((photo, index) => (
                            <Box key={index} className={classes.previewCardWrapper} >
                                <Box className={classes.deleteIconWrapper}  >
                                    <AiOutlineClose className={classes.deleteIcon} onClick={(e) => {
                                        e.stopPropagation()
                                        setPhotoPreviews(photoPreviews.filter((val) => val.id != photo.id))
                                    }} />
                                </Box>


                                <img src={photo.photoPreview.src} className={classes.photoPreview} onClick={(e) => {
                                    e.stopPropagation()
                                    setPreviewDesignedPhotoModal({
                                        isOpen: true,
                                        photoPreview: photo.photoPreview,
                                        handleCloseModal
                                    })
                                }} />
                            </Box>

                        ))
                    }
                </Grid>

            </Grid>
            {<PreviewDesignedPhoto previewDesignedPhotoModal={previewDesignedPhotoModal} setPreviewDesignedPhotoModal={setPreviewDesignedPhotoModal} />}

        </>
    )
}


{/* <img
                        style={{ height: "100px" }}
                        src={bgPhoto && bgPhoto != null ? bgPhoto : ""}
                        onClick={() => {

                        }}
                    /> */}