/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { ViewRawProductInformation } from '../ViewRawProductInformation'

export const ProductDetail = (props) => {

    const { record } = props

    const [ready, setReady] = useState(false)

    useEffect(() => {
        if (record && record != null) {
            setReady(true)
        }
    }, [record])

    return (
        <>
            {
                ready &&
                <ViewRawProductInformation record={record} />
            }
        </>
    )
}
