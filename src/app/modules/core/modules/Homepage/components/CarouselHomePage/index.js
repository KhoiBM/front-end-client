import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import demophoto from 'src/app/assets/image/bg_auth.jpeg'
import { Box } from '@material-ui/core';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const advertiseSteps = [
    {
        key: 0,
        title: 'Chào mừng đến với dịch vụ của chúng tôi',
        content: "",
        button: "",
        imgPath: demophoto,
    },
    {
        key: 1,
        title: '',
        content: "",
        button: "",
        imgPath: demophoto,
    },
    {
        key: 2,
        title: 'Khám phá ngay nào',
        content: "",
        button: "",
        imgPath: demophoto,
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        width: "100%",
        minHeight: "800px",
        maxHeight: "800px",
        // border: "1px solid white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: theme.spacing(3)
    },
    img: {
        // display: 'block',
        overflow: 'hidden',
        border: "1px solid white",
        objectFit: "cover",
        // maxWidth: "90%",
        // maxHeight: "90%",
        // width: 'auto',
        // height: 'auto',
        width: '100%',
        height: '100%',
        zIndex: 1

    },
    autoPlaySwipeableViews: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid red",
        width: "100%",
        minHeight: "100%",
        maxHeight: "100%",
        overflow: 'hidden',
    },
    viewStepContainer: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

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

        }
    },
    iconArrow: {
        color: "white",
        fontSize: "50px"
    }
}));

export const CarouselHomePage = () => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


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
                    {advertiseSteps.map((step, index) => (

                        <div key={step.key} className={classes.viewStepContainer}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.imgPath} alt={step.key} />
                            ) : null}
                            <Box className={classes.viewContentStepContainer}>
                                <Box elevation={0} className={classes.viewContentStepWrapper}>
                                    <>
                                        {/* <Typography variant="h2" style={{ color: "#fff", fontWeight: "300" }}>{step.title}</Typography> */}
                                        {/* <Typography variant="body" style={{ color: "#fff", fontWeight: "100" }}>{step.content}</Typography> */}
                                    </>
                                </Box>
                            </Box>

                        </div>

                    ))}
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
