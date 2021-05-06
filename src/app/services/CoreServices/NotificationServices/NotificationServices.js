
import config from '../../../../environments/config'
import { useHttpModule } from '../../HttpServices'

export class NotificationServices {


    static viewNotification = (data) => {
        return useHttpModule().post(config.useApiPath.api.notification.viewAndCountNoti, data)

    }

    static isView = (data) => {
        return useHttpModule().post(config.useApiPath.api.notification.viewedNoti, data)

    }



}