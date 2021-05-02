
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, TextField, Switch, FormControlLabel, Button, MenuItem, FormHelperText, FormControl, InputLabel, Select, Paper, Typography, Box, Slide, Dialog, DialogTitle, DialogContent, DialogActions, FormLabel, RadioGroup, Radio } from '@material-ui/core'
import { toast } from 'react-toastify'
import config from 'src/environments/config'
import { useForm } from 'src/app/utils'
import { PageHeader } from 'src/app/modules/core/components'
import { IconClose, Loader, CanActive } from 'src/app/components'
import { OrderServices } from 'src/app/services'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'

const useStyles = makeStyles(theme => ({
    rootForm: {
        marginTop: theme.spacing(3),
        width: "100%",
        // border: "1px solid red",
        marginBottom: theme.spacing(3),
        '& .MuiFormControl-root': {
            width: '100%',
            height: "auto",
            marginBottom: theme.spacing(3),
            // border: "1px solid red",
        }
    },
    buttonWrapper: {
        // border: "1px solid red",
        width: '100%',
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    button: {
        cursor: "pointer",
        marginTop: theme.spacing(2),
        color: "#fff",
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            // backgroundColor: "var(--secondary-color-main)",
            boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
            transform: "scale(1.015)",

        },
        '&:focus': {
            // outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
        }
    },
    dialogContainer: {
        zIndex: "999 !important",
    },
    dialog: {
        width: "50rem",
        height: "auto",
        whiteSpace: "nowrap",
        zIndex: 555,
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
        position: "relative",

    },
    dialogAction: {

    },
    rootGridContainer: {
        // border: "1px solid blue",
        width: "100%",
        height: "auto"
    },
    gridContentConfirmNote: {
        // border: "1px solid blue",
        width: "100%",
        height: "auto",
        '& .MuiFormControl-root': {
            width: "100%",
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
                minHeight: "150px !important",
                height: "auto",
                background: "#fff",
                "& .MuiInputBase-inputMultiline": {
                    // background: "red",
                }
            }
        }
    },
    cofirmStatuGroup: {
        display: "flex"
    },
    PageHeaderWrapper: {
        width: "100%",
        // background: "blue",
        // marginLeft: theme.spacing(2.2),
        // border: "1px solid blue",

    },
    iconCloseWrapper: {
        width: "50px",
        height: "auto",
        // background: "orange",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "absolute",
        top: theme.spacing(3),
        right: theme.spacing(1),

    }

}))



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const initialFValues = {
    orderID: '',
    confirm: true,
    note: ''

}

export const ConfirmDemoProductOrder = (props) => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const classes = useStyles();

    const { formData, setFormData, handleInputChange, helperValid = null, validation } = useForm(initialFValues)

    const { confirmDemoProductOrderModal, setConfirmDemoProductOrderModal } = props

    const { isOpen, recordForConfirmDemoProductOrder, handleCloseModal } = confirmDemoProductOrderModal


    useEffect(() => {

        // console.log("formData:" + JSON.stringify(formData))

        if (recordForConfirmDemoProductOrder && recordForConfirmDemoProductOrder != null) {
            console.log("recordForConfirmDemoProductOrder: " + JSON.stringify(recordForConfirmDemoProductOrder))
            setFormData({ ...formData, ...recordForConfirmDemoProductOrder })

        }

        // loadInit()

    }, [recordForConfirmDemoProductOrder])

    // const loadInit = async () => {


    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formdata: " + JSON.stringify(formData))
        const enableSubmit = validation(formData)
        if (enableSubmit) {
            confirm()
        } else {
            toast.error(config.useMessage.invalidData);
        }
    }


    const confirm = async () => {
        showLoader()
        try {
            const response = await (await OrderServices.confirmDemoProduct(formData)).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    toast.success("Thành công")
                } else {
                    toast.error(`${config.useMessage.resultFailure} - ${response.errorInfo}`)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }
        hideLoader()

    }

    return (
        <>
            <CanActive isRole={config.useRoleName.customer} />
            {/* {<Loader loading={loading} zIndexValue={1500} />} */}

            <Dialog open={isOpen} classes={{ paper: classes.dialog }} className={classes.dialogContainer}
                TransitionComponent={Transition}>

                <DialogTitle className={classes.dialogTitle}>
                    <Box className={classes.PageHeaderWrapper}>
                        <PageHeader>Xem thông tin chi tiết mục trong giỏ hàng</PageHeader>
                    </Box>


                    <div className={classes.iconCloseWrapper}>
                        <IconClose handleClose={handleCloseModal} />
                    </div>
                </DialogTitle>

                <DialogContent className={classes.dialogContent}>

                    <form noValidate onSubmit={handleSubmit} className={classes.rootForm}>
                        <Grid container className={classes.rootGridContainer}>
                            <Grid item xs={12} sm={12} md={12} className={classes.gridContentConfirm}>

                                <FormControl component="fieldset">
                                    <FormLabel component="legend">Bạn có đồng ý sản phẩm mẫu hay không? :</FormLabel>
                                    <RadioGroup aria-label="confirm" name="confirm" value={formData.confirm ? "true" : "false"} onChange={handleInputChange} className={classes.cofirmStatuGroup}>
                                        <FormControlLabel value={"true"} control={<Radio color='primary' />} label="Có" />
                                        <FormControlLabel value={"false"} control={<Radio color='primary' />} label="Không" />
                                    </RadioGroup>
                                </FormControl>

                            </Grid>
                            <Grid item xs={12} sm={12} md={12} className={classes.gridContentConfirmNote}>
                                <TextField
                                    variant='outlined'
                                    label="Ghi chú"
                                    value={formData.note}
                                    name='note'
                                    onChange={handleInputChange}
                                    error={helperValid.note ? true : false}
                                    helperText={helperValid.note}
                                    multiline
                                />
                            </Grid>
                        </Grid>

                        <div className={classes.buttonWrapper}>
                            <Button type="submit" variant="contained" color="primary" size="large" className={classes.button}>Xác nhận</Button>
                        </div>

                    </form>

                </DialogContent>

            </Dialog >

        </>
    )
}


