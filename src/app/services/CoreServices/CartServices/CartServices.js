import config from "src/environments/config"
import { RiShoppingCartLine } from "react-icons/ri"

export class CartServices {

    static viewShoppingCart = () => {

        const shoppingCart = JSON.parse(localStorage.getItem("pps-shoppingCart"))
        console.log("shoppingCart: ")
        console.table(shoppingCart)


        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    records: shoppingCart && shoppingCart != null && shoppingCart.length > 0 ? shoppingCart : []

                }
            }
        })

    }

    static addCartItem = (data) => {

    }

    static editCartItem = (data) => {

    }

    static deleteCartItem = (data) => {

        try {
            const shoppingCart = JSON.parse(localStorage.getItem("pps-shoppingCart"))

            const filterCart = shoppingCart.filter((cartItem, index) => cartItem.orderDetailID != data.orderDetailID)

            localStorage.setItem("pps-shoppingCart", JSON.stringify(filterCart))

            return Promise.resolve({
                data: {
                    result: config.useResultStatus.SUCCESS,
                    info: {

                    }
                }
            })
        } catch (e) {
            return Promise.resolve({
                data: {
                    result: config.useResultStatus.FAILURE,
                    info: {

                    }
                }
            })
        }


    }


    static countCartItem = (data) => {

        const shoppingCart = JSON.parse(localStorage.getItem("pps-shoppingCart"))

        // console.log("shoppingCart: ")
        // console.table(shoppingCart)

        return Promise.resolve({
            data: {
                result: config.useResultStatus.SUCCESS,
                info: {
                    count: shoppingCart && shoppingCart != null && shoppingCart.length > 0 ? shoppingCart.length : 0
                }
            }
        })
    }


}