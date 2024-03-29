/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { makeStyles, Button, Paper, TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@material-ui/core'
import { RiCloseFill } from 'react-icons/ri'
import { toast } from 'react-toastify'
import config from 'src/environments/config'
import { ProfileServices } from 'src/app/services/CoreServices/ProfileServices/ProfileServices'

import { useHistory } from 'react-router-dom'
import {
    DatePicker,
} from '@material-ui/pickers';
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import bgAuth from "src/app/assets/image/bg_auth.jpeg"
import { useForm } from 'src/app/utils'
import { PageHeader } from 'src/app/modules/core/components'
import { Loader, CanActive } from 'src/app/components'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'

const useStyles = makeStyles(theme => ({
    rootForm: {
        marginTop: theme.spacing(3),
        width: "100%",
        height: "auto",
        // overflow: "scroll",
        // border: "1px solid red",
        '& .MuiFormControl-root': {
            width: '100%',
            height: "auto",
            marginBottom: theme.spacing(3),
            // border: "1px solid red",
        }
    },
    pageFormContainer: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 0,
        position: "relative",
        // overflow: "scroll",
        // background: "red",
        // border: "1px solid rgba(0, 0, 0, 0.23)",




    },
    bg: {
        backgroundImage: `url(${bgAuth})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        // background: "red"
        // overflowY: "hidden"
    },
    pageForm: {
        width: "30rem",
        height: "auto",
        position: "relative",
        // background: "blue",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "15px 15px",
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2 ease -in -out",

        '&:hover': {
            transform: "scale(1.02)",
            transition: "all 0.2 ease -in -out",
            cursor: "pointer"
        }
    },
    iconCloseWrapper: {
        position: "absolute",
        right: theme.spacing(2),
        top: theme.spacing(2),
        color: "var(--primary-color-main)",
        transform: "scale(2)",
        transition: " all 0.3s ease 0s"

    },
    iconClose: {
        '&:hover': {
            color: "var(--primary-color-dark)",
        },
        '&:focus': {
            // outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
            // transform: "scale(5)",
        }
    },
    buttonSaveWrapper: {
        // border: "1px solid red",
        width: '100%',
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    buttonSave: {
        cursor: "pointer",
        color: "#fff",
        marginTop: theme.spacing(2),
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            boxShadow: "rgb(0 0 0 / 10 %) 0px 0.3rem 1rem",
            transform: "scale(1.015)",

        },
        '&:focus': {
            // outline: "1px dashed var(--primary-color-dark)",
            outlineOffset: "4px",
        }
    },
    genderGroup: {
        display: "flex",
        // color: "red"
    },
    dobContainer: {
        // backgroundColor: "red"
    },
    dobWrapper: {
        width: "100% !important",
        // backgroundColor: "blue"
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: "4px",
        padding: "18.5px 14px"
    },
    profileContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        zIndex: 1,
        margin: "6rem auto",
        // background: "red",
        // border: "1px solid rgba(0, 0, 0, 0.23)",
        padding: theme.spacing(6)
    }
}))


const initialFValues = {
    profileID: '',
    firstName: "",
    lastName: "",
    // avatar_Url: "",
    phone: "",
    dob: "",
    gender: false,
    address: "",
}

export const Profile = () => {
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const history = useHistory()
    const classes = useStyles()

    const { formData, setFormData, handleInputChange, helperValid = null, validation, dobSelected, setDobSelected, handleChangeDob } = useForm(initialFValues)

    const [record, setRecord] = useState({});


    useEffect(async () => {
        // document.body.classList.add(classes.bg)
        showLoader()
        try {
            const response = await (await ProfileServices.view()).data
            if (response.result == config.useResultStatus.SUCCESS) {
                // console.log(JSON.stringify(response.info.record))
                setRecord({ ...response.info.record })
                setFormData({ ...formData, ...response.info.record })

                const parseDob = parse(response.info.record.dob, 'yyyy-MM-dd', new Date())

                console.log("parseDob: " + parseDob)

                // const formatDob = format(parseDob, "dd-MM-yyyy")

                // console.log("formatDob: " + formatDob)

                setDobSelected(parseDob)
                // setDobSelected(response.info.record.dob)


            } else {
                // toast.error(config.useMessage.resultFailure)
            }
        } catch (err) {
            // toast.error(config.useMessage.fetchApiFailure)
        }
        hideLoader()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log("formdata: " + JSON.stringify(formData))
        const enableSubmit = validation(formData)


        // const enableSubmit = true
        // gender: formData.gender == "male" ? false : true,
        if (enableSubmit) {
            showLoader()
            try {
                const data = {
                    ...formData,
                    dob: format(dobSelected, "dd-MM-yyyy")
                }
                console.log("data: " + JSON.stringify(data))
                const response = await (await ProfileServices.edit(data)).data
                if (response.result == config.useResultStatus.SUCCESS) {
                    toast.success("Thành công")
                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } catch (err) {
                toast.error(config.useMessage.fetchApiFailure)
            }
            hideLoader()
        } else {
            toast.error(config.useMessage.invalidData);
        }
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            {/* <p>Profile</p> */}
            <CanActive isRole={config.useRoleName.customer} />

            <div className={classes.profileContainer}>
                <div className={classes.pageFormContainer}>
                    <Paper elevation={0} className={classes.pageForm}>

                        {/* <div className={classes.iconCloseWrapper} onClick={(e) => {
                            e.stopPropagation()
                            history.goBack()
                            // scrollToTop()
                        }}>
                            <div className={classes.iconClose}>
                                <RiCloseFill />
                            </div>
                        </div > */}

                        <PageHeader>
                            Hồ sơ của tôi
                        </PageHeader>


                        <form noValidate onSubmit={handleSubmit} className={classes.rootForm}>
                            <Grid container>
                                <Grid item xs={12} sm={12} md={12}>
                                    <TextField
                                        variant='outlined'
                                        label="Tên"
                                        value={formData.firstName}
                                        name='firstName'
                                        onChange={handleInputChange}
                                        error={helperValid.firstName ? true : false}
                                        helperText={helperValid.firstName}
                                    />
                                    <TextField
                                        variant='outlined'
                                        label="Họ"
                                        value={formData.lastName}
                                        name='lastName'
                                        onChange={handleInputChange}
                                        error={helperValid.lastName ? true : false}
                                        helperText={helperValid.lastName}
                                    />

                                    <TextField
                                        variant='outlined'
                                        label="Số điện thoại"
                                        value={formData.phone}
                                        name='phone'
                                        onChange={handleInputChange}
                                        error={helperValid.phone ? true : false}
                                        helperText={helperValid.phone}
                                    />


                                    <DatePicker value={dobSelected} onChange={handleChangeDob}
                                        openTo="year"
                                        format="dd-MM-yyyy"
                                        label="Ngày sinh"
                                        views={["year", "month", "date"]}
                                        // className={classes.dobWrapper}
                                        autoOk
                                        inputVariant="outlined"
                                        inputadornmentprops={{ position: "start" }}

                                    />
                                    <FormHelperText style={{
                                        color: "#f44336",
                                        marginLeft: "14px",
                                        marginRight: "14px",
                                        marginBottom: '16px',
                                        marginTop: "-20px"

                                    }}>{helperValid.dob}
                                    </FormHelperText>


                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">Giới tính</FormLabel>
                                        <RadioGroup aria-label="gender" name="gender" value={formData.gender ? "female" : "male"} onChange={handleInputChange} className={classes.genderGroup}>
                                            <FormControlLabel value={"female"} control={<Radio color='primary' />} label="Nữ" />
                                            <FormControlLabel value={"male"} control={<Radio color='primary' />} label="Nam" />
                                        </RadioGroup>
                                    </FormControl>
                                    <TextField
                                        variant='outlined'
                                        label="Địa chỉ"
                                        value={formData.address}
                                        name='address'
                                        onChange={handleInputChange}
                                        error={helperValid.address ? true : false}
                                        helperText={helperValid.address}
                                        multiline
                                    />


                                </Grid>
                            </Grid>
                            <div className={classes.buttonSaveWrapper}>
                                <Button type="submit" variant="contained" color="primary" size="large" className={classes.buttonSave}>Lưu</Button>
                            </div>
                        </form>

                    </Paper>
                </div >
            </div>

        </>
    )
}