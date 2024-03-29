/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { makeStyles, Typography, Grid, Box, Card } from '@material-ui/core';
import { ShoppingCartItem } from '../ShoppingCartItem';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    cartContainer: {
        width: "100%",
        height: "auto",
        minHeight: "855px",
        // border: "1px solid rgb(0,0,0,0.23)",
        borderRadius: "4px",
        // background: theme.palette.grey[100],
        // background: "var(--tertiary-color-main)",

    },
    rootGrid: {
        width: "100%",
        height: "auto",
        paddingTop: theme.spacing(2),
    },
    gridItemCount: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // paddingTop: theme.spacing(2),
    },
    gridItem1: {
        // width: "90%",
        // height: "73vh",
        // background: "blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // paddingTop: theme.spacing(2),
        gap: theme.spacing(4),
        overflow: "scroll",
        // paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(10),

    },
    gridItem2: {

    },
    cartItemTitleContainer: {
        width: "98%",
        minHeight: "100px",
        height: "100px",
        // background: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "sticky",
        // top: -16,
        top: 0,
        zIndex: 0,
        backgroundColor: "#FAFAFA",
        // backgroundColor: theme.palette.secondary.main,
        // background: "var(--tertiary-color-main)",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        // color: "#fff",



    },
    rootCartItemTitleGrid: {
        // paddingLeft: theme.spacing(1),
        // paddingRight: theme.spacing(2),
        // background: "red",
        width: "98%",
        minHeight: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        "& .MuiTypography-root": {
            fontWeight: '900 !important',
            color: "#000",
        }
    },
    cartCountContainer: {
        width: "98%",
        minHeight: "60px",
        height: "60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        // backgroundColor: "#FAFAFA",
        // color: "#fff",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        marginBottom: theme.spacing(5),
        "& .MuiTypography-root": {
            fontWeight: '900 !important',
            color: "#000",
        }
    }
}))

export const ViewShoppingCart = (props) => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const classes = useStyles();

    const [orderDetailList, setOrderDetailList] = useState([])

    const { shoppingCart } = useSelector((state) => state.shoppingCartState)

    const [shoppingCartRecords, setShoppingCartRecords] = useState([])


    useEffect(() => {

        loadInit(shoppingCart)

    }, [shoppingCart])

    const loadInit = async (shoppingCart) => {

        setOrderDetailList(shoppingCart && shoppingCart != null && shoppingCart.length > 0 ? shoppingCart : [])

    }


    return (
        <>
            <div className={classes.cartContainer}>
                <Grid container spacing={0} className={classes.rootGrid}>
                    <Grid item xs={12} sm={12} md={12} className={classes.gridItemCount}>
                        <Box elevation={0} className={classes.cartCountContainer}>
                            <Typography variant={"h3"}>Giỏ hàng</Typography>
                            <Typography variant={"body1"}>Có {orderDetailList.length} sản phẩm</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} className={classes.gridItem1}>
                        <Card elevation={0} className={classes.cartItemTitleContainer}>
                            <Grid container className={classes.rootCartItemTitleGrid}>
                                <Grid item xs={2} sm={2} md={2} >
                                    <Typography variant={"body1"}>Hình minh hoạ</Typography>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2}>
                                    <Typography variant={"body1"}>Tên sản phẩm</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} >
                                    <Typography variant={"body1"}>Kích thước</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} >
                                    <Typography variant={"body1"}>Màu</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} style={{ width: "7rem" }}>
                                    <Typography variant={"body1"}>Giá đơn vị</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} style={{ width: "7rem" }}>
                                    <Typography variant={"body1"}>Giá dịch vụ</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} >
                                    <Typography variant={"body1"}>Số lượng</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} style={{ width: "8rem" }}>
                                    <Typography variant={"body1"}>Tổng giá</Typography>
                                </Grid>
                                <Grid item xs={1} sm={1} md={1} >
                                    <Typography variant={"body1"}>Thao tác</Typography>
                                </Grid>
                            </Grid>
                        </Card>
                        {orderDetailList && orderDetailList != null && orderDetailList.length > 0 &&
                            orderDetailList.map((val, index) => (
                                <ShoppingCartItem key={index} shoppingCartItem={val}
                                />
                            ))
                        }
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
