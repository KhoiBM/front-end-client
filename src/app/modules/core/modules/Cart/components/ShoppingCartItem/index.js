
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, Grid, Paper, Typography, TextField, Tooltip, Zoom, Button, Box, DialogTitle, Dialog, DialogContent } from '@material-ui/core';
import { RiInformationLine, RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineCloudUpload, AiOutlineBlock } from 'react-icons/ai';
import config from 'src/environments/config';
import { toast } from 'react-toastify';
import { CartServices, ProductServices } from 'src/app/services';
import { useRefresh, useLoadPhotoList, useFormat, useForm } from 'src/app/utils';
import { ConfirmDialog } from 'src/app/modules/core/components';
import { useDispatch, useSelector } from 'react-redux';
import { useShoppingCartAction } from 'src/app/stores/actions';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

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
        borderRadius: "4px",
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
    },
    rootForm: {

    },
    quantityContainer: {
        width: "100%",
        height: "100%",
        // border: "1px solid red",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        '& .MuiFormControl-root': {
            width: "100px",
            height: "100% !important",
            fontWeight: '900 !important',
            color: "#000 !important",
            borderRadius: "4px",
            background: "#fff",

            // border: "1px solid blue",
            '& .MuiInputBase-input': {
                width: "90%",
                height: "5px !important",
                color: "#000 !important",
                // background: "#fff",
                // background: theme.palette.grey[100],
                // background: "red",
                // background: 'var(--bg-secondary-color-main)',
                borderColor: "none !important",
                borderRadius: "4px",

                background: "#fff",
                "& .MuiInputBase-inputMultiline": {
                    // background: "red",

                }
            }
        }
    }
}
))

const initialFValues = {
    cartItemCode: "",
    quantity: 1,
    note: ""
}


