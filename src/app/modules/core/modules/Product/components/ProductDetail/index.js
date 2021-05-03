/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { ViewRawProductInformation } from '../ViewRawProductInformation'
import { NotFound } from 'src/app/components'

export const ProductDetail = (props) => {

    const { record } = props

    const [ready, setReady] = useState(false)

    useEffect(() => {
        if (record && record != null && Object.keys(record).length > 0) {
            setReady(true)
        }
    }, [record])

    return (
        <>
            {
                ready && <ViewRawProductInformation record={record} />


            }
        </>
    )
}
