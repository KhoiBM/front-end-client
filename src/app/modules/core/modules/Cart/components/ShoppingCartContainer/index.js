import React, { useState, useEffect } from 'react'
import { TextField, Grid, makeStyles, Paper, Box, Typography, Button, Container } from '@material-ui/core'
import { useRefresh, useFormat } from 'src/app/utils';
import { toast } from 'react-toastify';
import config from 'src/environments/config';
import { ViewCartOrder } from '../../../TrackOrder/components/ViewCartOrder';
import { ViewShoppingCart } from '../ViewShoppingCart';
import { CartServices } from 'src/app/services';
import { animateScroll as scroll } from 'react-scroll';
import { useHistory } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useStore, useDispatch, useSelector } from 'react-redux';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
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
        paddingTop: theme.spacing(5),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        '&:hover': {
            // transform: "scale(1.02)",
            transition: "all 0.2 ease -in -out",
            cursor: "pointer"
        }


    },
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
        flexDirection: "column",
        justifyContent: "center",
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
    },
    gridItemEmpty: {
        width: "100%",
        height: "auto",
        minHeight: "100px",
        // border: "1px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    emptyContainer: {
        width: "600px",
        height: "auto",
        minHeight: "500px",
        // border: "1px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.grey[500]
    }
}))

// localStorage.setItem("pps-shoppingCart", JSON.stringify(
// [
//     {
//         rawProductCode: "productcode",
//         rawProductName: "Lorem ipsum dolor sit amet",
//         categoryID: 1,
//         categoryCode: "categoryCode",
//         createdBy: "Quản lý",
//         size: '1',
//         color: "#48b7e2",
//         unitPrice: 100000,
//         servicePrice: 110000,
//         quantity: 5,
//         note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//         rawProductCode: "productcode2",
//         rawProductName: "Lorem ipsum dolor sit amet2",
//         categoryID: 2,
//         categoryCode: "categoryCode",
//         createdBy: "Quản lý",
//         size: '1',
//         color: "#48b7e2",
//         unitPrice: 100000,
//         servicePrice: 110000,
//         quantity: 2,
//         note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
// ]
// ))

export const ShoppingCartContainer = (props) => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    const classes = useStyles();

    const history = useHistory()

    const [totalOrderPrices, setTotalOrderPrices] = useState(null)

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const store = useStore();

    const dispatch = useDispatch();

    const { shoppingCart } = useSelector((state) => state.shoppingCartState)

    const [shoppingCartRecords, setShoppingCartRecords] = useState([])

    useEffect(() => {

        loadInit()
        console.log("refreshShoppingCartContainer")

    }, [refresh, shoppingCart])

    const loadInit = async () => {
        console.log("loadInit")

        if (shoppingCart && shoppingCart != null && Object.keys(shoppingCart).length > 0) {

            const analyzeObject = shoppingCart.reduce((acc, curr) => {
                const totalCartItemPrice = ((curr.unitPrice + curr.servicePrice) * curr.quantity)
                const totalOrderPrices = acc.totalOrderPrices + totalCartItemPrice
                return { totalOrderPrices }
            }, { totalOrderPrices: 0 })

            setTotalOrderPrices(`${useFormat().formatMoney(analyzeObject.totalOrderPrices)} đ`)

            setShoppingCartRecords(shoppingCart)

        }

    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            {/* {<Loader loading={loading} />} */}

            <Paper elevation={0} className={classes.mainContainer}>
                {shoppingCart && shoppingCart != null && shoppingCart.length > 0 ?
                    <Grid container spacing={0} className={classes.rootGrid}>

                        <Grid item xs={10} sm={10} md={10} className={classes.gridItemViewCart}>
                            <ViewShoppingCart
                                shoppingCart={shoppingCart}
                                handleRefreshShoppingCart={handleRefresh}
                            />
                        </Grid>

                        <Grid item xs={2} sm={2} md={2} className={classes.gridItemAction}>

                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} className={classes.gridItemTotalPrice}>
                                    <Paper elevation={0} className={classes.totalPriceContainer}>
                                        <div className={classes.totalPriceWrapper}>

                                            <Box>
                                                <Typography variant={"h6"}>Tổng giá trị đơn hàng</Typography>
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
                                                            shoppingCart: shoppingCart
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
                    :
                    <>
                        <Grid container spacing={0} className={classes.rootGrid}>

                            <Grid item xs={12} sm={12} md={12} className={classes.gridItemEmpty}>
                                <Container className={classes.emptyContainer}>
                                    <Box>
                                        <RiShoppingCartLine style={{ fontSize: "20rem" }} />
                                    </Box>
                                    <Box>
                                        <Typography variant={"h5"}>Không có gì trong giỏ hàng</Typography>
                                    </Box>
                                </Container>
                            </Grid>

                        </Grid>

                    </>

                }

            </Paper>

        </>
    )
}



// const loadInit = async () => {
//     console.log("loadInit")
//     try {
//         const response = await (await CartServices.viewShoppingCart()).data
//         // console.log("response: " + JSON.stringify(response))

//         if (response && response != null) {
//             if (response.result == config.useResultStatus.SUCCESS) {

//                 const records = response.info.records
//                 // console.log("records:" + JSON.stringify(records))

//                 const analyzeObject = records.reduce((acc, curr) => {
//                     const totalCartItemPrice = ((curr.unitPrice + curr.servicePrice) * curr.quantity)
//                     const totalOrderPrices = acc.totalOrderPrices + totalCartItemPrice
//                     return { totalOrderPrices }
//                 }, { totalOrderPrices: 0 })

//                 setTotalOrderPrices(`${useFormat().formatMoney(analyzeObject.totalOrderPrices)} đ`)

//                 setShoppingCart(records && records != null ? records : [])

//             } else {
//                 toast.error(config.useMessage.resultFailure)
//             }
//         } else {
//             throw new Error("Response is null or undefined")
//         }

//     } catch (err) {
//         toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
//     }

// }
