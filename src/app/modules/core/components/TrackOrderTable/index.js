/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { useCustomStyles, useTable, useRefresh } from 'src/app/utils';
import { makeStyles, Button, Tooltip, Zoom } from '@material-ui/core';
import { toast } from 'react-toastify';
import { OrderServices } from 'src/app/services';
import config from 'src/environments/config';
import { ViewOrderInformation } from '../ViewOrderInformation';
import { PaginationBar } from '../PaginationBar';
import { NotFound } from 'src/app/components';
import { RiInformationLine } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

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

    const headCells = ["Mã Code", "Trạng thái đơn hàng", "Trạng thái thanh toán", "Ngày tạo", "Ngày sửa đổi", "Thao tác"]

    const { TblContainer, TblHead, TblBody, StyledTableRow, StyledTableCell } = useTable(records, headCells);

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    const [viewOrderInformationModal, setViewOrderInformationModal] = useState({ isOpen: false })

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
        handleRefresh()
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
                            <StyledTableCell >{row.customerCode}</StyledTableCell>

                            {/* <StyledTableCell >{row.note}</StyledTableCell> */}
                            <StyledTableCell >{row.statusOrder}</StyledTableCell>

                            <StyledTableCell>
                                {row.statusPayment ? "Đã thanh toán thành công" : "Chưa thanh toán"}
                            </StyledTableCell>

                            {/* <StyledTableCell >{row.shipAt}</StyledTableCell> */}

                            <StyledTableCell >{row.createdAt}</StyledTableCell>
                            <StyledTableCell >{row.updatedAt}</StyledTableCell>


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
                                < Tooltip TransitionComponent={Zoom} placement="top" title="Xác nhận sản phẩm mẫu" >

                                    <Button onClick={(event) => {
                                        event.stopPropagation()

                                    }
                                    }>
                                        <AiOutlineCheck className={classesCustom.acceptIcon} />

                                    </Button>

                                </ Tooltip>
                                < Tooltip TransitionComponent={Zoom} placement="top" title="Huỷ đơn hàng" >

                                    <Button onClick={(event) => {
                                        event.stopPropagation()

                                    }
                                    }>
                                        <AiOutlineClose className={classesCustom.rejectIcon} />

                                    </Button>

                                </ Tooltip>




                            </StyledTableCell>

                        </StyledTableRow>

                    ))
                        : <NotFound />

                    }
                </TblBody>
            </TblContainer>


            {<ViewOrderInformation viewOrderInformationModal={viewOrderInformationModal} setViewOrderInformationModal={setViewOrderInformationModal} />}

            <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />
        </>
    )
}
