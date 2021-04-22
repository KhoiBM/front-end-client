import config from "src/environments/config"

export class ProductServices {

    static getAllService = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: [
                        {
                            serviceID: "1",
                            serviceCode: "serviceCode",
                            serviceName: "abcd",
                            servicePrice: 100000,
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        },
                        {
                            serviceID: "1",
                            serviceCode: "serviceCode2",
                            serviceName: "abcd",
                            servicePrice: 100000,
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        }, {
                            serviceID: "1",
                            serviceCode: "serviceCode",
                            serviceName: "abcd",
                            servicePrice: 100000,
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        },
                        {
                            serviceID: "1",
                            serviceCode: "serviceCode2",
                            serviceName: "abcd",
                            servicePrice: 100000,
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        }
                        , {
                            serviceID: "1",
                            serviceCode: "serviceCode",
                            serviceName: "Tạo của riêng bạn",
                            servicePrice: 100000,
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        }
                    ]
                }
            }
        })
    }

    static getAllCategory = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
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
                                categoryID: "2",
                                categoryCode: "categoryCode",
                                categoryName: "abc2",
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                serviceID: 6,
                                serviceCode: "serviceCode",
                                serviceName: "abc6",
                                // isActive: true,
                                // createdAt: "02-02-2020",
                                // updatedAt: "02-02-2020"
                            },
                            {
                                categoryID: "3",
                                categoryCode: "categoryCode",
                                categoryName: "abc3",
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
                                categoryID: "2",
                                categoryCode: "categoryCode",
                                categoryName: "abc2",
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                                serviceID: 6,
                                serviceCode: "serviceCode",
                                serviceName: "abc6",
                                // isActive: true,
                                // createdAt: "02-02-2020",
                                // updatedAt: "02-02-2020"
                            },
                            {
                                categoryID: "3",
                                categoryCode: "categoryCode",
                                categoryName: "abc3",
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
        // return useHttpModule().post(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
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

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode2",
                                rawProductName: "Áo thun trắngproductcode2",
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
                            , {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
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

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
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
                            ,
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
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
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            }
                        ],
                        totalPage: 20

                    }
                }
            })
        }
    }

    static viewRawProductByCategory = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng view Raw ProductByCategory",
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

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng view Raw Product By Category ", unitPrice: 100000,
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
                            , {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
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

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
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
                            ,
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
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
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng view Raw ProductByCategory",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            }
                        ],
                        totalPage: 20

                    }
                }
            })
        }
    }

    static viewRawProductByService = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng view Raw ProductByService",
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

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắngviewRawProductByService",
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
                            , {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
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

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
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
                            ,
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
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
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắngviewRawProductByService",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            }
                        ],
                        totalPage: 20

                    }
                }
            })
        }
    }


    static searchRawProduct = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng view Raw searchRawProduct",
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
                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun searchRawProduct",
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
                            , {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
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

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
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
                            ,
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
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
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắngviewRawProductByService",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            },
                            {
                                rawProductID: 1,
                                rawProductCode: "productcode",
                                rawProductName: "Áo thun trắng",
                                unitPrice: 100000,
                                totalQuantity: 10,
                                size: "M",
                                color: "#4cbb3d",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                categoryID: "1",
                                categoryCode: "categoryCode",
                                categoryName: "Áo",
                                createdBy: "Khách hàng",
                                createdAt: "03-03-2021",
                                updatedAt: "03-03-2021"

                            }
                        ],
                        totalPage: 20

                    }
                }
            })
        }
    }

    static viewRawProductDetail = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        rawProductID: 1,
                        rawProductCode: "productcode",
                        rawProductName: "Áo thun trắngproductcode",
                        unitPrice: 100000,
                        totalQuantity: 10,
                        size: "M",
                        color: "#4cbb3d",
                        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        categoryID: "1",
                        categoryCode: "categoryCode",
                        categoryName: "Áo",
                        serviceCode: 1,
                        serviceName: "abc",
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

    static getOptionToFilter = (data) => {
        // return useHttpModule().get(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: [
                        {
                            code: "Giá cao đến thấp",
                            name: "Giá cao đến thấp"
                        },
                        {
                            code: "Giá thấp đến cao",
                            name: "Giá thấp đến cao"
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