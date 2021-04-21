
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, Grid, Paper, Typography, TextField, Tooltip, Zoom, Button, Box, DialogTitle, Dialog, DialogContent } from '@material-ui/core';
import { RiInformationLine, RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCloudUpload, AiOutlineBlock } from 'react-icons/ai';
import { ViewCartItemInformation } from '../ViewCartItemInformation';
import { useFormat, useLoadPhotoList, useRefresh } from 'src/app/utils';
import config from 'src/environments/config';
import { toast } from 'react-toastify';
import { CartServices } from 'src/app/services';
import { ConfirmDialog } from '../ConfirmDialog';
import { Personalize } from '../Personalize';

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

export const ShoppingCartItem = (props) => {


    const classes = useStyles();

    const { recordForCartItem } = props

    const { categoryCode, rawProductCode, rawProductName, size, color, unitPrice, servicePrice, quantity, note, createdBy } = recordForCartItem

    const [cartItemDetailModal, setCartItemDetailModal] = useState({ isOpen: false })

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" })

    const [personalizeModal, setPersonalizeModal] = useState({ isOpen: false })

    useEffect(() => {
        // loadInit()
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



    const handleCloseModal = () => {
        setCartItemDetailModal({ isOpen: false })
        setPersonalizeModal({ isOpen: false })
        handleRefresh()
    }

    const onDeleteCartItem = async (rawProductCode) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })

        try {
            const response = await (await CartServices.deleteCartItem({ rawProductCode })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    toast.success("Xoá thành công")

                    handleRefresh()
                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

            console.log("onDeleteCartItem")
            console.log("rawProductCode: " + rawProductCode)

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }
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
                    <Grid item xs={2} sm={2} md={2}>
                        <Typography variant={"body1"}>{rawProductName}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} >
                        <Typography variant={"body1"}>{size}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} >
                        <Typography variant={"body1"}>
                            <RiCheckboxBlankCircleFill style={{ color: `${color}` }} />
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} style={{ minWidth: "6rem" }}>
                        <Typography variant={"body1"}>{`${useFormat().formatMoney(unitPrice)} đ`}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} style={{ minWidth: "6rem" }}>
                        <Typography variant={"body1"}>{`${useFormat().formatMoney(servicePrice)} đ`}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        <Typography variant={"body1"}>{quantity}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} style={{ minWidth: "8rem" }}>
                        <Typography variant={"body1"}>{`${useFormat().formatMoney((unitPrice + servicePrice) * quantity)} đ`}</Typography>
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
                        <Tooltip TransitionComponent={Zoom} placement="top" title="Chỉnh sửa">

                            <Button onClick={(event) => {
                                event.stopPropagation()
                                const data = {
                                    categoryCode: categoryCode,
                                    rawProductCode: rawProductCode,
                                    createdBy: createdBy
                                }
                                setPersonalizeModal({
                                    isOpen: true,
                                    recordForPersonalize: data,
                                    handleCloseModal
                                })
                            }
                            }>
                                <AiOutlineEdit />
                            </Button>

                        </Tooltip>



                        < Tooltip TransitionComponent={Zoom} placement="top" title="Xoá" >

                            <Button onClick={(event) => {
                                event.stopPropagation()
                                setConfirmDialog(
                                    {
                                        isOpen: true,
                                        title: "Bạn có chắc là muốn xoá mục này không?",
                                        subTitle: "Bạn không thể hoàn tác hành động này",
                                        onConfirm: () => { onDeleteCartItem(rawProductCode) }

                                    }
                                )
                            }
                            }>
                                <AiOutlineDelete style={{ color: "red" }} />
                            </Button>

                        </ Tooltip>

                    </Grid>
                </Grid>

            </Box>



            <ViewCartItemInformation cartItemDetailModal={cartItemDetailModal} setCartItemDetailModal={setCartItemDetailModal} />

            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />

            <Personalize personalizeModal={personalizeModal} setPersonalizeModal={setPersonalizeModal} />

        </>
    )
}