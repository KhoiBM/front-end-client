/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { makeStyles, Box } from '@material-ui/core';
import { useLoadPhotoList } from 'src/app/utils';
import config from 'src/environments/config';
import { Loader } from 'src/app/components';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';
const useStyles = makeStyles(theme => ({
    photoWrapper: {
        width: "300px",
        height: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid red",

    },
    cardPhoto: {
        objectFit: "contain",
        maxWidth: "80%",
        maxHeight: "80%",
        width: "auto",
        height: "auto",
        // border: "1px solid red",
    }

}))
export const ProductPhotoCard = (props) => {
    // const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const classes = useStyles();
    const { recordForPhotoCard } = props

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    useEffect(() => {
        if (recordForPhotoCard && recordForPhotoCard != null) {
            loadInit()
        }
        return () => {
            setPhotoList([])
        }
    }, [recordForPhotoCard])

    // console.log("photoList:" + photoList)

    const loadInit = async () => {
        if (recordForPhotoCard && recordForPhotoCard != null) {
            // showLoader()
            const { categoryCode, rawProductCode, createdBy } = recordForPhotoCard
            // console.log("categoryCode:" + categoryCode)
            // console.log("rawProductCode:" + rawProductCode)
            // console.log("createdBy:" + createdBy)
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

            // hideLoader()

        }

    }
    return (
        <>
            {/* {<Loader loading={loading} />} */}
            {
                photoList && photoList != null && photoList.length > 0 &&
                <>
                    <Box className={classes.photoWrapper}>
                        <img src={photoList[0]} className={classes.cardPhoto}></img>
                    </Box>
                </>
            }
        </>
    )
}
