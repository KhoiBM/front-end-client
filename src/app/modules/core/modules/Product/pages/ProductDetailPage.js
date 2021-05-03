import React, { useEffect, useState } from 'react'
import { ProductServices } from 'src/app/services'
import config from 'src/environments/config'
import { toast } from 'react-toastify'
import { useGetStateLocation, useLoadingEffect } from 'src/app/utils'
import { MainBar } from '../../../components'
import { ProductDetail } from '../components'
import { Loader, NotFound } from 'src/app/components'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'

const ProductDetailPage = () => {

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const [record, setRecord] = useState(null)

    const { data } = useGetStateLocation()


    useEffect(() => {
        if (data && data != null) {
            loadInit(data)
            console.log("data: " + JSON.stringify(data))
        }
    }, [])

    // console.log("record: " + JSON.stringify(record))

    const loadInit = async (data) => {
        console.log("dataloadInit: " + JSON.stringify(data))
        showLoader()
        try {

            const response = await (await ProductServices.viewRawProductDetail({ rawProductID: data.rawProductID })).data

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

        const record = response.info.record

        if (record && record != null) {

            setRecord(record)

        }
    }
    return (
        <>

            {<Loader loading={loading} />}

            <MainBar>
                {record && record != null && Object.keys(record).length > 0 ?
                    <ProductDetail record={record} />
                    :
                    !loading.status && <NotFound />
                }

            </MainBar>

        </>
    )
}

export default ProductDetailPage
