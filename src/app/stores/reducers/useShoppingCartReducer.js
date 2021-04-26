/* eslint-disable no-case-declarations */
/* eslint-disable no-empty */

import { ShoppingCartState } from "../states/ShoppingCartState";
import { SHOPPINGCART_TYPE } from '../types/SHOPPINGCART_TYPE'


export const useShoppingCartReducer = (state = new ShoppingCartState({
    shoppingCart: [
    ]
}), action) => {

    switch (action.type) {
        case SHOPPINGCART_TYPE.VIEW_SHOPPINGCART.SUCCESS:
            {
                return {
                    ...state
                };
            }

        case SHOPPINGCART_TYPE.ADD_CART_ITEM.SUCCESS: {

            let resultShoppingCart = state.shoppingCart.slice()



            // const isExist = resultShoppingCart.some((cartItem, index) => cartItem.rawProductCode == action.payload.data.rawProductCode)

            // console.log("isExist: " + isExist)
            // if (isExist) {

            //     resultShoppingCart = resultShoppingCart.map((cartItem, index) => {
            //         if (cartItem.cartItemCode == action.payload.data.cartItemCode) {
            //             return { ...cartItem, ...action.payload.data, quantity: cartItem.quantity + action.payload.data.quantity }
            //         }
            //         return cartItem
            //     })


            // } else {
            resultShoppingCart = resultShoppingCart.concat(action.payload.data)
            // }



            console.log("resultShoppingCart")
            console.table(resultShoppingCart)

            return {
                ...state,
                shoppingCart: resultShoppingCart
            };
        }

        case SHOPPINGCART_TYPE.EDIT_CART_ITEM.SUCCESS: {
            let editedShoppingCart = state.shoppingCart.slice()


            const isExist = editedShoppingCart.some((cartItem, index) => cartItem.cartItemCode == action.payload.data.cartItemCode)

            console.log("isExist: " + isExist)
            if (isExist) {
                editedShoppingCart = editedShoppingCart.map((cartItem, index) => {
                    if (cartItem.cartItemCode == action.payload.data.cartItemCode) {
                        return { ...cartItem, ...action.payload.data }
                    }
                    return cartItem
                })
            }


            console.log("editedShoppingCart")
            console.table(editedShoppingCart)

            return {
                ...state,
                shoppingCart: editedShoppingCart
            };
        }


        case SHOPPINGCART_TYPE.DELETE_CART_ITEM.SUCCESS:
            {
                console.log("redux")

                const filterCart = state.shoppingCart.filter((cartItem, index) => {
                    console.log("cartItem")
                    console.log(cartItem)
                    console.log("cartItemCode")
                    console.log(action.payload.data.cartItemCode)
                    return cartItem.cartItemCode != action.payload.data.cartItemCode
                }
                )

                return {
                    ...state,
                    shoppingCart: filterCart
                };
            }



        case SHOPPINGCART_TYPE.CLEAN_SHOPPINGCART.SUCCESS:
            {
                return {
                    ...state,
                    shoppingCart: []
                };
            }

        case SHOPPINGCART_TYPE.COUNT_CART_ITEM.SUCCESS:
            {
                return {
                    ...state
                };
            }

        default:
            return {
                ...state,
            };
    }
};


