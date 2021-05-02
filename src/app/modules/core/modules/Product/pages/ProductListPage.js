import React, { useState, useEffect } from 'react'
import { ProductServices } from 'src/app/services'
import config from 'src/environments/config';
import { toast } from 'react-toastify';
import { useGetStateLocation, useQueryURL, useRefresh, useFilterHandle, useFilterRawProductHandle, useLoadingEffect } from 'src/app/utils';
import { makeStyles, Paper } from '@material-ui/core';
import { ProductList, FilterRawProductBar } from '../components';
import { MainBar } from '../../../components';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        width: "100%",
        // paddingTop: theme.spacing(6),
        // background: '#B6E2F3',
        // background: 'var(bg-secondary-color-main)',
        minHeight: "90%",
        height: "auto",
        position: "relative",
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2 ease -in -out",
        // border: "1px solid red",
        paddingTop: theme.spacing(5),
        // backgroundColor: "#f7f3e9 !important",
        // backgroundColor: " var(--primary-color-main) !important",
        // backgroundColor: " var(--secondary-color-main) !important",
        // backgroundColor: " var( --tertiary-color-main) !important",
        // backgroundColor: "#f7f3e9  !important",
        backgroundColor: "rgba(249, 250, 251, var(--bg-opacity))  !important",
        // backgroundColor: "#fcecdd !important",
        // backgroundColor: "#f8f5f1 !important",


        '&:hover': {
            // transform: "scale(1.02)",
            transition: "all 0.2 ease -in -out",
            cursor: "pointer"
        }

    },
    actionContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: theme.spacing(2),
        // background: 'red',
        // border: "1px solid red",
    },
    actionWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // paddingRight: theme.spacing(6),
        // paddingLeft: theme.spacing(8),
        // marginRight: theme.spacing(8),
        // background: '#B6E2F3',

        width: "65%",
        // border: "1px solid red",

    }
}));



const ProductListPage = () => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    const classes = useStyles();

    const { data: dataToGet } = useGetStateLocation()

    let query = useQueryURL();

    const serviceCode = query.get("serviceCode")
    const categoryCode = query.get("categoryCode")

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(0);

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    let fetchApi = ProductServices.getOptionToFilterAllRawProduct()

    let mapToFilter = []

    if (serviceCode && serviceCode != null) {

        fetchApi = ProductServices.getOptionToFilterRawProductOfService({ serviceCode })

        mapToFilter = (records) => {
            // console.log("mapToFilter")
            return records.map((val) => ({ ID: val.categoryCode, name: val.categoryName }));
        }

    } else if (categoryCode && categoryCode != null) {

        fetchApi = ProductServices.getOptionToFilterRawProductOfCategory()

        mapToFilter = (records) => {
            // console.log("mapToFilter")
            return records.map((val) => ({ ID: val.code, name: val.name }));
        }

    } else {

        fetchApi = ProductServices.getOptionToFilterAllRawProduct()

        mapToFilter = (records) => {
            // console.log("mapToFilter")
            return records.map((val) => ({ ID: val.code, name: val.name }));
        }

    }



    const { recordsSelect, setRecordsSelect, filterList, setFilterList, action, setAction, clickFilter, setClickFilter } = useFilterRawProductHandle(
        {
            fetchApi,
            mapToFilter
        }
    )








    useEffect(() => {
        if (!first) {
        loadInit()

        } else {
            setFirst(false)
        }
        return () => {
            setRecords([])
        }
    }, [page])

    useEffect(() => {
        console.log("filterListTest:" + JSON.stringify(filterList))

        setPage(1)
        if(filterList!=null){
            loadInit()
        }


    }, [serviceCode, categoryCode,filterList])

    // useEffect(() => {
    //     if (dataToGet && dataToGet != null) {
    //         console.log("dataToGet: " + JSON.stringify(dataToGet))
    //     }
    // }, [])


    const loadInit = async () => {
        showLoader()
        try {



            let response = null

            if (serviceCode && serviceCode != null) {
                response = await (await ProductServices.viewRawProductByService({ serviceCode , filterBy: filterList, page: page, limit: limit })).data

            } else if (categoryCode && categoryCode != null) {
                response = await (await ProductServices.viewRawProductByCategory({  categoryCode , filterBy: filterList, page: page, limit: limit })).data

            } else {
                response = await (await ProductServices.viewRawProduct({ filterBy: filterList, page: page, limit: limit })).data

            }
            // console.log("response: " + JSON.stringify(response))

            if (response && response != null) {

                if (response.result == config.useResultStatus.SUCCESS) {

                    loadData(response)

                    console.log("loadInit")

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
    }

    return (
        <>
            {/* <p>ProductListPage</p>
             */}
            {< Loader loading={loading} />}

            <MainBar>

                <Paper elevation={0} className={classes.mainContainer}>
                    <>

                        <div className={classes.actionContainer}>
                            <div className={classes.actionWrapper}>
                                <FilterRawProductBar inputLabel={"Bộ lọc"} recordsSelect={recordsSelect} setRecordsSelect={setRecordsSelect} filterList={filterList} setFilterList={setFilterList} setAction={setAction} setClickFilter={setClickFilter} />
                            </div>
                        </div>

                        <ProductList records={records} totalPage={totalPage} page={page} setPage={setPage} />

                    </>
                </Paper>

            </MainBar>

        </>
    )
}

export default ProductListPage
