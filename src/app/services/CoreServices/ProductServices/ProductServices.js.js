import config from "src/environments/config"
import { useHttpModule } from '../../HttpServices'

import { v4 as uuidv4 } from 'uuid';
export class ProductServices {

    static getAllService = (data) => {
        return useHttpModule().post(config.useApiPath.api.productServices.getAllService, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             records: [
        //                 {
        //                     serviceID: "1",
        //                     serviceCode: "serviceCode",
        //                     serviceName: "abcd",
        //                     servicePrice: 100000,
        //                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //                 },
        //                 {
        //                     serviceID: "1",
        //                     serviceCode: "serviceCode2",
        //                     serviceName: "abcd",
        //                     servicePrice: 100000,
        //                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //                 }, {
        //                     serviceID: "1",
        //                     serviceCode: "serviceCode",
        //                     serviceName: "abcd",
        //                     servicePrice: 100000,
        //                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //                 },
        //                 {
        //                     serviceID: "1",
        //                     serviceCode: "serviceCode2",
        //                     serviceName: "abcd",
        //                     servicePrice: 100000,
        //                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //                 }
        //                 , {
        //                     serviceID: "1",
        //                     serviceCode: "serviceCode",
        //                     serviceName: "T???o c???a ri??ng b???n",
        //                     servicePrice: 100000,
        //                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //                 }
        //             ]
        //         }
        //     }
        // })
    }

    static getAllCategory = (data) => {
        return useHttpModule().post(config.useApiPath.api.productServices.getAllCategory, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             records:
        //                 [
        //                     {
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "abc",
        //                         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        //                         serviceID: 6,
        //                         serviceCode: "serviceCode",
        //                         servicePrice: "100000",
        //                         serviceName: "abc6",
        //                         // isActive: true,
        //                         // createdAt: "02-02-2020",
        //                         // updatedAt: "02-02-2020"
        //                     },
        //                     {
        //                         categoryID: "2",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "abc",
        //                         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        //                         serviceID: 6,
        //                         serviceCode: "serviceCode",
        //                         servicePrice: "200000",
        //                         serviceName: "abc6",
        //                         // isActive: true,
        //                         // createdAt: "02-02-2020",
        //                         // updatedAt: "02-02-2020"
        //                     }
        //                 ]
        //         }
        //     }
        // })
    }


    static viewRawProduct = (data) => {
        return useHttpModule().post(config.useApiPath.api.productServices.getAllProduct, data)
        // if (data.page == 1) {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode2",
        //                         rawProductName: "??o thun tr???ngproductcode2",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                     , {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                     ,
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // } else {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // }
    }

    static viewRawProductByCategory = (data) => {
        return useHttpModule().post(config.useApiPath.api.productServices.getAllProduct, data)
        // if (data.page == 1) {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng view Raw ProductByCategory",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng view Raw Product By Category ", unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                     , {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                     ,
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // } else {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng view Raw ProductByCategory",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // }
    }

    static viewRawProductByService = (data) => {
        return useHttpModule().post(config.useApiPath.api.productServices.getAllProduct, data)
        // if (data.page == 1) {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng view Raw ProductByService",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ngviewRawProductByService",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                     , {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                     ,
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // } else {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ngviewRawProductByService",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // }
    }


    static searchRawProduct = (data) => {
        return useHttpModule().post(config.useApiPath.api.productServices.getAllProduct, data)
        // if (data.page == 1) {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng view Raw searchRawProduct",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun searchRawProduct",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                     , {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Qu???n l??",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                     ,
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // } else {
        //     return Promise.resolve({
        //         data: {
        //             result: config.useResultStatus.SUCCESS,
        //             info: {
        //                 records: [
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ngviewRawProductByService",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     },
        //                     {
        //                         rawProductID: 1,
        //                         rawProductCode: "productcode",
        //                         rawProductName: "??o thun tr???ng",
        //                         unitPrice: 100000,
        //                         totalQuantity: 10,
        //                         size: "M",
        //                         color: "#4cbb3d",
        //                         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                         categoryID: "1",
        //                         categoryCode: "categoryCode",
        //                         categoryName: "??o",
        //                         createdBy: "Kh??ch h??ng",
        //                         createdAt: "03-03-2021",
        //                         updatedAt: "03-03-2021"
        //
        //                     }
        //                 ],
        //                 totalPage: 20
        //
        //             }
        //         }
        //     })
        // }
    }

    static viewRawProductDetail = (data) => {
        return useHttpModule().post(config.useApiPath.api.productServices.getDetailProduct, data)
        // const uuid = uuidv4()
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             record: {
        //                 rawProductID: 1,
        //                 // rawProductCode: `productcode${uuid}`,
        //                 rawProductCode: `productcode`,
        //                 rawProductName: `??o thun tr???ngproductcode${uuid}`,
        //                 unitPrice: 100000,
        //                 totalQuantity: 10,
        //                 size: "M",
        //                 color: "#4cbb3d",
        //                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //                 categoryID: "1",
        //                 categoryCode: "categoryCode",
        //                 categoryName: "??o",
        //                 serviceCode: 1,
        //                 serviceName: "abc",
        //                 servicePrice: 1000000,
        //                 // createdBy: "Kh??ch h??ng",
        //                 createdBy: "Qu???n l??",
        //                 createdAt: "03-03-2021",
        //                 updatedAt: "03-03-2021"
        //
        //             }
        //
        //         }
        //     }
        // })
    }





    static createCustomersRawProduct = (data) => {
        return useHttpModule().post(config.useApiPath.api.orderService.addCusRawProduct, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             record: {
        //                 categoryCode: "categoryCode",
        //                 rawProductCode: "rawProductCode",
        //             }
        //         }
        //     }
        // })

    }

    static getOptionToFilterAllRawProduct = (data) => {
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: [
                        {
                            code: "0",
                            name: "Gi?? cao ?????n th???p"
                        },
                        {
                            code: "1",
                            name: "Gi?? th???p ?????n cao"
                        },
                        {
                            code: "2",
                            name: "S???n ph???m m???i"
                        },

                    ]
                }
            }
        })
    }

    static getOptionToFilterRawProductOfService = (data) => {
        return useHttpModule().post(config.useApiPath.api.productServices.getCategoryByService, data)
        // return Promise.resolve({
        //     data: {
        //         result: config.useResultStatus.SUCCESS,
        //         info: {
        //             records:
        //                 [
        //                     {
        //                         categoryCode: "categoryCode",
        //                         categoryName: "abc",
        //                     },
        //                     {
        //
        //                         categoryCode: "categoryCode1",
        //                         categoryName: "abc2",
        //                     },
        //                     {
        //
        //                         categoryCode: "categoryCode2",
        //                         categoryName: "abc3",
        //                     }
        //
        //                 ]
        //         }
        //     }
        // })
    }

    static getOptionToFilterRawProductOfCategory = (data) => {

        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: [
                        {
                            code: "0",
                            name: "Gi?? cao ?????n th???p"
                        },
                        {
                            code: "1",
                            name: "Gi?? th???p ?????n cao"
                        },
                        {
                            code: "2",
                            name: "S???n ph???m m???i"
                        },

                    ]
                }
            }
        })
    }
}