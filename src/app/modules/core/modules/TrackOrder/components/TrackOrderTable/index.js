/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useCustomStyles, useTable, useRefresh } from 'src/app/utils';
import { makeStyles, Button, Tooltip, Zoom } from '@material-ui/core';
import { toast } from 'react-toastify';
import { OrderServices } from 'src/app/services';
import config from 'src/environments/config';
import { NotFound } from 'src/app/components';
import { RiInformationLine } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import { ConfirmDialog, PaginationBar } from 'src/app/modules/core/components';
import { ViewOrderInformation } from '../ViewOrderInformation';
import { ConfirmDemoProductOrder } from '../ConfirmDemoProductOrder';

const useStyles = makeStyles(theme => ({

}));




export const TrackOrderTable = (props) => {

    const classes = useStyles();

    const { classesCustom } = useCustomStyles()

    const { filterList, action, clickFilter } = props

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(0);

    const headCells = ["Mã Code", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày tạo", "Thao tác"]

    const { TblContainer, TblHead, TblBody, StyledTableRow, StyledTableCell } = useTable(records, headCells);

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const [viewOrderInformationModal, setViewOrderInformationModal] = useState({ isOpen: false })

    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" })

    const [confirmDemoProductOrderModal, setConfirmDemoProductOrderModal] = useState({ isOpen: false })

    useEffect(() => {

        if (action == "filter") {
            loadInitByFilter()
        }

    }, [page, refresh])

    useEffect(() => {
        if (!first) {
            console.log("clickFilter")
            setPage(1)

            if (action == "filter") {
                loadInitByFilter()
            }
        } else {
            setFirst(false)
        }

    }, [clickFilter])

    const loadInitByFilter = async () => {

        // console.log("action: " + action)
        // console.log("filterList:" + JSON.stringify(filterList))
        // console.log("Page: " + page)

        try {
            const response = await (await OrderServices.viewOrder({ filterBy: filterList, page: page, limit: limit })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    loadData(response)

                    console.log("loadInitByFilter")

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

    const loadData = async (response) => {

        const records = response.info.records

        const totalPageResponse = response.info.totalPage

        if (records && records != null && records.length > 0) {

            console.log("records:" + JSON.stringify(records))

            setRecords(records)

        } else {
            setRecords([])
        }

        // console.log("totalPageResponse: " + totalPageResponse)

        setTotalPage(totalPageResponse && totalPageResponse != null ? totalPageResponse : 0)

        // console.log("page: " + page)

    }



    const handleCloseModal = () => {
        setViewOrderInformationModal({ isOpen: false })
        setConfirmDemoProductOrderModal({ isOpen: false })
        handleRefresh()
    }

    const onCancelOrder = async (orderID) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })

        try {
            const response = await (await OrderServices.cancelOrder({ orderID })).data
            // console.log("response: " + JSON.stringify(response))
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    toast.success("Huỷ đơn hàng thành công")

                    handleRefresh()
                } else {
                    toast.error(config.useMessage.resultFailure)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

            console.log("onCancelOrder")
            console.log("orderID: " + orderID)

        } catch (err) {
            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }
    }

    return (
        <>

            <TblContainer>
                <TblHead />
                <TblBody>
                    {records && records != null && records.length > 0 ? records.map((row) => (
                        <StyledTableRow key={row.orderID}>

                            {/* <StyledTableCell>{row.orderID}</StyledTableCell> */}
                            <StyledTableCell>{row.orderCode}</StyledTableCell>
                            {/* <StyledTableCell >{row.customerID}</StyledTableCell> */}
                            {/* <StyledTableCell >{row.customerCode}</StyledTableCell> */}

                            {/* <StyledTableCell >{row.note}</StyledTableCell> */}
                            <StyledTableCell >{row.statusOrder}</StyledTableCell>

                            <StyledTableCell>
                                {row.statusPayment ? "Đã thanh toán" : "Chưa thanh toán"}
                            </StyledTableCell>

                            {/* <StyledTableCell >{row.shipAt}</StyledTableCell> */}

                            <StyledTableCell >{row.createdAt}</StyledTableCell>
                            {/* <StyledTableCell >{row.updatedAt}</StyledTableCell> */}


                            <StyledTableCell style={{ minWidth: "230px" }}>


                                < Tooltip TransitionComponent={Zoom} placement="top" title="Xem thông tin chi tiết" >

                                    <Button onClick={(event) => {
                                        event.stopPropagation()
                                        setViewOrderInformationModal({
                                            isOpen: true,
                                            recordForViewInformation: row,
                                            handleCloseModal
                                        })
                                    }
                                    }>
                                        <RiInformationLine />
                                    </Button>

                                </ Tooltip>
                                {
                                    // row.statusOrder == "Chờ xác nhận mẫu" &&
                                    < Tooltip TransitionComponent={Zoom} placement="top" title="Xác nhận sản phẩm mẫu" >

                                        <Button onClick={(event) => {
                                            event.stopPropagation()
                                            const data = {
                                                orderID: row.orderID,
                                            }
                                            // console.log("data: " + JSON.stringify(data))

                                            setConfirmDemoProductOrderModal({
                                                isOpen: true,
                                                recordForConfirmDemoProductOrder: data,
                                                handleCloseModal
                                            })
                                        }
                                        }>
                                            <AiOutlineCheck className={classesCustom.acceptIcon} />

                                        </Button>

                                    </ Tooltip>
                                }


                                {
                                    // row.statusOrder == "Đơn chờ duyệt" &&
                                    <Tooltip TransitionComponent={Zoom} placement="top" title="Huỷ đơn hàng" >

                                        <Button onClick={(event) => {
                                            event.stopPropagation()
                                            setConfirmDialog(
                                                {
                                                    isOpen: true,
                                                    title: "Bạn có chắc là muốn huỷ đơn hàng này không?",
                                                    subTitle: "Bạn không thể hoàn tác hành động này",
                                                    onConfirm: () => { onCancelOrder(row.orderID) }

                                                }
                                            )
                                        }
                                        }>
                                            <AiOutlineClose className={classesCustom.rejectIcon} />

                                        </Button>

                                    </ Tooltip>

                                }





                            </StyledTableCell>

                        </StyledTableRow>

                    ))
                        : <NotFound />

                    }
                </TblBody>
            </TblContainer>

            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />

            {<ViewOrderInformation viewOrderInformationModal={viewOrderInformationModal} setViewOrderInformationModal={setViewOrderInformationModal} />}

            {<ConfirmDemoProductOrder confirmDemoProductOrderModal={confirmDemoProductOrderModal} setConfirmDemoProductOrderModal={setConfirmDemoProductOrderModal} />}

            <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />
        </>
    )
}
