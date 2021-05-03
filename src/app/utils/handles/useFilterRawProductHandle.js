
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import config from 'src/environments/config';
import { ManageAccountServices, ProductServices } from 'src/app/services';
import { useRefresh } from './useRefresh';

export const useFilterRawProductHandle = (props) => {
    // const { fetchApi, mapToFilter } = props

    const [filterHandleObject, setFilterHandleObject] = useState(null)

    const [recordsSelect, setRecordsSelect] = useState([])

    // const [filterList, setFilterList] = useState([]);
    const [filterList, setFilterList] = useState("");

    const [action, setAction] = useState("filter")

    const [clickFilter, setClickFilter] = useState(false)

    const { refresh, setRefresh, first, setFirst, handleRefresh } = useRefresh()

    // console.log("filterHandleObject:")
    // console.log("filterList:" + filterList)
    // console.log("recordsSelect:" + JSON.stringify(recordsSelect))

    useEffect(() => {
        if (filterHandleObject && filterHandleObject != null) {
            loadFilterInit()
        }
    }, [filterHandleObject])

    // console.log("filterList:" + JSON.stringify(filterList))
    const loadFilterInit = async () => {
        try {

            const response = await (await filterHandleObject.fetchApi).data

            // console.log("response: " + response)
            if (response && response != null) {
                if (response.result == config.useResultStatus.SUCCESS) {

                    let records = response.info.records
                    records = records && records != null && records.length > 0 ? filterHandleObject.mapToFilter(records) : []


                    // console.log("RecordsSelect: " + JSON.stringify(records))

                    await setRecordsSelect(records ? records : [])

                    // const mapFilterList = records.map((val) => (val.ID))

                    // console.log("mapList: " + JSON.stringify(mapFilterList))

                    // await setFilterList(records ? mapFilterList : [])
                    // await setFilterList("")
                    // await setFilterList([])

                    // toast.success("Thành công")
                } else {
                    // toast.error(`${config.useMessage.resultFailure} - ${response.errorInfo}`)
                }
            } else {
                throw new Error("Response is null or undefined")
            }

        } catch (err) {
            // toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
        }
    }


    return { recordsSelect, setRecordsSelect, filterList, setFilterList, action, setAction, clickFilter, setClickFilter, filterHandleObject, setFilterHandleObject, handleRefreshFilterRawProductHandle: handleRefresh }
}

