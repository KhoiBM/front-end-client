
import config from '../../../../environments/config'
import { useHttpModule, useHttpModuleAWS } from '../../HttpServices'
import photoDemo from 'src/app/assets/image/demoPhoto.jpeg'
import photoDemo2 from 'src/app/assets/image/demoPhoto2.jpg'
import photoDemo3 from 'src/app/assets/image/demoPhoto3.jpg'
export class PhotoServices {

    static uploadPhotoWithPresignedURL = (url, file) => {

        return useHttpModuleAWS({
            "put": {
                "Content-Type": file.type
            }
        }).put(url, file)

    }


    static getPresignedURLToUpload = (data) => {

        const { bucketName, fileKey, fileType } = data

        return useHttpModule().get(`${config.useApiPath.api.photoServices.getPresignedURLToUpload}?bucketName=${bucketName}&fileKey=${fileKey}&fileType=${fileType}`)

    }


    static getPhotoListByLink = (data) => {

        const { bucketName, fileKey } = data

        return useHttpModule().post(`${config.useApiPath.api.photoServices.getPhotoListByLink}`, data)

    }
}