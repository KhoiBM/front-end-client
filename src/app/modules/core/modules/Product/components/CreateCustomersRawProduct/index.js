import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Button, FormHelperText, MenuItem, FormControl, InputLabel, Select, TextField, Paper } from '@material-ui/core'
import { useCustomStylesAddEditForm, useUploadPhoto, useForm, useRefresh, useGetStateLocation } from 'src/app/utils'
import { toast } from 'react-toastify'
import config from 'src/environments/config'
import { ProductServices, CartServices } from 'src/app/services'
import { IconClose, Loader } from 'src/app/components'
import { ColorPickerInput, DropZoneUpload, PageHeader } from 'src/app/modules/core/components'
import { v4 as uuidv4 } from 'uuid';
import { v5 as uuidv5 } from 'uuid';
import { Personalize1 } from '../Personalize1Components'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'
const useStyles = makeStyles(theme => ({
    button: {
        width: "350px",
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

const initialFValues = {
    rawProductCode: '',
    rawProductName: '',
    size: '',
    color: '#000000',
    description: '',
    categoryID: "",
    categoryCode: "",
    quantity: 1,
    unitPrice: 0,
    servicePrice: 10000000,
    createdBy: "Khách hàng",

}

export const CreateCustomersRawProduct = () => {
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const classes = useStyles();

    const { classesCustomStylesAddEditForm } = useCustomStylesAddEditForm()

    const { data: dataOfService } = useGetStateLocation()

    const [uploadFiles, setUploadFiles] = useState([])

    const { uploadPhoto } = useUploadPhoto()

    const [categoryRecords, setCategoryRecords] = useState([])

    const { formData, setFormData, handleInputChange, helperValid = null, validation, handleChangeColor } = useForm(initialFValues)

    const [displayColorPicker, setDisplayColorPicker] = useState(false)

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const [personalizeModal, setPersonalizeModal] = useState({ isOpen: false })


    useEffect(() => {
        loadInit()
    }, [])

    const loadInit = async () => {
        showLoader()
        try {
            const response = await (await ProductServices.getAllCategory()).data
            // console.log("response: " + response)
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {
                    // console.log("recordsCategory: " + JSON.stringify(response.info.records))
                    const records = response.info.records
                    setCategoryRecords(records ? records : [])

                    const uuid = `CRP${uuidv4()}`

                    if (dataOfService && dataOfService != null && Object.keys(dataOfService).length != 0) {
                        console.log("dataOfService:" + JSON.stringify(dataOfService))
                        setFormData({ ...formData, categoryID: records[0].categoryID, rawProductCode: uuid, servicePrice: dataOfService.servicePrice });
                    } else {
                        setFormData({ ...formData, categoryID: records[0].categoryID, rawProductCode: uuid });

                    }

                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`,)
        }
        hideLoader()
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("formdata: " + JSON.stringify(formData))
        const enableSubmit = validation(formData)

        if (enableSubmit) {
            if (uploadFiles && uploadFiles != null && uploadFiles.length > 0) {

                add()

            } else {
                toast.info(config.useMessage.uploadFilePlease);
            }

        } else {
            toast.error(config.useMessage.invalidData);
        }
    }

    const add = async () => {
        showLoader()
        try {

            const response = await (await ProductServices.createCustomersRawProductByLocal({ ...formData, customersRawProductPhotoList: uploadFiles })).data
            // console.log("response: " + JSON.stringify(response))

            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    // const record = response.info.record

                    toast.success("Tạo thành công");

                    const data = {
                        cartItemCode: uuidv4(),
                        customersRawProductPhotoList: uploadFiles,
                        ...formData
                    }

                    setPersonalizeModal({
                        isOpen: true,
                        recordForPersonalize: data,
                        handleCloseModal
                    })



                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }
        hideLoader()

    }


    const handleCloseModal = () => {
        setPersonalizeModal({ isOpen: false })
        handleRefresh()
    }


    return (
        <>
            {<Loader loading={loading} />}
            <div className={classesCustomStylesAddEditForm.pageFormContainer}>
                <Paper elevation={0} className={classesCustomStylesAddEditForm.pageForm}>

                    <PageHeader>
                        Tạo sản phẩm thô của bạn
                    </PageHeader>

                    <form noValidate onSubmit={handleSubmit} className={classesCustomStylesAddEditForm.rootForm}>
                        <Grid container spacing={4}>
                            <Grid item xs={6} sm={6} md={6} className={classesCustomStylesAddEditForm.gridItem1}>
                                <TextField
                                    variant='outlined'
                                    label="Tên sản phẩm thô"
                                    value={formData.rawProductName}
                                    name='rawProductName'
                                    onChange={handleInputChange}
                                    error={helperValid.rawProductName ? true : false}
                                    helperText={helperValid.rawProductName}
                                    required
                                />

                                <TextField
                                    variant='outlined'
                                    label="Kích thước"
                                    value={formData.size}
                                    name='size'
                                    onChange={handleInputChange}
                                    error={helperValid.size ? true : false}
                                    helperText={helperValid.size}
                                    required
                                />

                                <TextField
                                    variant='outlined'
                                    label="Màu"
                                    value={formData.color}
                                    name='color'
                                    // onChange={handleInputChange}
                                    error={helperValid.color ? true : false}
                                    helperText={helperValid.color}
                                    required
                                    onClick={() => {
                                        setDisplayColorPicker((prev => !prev))
                                    }}
                                    autoFocus={displayColorPicker ? true : false}
                                />

                                <>
                                    <div className={classesCustomStylesAddEditForm.colorPickerInputContainer}>

                                        <ColorPickerInput displayColorPicker={displayColorPicker} setDisplayColorPicker={setDisplayColorPicker} color={formData.color} handleChangeColor={handleChangeColor} />

                                    </div>
                                </>


                                <TextField
                                    variant='outlined'
                                    label="Mô tả"
                                    value={formData.description}
                                    name="description"
                                    onChange={handleInputChange}
                                    error={helperValid.description ? true : false}
                                    helperText={helperValid.description}
                                    required
                                    multiline
                                />

                                <>
                                    <FormControl variant="outlined" >
                                        <InputLabel id="categoryID-label">
                                            Thể loại
                                        </InputLabel>
                                        <Select
                                            labelId="categoryID-label"
                                            id="categoryID"
                                            value={formData.categoryID
                                            }
                                            onChange={handleInputChange}
                                            name="categoryID"
                                            labelWidth={60}
                                            required
                                        >
                                            {
                                                categoryRecords.map(val => <MenuItem value={val.categoryID} key={val.categoryID}>{val.categoryName}</MenuItem>)
                                            }

                                        </Select>
                                        <FormHelperText style={{
                                            color: "#f44336",
                                            marginLeft: "14px",
                                            marginRight: "14px",
                                            marginBottom: '16px',

                                        }}>{helperValid.categoryID}
                                        </FormHelperText>
                                    </FormControl>
                                </>


                            </Grid>
                            <Grid item xs={6} sm={6} md={6} className={classesCustomStylesAddEditForm.gridItem2}>
                                <DropZoneUpload setUploadFiles={setUploadFiles} />
                            </Grid>
                        </Grid>
                        <div className={classesCustomStylesAddEditForm.buttonWrapper}>
                            <Button type="submit" variant="outline" color="primary" size="large" className={classes.button}>Tạo ngay</Button>
                        </div>
                    </form>
                </Paper>
            </div>
            <Personalize1 personalizeModal={personalizeModal} setPersonalizeModal={setPersonalizeModal} />

        </>
    )
}