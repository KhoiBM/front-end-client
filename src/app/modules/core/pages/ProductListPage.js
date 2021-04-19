import React, { useState, useEffect } from 'react'
import { MainBar, ProductList } from '../components'
import { ProductServices } from 'src/app/services'
import config from 'src/environments/config';
import { toast } from 'react-toastify';

const ProductListPage = () => {

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);

    const [records, setRecords] = useState([])
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        loadInit()
        // 
    }, [page])


    const loadInit = async () => {
        try {

            const response = await (await ProductServices.viewRawProduct({ filterBy: "all", page: page, limit: limit })).data

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

    }


    const loadData = async (response) => {

        const records = response.info.records

        const totalPageResponse = response.info.totalPage

        if (records && records != null && records.length > 0) {

            setRecords(records)

        } else {


            setRecords([])

        }
        console.log("totalPageResponse: " + totalPageResponse)

        setTotalPage(totalPageResponse && totalPageResponse != null ? totalPageResponse : 0)
    }

    return (
        <>
            {/* <p>ProductListPage</p>
             */}
            <MainBar>
                <ProductList records={records} totalPage={totalPage} page={page} setPage={setPage} />
            </MainBar>

        </>
    )
}

export default ProductListPage
