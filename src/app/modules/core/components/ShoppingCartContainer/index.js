import React, { useState, useEffect } from 'react'
import { TextField, Grid, makeStyles, Paper, Box, Typography, Button } from '@material-ui/core'
import { useRefresh, useFormat } from 'src/app/utils';
import { toast } from 'react-toastify';
import config from 'src/environments/config';
import { ViewCartOrder } from '../ViewCartOrder';
import { ViewShoppingCart } from '../ViewShoppingCart';
import { CartServices } from 'src/app/services';
import { animateScroll as scroll } from 'react-scroll';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    mainContainer: {
        width: "100%",
        // paddingTop: theme.spacing(6),
        // background: '#B6E2F3',
        // background: 'var(bg-secondary-color-main)',
        minHeight: "100%",
        height: "auto",
        position: "relative",
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2 ease -in -out",
        // border: "1px solid red",
        // paddingTop: theme.spacing(5),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        '&:hover': {
            // transform: "scale(1.02)",
            transition: "all 0.2 ease -in -out",
            cursor: "pointer"
        }
    },
    // buttonWrapper: {
    //     marginTop: theme.spacing(2),
    //     // border: "1px solid red",
    //     width: '99.5%',
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     // marginRight: theme.spacing(1),
    // },
    // button: {
    //     width: "98%",
    //     height: "auto",
    //     minHeight: "80px",
    //     cursor: "pointer",
    //     // marginTop: theme.spacing(2),
    //     color: "#fff",
    //     '&:hover': {
    //         backgroundColor: theme.palette.primary.main,
    //         // backgroundColor: "var(--secondary-color-main)",
    //         boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
    //         transform: "scale(1.015)",

    //     },
    //     '&:focus': {
    //         // outline: "1px dashed var(--primary-color-dark)",
    //         outlineOffset: "4px",
    //     }
    // }
    rootGrid: {
        // marginTop: theme.spacing(3),
        width: "100%",
        // minHeight: "700px",
        minHeight: "100%",
        height: "auto",
        // border: "1px solid red",

        '& .MuiFormControl-root': {
            marginBottom: theme.spacing(3),
            // border: "1px solid red",
        }
    },
    gridItemViewCart: {

        // background: "blue",
        background: "#fff",
    },
    gridItemAction: {
        // background: "red",
        // background: "#fff",
        background: theme.palette.grey[50],
        width: "100%",
        // borderLeft: "1px solid rgba(0, 0, 0, 0.23)",

        '& .MuiFormControl-root': {
            width: "95%",
            fontWeight: '900 !important',
            color: "#000 !important",
            borderRadius: "4px",
            background: "#fff",
            '& .MuiInputBase-input': {
                color: "#000 !important",
                // background: "#fff",
                // background: theme.palette.grey[100],
                // background: "red",
                // background: 'var(--bg-secondary-color-main)',
                borderColor: "none !important",
                borderRadius: "4px",
                height: "30px !important",
                background: "#fff",
                "& .MuiInputBase-inputMultiline": {
                    // background: "red",
                }
            }
        }


    },
    gridItemTotalPrice: {
        // height: "15vh",
        // background: "red",
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        display: "flex",
        justifyContent: "center",
        // alignItems: "center"

    }, totalPriceContainer: {
        width: "98%",
        height: "auto",
        minHeight: "80px",
        // background: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // background: "var(--tertiary-color-main)",
        // backgroundColor: theme.palette.secondary.main,
        // color: "#fff",
        "& .MuiTypography-root": {
            fontWeight: '200 !important',
            color: "#000",

        }
    },
    totalPriceWrapper: {
        width: "98%",
        // background: "red",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    buttonWrapper: {
        marginTop: theme.spacing(3),
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
    },
    button: {
        width: "300px",
        height: "50px",
        bordeRadius: "5px",
        background: "#010606",
        whitespace: "nowrap",
        padding: '14px 48px',
        color: "#fff",
        outline: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.2s ease-in-out",

        "&:hover": {
            position: "relative",
            top: "0.5px",
            transition: "all 0.2s ease-in-out",
            background: "var(--primary-color-main)",
        }
    }
}))

export const ShoppingCartContainer = (props) => {

    const classes = useStyles();

    const history = useHistory()

    const [recordForCart, setRecordForCart] = useState({})

    const [totalOrderPrices, setTotalOrderPrices] = useState(null)

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()


    useEffect(() => {
        loadInit()
    }, [])

    useEffect(() => {
        // console.log("refresh")

    }, [totalOrderPrices, refresh])

    useEffect(() => {
        // console.log("recordForCart: " + JSON.stringify(recordForCart))
    }, [recordForCart])

    const loadInit = async () => {
        console.log("loadInit")
        try {
            const response = await (await CartServices.viewShoppingCart()).data
            // console.log("response: " + JSON.stringify(response))

            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    const records = response.info.records
                    // console.log("records:" + JSON.stringify(records))

                    const analyzeObject = records.reduce((acc, curr) => {
                        const totalCartItemPrice = ((curr.unitPrice + curr.servicePrice) * curr.quantity)
                        const totalOrderPrices = acc.totalOrderPrices + totalCartItemPrice
                        return { totalOrderPrices }
                    }, { totalOrderPrices: 0 })

                    setTotalOrderPrices(`${useFormat().formatMoney(analyzeObject.totalOrderPrices)} đ`)

                    setRecordForCart(records && records != null ? records : [])

                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }

    }






    const scrollToTop = () => {
        scroll.scrollToTop();
    }



    return (
        <>
            <Paper elevation={0} className={classes.mainContainer}>
                <Grid container spacing={0} className={classes.rootGrid}>

                    <Grid item xs={9} sm={9} md={9} className={classes.gridItemViewCart}>
                        <ViewShoppingCart
                            recordForCart={recordForCart}
                            handleRefreshShoppingCart={handleRefresh}
                        />
                    </Grid>

                    <Grid item xs={3} sm={3} md={3} className={classes.gridItemAction}>

                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} className={classes.gridItemTotalPrice}>
                                <Paper elevation={0} className={classes.totalPriceContainer}>
                                    <div className={classes.totalPriceWrapper}>

                                        <Box>
                                            <Typography variant={"h6"}>Tổng giá trị đơn hàng:</Typography>
                                        </Box>

                                        <Box>
                                            {totalOrderPrices && totalOrderPrices != null &&
                                                <Typography variant={"body1"}>{totalOrderPrices}</Typography>
                                            }
                                        </Box>

                                    </div>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} >
                                <div className={classes.buttonWrapper}>
                                    <Button type="submit" variant="outlined" color="primary" size="large" className={classes.button} onClick={() => {
                                        history.push(
                                            {
                                                pathname: `/core/create_order_page`,
                                                search: ``,
                                                state: {
                                                    data: {
                                                        shoppingCart: recordForCart
                                                    }
                                                }
                                            }
                                        )
                                        scrollToTop()

                                    }}>Tạo đơn hàng</Button>
                                </div>

                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            </Paper>

        </>
    )
}
