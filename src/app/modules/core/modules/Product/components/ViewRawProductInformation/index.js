/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, GridList, GridListTile, GridListTileBar, IconButton, Paper, Grid, Typography, Container, Box, Button } from '@material-ui/core'
import config from 'src/environments/config';
import { toast } from 'react-toastify';
import { PhotoServices, CartServices } from 'src/app/services';
import { PageHeader, GridPhotoList } from 'src/app/modules/core/components';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { IconClose, Loader, NotFound } from 'src/app/components';
import { useFormat, useLoadPhotoList, useRefresh, useScrollToTop } from 'src/app/utils';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useShoppingCartAction } from 'src/app/stores/actions';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
import { v4 as uuidv4 } from 'uuid';
import { Personalize } from '../PersonalizeComponents';

const useStyles = makeStyles(theme => ({
    pageViewInfomationContainer: {
        width: "100%",
        minHeight: "1100px",
        height: "auto",  //  làm mất goc paper ở dưới 
        background: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // position: "relative",
        // overflow: "scroll",
        borderRadius: "10px",


    },
    pageViewInfomationWrapper: {
        width: "100%",
        // padding: theme.spacing(3),
        height: "auto",
        minHeight: "1000px",
        background: "#fff",
        // background: "blue",
        // padding: "15px 15px",
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2 ease -in -out",
        position: "relative",

        '&:hover': {
            // transform: "scale(1.02)",
            transition: "all 0.2 ease -in -out",
            cursor: "pointer"
        }

    },
    rootGrid: {
        marginTop: theme.spacing(3),
        width: "100%",
        minHeight: "700px",
        height: "auto",
        // border: "1px solid red",
        '& .MuiFormControl-root': {
            width: '200%',
            height: "auto",
            marginBottom: theme.spacing(3),
            // border: "1px solid red",
        }
    },
    gridItem1: {
        // background: "blue",
        padding: 0

    },
    gridItem2: {
        // background: "red",

    },
    titleContainer: {
        width: "100%",
        // background: "red",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    descriptionContainer: {
        width: "77%",
        textAlign: "justify",

        // background: "red",
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        "& .MuiTypography-body1 ": {
            lineHeight: "2 !important",
        }
    }, dateTimeContainer: {

    },
    gridItemContent: {
        width: "100%",
        height: "150px",
        // background: "red",
        paddingTop: theme.spacing(2),
    },
    categoryContainer: {
        // background: "red",
        marginBottom: theme.spacing(1),
        fontWeight: "300",
    },
    contentWrapper: {
        marginTop: theme.spacing(3),
        maxWidth: "300px",
        width: "200px",
        height: "50px",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        // border: "1px solid var(--primary-color-main)",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "500",
        fontSize: "1.25rem"
    },
    gridItemButtonContainer: {
        width: "100%",
        height: "auto",
        // border: "1px solid red",
        marginBottom: theme.spacing(3),
    },
    buttonWrapper: {
        marginTop: theme.spacing(3),
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: "10px",
        display: "flex",
        // justifyContent: "center",


    },
    buttonPersonalize: {
        width: "200px",
        height: "50px",

    },
    buttonAdd: {
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

export const ViewRawProductInformation = (props) => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const dispatch = useDispatch();

    const history = useHistory()

    const { scrollToTop } = useScrollToTop()

    const classes = useStyles();

    const { record } = props

    const [recordRawProduct, setRecordRawProduct] = useState({})

    const { rawProductID, rawProductCode, rawProductName, description, unitPrice, totalQuantity, size, color, categoryID, categoryCode, categoryName, serviceCode,
        serviceName, servicePrice, createdBy, createdAt, updatedAt } = recordRawProduct

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const [personalizeModal, setPersonalizeModal] = useState({ isOpen: false })

    useEffect(() => {
        if (record && record != null) {
            loadInit(record)
        }
    }, [record])

    useEffect(() => {

    }, [recordRawProduct])
    // console.log("photoList:" + photoList)

    const loadInit = async (record) => {
        showLoader()
        loadPhotoInit(record)
        loadDataInit(record)
        hideLoader()

    }

    const loadDataInit = async (record) => {
        setRecordRawProduct({
            ...record,
            toPrintPhotoList: [],
            createdPreviewPhotoList: []
        })
    }

    const loadPhotoInit = async (record) => {
        const { rawProductCode, categoryCode, createdBy } = record

        // console.log("categoryCode:" + categoryCode)
        // console.log("rawProductCode:" + rawProductCode)
        // console.log("createdBy:" + createdBy)

        let bucketName = ""
        let folder = ""
        let fileKey = ''

        switch (createdBy) {
            case "Khách hàng":
                bucketName = config.useConfigAWS.CUSTOMERBUCKET.BUCKETNAME
                folder = config.useConfigAWS.CUSTOMERBUCKET.FOLDER["CUSTOMER'SRAWPRODUCT"]
                fileKey = `${folder}/${categoryCode}/${rawProductCode}/`
                break;
            case "Quản lý":
                bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
                folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["STUDIO'SRAWPRODUCT"]
                fileKey = `${folder}/${categoryCode}/${rawProductCode}/`
                break;
        }

        loadPhotoList(bucketName, fileKey)
        // console.log("loadPhotoList")

    }

    const addCartItem = async () => {

        showLoader()


        if (totalQuantity >= 1) {
            try {
                const {
                    toPrintPhotoList,
                    createdPreviewPhotoList
                } = recordRawProduct

                if (toPrintPhotoList && toPrintPhotoList != null && toPrintPhotoList.length > 0 && createdPreviewPhotoList && createdPreviewPhotoList != null && createdPreviewPhotoList.length > 0) {
                    const cartItemCode = uuidv4()
                    const dataToAdd = {
                        ...recordRawProduct,
                        quantity: 1,
                        cartItemCode,
                    }

                    dispatch(useShoppingCartAction().addCartItemSuccess(dataToAdd))


                    history.push("/core/cart_page")
                    toast.success("Thêm vào giỏ hàng thành công")
                    scrollToTop()


                    console.log("addCartItem")
                    console.log("dataToAdd:")
                    console.table(dataToAdd)
                    console.log(dataToAdd)
                } else {
                    toast.info("Vui lòng cá nhân hoá")
                }


            } catch (err) {
                toast.error("Thất bại")
            }
        } else {
            toast.info("Hết hàng")
        }

        hideLoader()
    }

    const handleCloseModal = () => {
        setPersonalizeModal({ isOpen: false })
        // handleRefresh()
    }


    return (
        <>

            < div className={classes.pageViewInfomationContainer}>
                <Paper elevation={0} className={classes.pageViewInfomationWrapper}>
                    {recordRawProduct && recordRawProduct != null && Object.keys(recordRawProduct).length > 0 ?


                        <Grid container spacing={4} className={classes.rootGrid}>

                            <Grid item xs={6} sm={6} md={6} className={classes.gridItem1}>
                                {photoList && photoList != null && <GridPhotoList photoList={photoList} />}
                            </Grid>


                            <Grid item xs={6} sm={6} md={6} className={classes.gridItem2}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={12} >
                                        {/* <Box className={classes.categoryContainer}>
                                        <Typography variant={"subtitle1"} color={"textSecondary"}>Mã Code: {rawProductCode}</Typography>
                                    </Box> */}
                                        <Box className={classes.titleContainer}>
                                            <Typography variant={"h3"}>{rawProductName}</Typography>
                                        </Box>

                                    </Grid >

                                    <Grid item xs={12} sm={12} md={12}>
                                        <Box className={classes.descriptionContainer}>
                                            <Typography variant={"body1"}>{description}</Typography>
                                        </Box>

                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12}>
                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={6} className={classes.gridItemContent}>
                                                <Box >
                                                    <Typography variant={"h5"} color={"textSecondary"}>Giá sản phẩm</Typography>
                                                    <Box className={classes.contentWrapper}>
                                                        <Typography variant={"body1"} >{useFormat().formatMoney(unitPrice)} đ</Typography>
                                                    </Box>

                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} className={classes.gridItemContent}>
                                                <Box >
                                                    <Typography variant={"h5"} color={"textSecondary"}>Giá dịch vụ</Typography>
                                                    <Box className={classes.contentWrapper}>
                                                        <Typography variant={"body1"} >{useFormat().formatMoney(servicePrice)} đ</Typography>
                                                    </Box>

                                                </Box>
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={6} className={classes.gridItemContent}>
                                                <Box>
                                                    <Typography variant={"h5"} color={"textSecondary"}>Kích thước</Typography>
                                                    <Box className={classes.contentWrapper}>
                                                        <Typography variant={"body1"}>{size}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} className={classes.gridItemContent}>
                                                <Box>
                                                    <Typography variant={"h5"} color={"textSecondary"}>Màu sắc </Typography>
                                                    <Box className={classes.contentWrapper}>
                                                        <RiCheckboxBlankCircleFill style={{ color: `${color}` }} />

                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={6} className={classes.gridItemContent}>
                                                <Box>
                                                    <Typography variant={"h5"} color={"textSecondary"}>Tổng số lượng</Typography>
                                                    <Box className={classes.contentWrapper}>
                                                        <Typography variant={"body1"}>{totalQuantity <= 0 ? "Hết hàng" : totalQuantity}</Typography>
                                                    </Box>

                                                </Box>

                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} className={classes.gridItemContent}>
                                                <Box>
                                                    <Typography variant={"h5"} color={"textSecondary"}>Thể loại:</Typography>
                                                    <Box className={classes.contentWrapper}>
                                                        <Typography variant={"body1"}>{categoryName}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>

                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={6} className={classes.gridItemButtonContainer}>
                                                <div className={classes.buttonWrapper}>
                                                    <Button type="submit" variant="outlined" color="primary" size="large" className={classes.buttonPersonalize} onClick={(event) => {
                                                        event.stopPropagation()
                                                        showLoader()
                                                        const data = {
                                                            categoryCode,
                                                            rawProductCode,
                                                            createdBy,
                                                            personalizeType: config.usePersonalizeType.studioRawProductDetail
                                                        }
                                                        setPersonalizeModal({
                                                            isOpen: true,
                                                            recordForPersonalize: data,
                                                            setRecordRawProduct,
                                                            handleCloseModal
                                                        })
                                                        hideLoader()
                                                    }}>Cá nhân hoá</Button>
                                                </div>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6} className={classes.gridItemButtonContainer}>

                                                <div className={classes.buttonWrapper}>

                                                    <Button type="submit" variant="outlined" color="primary" size="large" className={classes.buttonAdd} onClick={addCartItem} >Thêm vào giỏ hàng</Button>
                                                </div>

                                            </Grid>

                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                        :
                        !loading.status && <NotFound />
                    }

                </Paper>

            </ div>

            <Personalize personalizeModal={personalizeModal} setPersonalizeModal={setPersonalizeModal} />


        </>
    )
}
