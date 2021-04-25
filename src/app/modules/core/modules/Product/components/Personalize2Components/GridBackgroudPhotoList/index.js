/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import config from 'src/environments/config'
import { useLoadPhotoList } from 'src/app/utils'
import { GridSelectPhotoList } from '../GridSelectPhotoList'
import { Loader } from 'src/app/components'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'
import { hi } from 'date-fns/esm/locale'

const useStyles = makeStyles(theme => ({

}))

export const GridBackgroudPhotoList = (props) => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const classes = useStyles()

    const { recordForBackgroudPhotoList, setBgPhoto } = props

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    useEffect(() => {
        loadInit()
        console.log("recordForBackgroudPhotoList:" + JSON.stringify(recordForBackgroudPhotoList))
    }, [recordForBackgroudPhotoList])


    const loadInit = async () => {
        if (recordForBackgroudPhotoList && recordForBackgroudPhotoList != null) {
            showLoader()
            const { categoryCode, rawProductCode, createdBy } = recordForBackgroudPhotoList

            let bucketName = ""
            let folder = ""
            let fileKey = ''

            switch (createdBy) {
                case "Khách hàng":
                    bucketName = config.useConfigAWS.CUSTOMERBUCKET.BUCKETNAME
                    folder = config.useConfigAWS.CUSTOMERBUCKET.FOLDER["CUSTOMER'SRAWPRODUCT"]
                    fileKey = `${folder}/${categoryCode}/${rawProductCode}/`
                    break;
                case "Quản lý":
                    bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
                    folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["STUDIO'SRAWPRODUCT"]
                    fileKey = `${folder}/${categoryCode}/${rawProductCode}/`
                    break;
            }


            await loadPhotoList(bucketName, fileKey)


            // console.log("recordForBackgroudPhotoList: " + JSON.stringify(recordForBackgroudPhotoList))
            hideLoader()
        }

    }

    return (
        <>
            {/* {<Loader loading={loading} />} */}
            {
                photoList && photoList != null && photoList.length > 0 &&
                < GridSelectPhotoList photoList={photoList} setBgPhoto={setBgPhoto} />
            }
        </>
    )
}
