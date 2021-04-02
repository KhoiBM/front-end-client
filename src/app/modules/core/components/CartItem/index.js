/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, Grid, Paper, Typography, TextField, Tooltip, Zoom, Button, Box } from '@material-ui/core';
import { RiInformationLine, RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { ViewCartItemInformation } from '../ViewCartItemInformation';
import { useFormat, useLoadPhotoList } from 'src/app/utils';
import config from 'src/environments/config';

const useStyles = makeStyles(theme => ({
    cartItemContainer: {
        width: "98%",
        minHeight: "120px",
        height: "120px",
        // minHeight: "80px",
        // height: "80px",
        // background: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        // borderTop: "1px solid rgba(0, 0, 0, 0.23)",
        // borderBottom: "1px solid rgba(0, 0, 0, 0.23)",
        // borderRadius: "4px",
        "&:hover": {
            backgroundColor: "#fffbf2",
        }

    },
    rootCartItemGrid: {
        // paddingLeft: theme.spacing(2),
        // paddingRight: theme.spacing(2),
        // background: "red",
        width: "98%",
        minHeight: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        "& .MuiTypography-root": {
            fontWeight: '200 !important',
            color: "#000",
        }
    },
    cardItemPhotoDemo: {
        objectFit: "contain",
        maxWidth: "100%",
        maxHeight: "100%",
        width: 'auto',
        height: 'auto',
        // border: "1px solid rgba(0, 0, 0, 0.23)",
    },
    cardItemPhotoDemoGridContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    cardItemPhotoDemoGridWrapper: {
        width: "50%",
        height: "50%",
    }
}
))

export const CartItem = (props) => {
    const classes = useStyles();

    const [refresh, setRefresh] = useState(false)

    const { recordForCartItem } = props

    const { rawProductName, size, color, unitPrice, servicePrice, quantity, note } = recordForCartItem

    const [cartItemDetailModal, setCartItemDetailModal] = useState({ isOpen: false })







    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    useEffect(() => {
        loadInit()
    }, [recordForCartItem])


    const loadInit = async () => {
        if (recordForCartItem && recordForCartItem != null) {
            let bucketName = ""
            let folder = ""
            let categoryCode = recordForCartItem.categoryCode
            let rawProductCode = recordForCartItem.rawProductCode
            let fileKey = ''

            switch (recordForCartItem.createdBy) {
                case "Khách hàng":
                    bucketName = config.useConfigAWS.CUSTOMERBUCKET.BUCKETNAME
                    folder = config.useConfigAWS.CUSTOMERBUCKET.FOLDER["CUSTOMER'SRAWPRODUCT"]
                    fileKey = `${folder}/${categoryCode}/${rawProductCode}/`
                    break;
                case "Quản lý":
                    bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
                    folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["STUDIO'SRAWPRODUCT"]
                    fileKey = `${folder}/${categoryCode}/${rawProductCode}/thumbnail`
                    break;
            }
            loadPhotoList(bucketName, fileKey)

            // console.log("recordForCartItem: " + JSON.stringify(recordForCartItem))
        }

    }


    useEffect(() => {
        // console.table(photoList)

    }, [photoList])







    const handleRefresh = () => {
        setRefresh(prev => !prev)
    }
    const handleCloseModal = () => {
        setCartItemDetailModal({ isOpen: false })
        handleRefresh()
    }


    return (
        <>
            <Box className={classes.cartItemContainer}>
                <Grid container className={classes.rootCartItemGrid}>
                    <Grid item xs={2} sm={2} md={2} className={classes.cardItemPhotoDemoGridContainer}>
                        <Box className={classes.cardItemPhotoDemoGridWrapper}>
                            <img
                                className={classes.cardItemPhotoDemo}
                                src={photoList[0]}
                                onClick={() => {

                                }}
                            />
                        </Box>

                    </Grid>
                    <Grid item xs={2} sm={2} md={2} >
                        <Typography variant={"body1"}>{rawProductName}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} >
                        <Typography variant={"body1"}>{size}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} >
                        <Typography variant={"body1"}>
                            {/* {color} */}
                            <RiCheckboxBlankCircleFill style={{ color: `${color}` }} />
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} >
                        <Typography variant={"body1"}>{`${useFormat().formatMoney(unitPrice)} đ`}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} >
                        <Typography variant={"body1"}>{`${useFormat().formatMoney(servicePrice)} đ`}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        <Typography variant={"body1"}>{quantity}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        < Tooltip TransitionComponent={Zoom} placement="top" title="Xem thông tin chi tiết" >

                            <Button onClick={(event) => {
                                event.stopPropagation()
                                setCartItemDetailModal({ isOpen: true, recordForCartItemDetail: recordForCartItem, handleCloseModal })
                            }
                            }>
                                <RiInformationLine />
                            </Button>

                        </ Tooltip>

                        {/* <Tooltip TransitionComponent={Zoom} placement="top" title="Chỉnh sửa">

                            <Button onClick={(event) => {
                                event.stopPropagation()
                            }
                            }>
                                <AiOutlineEdit />
                            </Button>

                        </Tooltip>

                        < Tooltip TransitionComponent={Zoom} placement="top" title="Xoá" >

                            <Button onClick={(event) => {
                                event.stopPropagation()
                            }
                            }>
                                <AiOutlineDelete style={{ color: "red" }} />
                            </Button>

                        </ Tooltip> */}

                    </Grid>
                </Grid>

                {/* <Grid container className={classes.rootCartItemGrid}>
                    <Grid item xs={12} sm={12} md={12} className={classes.gridItem1}>
                        <TextField
                            variant='outlined'
                            label="Ghi chú"
                            value={note}
                            name='note'
                        />
                    </Grid>

                </Grid> */}

            </Box>
            <ViewCartItemInformation cartItemDetailModal={cartItemDetailModal} setCartItemDetailModal={setCartItemDetailModal} />

        </>
    )
}
