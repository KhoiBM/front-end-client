

/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles, GridList, GridListTile, GridListTileBar, IconButton, Paper, Grid, Typography, Container, Box, TextField, Switch, FormControlLabel, Divider, DialogTitle, DialogContent, Slide, Dialog } from '@material-ui/core'
import { toast } from 'react-toastify';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
import { IconClose, CanActive, Loader } from 'src/app/components';
import config from 'src/environments/config';
import { useLoadPhotoList, useRefresh, useFormat } from 'src/app/utils';
import { PageHeader } from 'src/app/modules/core/components';
import { ViewCart } from '../ViewCartOrder';
import { GirdCartItemPhotoList } from '../GirdCartItemPhotoList';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const useStyles = makeStyles(theme => ({

    rootGridCartItemDetail: {
        marginTop: theme.spacing(3),
        width: "100%",
        minHeight: "700px",
        height: "auto",
        // border: "1px solid red",

        '& .MuiFormControl-root': {
            marginBottom: theme.spacing(3),
            // border: "1px solid red",
        }
    },
    gridItemPhotoList: {

        // background: "blue",
        background: "#fff",

    },
    gridItemContentCartItem: {

        // background: "orange",
        background: theme.palette.grey[50],
        width: "100%",
        height: "auto",
        '& .MuiFormControl-root': {
            width: "90%",

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
                // minHeight: "30px !important",
                height: "auto",
                background: "#fff",
                "& .MuiInputBase-inputMultiline": {
                    // background: "red",
                }
            }
        }

    },
    dialogContainer: {
        zIndex: "1101 !important",
    },
    dialog: {

        overflowY: "scroll",

    },
    dialogTitle: {
        position: "relative",
        // backgroundColor: "red",
        // padding: theme.spacing(2),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",


    },
    dialogContent: {
        background: "#fff",
    },
    dialogAction: {

    },
    gridItemTotalPrice: {
        // height: "15vh",
        // background: "red",
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },
    totalPriceContainer: {
        width: "90%",
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
    gridItemContentContainer: {
        // paddingLeft: theme.spacing(5)
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",

    },
    PageHeaderWrapper: {
        width: "700px",
        // background: "blue",
        // marginLeft: theme.spacing(2.2)

    },
    iconCloseWrapper: {
        width: "50px",
        height: "auto",
        // background: "orange",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: theme.spacing(3),
        right: theme.spacing(1.5),

    }
}))


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export const ViewCartItemInformation = (props) => {
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    const classes = useStyles();

    const { cartItemDetailModal, setCartItemDetailModal } = props

    const { isOpen, recordForCartItemDetail, handleCloseModal } = cartItemDetailModal

    const [recordForGridCartItemPhotoList, setRecordForGridCartItemPhotoList] = useState({})

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const [totalCartItemPrice, setTotalCartItemPrice] = useState(0)

    const [cartItemDetail, setCartItemDetail] = useState({})

    const { rawProductCode, rawProductName, size, color, unitPrice, servicePrice, quantity, note, createdBy, createdAt, updatedAt } = cartItemDetail


    useEffect(() => {
        if (recordForCartItemDetail && recordForCartItemDetail != null) {

            const { orderCode, orderDetailCode, categoryCode, rawProductCode, rawProductName, size, color, unitPrice, servicePrice, quantity, note, createdBy, createdAt, updatedAt } = recordForCartItemDetail

            setRecordForGridCartItemPhotoList({
                orderCode,
                orderDetailCode,
                categoryCode,
                rawProductCode,
                createdBy
            })

            setTotalCartItemPrice(`${useFormat().formatMoney((unitPrice + servicePrice) * quantity)} đ`)

            setCartItemDetail({
                ...recordForCartItemDetail
            })

            // console.table(recordForCartItemDetail)
        }
    }, [recordForCartItemDetail])

    useEffect(() => {

    }, [totalCartItemPrice, refresh])

    return (
        <>
            <CanActive isRole={config.useRoleName.customer} />
            {/* {<Loader loading={loading} zIndexValue={2350} />} */}
            <Dialog fullScreen open={isOpen} classes={{ paper: classes.dialog }} className={classes.dialogContainer} TransitionComponent={Transition}>

                <DialogTitle className={classes.dialogTitle}>

                    <Box className={classes.PageHeaderWrapper}>
                        <PageHeader>Xem thông tin chi tiết mục trong giỏ hàng</PageHeader>
                    </Box>


                    <div className={classes.iconCloseWrapper}>
                        <IconClose handleClose={handleCloseModal} />
                    </div>
                </DialogTitle>

                <DialogContent className={classes.dialogContent}>


                    <Grid container spacing={1} className={classes.rootGridCartItemDetail}>

                        <Grid item xs={8} sm={8} md={8} className={classes.gridItemPhotoList}>
                            <GirdCartItemPhotoList recordForGridCartItemPhotoList={recordForGridCartItemPhotoList} />
                        </Grid>

                        <Grid item xs={4} sm={4} md={4} className={classes.gridItemContentCartItem}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} className={classes.gridItemTotalPrice}>
                                    <Paper elevation={1} className={classes.totalPriceContainer}>
                                        <div className={classes.totalPriceWrapper}>

                                            <Box>
                                                <Typography variant={"h6"}>Tổng giá:</Typography>
                                            </Box>

                                            <Box>
                                                {totalCartItemPrice && totalCartItemPrice != null &&
                                                    <Typography variant={"body1"}>{totalCartItemPrice}</Typography>
                                                }
                                            </Box>

                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} >
                                    <Box className={classes.gridItemContentContainer} >

                                        <TextField
                                            variant='outlined'
                                            label="Mã Code"
                                            value={rawProductCode}
                                            name='rawProductCode'

                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Tên sản phẩm"
                                            value={rawProductName}
                                            name='rawProductName'

                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Kích thước"
                                            value={size}
                                            name='size'


                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Màu"
                                            value={color}
                                            name='color'
                                        // inputProps={<Typography variant={"body1"}>
                                        //     {/* {color} */}
                                        //     <RiCheckboxBlankCircleFill style={{ color: `${color}` }} />
                                        // </Typography>}
                                        />


                                        <TextField
                                            variant='outlined'
                                            label="Giá đơn vị"
                                            value={`${useFormat().formatMoney(unitPrice)} đ`}
                                            name='unitPrice'


                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Giá dịch vụ"
                                            value={`${useFormat().formatMoney(servicePrice)} đ`}
                                            name='servicePrice'


                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Số lượng"
                                            value={quantity}
                                            name='quantity'


                                        />
                                        {/* <TextField
                                            variant='outlined'
                                            label="Ghi chú"
                                            value={note}
                                            name='note'
                                            multiline
                                        // rows="10"

                                        /> */}
                                        {/* <TextField
                                            variant='outlined'
                                            label="Ngày tạo"
                                            value={createdAt}
                                            name='createdAt'

                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Ngày sửa đổi"
                                            value={updatedAt}
                                            name='updatedAt'

                                        /> */}


                                    </Box>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>

                </DialogContent>

            </Dialog >
        </>
    )
}


