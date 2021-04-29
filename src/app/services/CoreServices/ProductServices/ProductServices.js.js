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
        //                     serviceName: "Tạo của riêng bạn",
        //                     servicePrice: 100000,
        //                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        //                 }
        //             ]
        //         }
        //     }
        // })
    }

    static getAllCategory = (data) => {
        // return useHttpModule().post(config.useApiPath.api.productServices.getAllCategory, data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records:
                        [
                            {
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "abc",
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                serviceID: 6,
                                serviceCode: "serviceCode",
                                serviceName: "abc6",
                                // isActive: true,
                                // createdAt: "02-02-2020",
                                // updatedAt: "02-02-2020"
                            },
                            {
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "abc",
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                serviceID: 6,
                                serviceCode: "serviceCode",
                                serviceName: "abc6",
                                // isActive: true,
                                // createdAt: "02-02-2020",
                                // updatedAt: "02-02-2020"
                            },
                            {
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "abc",
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                serviceID: 6,
                                serviceCode: "serviceCode",
                                serviceName: "abc6",
                                // isActive: true,
                                // createdAt: "02-02-2020",
                                // updatedAt: "02-02-2020"
                            },
                            {
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "abc",
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                serviceID: 6,
                                serviceCode: "serviceCode",
                                serviceName: "abc6",
                                // isActive: true,
                                // createdAt: "02-02-2020",
                                // updatedAt: "02-02-2020"
                            }, {
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "abc",
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                serviceID: 6,
                                serviceCode: "serviceCode",
                                serviceName: "abc6",
                                // isActive: true,
                                // createdAt: "02-02-2020",
                                // updatedAt: "02-02-2020"
                            },
                            {
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "abc",
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                serviceID: 6,
                                serviceCode: "serviceCode",
                                serviceName: "abc6",
                                // isActive: true,
                                // createdAt: "02-02-2020",
                                // updatedAt: "02-02-2020"
                            }

                        ]
                }
            }
        })
    }


    static viewRawProduct = (data) => {
        // return useHttpModule().post(config.useApiPath.api.productServices.getAllProduct, data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo sweater đen",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Quản lý",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            }
                        ],
                        totalPage: 20

                    }
                }
            })
        } else {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [

                        ],
                        totalPage: 20

                    }
                }
            })
        }
    }

    static viewRawProductByCategory = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)

    }

    static viewRawProductByService = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)

    }


    static searchRawProduct = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)

    }

    static viewRawProductDetail = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        const uuid = uuidv4()
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        rawProductID: 1,
                        // rawProductCode: `productcode${uuid}`,
                        rawProductCode: `productcode`,
                        rawProductName: `Áo sweater đen`,
                        unitPrice: 100000,
                        totalQuantity: 10,
                        size: "M",
                        color: "#000",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        categoryID: "1",
                        categoryCode: "categoryCode",
                        categoryName: "Áo",
                        serviceCode: 1,
                        serviceName: "Quần áo",
                        servicePrice: 1000000,
                        // createdBy: "Khách hàng",
                        createdBy: "Quản lý",
                        createdAt: "03-03-2021",
                        updatedAt: "03-03-2021"

                    }

                }
            }
        })
    }


    static sortRawProduct = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }

    static createCustomersRawProductByLocal = (data) => {
        try {
            console.log("data: " + JSON.stringify(data))
            console.log("uploadFiles:" + JSON.stringify(data.customersRawProductPhotoList))
            console.log(data.customersRawProductPhotoList)

            localStorage.setItem("customersRawProduct", JSON.stringify(data))

            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        record: {

                        }
                    }
                }
            })
        } catch (err) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.FAILURE,
                    info: {
                        record: {

                        }
                    }
                }
            })
        }
    }

    static createCustomersRawProductByServer = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        categoryCode: "categoryCode",
                        rawProductCode: "rawProductCode",
                    }
                }
            }
        })

    }

    static getOptionToFilterAllRawProduct = (data) => {
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: [
                        {
                            code: 0,
                            name: "Giá cao đến thấp"
                        },
                        {
                            code: 1,
                            name: "Giá thấp đến cao"
                        },
                        {
                            code: 3,
                            name: "Sản phẩm mới"
                        },

                    ]
                }
            }
        })
    }

    static getOptionToFilterRawProductOfService = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records:
                        [
                            {
                                categoryCode: "categoryCode",
                                categoryName: "abc",
                            },
                            {

                                categoryCode: "categoryCode1",
                                categoryName: "abc2",
                            },
                            {

                                categoryCode: "categoryCode2",
                                categoryName: "abc3",
                            }

                        ]
                }
            }
        })
    }

    static getOptionToFilterRawProductOfCategory = (data) => {

        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: [
                        {
                            code: 0,
                            name: "Giá cao đến thấp"
                        },
                        {
                            code: 1,
                            name: "Giá thấp đến cao"
                        },
                        {
                            code: 3,
                            name: "Sản phẩm mới"
                        },

                    ]
                }
            }
        })
    }


    static getServicePriceCreateYourOwn = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        servicePrice: 200000
                    }
                }
            }
        })
    }
}