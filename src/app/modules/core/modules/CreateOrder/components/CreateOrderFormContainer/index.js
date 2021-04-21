import React from 'react'
import { Paper, makeStyles, Box, TextField, Grid, Button } from '@material-ui/core'
import { PageHeader } from 'src/app/modules/core/components';
import { useForm } from 'src/app/utils';
import { toast } from 'react-toastify';
import config from 'src/environments/config';
import { OrderServices } from 'src/app/services';
const useStyles = makeStyles(theme => ({
    mainContainer: {
        width: "100%",
        // paddingTop: theme.spacing(6),
        // background: '#B6E2F3',
        // background: 'var(bg-secondary-color-main)',
        minHeight: "90%",
        height: "auto",
        position: "relative",
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2 ease -in -out",
        // border: "1px solid red",
        paddingTop: theme.spacing(5),

        '&:hover': {
            // transform: "scale(1.02)",
            transition: "all 0.2 ease -in -out",
            cursor: "pointer"
        }

    },
    PageHeaderWrapper: {
        marginLeft: theme.spacing(2.2)

    },
    rootGrid: {
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
    gridItemContentCreateOrder: {
        // background: "red",
        background: "#fff",
        // background: theme.palette.grey[50],
        width: "100%",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
    rootForm: {
        width: "600px",
        border: "1px solid rgba(0, 0, 0, 0.23)",
        height: "auto",
        padding: theme.spacing(3)
    },
    gridItemContentContainer: {
        // paddingLeft: theme.spacing(5)
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        // border: "1px solid rgba(0, 0, 0, 0.23)",


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
}));
const initialFValues = {
    customerName: "",
    phone: "",
    address: "",
    note: ""
}

export const CreateOrderFormContainer = (props) => {
    const classes = useStyles();

    const { formData, setFormData, handleInputChange, helperValid = null, validation, handleChangeColor } = useForm(initialFValues)

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formdata: " + JSON.stringify(formData))
        const enableSubmit = validation(formData)

        if (enableSubmit) {
            const data = {
                ...formData,
                shoppingCart: []
            }
            createOrder(data)


        } else {
            toast.error(config.useMessage.invalidData);
        }
    }

    const createOrder = async (data) => {
        try {

            const response = await (await OrderServices.createNewOrder(data)).data
            // console.log("response: " + JSON.stringify(response))

            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    // const record = response.info.record

                    toast.success("Tạo thành công");

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


    return (
        <>
            <Paper elevation={0} className={classes.mainContainer}>

                <Grid container className={classes.rootGrid}>

                    <Grid item xs={12} sm={12} md={12} className={classes.gridItemContentCreateOrder}>

                        <form noValidate onSubmit={handleSubmit} className={classes.rootForm}>

                            <Grid container>
                                <Grid item xs={12} sm={12} md={12} >
                                    <Box className={classes.gridItemContentContainer} >

                                        <TextField
                                            variant='outlined'
                                            label="Tên khách hàng"
                                            value={formData.customerName}
                                            name='customerName'
                                            required
                                            onChange={handleInputChange}
                                            error={helperValid.customerName ? true : false}
                                            helperText={helperValid.customerName}
                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Số điện thoại"
                                            value={formData.phone}
                                            name='phone'
                                            required
                                            onChange={handleInputChange}
                                            error={helperValid.phone ? true : false}
                                            helperText={helperValid.phone}
                                        />
                                        <TextField
                                            variant='outlined'
                                            label="Địa chỉ"
                                            value={formData.address}
                                            name='address'
                                            required
                                            multiline
                                            onChange={handleInputChange}
                                            error={helperValid.address ? true : false}
                                            helperText={helperValid.address}
                                        />


                                        <TextField
                                            variant='outlined'
                                            label="Ghi chú"
                                            value={formData.note}
                                            name='note'
                                            required
                                            multiline
                                            onChange={handleInputChange}
                                            error={helperValid.note ? true : false}
                                            helperText={helperValid.note}
                                        />


                                    </Box>

                                </Grid>
                                <Grid item xs={12} sm={12} md={12} >
                                    <div className={classes.buttonWrapper}>
                                        <Button type="submit" variant="outlined" color="primary" size="large" className={classes.button}>Đặt ngay</Button>
                                    </div>
                                </Grid>

                            </Grid>

                        </form>
                    </Grid>

                </Grid>

            </Paper>
        </>
    )
}