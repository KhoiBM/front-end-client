/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { ServicesIconWrapper, ServicesIcon } from './ServicesIconElements'
import { useLoadPhotoList } from 'src/app/utils'
import config from 'src/environments/config'


export const ServicesIconContainer = (props) => {
    const { recordForServicesIcon } = props

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    useEffect(() => {
        loadInit()
    }, [recordForServicesIcon])

    const loadInit = async () => {
        if (recordForServicesIcon && recordForServicesIcon != null) {


            const { serviceCode } = recordForServicesIcon

            let bucketName = ""
            let folder = ""
            let fileKey = ''

            bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
            folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["SERVICE"]
            // fileKey = `${folder}/${serviceCode}/thumbnail`
            fileKey = `${folder}/${serviceCode}/`

            loadPhotoList(bucketName, fileKey)
            // console.log("recordForServicesIcon: " + JSON.stringify(recordForServicesIcon))

        }

    }


    return (
        <>
            <ServicesIconWrapper>
                <ServicesIcon src={photoList[0]} />
            </ServicesIconWrapper>

        </>
    )
}
