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
        // if ('username' in fieldValues) temp.username = fieldValues.username && fieldValues.username.length > 0 ? "" : "Tên người dùng là bắt buộc"
        // if ('email' in fieldValues) temp.email = fieldValues.email && fieldValues.email.length > 0 && config.useRegex.regexEmail.test(fieldValues.email) ? "" : "Email không hợp lệ"
        // if ('password' in fieldValues) temp.password = fieldValues.password && fieldValues.password.length >= 8 && fieldValues.password.length <= 20 && regexPassword.test(fieldValues.password) ? "" : "Mật khẩu là bắt buộc (8 đến 20 ký tự) - Phải có ít nhất 1 số, 1 chữ thường, 1 chữ in hoa, 1 ký tự đặc biệt"
        // if ('rePassword' in fieldValues) {
        //     temp.rePassword = fieldValues.rePassword
        //         && fieldValues.rePassword.length >= 8
        //         && fieldValues.rePassword.length <= 20
        //         && regexPassword.test(fieldValues.rePassword)
        //         ? "" : "Mật khẩu là bắt buộc(8 đến 20 ký tự) - Phải có ít nhất 1 số, 1 chữ thường, 1 chữ in hoa, 1 ký tự đặc biệt";
        // }
        // if ('password' in fieldValues && 'rePassword' in fieldValues) {
        //     // console.log("rePassword:" + fieldValues.rePassword)
        //     // console.log("password:" + fieldValues.password)
        //     // if (fieldValues.rePassword == fieldValues.password) console.log("equal")
        //     if (temp.rePassword == "") {
        //         temp.rePassword = fieldValues.rePassword == fieldValues.password
        //             ? "" : "Mật khẩu này phải giống với mật khẩu ở trên"
        //     }

        // }

        // if ('dob' in fieldValues) {
        //     const currentYear = new Date().getFullYear();
        //     const compareYear = currentYear >= dobSelected.getFullYear();
        //     // console.log("validDob: " + compareYear)
        //     temp.dob = compareYear ? "" : "Ngày sinh không hợp lệ"
        // }

        // if ('firstName' in fieldValues) temp.firstName = fieldValues.firstName && fieldValues.firstName.length > 0 ? "" : "Tên là bắt buộc"
        // if ('lastName' in fieldValues) temp.lastName = fieldValues.lastName && fieldValues.lastName.length > 0 ? "" : "Họ là bắt buộc"
        // if ('address' in fieldValues) temp.address = fieldValues.address && fieldValues.address.length > 0 ? "" : "Địa chỉ là bắt buộc"
        // if ('phone' in fieldValues) temp.phone = fieldValues.phone && fieldValues.phone.length > 9 && fieldValues.phone.length < 12 && regexPhone.test(fieldValues.phone) ? "" : "Số điện thoại không hợp lệ"




        // if ('description' in fieldValues) temp.description = fieldValues.description && fieldValues.description.length > 0 ? "" : "Mô tả là bắt buộc"





        // setHelperValid({ ...temp });
        // return Object.values(temp).every(val => val == "")

        const temp = { ...helperValid };

        if ('password' in fieldValues) temp.password = fieldValues.password && fieldValues.password != null && fieldValues.password.length >= 8 && fieldValues.password.length <= 20 && regexPassword.test(fieldValues.password) ? "" : "Mật khẩu là bắt buộc (8 đến 20 ký tự) - Phải có ít nhất 1 số, 1 chữ thường, 1 chữ in hoa, 1 ký tự đặc biệt"
        if ('rePassword' in fieldValues) {
            temp.rePassword = fieldValues.rePassword
                && fieldValues.rePassword != null
                && fieldValues.rePassword.length >= 8
                && fieldValues.rePassword.length <= 20
                && regexPassword.test(fieldValues.rePassword)
                ? "" : "Mật khẩu là bắt buộc(8 đến 20 ký tự) - Phải có ít nhất 1 số, 1 chữ thường, 1 chữ in hoa, 1 ký tự đặc biệt";
        }

        if ('password' in fieldValues && 'rePassword' in fieldValues) {
            // console.log("rePassword:" + fieldValues.rePassword)
            // console.log("password:" + fieldValues.password)
            // if (fieldValues.rePassword == fieldValues.password) console.log("equal")
            if (temp.rePassword == "") {
                temp.rePassword = fieldValues.rePassword == fieldValues.password
                    ? "" : "Mật khẩu này phải giống với mật khẩu ở trên"
            }
        }

        /*----------------------Account---------------------------*/

        // if ('accountID' in fieldValues) temp.accountID = fieldValues.accountID && fieldValues.accountID.length > 0 ? "" : "ID không hợp lệ"
        // if ('active' in fieldValues) temp.active = fieldValues.active && fieldValues.active.length > 0 ? "" : "active không hợp lệ"
        if ('email' in fieldValues) temp.email = fieldValues.email && fieldValues.email.length > 0 && fieldValues.email.length <= 100 && config.useRegex.regexEmail.test(fieldValues.email) ? "" : "Email không hợp lệ"
        // if ('invalidAccessToken' in fieldValues) temp.invalidAccessToken = fieldValues.invalidAccessToken && fieldValues.invalidAccessToken.length > 0 && fieldValues.invalidAccessToken.length <= 1000 ? "" : "InvalidAccessToken không hợp lệ"
        // if ('roleID' in fieldValues) temp.roleID = fieldValues.roleID && fieldValues.roleID.length > 0 ? "" : "ID không hợp lệ"
        // if ('profileID' in fieldValues) temp.profileID = fieldValues.profileID && fieldValues.profileID.length > 0 ? "" : "ID không hợp lệ"
        if ('username' in fieldValues) temp.username = fieldValues.username && fieldValues.username.length > 0 && fieldValues.username.length <= 50 && config.useRegex.regexUsername.test(fieldValues.username) ? "" : "Tên người dùng không hợp lệ"


        /*-------------------------------------------------*/

        /*----------------------Administrator---------------------------*/

        // if ('administratorID' in fieldValues) temp.administratorID = fieldValues.administratorID && fieldValues.administratorID.length > 0 ? "" : "ID không hợp lệ"
        // if ('accountID' in fieldValues) temp.accountID = fieldValues.accountID && fieldValues.accountID.length > 0 ? "" : "ID không hợp lệ"

        /*-------------------------------------------------*/


        /*----------------------Business Staff---------------------------*/

        // if ('businessStaffID' in fieldValues) temp.businessStaffID = fieldValues.businessStaffID && fieldValues.businessStaffID.length > 0 ? "" : "ID không hợp lệ"
        // if ('accountID' in fieldValues) temp.accountID = fieldValues.accountID && fieldValues.accountID.length > 0 ? "" : "ID không hợp lệ"

        /*-------------------------------------------------*/


        /*----------------------Category---------------------------*/

        // if ('categoryID' in fieldValues) temp.categoryID = fieldValues.categoryID && fieldValues.categoryID.length > 0 ? "" : "ID không hợp lệ"
        // if ('active' in fieldValues) temp.active = fieldValues.active && fieldValues.active.length > 0 ? "" : "active không hợp lệ"
        // if ('categoryCode' in fieldValues) temp.categoryCode = fieldValues.categoryCode && fieldValues.categoryCode.length > 0 && fieldValues.categoryCode.length < 30 && config.useRegex.regexCode.test(fieldValues.categoryCode) ? "" : "Code không hợp lệ"
        // if ('categoryName' in fieldValues) temp.categoryName = fieldValues.categoryName && fieldValues.categoryName != null && fieldValues.categoryName.length <= 50 && config.useRegex.regexVietnameseName.test(fieldValues.categoryName) ? "" : "Tên thể loại không hợp lệ"
        if ('description' in fieldValues) temp.description = fieldValues.description && fieldValues.description.length > 0 && fieldValues.description.length <= 1000 ? "" : "Mô tả không hợp lệ"
        // if ('serviceID' in fieldValues) temp.serviceID = fieldValues.serviceID && fieldValues.serviceID.length > 0 ? "" : "ID không hợp lệ"

        /*-------------------------------------------------*/


        /*----------------------Customer---------------------------*/

        // if ('customerID' in fieldValues) temp.customerID = fieldValues.customerID && fieldValues.customerID.length > 0 ? "" : "ID không hợp lệ"
        // if ('accountID' in fieldValues) temp.accountID = fieldValues.accountID && fieldValues.accountID.length > 0 ? "" : "ID không hợp lệ"

        /*-------------------------------------------------*/


        /*----------------------Manager---------------------------*/

        // if ('managerID' in fieldValues) temp.managerID = fieldValues.managerID && fieldValues.managerID.length > 0 ? "" : "ID không hợp lệ"
        // if ('accountID' in fieldValues) temp.accountID = fieldValues.accountID && fieldValues.accountID.length > 0 ? "" : "ID không hợp lệ"

        /*-------------------------------------------------*/


        /*----------------------Order Detail---------------------------*/

        // if ('orderDetailID' in fieldValues) temp.orderDetailID = fieldValues.orderDetailID && fieldValues.orderDetailID.length > 0 ? "" : "ID không hợp lệ"
        // if ('note' in fieldValues) temp.note = fieldValues.note != null && fieldValues.note.length <= 1000 ? "" : "Ghi chú không hợp lệ"
        // if ('orderDetailCode' in fieldValues) temp.orderDetailCode = fieldValues.orderDetailCode && fieldValues.orderDetailCode.length > 0 && fieldValues.orderDetailCode.length <= 30 && config.useRegex.regexCode.test(fieldValues.orderDetailCode) ? "" : "Code không hợp lệ"
        // if ('orderID' in fieldValues) temp.orderID = fieldValues.orderID && fieldValues.orderID.length > 0 ? "" : "ID không hợp lệ"
        // if ('quantity' in fieldValues) temp.quantity = fieldValues.quantity && config.useRegex.regexInteger.test(fieldValues.quantity) ? "" : "Yêu cầu nhập lại Số lượng"
        // if ('rawProductID' in fieldValues) temp.rawProductID = fieldValues.rawProductID && fieldValues.rawProductID.length > 0 ? "" : "ID không hợp lệ"
        // if ('servicePrice' in fieldValues) temp.servicePrice = fieldValues.servicePrice && fieldValues.servicePrice > 0 && String(fieldValues.servicePrice).length > 0 ? "" : "Yêu cầu nhập lại giá cả dịch vụ"
        // if ('unitPrice' in fieldValues) temp.unitPrice = fieldValues.unitPrice && String(fieldValues.unitPrice).length > 0 && config.useRegex.regexPositiveInteger.test(fieldValues.unitPrice) ? "" : "Yêu cầu nhập lại Đơn giá"

        /*-------------------------------------------------*/


        /*----------------------Orders---------------------------*/

        // if ('orderID' in fieldValues) temp.orderID = fieldValues.orderID && fieldValues.orderID.length > 0 ? "" : "ID không hợp lệ"
        // if ('customerID' in fieldValues) temp.customerID = fieldValues.customerID && fieldValues.customerID.length > 0 ? "" : "ID không hợp lệ"
        // if ('note' in fieldValues) temp.note = fieldValues.note && fieldValues.note.length > 0 && fieldValues.note.length <= 1000 ? "" : "Ghi chú không hợp lệ"
        // if ('orderCode' in fieldValues) temp.orderCode = fieldValues.orderCode && fieldValues.orderCode.length > 0 && fieldValues.orderCode.length <= 30 && config.useRegex.regexCode.test(fieldValues.orderCode) ? "" : "Code không hợp lệ"
        if ('addressOrder' in fieldValues) temp.addressOrder = fieldValues.addressOrder && fieldValues.addressOrder.length > 0 && fieldValues.addressOrder.length <= 500 && config.useRegex.regexAddress.test(fieldValues.addressOrder) ? "" : "Địa chỉ không hợp lệ"
        if ('phoneOrder' in fieldValues) temp.phoneOrder = fieldValues.phoneOrder && fieldValues.phoneOrder.length >= 10 && fieldValues.phoneOrder.length <= 20 && config.useRegex.regexPhone.test(fieldValues.phoneOrder) ? "" : "Số điện thoại không hợp lệ"
        // if ('shipAt' in fieldValues) {
        //     const currentDate = new Date();
        //     const compareDate = currentDate <= shipAtSelected;
        //     temp.shipAt = currentDate ? "" : "Ngày ship không hợp lệ"
        // }
        if ('customerName' in fieldValues) temp.customerName = fieldValues.customerName && String(fieldValues.customerName).length > 0 && String(fieldValues.customerName).length <= 50 && config.useRegex.regexVietnameseName.test(fieldValues.customerName) ? "" : "Tên khách hàng không hợp lệ"

        /*-------------------------------------------------*/



        /*----------------------Profile---------------------------*/

        // if ('profileID' in fieldValues) temp.profileID = fieldValues.profileID && fieldValues.profileID.length > 0 ? "" : "ID không hợp lệ"
        if ('address' in fieldValues) temp.address = fieldValues.address != null && String(fieldValues.address).length <= 500 && config.useRegex.regexAddress.test(fieldValues.address) ? "" : "Địa chỉ không hợp lệ"
        if ('dob' in fieldValues) {
            const currentDate = new Date();
            const compareDate = currentDate >= dobSelected;
            console.log("validDob: " + compareDate)
            temp.dob = compareDate ? "" : "Ngày sinh không hợp lệ"
        }
        if ('firstName' in fieldValues) temp.firstName = fieldValues.firstName != null && String(fieldValues.firstName).length <= 50 && config.useRegex.regexVietnameseName.test(fieldValues.firstName) ? "" : "Tên không hợp lệ"
        if ('lastName' in fieldValues) temp.lastName = fieldValues.lastName != null && String(fieldValues.lastName).length <= 50 && config.useRegex.regexVietnameseName.test(fieldValues.lastName) ? "" : "Họ không hợp lệ"
        if ('phone' in fieldValues) {
            if (fieldValues.phone == "") temp.phone = ""
            else if (fieldValues.phone != "" && String(fieldValues.phone).length >= 10 && String(fieldValues.phone).length <= 20 && config.useRegex.regexPhone.test(fieldValues.phone)) temp.phone = ""
            else temp.phone = "Số điện thoại không hợp lệ"
        }
        // if ('profileCode' in fieldValues) temp.profileCode = fieldValues.profileCode && fieldValues.profileCode.length > 0 && fieldValues.profileCode.length <= 30 && config.useRegex.regexCode.test(fieldValues.profileCode) ? "" : "Code không hợp lệ"

        /*-------------------------------------------------*/


        /*----------------------Raw Product---------------------------*/

        // if ('rawProductID' in fieldValues) temp.rawProductID = fieldValues.rawProductID && fieldValues.rawProductID.length > 0 ? "" : "ID không hợp lệ"
        // if ('categoryID' in fieldValues) temp.categoryID = fieldValues.categoryID && fieldValues.categoryID.length > 0 ? "" : "ID không hợp lệ"
        if ('createdBy' in fieldValues) temp.createdBy = fieldValues.createdBy && fieldValues.createdBy.length > 0 && fieldValues.createdBy.length <= 50 && config.useRegex.regexVietnamese.test(fieldValues.createdBy) ? "" : "Tên người tạo không hợp lệ"
        if ('size' in fieldValues) temp.size = fieldValues.size && fieldValues.size.length > 0 && fieldValues.size.length <= 50 && config.useRegex.regexVietnamese.test(fieldValues.size) ? "" : "Kích thước không hợp lệ"
        if ('rawProductName' in fieldValues) temp.rawProductName = fieldValues.rawProductName && fieldValues.rawProductName.length > 0 && fieldValues.rawProductName.length <= 50 && config.useRegex.regexVietnameseName.test(fieldValues.rawProductName) ? "" : "Tên sản phẩm thô không hợp lệ"
        // if ('customerID' in fieldValues) temp.customerID = fieldValues.customerID && fieldValues.customerID.length > 0 ? "" : "ID không hợp lệ"
        // if ('description' in fieldValues) temp.description = fieldValues.description && fieldValues.description.length > 0 && fieldValues.description.length <= 1000 ? "" : "Mô tả không hợp lệ"
        // if ('rawProductCode' in fieldValues) temp.rawProductCode = fieldValues.rawProductCode && fieldValues.rawProductCode.length > 0 && fieldValues.rawProductCode.length <= 30 && config.useRegex.regexCode.test(fieldValues.rawProductCode) ? "" : "Code không hợp lệ"
        // if ('totalQuantity' in fieldValues) temp.totalQuantity = fieldValues.totalQuantity && fieldValues.totalQuantity < 0 && config.useRegex.regexPositiveInteger.test(fieldValues.totalQuantity) ? "" : "Yêu cầu nhập lại Tổng số lượng"    
        // if ('unitPrice' in fieldValues) temp.unitPrice = String(fieldValues.unitPrice).length > 0 ? "" : "Yêu cầu nhập lại Đơn giá"

        /*-------------------------------------------------*/


        /*----------------------Role---------------------------*/

        // if ('roleID' in fieldValues) temp.roleID = fieldValues.roleID && fieldValues.roleID.length > 0 ? "" : "ID không hợp lệ"
        if ('roleName' in fieldValues) temp.roleName = fieldValues.roleName && fieldValues.roleName.length > 0 && fieldValues.roleName.length <= 30 && config.useRegex.regexVietnameseName.test(fieldValues.roleName) ? "" : "Tên không hợp lệ"
        // if ('roleNameVn' in fieldValues) temp.roleNameVn = fieldValues.roleNameVn && fieldValues.roleNameVn.length > 0 && fieldValues.roleNameVn.length <= 30 && config.useRegex.regexVietnameseName.test(fieldValues.roleNameVn) ? "" : "Tên không hợp lệ"

        /*-------------------------------------------------*/


        /*----------------------Service---------------------------*/

        // if ('serviceID' in fieldValues) temp.serviceID = fieldValues.serviceID && fieldValues.serviceID.length > 0 ? "" : "ID không hợp lệ"
        // if ('active' in fieldValues) temp.active = fieldValues.active && fieldValues.active.length > 0 ? "" : "active không hợp lệ"
        // if ('description' in fieldValues) temp.description = fieldValues.description && fieldValues.description.length > 0 && fieldValues.description.length <= 1000 ? "" : "Mô tả không hợp lệ"
        if ('serviceCode' in fieldValues) temp.serviceCode = fieldValues.serviceCode && fieldValues.serviceCode.length > 0 && fieldValues.serviceCode.length <= 30 && config.useRegex.regexCode.test(fieldValues.serviceCode) ? "" : "Code không hợp lệ"
        if ('serviceName' in fieldValues) temp.serviceName = fieldValues.serviceName && fieldValues.serviceName != null && fieldValues.serviceName.length <= 50 && config.useRegex.regexVietnameseName.test(fieldValues.serviceName) ? "" : "Tên dịch vụ không hợp lệ"
        // if ('servicePrice' in fieldValues) temp.servicePrice = fieldValues.servicePrice != null && config.useRegex.regexNumber.test(fieldValues.servicePrice) ? "" : "Yêu cầu nhập lại giá cả dịch vụ"
        if ('servicePrice' in fieldValues) temp.servicePrice = String(fieldValues.servicePrice).length > 0 && config.useRegex.regexPositiveInteger.test(fieldValues.servicePrice) ? "" : "Yêu cầu nhập lại giá cả dịch vụ"

        /*-------------------------------------------------*/


        setHelperValid({ ...temp });
        return Object.values(temp).every(val => val == "")
    }

    return {
        formData, setFormData, handleInputChange, helperValid, validation, dobSelected, setDobSelected, handleChangeDob, setHelperValid, handleChangeColor
    }
}


 // if ('serviceID' in fieldValues) temp.serviceID = fieldValues.serviceID && fieldValues.serviceID.length > 0 ? "" : "Vui lòng chọn dịch vụ"
        // if ('rawProductID' in fieldValues) temp.rawProductID = fieldValues.rawProductID && fieldValues.rawProductID.length > 0 ? "" : "Vui lòng chọn trong danh sách"

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
