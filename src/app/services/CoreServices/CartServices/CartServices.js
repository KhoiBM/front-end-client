/* eslint-disable no-empty */
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
        try {
            let shoppingCart = JSON.parse(localStorage.getItem("pps-shoppingCart"))

            if (shoppingCart && shoppingCart != null ) {

            } else {
                localStorage.setItem("pps-shoppingCart", JSON.stringify([]))
                shoppingCart = JSON.parse(localStorage.getItem("pps-shoppingCart"))

            }
            const indexExistInShoppingCart = shoppingCart.findIndex((cartItem, index) => cartItem.rawProductCode == data.rawProductCode)

            console.log("indexExistInShoppingCart:" + indexExistInShoppingCart)

            let newShoppingCart = []
            if (indexExistInShoppingCart != -1) {

                newShoppingCart = shoppingCart.map((cartItem, index) => cartItem.rawProductCode == data.rawProductCode ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)

            } else {
                newShoppingCart = shoppingCart.concat(data)
            }

            localStorage.setItem("pps-shoppingCart", JSON.stringify(newShoppingCart))

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

    static editCartItem = (data) => {

    }

    static deleteCartItem = (data) => {

        try {
            const shoppingCart = JSON.parse(localStorage.getItem("pps-shoppingCart"))

            const filterCart = shoppingCart.filter((cartItem, index) => cartItem.rawProductCode != data.rawProductCode)

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


    static cleanCart = () => {
        localStorage.removeItem("pps-shoppingCart")
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