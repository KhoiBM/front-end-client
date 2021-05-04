import config from '../../../../environments/config'
export class OrderServices {
    // static = (data) => {
    //     // return useHttpModule().post(config.useApiPath.api., data)
    //     return Promise.resolve({
    //         data: {
    //             result: config.useResultStatus.SUCCESS,
    //             info: {

    //             }
    //         }
    //     })
    // }

    static createNewOrder = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        orderCode: "orderCode"
                    }

                }
            }
        })
    }


    static createOrderDetail = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    record: {
                        orderDetailCode: "orderDetailCode"
                    }

                }
            }
        })
    }
    static viewOrder = (data) => {
        console.log("filterListViewOrder: " + data.filterBy)
        // return useHttpModule().post(config.useApiPath.api., data)
        if (data.page == 1) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {
                        records: [

                            {
                                orderID: 1,
                                orderCode: 1,
                                customerID: 1,
                                customerCode: 23334,
                                customerName: "Bùi Minh Khôi",
                                note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                                statusOrder: "Đơn chờ duyệt",
                                statusPayment: true,
                                shipAt: "2021-02-27",
                                phone: "0313823823",
                                address: "Tân Hà, Tân Châu, Tây Ninh",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            },

                            {
                                orderID: 2,
                                orderCode: 2,
                                customerID: 2,
                                customerCode: 23334,
                                customerName: "Bùi Minh Khôi",
                                note: "cần giao sau 6h",
                                statusOrder: "Đơn chờ duyệt",
                                statusPayment: true,
                                shipAt: "27-02-2021",
                                phone: "0313823823",
                                address: "Tân Hà, Tân Châu, Tây Ninh",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
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
                                orderID: 1,
                                orderCode: 1,
                                customerID: 1,
                                customerCode: 23334,
                                customerName: "Bùi Minh Khôi",
                                note: "cần giao sau 6h",
                                statusOrder: "Đơn chờ duyệt",
                                statusPayment: true,
                                shipAt: "27-02-2021",
                                phone: "0313823823",
                                address: "Tân Hà, Tân Châu, Tây Ninh",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            },

                            {
                                orderID: 2,
                                orderCode: 2,
                                customerID: 2,
                                customerCode: 23334,
                                customerName: "Bùi Minh Khôi",
                                note: "cần giao sau 6h",
                                statusOrder: "Đơn chờ duyệt",
                                statusPayment: true,
                                shipAt: "27-02-2021",
                                phone: "0313823823",
                                address: "Tân Hà, Tân Châu, Tây Ninh",
                                createdAt: "20-02-2021",
                                updatedAt: "20-02-2021"
                            }

                        ],
                        totalPage: 20

                    }
                }
            })
        }

    }
    static getOrderStatusToFilter = (data) => {

        const useStatusOrder = config.useStatusOrder.CUSTOMER
        const statusOrderToFilter = useStatusOrder.FILTER

        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: statusOrderToFilter
                }
            }
        })
    }
    static cancelOrder = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }
    static confirmDemoProduct = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {

                }
            }
        })
    }

    static getOrderDetailList = (data) => {
        // return useHttpModule().post(config.useApiPath.api., data)
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: [{
                        orderDetailID: 1,
                        orderDetailCode: "orderDetailCode",
                        orderID: 1,
                        orderCode: "orderCode",
                        rawProductID: 1,
                        rawProductCode: "productcode",
                        // rawProductCode: "RP012345",
                        rawProductName: "Lorem ipsum dolor sit amet",
                        categoryCode: "categoryCode",
                        createdBy: "Quản lý",
                        size: 'M',
                        color: "#000",
                        unitPrice: 100000,
                        servicePrice: 110000,
                        quantity: 5,
                        // note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        createdAt: "02-02-2021",
                        updatedAt: "02-02-2021",
                    }
                    ]
                }
            }
        })
    }
}
