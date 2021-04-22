/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import config from 'src/environments/config'
import { GridSelectPhotoList } from '../GridSelectPhotoList'
import { toast } from 'react-toastify'

const useStyles = makeStyles(theme => ({

}))

export const GridBackgroudPhotoList = (props) => {
    const classes = useStyles()

    const { recordForBackgroudPhotoList, setBgPhoto } = props

    const [photoList, setPhotoList] = useState([])

    useEffect(() => {
        loadInit()
        console.log("recordForBackgroudPhotoList:" + JSON.stringify(recordForBackgroudPhotoList))
    }, [recordForBackgroudPhotoList])


    const loadInit = async () => {
        if (recordForBackgroudPhotoList && recordForBackgroudPhotoList != null) {

            // console.log("recordForBackgroudPhotoList: " + JSON.stringify(recordForBackgroudPhotoList))

            const { customersRawProductPhotoList } = recordForBackgroudPhotoList

            if (customersRawProductPhotoList && customersRawProductPhotoList != null && customersRawProductPhotoList.length > 0) {

                setPhotoList(customersRawProductPhotoList.map((photo) => photo.src))

            } else {

                try {


                    const customersRawProductPhotoList = JSON.parse(localStorage.getItem("customersRawProduct")).customersRawProductPhotoList

                    if (customersRawProductPhotoList && customersRawProductPhotoList != null) {
                        setPhotoList(customersRawProductPhotoList.map((photo) => photo.src))
                    }

                } catch (e) {
                    toast.error(config.useMessage.localStorageFailure)
                }

            }



        }

    }

    return (
        <>
            {
                photoList && photoList != null && photoList.length > 0 &&
                < GridSelectPhotoList photoList={photoList} setBgPhoto={setBgPhoto} />
            }
        </>
    )
}
