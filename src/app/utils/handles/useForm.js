/* eslint-disable no-empty */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';
import config from 'src/environments/config';

export const useForm = (initialFValues, validOnChange = true) => {
    const regexPassword = config.useRegex.regexPassword
    const regexPhone = config.useRegex.regexPhone

    const [formData, setFormData] = useState(initialFValues);
    const [dobSelected, setDobSelected] = useState(new Date())
    const [helperValid, setHelperValid] = useState({});

    const handleInputChange = (event) => {
        const name = event.target.name;
        let value = event.target.type == 'checkbox'
            ? event.target.checked
            : event.target.value;

        if (name == "gender") {
            // value = Boolean(value)
            // console.log(Boolean(value))
            value = value == "female" ? true : false
        }
        if (name == "confirm") {
            // value = Boolean(value)
            // console.log(Boolean(value))
            value = value == "true" ? true : false
        }
        if (name == "totalQuantityOfPrintedProduct") {
            if (Number(value) < 1) {
                value = 1
            }
        }

        if (name == "unitPrice") {
            if (Number(value) < 0) {
                value = 0
            }
        }


        if (name == "servicePrice") {
            if (Number(value) < 0) {
                value = 0
            }
        }


        if (name == "quantity") {
            if (Number(value) < 1) {
                value = 1
            }
        }


        console.log(name + ": " + value)
        setFormData({ ...formData, [name]: value });
        // console.log("formdata" + ": " + JSON.stringify(formData))
        if (validOnChange) validation({ [name]: value })
        // validation(formData)
    }
    const handleChangeDob = (date) => {
        setDobSelected(date)
        // console.log(date)
    }
    const handleChangeColor = (color, event) => {
        setFormData({ ...formData, color: color.hex });
        // console.log(JSON.stringify(color))
    }

    const validation = (fieldValues = formData) => {
        // const temp = { ...helperValid };
        // if ('username' in fieldValues) temp.username = fieldValues.username && fieldValues.username.length > 0 ? "" : "T??n ng?????i d??ng l?? b???t bu???c"
        // if ('email' in fieldValues) temp.email = fieldValues.email && fieldValues.email.length > 0 && config.useRegex.regexEmail.test(fieldValues.email) ? "" : "Email kh??ng h???p l???"
        // if ('password' in fieldValues) temp.password = fieldValues.password && fieldValues.password.length >= 8 && fieldValues.password.length <= 20 && regexPassword.test(fieldValues.password) ? "" : "M???t kh???u l?? b???t bu???c (8 ?????n 20 k?? t???) - Ph???i c?? ??t nh???t 1 s???, 1 ch??? th?????ng, 1 ch??? in hoa, 1 k?? t??? ?????c bi???t"
        // if ('rePassword' in fieldValues) {
        //     temp.rePassword = fieldValues.rePassword
        //         && fieldValues.rePassword.length >= 8
        //         && fieldValues.rePassword.length <= 20
        //         && regexPassword.test(fieldValues.rePassword)
        //         ? "" : "M???t kh???u l?? b???t bu???c(8 ?????n 20 k?? t???) - Ph???i c?? ??t nh???t 1 s???, 1 ch??? th?????ng, 1 ch??? in hoa, 1 k?? t??? ?????c bi???t";
        // }
        // if ('password' in fieldValues && 'rePassword' in fieldValues) {
        //     // console.log("rePassword:" + fieldValues.rePassword)
        //     // console.log("password:" + fieldValues.password)
        //     // if (fieldValues.rePassword == fieldValues.password) console.log("equal")
        //     if (temp.rePassword == "") {
        //         temp.rePassword = fieldValues.rePassword == fieldValues.password
        //             ? "" : "M???t kh???u n??y ph???i gi???ng v???i m???t kh???u ??? tr??n"
        //     }

        // }

        // if ('dob' in fieldValues) {
        //     const currentYear = new Date().getFullYear();
        //     const compareYear = currentYear >= dobSelected.getFullYear();
        //     // console.log("validDob: " + compareYear)
        //     temp.dob = compareYear ? "" : "Ng??y sinh kh??ng h???p l???"
        // }

        // if ('firstName' in fieldValues) temp.firstName = fieldValues.firstName && fieldValues.firstName.length > 0 ? "" : "T??n l?? b???t bu???c"
        // if ('lastName' in fieldValues) temp.lastName = fieldValues.lastName && fieldValues.lastName.length > 0 ? "" : "H??? l?? b???t bu???c"
        // if ('address' in fieldValues) temp.address = fieldValues.address && fieldValues.address.length > 0 ? "" : "?????a ch??? l?? b???t bu???c"
        // if ('phone' in fieldValues) temp.phone = fieldValues.phone && fieldValues.phone.length > 9 && fieldValues.phone.length < 12 && regexPhone.test(fieldValues.phone) ? "" : "S??? ??i???n tho???i kh??ng h???p l???"




        // if ('description' in fieldValues) temp.description = fieldValues.description && fieldValues.description.length > 0 ? "" : "M?? t??? l?? b???t bu???c"





        // setHelperValid({ ...temp });
        // return Object.values(temp).every(val => val == "")

        const temp = { ...helperValid };

        if ('password' in fieldValues) temp.password = fieldValues.password && fieldValues.password != null && fieldValues.password.length >= 8 && fieldValues.password.length <= 20 && regexPassword.test(fieldValues.password) ? "" : "M???t kh???u l?? b???t bu???c (8 ?????n 20 k?? t???) - Ph???i c?? ??t nh???t 1 s???, 1 ch??? th?????ng, 1 ch??? in hoa, 1 k?? t??? ?????c bi???t"
        if ('rePassword' in fieldValues) {
            temp.rePassword = fieldValues.rePassword
                && fieldValues.rePassword != null
                && fieldValues.rePassword.length >= 8
                && fieldValues.rePassword.length <= 20
                && regexPassword.test(fieldValues.rePassword)
                ? "" : "M???t kh???u l?? b???t bu???c(8 ?????n 20 k?? t???) - Ph???i c?? ??t nh???t 1 s???, 1 ch??? th?????ng, 1 ch??? in hoa, 1 k?? t??? ?????c bi???t";
        }

        if ('password' in fieldValues && 'rePassword' in fieldValues) {
            // console.log("rePassword:" + fieldValues.rePassword)
            // console.log("password:" + fieldValues.password)
            // if (fieldValues.rePassword == fieldValues.password) console.log("equal")
            if (temp.rePassword == "") {
                temp.rePassword = fieldValues.rePassword == fieldValues.password
                    ? "" : "M???t kh???u n??y ph???i gi???ng v???i m???t kh???u ??? tr??n"
            }
        }

        /*----------------------Account---------------------------*/

        // if ('accountID' in fieldValues) temp.accountID = fieldValues.accountID && fieldValues.accountID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('active' in fieldValues) temp.active = fieldValues.active && fieldValues.active.length > 0 ? "" : "active kh??ng h???p l???"
        if ('email' in fieldValues) temp.email = fieldValues.email && fieldValues.email.length > 0 && fieldValues.email.length <= 100 && config.useRegex.regexEmail.test(fieldValues.email) ? "" : "Email kh??ng h???p l???"
        // if ('invalidAccessToken' in fieldValues) temp.invalidAccessToken = fieldValues.invalidAccessToken && fieldValues.invalidAccessToken.length > 0 && fieldValues.invalidAccessToken.length <= 1000 ? "" : "InvalidAccessToken kh??ng h???p l???"
        // if ('roleID' in fieldValues) temp.roleID = fieldValues.roleID && fieldValues.roleID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('profileID' in fieldValues) temp.profileID = fieldValues.profileID && fieldValues.profileID.length > 0 ? "" : "ID kh??ng h???p l???"
        if ('username' in fieldValues) temp.username = fieldValues.username && fieldValues.username.length > 0 && fieldValues.username.length <= 50 && config.useRegex.regexUsername.test(fieldValues.username) ? "" : "T??n ng?????i d??ng kh??ng h???p l???"


        /*-------------------------------------------------*/

        /*----------------------Administrator---------------------------*/

        // if ('administratorID' in fieldValues) temp.administratorID = fieldValues.administratorID && fieldValues.administratorID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('accountID' in fieldValues) temp.accountID = fieldValues.accountID && fieldValues.accountID.length > 0 ? "" : "ID kh??ng h???p l???"

        /*-------------------------------------------------*/


        /*----------------------Business Staff---------------------------*/

        // if ('businessStaffID' in fieldValues) temp.businessStaffID = fieldValues.businessStaffID && fieldValues.businessStaffID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('accountID' in fieldValues) temp.accountID = fieldValues.accountID && fieldValues.accountID.length > 0 ? "" : "ID kh??ng h???p l???"

        /*-------------------------------------------------*/


        /*----------------------Category---------------------------*/

        // if ('categoryID' in fieldValues) temp.categoryID = fieldValues.categoryID && fieldValues.categoryID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('active' in fieldValues) temp.active = fieldValues.active && fieldValues.active.length > 0 ? "" : "active kh??ng h???p l???"
        // if ('categoryCode' in fieldValues) temp.categoryCode = fieldValues.categoryCode && fieldValues.categoryCode.length > 0 && fieldValues.categoryCode.length < 30 && config.useRegex.regexCode.test(fieldValues.categoryCode) ? "" : "Code kh??ng h???p l???"
        // if ('categoryName' in fieldValues) temp.categoryName = fieldValues.categoryName && fieldValues.categoryName != null && fieldValues.categoryName.length <= 50 && config.useRegex.regexVietnameseName.test(fieldValues.categoryName) ? "" : "T??n th??? lo???i kh??ng h???p l???"
        if ('description' in fieldValues) temp.description = fieldValues.description && fieldValues.description.length > 0 && fieldValues.description.length <= 1000 ? "" : "M?? t??? kh??ng h???p l???"
        // if ('serviceID' in fieldValues) temp.serviceID = fieldValues.serviceID && fieldValues.serviceID.length > 0 ? "" : "ID kh??ng h???p l???"

        /*-------------------------------------------------*/


        /*----------------------Customer---------------------------*/

        // if ('customerID' in fieldValues) temp.customerID = fieldValues.customerID && fieldValues.customerID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('accountID' in fieldValues) temp.accountID = fieldValues.accountID && fieldValues.accountID.length > 0 ? "" : "ID kh??ng h???p l???"

        /*-------------------------------------------------*/


        /*----------------------Manager---------------------------*/

        // if ('managerID' in fieldValues) temp.managerID = fieldValues.managerID && fieldValues.managerID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('accountID' in fieldValues) temp.accountID = fieldValues.accountID && fieldValues.accountID.length > 0 ? "" : "ID kh??ng h???p l???"

        /*-------------------------------------------------*/


        /*----------------------Order Detail---------------------------*/

        // if ('orderDetailID' in fieldValues) temp.orderDetailID = fieldValues.orderDetailID && fieldValues.orderDetailID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('note' in fieldValues) temp.note = fieldValues.note != null && fieldValues.note.length <= 1000 ? "" : "Ghi ch?? kh??ng h???p l???"
        // if ('orderDetailCode' in fieldValues) temp.orderDetailCode = fieldValues.orderDetailCode && fieldValues.orderDetailCode.length > 0 && fieldValues.orderDetailCode.length <= 30 && config.useRegex.regexCode.test(fieldValues.orderDetailCode) ? "" : "Code kh??ng h???p l???"
        // if ('orderID' in fieldValues) temp.orderID = fieldValues.orderID && fieldValues.orderID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('quantity' in fieldValues) temp.quantity = fieldValues.quantity && config.useRegex.regexInteger.test(fieldValues.quantity) ? "" : "Y??u c???u nh???p l???i S??? l?????ng"
        // if ('rawProductID' in fieldValues) temp.rawProductID = fieldValues.rawProductID && fieldValues.rawProductID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('servicePrice' in fieldValues) temp.servicePrice = fieldValues.servicePrice && fieldValues.servicePrice > 0 && String(fieldValues.servicePrice).length > 0 ? "" : "Y??u c???u nh???p l???i gi?? c??? d???ch v???"
        // if ('unitPrice' in fieldValues) temp.unitPrice = fieldValues.unitPrice && String(fieldValues.unitPrice).length > 0 && config.useRegex.regexPositiveInteger.test(fieldValues.unitPrice) ? "" : "Y??u c???u nh???p l???i ????n gi??"

        /*-------------------------------------------------*/


        /*----------------------Orders---------------------------*/

        // if ('orderID' in fieldValues) temp.orderID = fieldValues.orderID && fieldValues.orderID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('customerID' in fieldValues) temp.customerID = fieldValues.customerID && fieldValues.customerID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('note' in fieldValues) temp.note = fieldValues.note && fieldValues.note.length > 0 && fieldValues.note.length <= 1000 ? "" : "Ghi ch?? kh??ng h???p l???"
        // if ('orderCode' in fieldValues) temp.orderCode = fieldValues.orderCode && fieldValues.orderCode.length > 0 && fieldValues.orderCode.length <= 30 && config.useRegex.regexCode.test(fieldValues.orderCode) ? "" : "Code kh??ng h???p l???"
        if ('addressOrder' in fieldValues) temp.addressOrder = fieldValues.addressOrder && fieldValues.addressOrder.length > 0 && fieldValues.addressOrder.length <= 500 && config.useRegex.regexAddress.test(fieldValues.addressOrder) ? "" : "?????a ch??? kh??ng h???p l???"
        if ('phoneOrder' in fieldValues) temp.phoneOrder = fieldValues.phoneOrder && fieldValues.phoneOrder.length >= 10 && fieldValues.phoneOrder.length <= 20 && config.useRegex.regexPhone.test(fieldValues.phoneOrder) ? "" : "S??? ??i???n tho???i kh??ng h???p l???"
        // if ('shipAt' in fieldValues) {
        //     const currentDate = new Date();
        //     const compareDate = currentDate <= shipAtSelected;
        //     temp.shipAt = currentDate ? "" : "Ng??y ship kh??ng h???p l???"
        // }
        if ('customerName' in fieldValues) temp.customerName = fieldValues.customerName && String(fieldValues.customerName).length > 0 && String(fieldValues.customerName).length <= 50 && config.useRegex.regexVietnameseName.test(fieldValues.customerName) ? "" : "T??n kh??ch h??ng kh??ng h???p l???"

        /*-------------------------------------------------*/



        /*----------------------Profile---------------------------*/

        // if ('profileID' in fieldValues) temp.profileID = fieldValues.profileID && fieldValues.profileID.length > 0 ? "" : "ID kh??ng h???p l???"
        if ('address' in fieldValues) temp.address = fieldValues.address != null && String(fieldValues.address).length <= 500 && config.useRegex.regexAddress.test(fieldValues.address) ? "" : "?????a ch??? kh??ng h???p l???"
        if ('dob' in fieldValues) {
            const currentDate = new Date();
            const compareDate = currentDate >= dobSelected;
            console.log("validDob: " + compareDate)
            temp.dob = compareDate ? "" : "Ng??y sinh kh??ng h???p l???"
        }
        if ('firstName' in fieldValues) temp.firstName = fieldValues.firstName != null && String(fieldValues.firstName).length <= 50 && config.useRegex.regexVietnameseName.test(fieldValues.firstName) ? "" : "T??n kh??ng h???p l???"
        if ('lastName' in fieldValues) temp.lastName = fieldValues.lastName != null && String(fieldValues.lastName).length <= 50 && config.useRegex.regexVietnameseName.test(fieldValues.lastName) ? "" : "H??? kh??ng h???p l???"
        if ('phone' in fieldValues) {
            if (fieldValues.phone == "") temp.phone = ""
            else if (fieldValues.phone != "" && String(fieldValues.phone).length >= 10 && String(fieldValues.phone).length <= 20 && config.useRegex.regexPhone.test(fieldValues.phone)) temp.phone = ""
            else temp.phone = "S??? ??i???n tho???i kh??ng h???p l???"
        }
        // if ('profileCode' in fieldValues) temp.profileCode = fieldValues.profileCode && fieldValues.profileCode.length > 0 && fieldValues.profileCode.length <= 30 && config.useRegex.regexCode.test(fieldValues.profileCode) ? "" : "Code kh??ng h???p l???"

        /*-------------------------------------------------*/


        /*----------------------Raw Product---------------------------*/

        // if ('rawProductID' in fieldValues) temp.rawProductID = fieldValues.rawProductID && fieldValues.rawProductID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('categoryID' in fieldValues) temp.categoryID = fieldValues.categoryID && fieldValues.categoryID.length > 0 ? "" : "ID kh??ng h???p l???"
        if ('createdBy' in fieldValues) temp.createdBy = fieldValues.createdBy && fieldValues.createdBy.length > 0 && fieldValues.createdBy.length <= 50 && config.useRegex.regexVietnamese.test(fieldValues.createdBy) ? "" : "T??n ng?????i t???o kh??ng h???p l???"
        if ('size' in fieldValues) temp.size = fieldValues.size && fieldValues.size.length > 0 && fieldValues.size.length <= 50 && config.useRegex.regexVietnamese.test(fieldValues.size) ? "" : "K??ch th?????c kh??ng h???p l???"
        if ('rawProductName' in fieldValues) temp.rawProductName = fieldValues.rawProductName && fieldValues.rawProductName.length > 0 && fieldValues.rawProductName.length <= 50 && config.useRegex.regexVietnameseName.test(fieldValues.rawProductName) ? "" : "T??n s???n ph???m th?? kh??ng h???p l???"
        // if ('customerID' in fieldValues) temp.customerID = fieldValues.customerID && fieldValues.customerID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('description' in fieldValues) temp.description = fieldValues.description && fieldValues.description.length > 0 && fieldValues.description.length <= 1000 ? "" : "M?? t??? kh??ng h???p l???"
        // if ('rawProductCode' in fieldValues) temp.rawProductCode = fieldValues.rawProductCode && fieldValues.rawProductCode.length > 0 && fieldValues.rawProductCode.length <= 30 && config.useRegex.regexCode.test(fieldValues.rawProductCode) ? "" : "Code kh??ng h???p l???"
        // if ('totalQuantity' in fieldValues) temp.totalQuantity = fieldValues.totalQuantity && fieldValues.totalQuantity < 0 && config.useRegex.regexPositiveInteger.test(fieldValues.totalQuantity) ? "" : "Y??u c???u nh???p l???i T???ng s??? l?????ng"    
        // if ('unitPrice' in fieldValues) temp.unitPrice = String(fieldValues.unitPrice).length > 0 ? "" : "Y??u c???u nh???p l???i ????n gi??"

        /*-------------------------------------------------*/


        /*----------------------Role---------------------------*/

        // if ('roleID' in fieldValues) temp.roleID = fieldValues.roleID && fieldValues.roleID.length > 0 ? "" : "ID kh??ng h???p l???"
        if ('roleName' in fieldValues) temp.roleName = fieldValues.roleName && fieldValues.roleName.length > 0 && fieldValues.roleName.length <= 30 && config.useRegex.regexVietnameseName.test(fieldValues.roleName) ? "" : "T??n kh??ng h???p l???"
        // if ('roleNameVn' in fieldValues) temp.roleNameVn = fieldValues.roleNameVn && fieldValues.roleNameVn.length > 0 && fieldValues.roleNameVn.length <= 30 && config.useRegex.regexVietnameseName.test(fieldValues.roleNameVn) ? "" : "T??n kh??ng h???p l???"

        /*-------------------------------------------------*/


        /*----------------------Service---------------------------*/

        // if ('serviceID' in fieldValues) temp.serviceID = fieldValues.serviceID && fieldValues.serviceID.length > 0 ? "" : "ID kh??ng h???p l???"
        // if ('active' in fieldValues) temp.active = fieldValues.active && fieldValues.active.length > 0 ? "" : "active kh??ng h???p l???"
        // if ('description' in fieldValues) temp.description = fieldValues.description && fieldValues.description.length > 0 && fieldValues.description.length <= 1000 ? "" : "M?? t??? kh??ng h???p l???"
        if ('serviceCode' in fieldValues) temp.serviceCode = fieldValues.serviceCode && fieldValues.serviceCode.length > 0 && fieldValues.serviceCode.length <= 30 && config.useRegex.regexCode.test(fieldValues.serviceCode) ? "" : "Code kh??ng h???p l???"
        if ('serviceName' in fieldValues) temp.serviceName = fieldValues.serviceName && fieldValues.serviceName != null && fieldValues.serviceName.length <= 50 && config.useRegex.regexVietnameseName.test(fieldValues.serviceName) ? "" : "T??n d???ch v??? kh??ng h???p l???"
        // if ('servicePrice' in fieldValues) temp.servicePrice = fieldValues.servicePrice != null && config.useRegex.regexNumber.test(fieldValues.servicePrice) ? "" : "Y??u c???u nh???p l???i gi?? c??? d???ch v???"
        if ('servicePrice' in fieldValues) temp.servicePrice = String(fieldValues.servicePrice).length > 0 && config.useRegex.regexPositiveInteger.test(fieldValues.servicePrice) ? "" : "Y??u c???u nh???p l???i gi?? c??? d???ch v???"

        /*-------------------------------------------------*/


        setHelperValid({ ...temp });
        return Object.values(temp).every(val => val == "")
    }

    return {
        formData, setFormData, handleInputChange, helperValid, validation, dobSelected, setDobSelected, handleChangeDob, setHelperValid, handleChangeColor
    }
}


 // if ('serviceID' in fieldValues) temp.serviceID = fieldValues.serviceID && fieldValues.serviceID.length > 0 ? "" : "Vui l??ng ch???n d???ch v???"
        // if ('rawProductID' in fieldValues) temp.rawProductID = fieldValues.rawProductID && fieldValues.rawProductID.length > 0 ? "" : "Vui l??ng ch???n trong danh s??ch"

// const useStyles = makeStyles(theme => ({
//     rootForm: {
//         '& .MuiFormControl-root': {
//             width: '80%',
//             margin: theme.spacing(1)
//         }
//     }
// }))
// export const Form = (props) => {
//     const classes = useStyles();
//     return (
//         <>
//             <form noValidate onSubmit={props.handleSubmit} className={classes.root}>
//                 {props.children}
//             </form>
//         </>
//     )
// }
