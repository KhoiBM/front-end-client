import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import carousel1 from 'src/app/assets/image/carousel1.jpg'
import carousel2 from 'src/app/assets/image/carousel2.jpg'
import carousel3 from 'src/app/assets/image/carousel3.jpg'
import { Box } from '@material-ui/core';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
import { useLoadPhotoList } from 'src/app/utils';
import config from 'src/environments/config';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        width: "100%",
        height: "100%",
        // border: "1px solid yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: theme.spacing(3),
        position: "relative",
        top: 0
    },
    img: {
        // display: 'block',
        overflow: 'hidden',
        // border: "1px solid red",
        objectFit: "cover",
        maxWidth: "100%",
        maxHeight: "50%",
        width: 'auto',
        height: 'auto',
        zIndex: 1

    },
    autoPlaySwipeableViews: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid orange",
        width: "100%",
        height: "90%",
        overflow: 'hidden',
        '& .react-swipeable-view-container': {
            "& div": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }
        },
        position: "absolute",
        top: 0
    },
    viewStepContainer: {
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid blue",

    },
    viewStepImageContainer: {
        width: "100%",
        height: "100%",
    },
    viewContentStepContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        width: "100%",
        minHeight: "100%",
        background: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid red",
    },
    viewContentStepWrapper: {
        width: "50%",
        minHeight: "300px",
        // background: "#fff",
        background: "transparent",
        // border: "1px solid red",
    },
    dotStepper: {
        width: "100%",
        maxHeight: "50px",
        flexGrow: 1,
        background: "inherit",
        // border: "1px solid blue",
        "& .MuiMobileStepper-dots": {
            "& .MuiMobileStepper-dot": {
                backgroundColor: "#fff ",
                width: "10px",
                height: "10px"
            },
            "& .MuiMobileStepper-dotActive": {
                backgroundColor: "var( --primary-color-main)  !important",
                width: "10px",
                height: "10px"
            }

        },
        position: "absolute",
        bottom: 0
    },
    iconArrow: {
        color: "white",
        fontSize: "50px"
    }
}));


// const advertiseSteps = [
//     {
//         key: 1,
//         title: 'Chào mừng đến với dịch vụ của chúng tôi',
//         content: "",
//         button: "",
//         imgPath: "carousel1",
//     },
//     {
//         key: 2,
//         title: '',
//         content: "",
//         button: "",
//         imgPath: "carousel2",
//     },
//     {
//         key: 3,
//         title: 'Khám phá ngay nào',
//         content: "",
//         button: "",
//         imgPath: "carousel3",
//     },
// ];

const advertiseSteps = [
    {
        key: 1,
        title: 'Chào mừng đến với dịch vụ của chúng tôi',
        content: "",
        button: "",
        imgPath: carousel1,
    },
    {
        key: 2,
        title: '',
        content: "",
        button: "",
        imgPath: carousel2,
    },
    {
        key: 3,
        title: 'Khám phá ngay nào',
        content: "",
        button: "",
        imgPath: carousel3,
    },
];


export const CarouselHomePage = () => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    const [carouselValue, setCarouselValue] = useState(1)

    const classes = useStyles();

    const theme = useTheme();

    const [activeStep, setActiveStep] = useState(0);



    const maxSteps = advertiseSteps.length;

    const handleNext = () => {

        setActiveStep((prevActiveStep) => {
            // console.log("prevActiveStep: " + prevActiveStep)
            // console.log("maxSteps: " + maxSteps)
            return prevActiveStep + 1
        });
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    // useEffect(() => {
    //     loadInit()
    // }, [carouselValue])

    // const loadInit = async () => {
    //     // showLoader()

    //     let bucketName = ""
    //     let folder = ""
    //     let fileKey = ''

    //     bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
    //     folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["HOMEPAGECAROUSEL"]

    //     switch (carouselValue) {

    //         case 1:
    //             fileKey = `${folder}/carousel1`
    //             break;
    //         case 2:

    //             fileKey = `${folder}/carousel2`

    //             break;
    //         case 3:
    //             fileKey = `${folder}/carousel3`
    //             break;
    //     }

    //     await loadPhotoList(bucketName, fileKey)

    //     // hideLoader()

    // }

    return (
        <>
            {/* {<Loader loading={loading} />} */}

            <div className={classes.root}>


                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    className={classes.autoPlaySwipeableViews}

                >
                    {advertiseSteps.map((step, index) => {

                        return (
                            <div key={step.key} className={classes.viewStepContainer}>
                                <Box className={classes.viewStepImageContainer}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        // <img className={classes.img} src={photoList[0]} alt={step.key} onLoad={() => {
                                        //     // setCarouselValue(index + 1)
                                        // }} />
                                        <img className={classes.img} src={step.imgPath} alt={step.key} />
                                    ) : null}
                                </Box>



                            </div>
                        )
                    })}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    variant="dots"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    className={classes.dotStepper}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            {theme.direction === 'rtl' ? <MdKeyboardArrowLeft className={classes.iconArrow} /> : <MdKeyboardArrowRight className={classes.iconArrow} />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <MdKeyboardArrowRight className={classes.iconArrow} /> : <MdKeyboardArrowLeft className={classes.iconArrow} />}
                        </Button>
                    }
                />

            </div>
        </>
    );
}

{/* <Box className={classes.viewContentStepContainer}>
    <Box elevation={0} className={classes.viewContentStepWrapper}>
        <>
            <Typography variant="h2" style={{ color: "#fff", fontWeight: "300" }}>{step.title}</Typography>
            <Typography variant="body" style={{ color: "#fff", fontWeight: "100" }}>{step.content}</Typography>
        </>
    </Box>
</Box> */}