/* eslint-disable no-case-declarations */
/* eslint-disable no-empty */

import { ShoppingCartState } from "../states/ShoppingCartState";
import { SHOPPINGCART_TYPE } from '../types/SHOPPINGCART_TYPE'


export const useShoppingCartReducer = (state = new ShoppingCartState({
    shoppingCart: [
        // {
        //     rawProductCode: "productcode",
        //     rawProductName: "Lorem ipsum dolor sit ametuseShoppingCartReducer",
        //     categoryID: 1,
        //     categoryCode: "categoryCode",
        //     createdBy: "Quản lý",
        //     size: '1',
        //     color: "#48b7e2",
        //     unitPrice: 100000,
        //     servicePrice: 110000,
        //     quantity: 5,
        //     note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // },
        // {
        //     rawProductCode: "productcode2",
        //     rawProductName: "Lorem ipsum dolor sit amet2",
        //     categoryID: 2,
        //     categoryCode: "categoryCode",
        //     createdBy: "Quản lý",
        //     size: '1',
        //     color: "#48b7e2",
        //     unitPrice: 100000,
        //     servicePrice: 110000,
        //     quantity: 2,
        //     note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // },
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



            const isExist = resultShoppingCart.some((cartItem, index) => cartItem.rawProductCode == action.payload.data.rawProductCode)

            console.log("isExist: " + isExist)
            if (isExist) {
                resultShoppingCart = resultShoppingCart.map((cartItem, index) => {
                    if (cartItem.rawProductCode == action.payload.data.rawProductCode) {
                        return { ...cartItem, quantity: cartItem.quantity + action.payload.data.quantity }
                    }
                    return cartItem
                })

            } else {
                resultShoppingCart = resultShoppingCart.concat(action.payload.data)
            }



            console.log("resultShoppingCart")
            console.table(resultShoppingCart)

            return {
                ...state,
                shoppingCart: resultShoppingCart
            };
        }

        case SHOPPINGCART_TYPE.EDIT_CART_ITEM.SUCCESS: {
            let editedShoppingCart = state.shoppingCart.slice()


            const isExist = editedShoppingCart.some((cartItem, index) => cartItem.rawProductCode == action.payload.data.rawProductCode)

            console.log("isExist: " + isExist)
            if (isExist) {
                editedShoppingCart = editedShoppingCart.map((cartItem, index) => {
                    if (cartItem.rawProductCode == action.payload.data.rawProductCode) {
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
                const filterCart = state.shoppingCart.filter((cartItem, index) => cartItem.rawProductCode != action.payload.data.rawProductCode)

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


