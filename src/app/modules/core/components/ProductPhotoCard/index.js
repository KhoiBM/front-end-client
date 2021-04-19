/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { makeStyles, Box } from '@material-ui/core';
import { useLoadPhotoList } from 'src/app/utils';
import config from 'src/environments/config';
const useStyles = makeStyles(theme => ({
    photoWrapper: {
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItem: "center"
    },
    cardPhoto: {
        objectFit: "contain",
        maxWidth: "80%",
        maxHeight: "80%",
        width: "auto",
        height: "auto",
    }

}))
export const ProductPhotoCard = (props) => {
    const classes = useStyles();
    const { recordForPhotoCard } = props

    const { loadPhotoList, photoList, setPhotoList } = useLoadPhotoList()

    useEffect(() => {
        if (recordForPhotoCard && recordForPhotoCard != null) {
            loadInit()
        }

    }, [recordForPhotoCard])

    console.log("photoList:" + photoList)

    const loadInit = async () => {
        if (recordForPhotoCard && recordForPhotoCard != null) {

            const { categoryCode, rawProductCode, createdBy } = recordForPhotoCard
            console.log("categoryCode:" + categoryCode)
            console.log("rawProductCode:" + rawProductCode)
            console.log("createdBy:" + createdBy)
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



        }

    }
    return (
        <>
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
