import config from "src/environments/config"

export class CartServices {

    static viewCartItem = (data) => {

    }

    static addCartItem = (data) => {

    }

    static editCartItem = (data) => {

    }

    static deleteCartItem = (data) => {

    }


    static countCartItem = (data) => {
        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    count: 11
                }
            }
        })
    }


}