export const ShoppingCartItem = (props) => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const dispatch = useDispatch();

    const classes = useStyles();

    const { shoppingCartItem } = props

    const [cartItemDetailModal, setCartItemDetailModal] = useState({ isOpen: false })

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" })

    const [personalizeModal, setPersonalizeModal] = useState({ isOpen: false })

    const { formData, setFormData, handleInputChange, helperValid = null, validation } = useForm(initialFValues)

    const [shoppingCartItemRecords, setShoppingCartItemRecords] = useState([])

    const { shoppingCart } = useSelector((state) => state.shoppingCartState)

    const [shoppingCartRecords, setShoppingCartRecords] = useState([])


    useEffect(() => {
        loadInit()
    }, [shoppingCartItem])

    useEffect(() => {
        // console.log("refresh")
    }, [refresh])

    useEffect(() => {
        setShoppingCartRecords(shoppingCart)
    }, [shoppingCart])

    const loadInit = async () => {
        if (shoppingCartItem && shoppingCartItem != null && Object.keys(shoppingCartItem).length > 0) {
            showLoader()

            loadPhotoInit(shoppingCartItem)

            loadDataInit(shoppingCartItem)

            hideLoader()
        }

    }

    const loadPhotoInit = async (shoppingCartItem) => {

        const { categoryCode, rawProductCode, createdBy, customersRawProductUploadFiles } = shoppingCartItem

        let bucketName = ""
        let folder = ""
        let fileKey = ''

        console.log("shoppingCartItemcategoryCode:" + categoryCode)
        console.log("shoppingCartItemrawProductCode:" + rawProductCode)
        console.log("shoppingCartItemcreatedBy:" + createdBy)

        switch (shoppingCartItem.createdBy) {
            case "Kh??ch h??ng":
                setPhotoList(customersRawProductUploadFiles.map((photo) => photo.src))
                break;
            case "Qu???n l??":
                bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
                folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["STUDIO'SRAWPRODUCT"]
                // fileKey = `${folder}/${categoryCode}/${rawProductCode}/thumbnail`
                fileKey = `${folder}/${categoryCode}/${rawProductCode}/`
                loadPhotoList(bucketName, fileKey)
                break;
        }


    }

    const loadDataInit = async (shoppingCartItem) => {

        const { quantity, note } = shoppingCartItem

        setFormData({ ...formData, quantity, note })

        setShoppingCartItemRecords(shoppingCartItem)
    }

    useEffect(() => {

        // console.table(photoList)

    }, [photoList])



    const handleCloseModal = () => {
        setCartItemDetailModal({ isOpen: false })
        setPersonalizeModal({ isOpen: false })
        handleRefresh()
    }

    const onDeleteCartItem = async (cartItemCode) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        try {

            dispatch(useShoppingCartAction().deleteCartItemSuccess({ cartItemCode }))

            toast.success("Xo?? th??nh c??ng")

            handleRefresh()

            console.log("onDeleteCartItem")
            console.log("cartItemCode: " + cartItemCode)

        } catch (err) {
            toast.error("Xo?? th???t b???i")
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        if (event.key === 'Enter') {
            console.log('do validate');
            console.log("formdata: " + JSON.stringify(formData))
            const enableSubmit = validation(formData)

            if (enableSubmit) {

                const { cartItemCode } = shoppingCartItem

                onEditCartItem(formData, cartItemCode)

            } else {
                toast.error(config.useMessage.invalidData);
            }
        }

    }

    const checkConditionToEdit = async (shoppingCartRecords, shoppingCartItemRecords, data) => {
        try {

            const response = await (await ProductServices.viewRawProductDetail({ rawProductID: shoppingCartItemRecords.rawProductID })).data

            if (response && response != null) {

                if (response.result == config.useResultStatus.SUCCESS) {


                    const record = response.info.record

                    const rawProductTotalQuantity = record.totalQuantity

                    console.log("shoppingCartRecords:")
                    console.log(shoppingCartRecords)

                    const totalQuantityOfRawProductInCart = shoppingCartRecords.reduce((acc, curr) => {

                        console.log("acc:" + acc)

                        console.log("curr:")
                        console.log(curr)



                        console.log("curr.rawProductCode:" + JSON.stringify(String(curr.rawProductCode)))

                        console.log("shoppingCartItemRecords.rawProductCode:" + JSON.stringify(String(shoppingCartItemRecords.rawProductCode)))



                        const checkRawProductCode = (String(curr.rawProductCode) == String(shoppingCartItemRecords.rawProductCode))

                        const checkCartItemCode = (String(curr.cartItemCode) == String(data.cartItemCode))



                        console.log("checkRawProductCode" + checkRawProductCode)

                        console.log("checkCartItemCode" + checkCartItemCode)


                        if (checkRawProductCode && !checkCartItemCode) {

                            const resultAcc = (parseInt(acc) + parseInt(curr.quantity))

                            console.log("resultAcc:" + resultAcc)

                            return resultAcc
                        }



                        return acc

                    }, 0)

                    console.log("totalQuantityOfRawProductInCart:" + totalQuantityOfRawProductInCart)

                    const totalQuantityToEdit = (parseInt(data.quantity) + parseInt(totalQuantityOfRawProductInCart))

                    const checkValidationQuantity = totalQuantityToEdit <= parseInt(rawProductTotalQuantity)

                    console.log("data.quantity :" + data.quantity)

                    console.log("totalQuantityToEdit :" + totalQuantityToEdit)


                    if (!checkValidationQuantity) {

                        toast.error("B???n kh??ng th??? mua s??? l?????ng nhi???u h??n s??? l?????ng hi???n t???i c???a s???n ph???m")

                        throw new Error("B???n kh??ng th??? mua s??? l?????ng nhi???u h??n s??? l?????ng hi???n t???i c???a s???n ph???m")

                    } else {
                        dispatch(useShoppingCartAction().editCartItemSuccess(data))
                        toast.success("Thay ?????i th??nh c??ng")
                    }

                } else {

                    // toast.error(config.useMessage.resultFailure)
                    throw new Error(config.useMessage.resultFailure)
                }
            } else {

                throw new Error("Response is null or undefined")

            }

        } catch (err) {
            toast.error("Thay ?????i th???t b???i")
            setFormData({ ...formData, quantity: shoppingCartItemRecords.quantity })
        }
    }


    const onEditCartItem = async (formData, cartItemCode) => {
        showLoader()
        try {

            const data = {
                ...formData,
                cartItemCode
            }

            console.log("dataEdit:" + JSON.stringify(data))

            if (shoppingCartItemRecords.createdBy == config.useCreatedBy.manager) {
                checkConditionToEdit(shoppingCartRecords, shoppingCartItemRecords, data)
            } else {
                dispatch(useShoppingCartAction().editCartItemSuccess(data))
                toast.success("Thay ?????i th??nh c??ng")
            }


            handleRefresh()

            console.log("onEditCartItem")

        } catch (err) {
            toast.error("Thay ?????i th???t b???i")
            setFormData({ ...formData, quantity: shoppingCartItemRecords.quantity })
        }
        hideLoader()

    }



    return (
        <>
            {/* {<Loader loading={loading} />} */}
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
                        <Typography variant={"body1"}>{shoppingCartItemRecords.rawProductName}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} >
                        <Typography variant={"body1"}>{shoppingCartItemRecords.size}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} >
                        <Typography variant={"body1"}>
                            <RiCheckboxBlankCircleFill style={{ color: `${shoppingCartItemRecords.color}` }} />
                        </Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} style={{ width: "7rem" }}>
                        <Typography variant={"body1"}>{`${useFormat().formatMoney(shoppingCartItemRecords.unitPrice)} ??`}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} style={{ width: "7rem" }}>
                        <Typography variant={"body1"}>{`${useFormat().formatMoney(shoppingCartItemRecords.servicePrice)} ??`}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}
                        className={classes.quantityContainer}
                    >
                        <form noValidate
                            onKeyDown={handleSubmit}
                            className={classes.rootForm}
                        >
                            <TextField
                                variant='outlined'
                                value={formData.quantity}
                                name='quantity'
                                onChange={handleInputChange}
                                error={helperValid.quantity ? true : false}
                                helperText={helperValid.quantity}
                                required
                                type="number"
                                InputProps={{ inputProps: { min: 1, max: 100 } }}
                            />
                        </form>

                    </Grid>
                    <Grid item xs={1} sm={1} md={1} style={{ width: "8rem" }}>
                        <Typography variant={"body1"}>{`${useFormat().formatMoney((shoppingCartItemRecords.unitPrice + shoppingCartItemRecords.servicePrice) * shoppingCartItemRecords.quantity)} ??`}</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1}>
                        {/* < Tooltip TransitionComponent={Zoom} placement="top" title="Xem th??ng tin chi ti???t" >

                            <Button onClick={(event) => {
                                event.stopPropagation()
                                setCartItemDetailModal({ isOpen: true, recordForCartItemDetail: shoppingCartItem, handleCloseModal })
                            }
                            }>
                                <RiInformationLine />
                            </Button>

                        </ Tooltip> */}

                        {/* <Tooltip TransitionComponent={Zoom} placement="top" title="Ch???nh s???a">

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

                            </Tooltip> */}



                        < Tooltip TransitionComponent={Zoom} placement="top" title="Xo??" >

                            <Button onClick={(event) => {
                                event.stopPropagation()
                                setConfirmDialog(
                                    {
                                        isOpen: true,
                                        title: "B???n c?? ch???c l?? mu???n xo?? m???c n??y kh??ng?",
                                        subTitle: "B???n kh??ng th??? ho??n t??c h??nh ?????ng n??y",
                                        onConfirm: () => { onDeleteCartItem(shoppingCartItemRecords.cartItemCode) }

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




            {/* <ViewCartItemInformation cartItemDetailModal={cartItemDetailModal} setCartItemDetailModal={setCartItemDetailModal} /> */}

            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />

            {/* <Personalize personalizeModal={personalizeModal} setPersonalizeModal={setPersonalizeModal} /> */}

        </>
    )
}