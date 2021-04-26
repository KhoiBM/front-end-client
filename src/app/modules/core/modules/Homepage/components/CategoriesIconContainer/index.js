/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { CategoriesIconWrapper, CategoriesIcon } from './CategoriesIconElements'
import config from 'src/environments/config'
import { useLoadPhotoList } from 'src/app/utils'


export const CategoriesIconContainer = (props) => {
    const { recordForCategoriesIcon } = props

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    useEffect(() => {
        loadInit()
    }, [recordForCategoriesIcon])

    const loadInit = async () => {
        if (recordForCategoriesIcon && recordForCategoriesIcon != null) {


            const { categoryCode } = recordForCategoriesIcon

            let bucketName = ""
            let folder = ""
            let fileKey = ''

            bucketName = config.useConfigAWS.STUDIOBUCKET.BUCKETNAME
            folder = config.useConfigAWS.STUDIOBUCKET.FOLDER["CATEGORY"]
            // fileKey = `${folder}/${categoryCode}/thumbnail`
            fileKey = `${folder}/${categoryCode}/`

            loadPhotoList(bucketName, fileKey)

        }

    }


    return (
        <>
            <CategoriesIconWrapper>
                <CategoriesIcon src={photoList[0]} />
            </CategoriesIconWrapper>

        </>
    )
}
