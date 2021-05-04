
import React, { useState, useEffect } from 'react'
import { ProductServices } from 'src/app/services'
import config from 'src/environments/config';
import { toast } from 'react-toastify';
import { useGetStateLocation, useQueryURL, useRefresh, useFilterHandle, useFilterRawProductHandle, useLoadingEffect } from 'src/app/utils';
import { set } from 'date-fns';
import { makeStyles, Paper } from '@material-ui/core';
import { NotFound, Loader } from 'src/app/components';
import { MainBar } from '../../../components';
import { ProductList, FilterRawProductBar } from '../components';
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


const SearchPage = () => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    const classes = useStyles();

    const { data: dataToGet } = useGetStateLocation()

    let query = useQueryURL();

    const keywords = query.get("keywords")

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(0);

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()


    useEffect(() => {
        loadInit()
    }, [page])

    useEffect(() => {
        if (!first) {
            setPage(1)
            loadInit()
        } else {
            setFirst(false)
        }

    }, [keywords])



    const loadInit = async () => {
        showLoader()
        try {



            let response = null

            if (keywords && keywords != null) {
                response = await (await ProductServices.searchRawProduct({ keywords, page: page, limit: limit })).data

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
            {<Loader loading={loading} />}

            <MainBar>

                <Paper elevation={0} className={classes.mainContainer}>
                    {records && records != null && records.length > 0 ?
                        <>

                            <ProductList records={records} totalPage={totalPage} page={page} setPage={setPage} />

                        </>
                        : !loading.status && <NotFound />
                    }

                </Paper>

            </MainBar>

        </>
    )
}

export default SearchPage