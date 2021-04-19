import React, { useEffect, useState } from 'react'
import { MainBar, ProductDetail } from '../components'
import { ProductServices } from 'src/app/services'
import config from 'src/environments/config'
import { toast } from 'react-toastify'
import { useGetStateLocation } from 'src/app/utils'

const ProductDetailPage = () => {

    const [record, setRecord] = useState(null)

    const { data } = useGetStateLocation()

    useEffect(() => {
        if (data && data != null) {
            loadInit(data)
            console.log("data: " + JSON.stringify(data))
        }
    }, [])

    console.log("record: " + JSON.stringify(record))
    const loadInit = async (data) => {
        console.log("dataloadInit: " + JSON.stringify(data))
        try {

            const response = await (await ProductServices.viewRawProductDetail({ rawProductCode: data.rawProductCode })).data

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

        const record = response.info.record

        if (record && record != null) {

            setRecord(record)

        }
    }
    return (
        <>

            <MainBar>
                {/* <p>ProductDetailPage</p> */}
                <ProductDetail record={record} />
            </MainBar>
        </>
    )
}

export default ProductDetailPage
