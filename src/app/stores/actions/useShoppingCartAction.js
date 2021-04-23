import { SHOPPINGCART_TYPE } from "../types";



export const useShoppingCartAction = () => {

    const viewShoppingCart = (data) => {

        return { type: SHOPPINGCART_TYPE.VIEW_SHOPPINGCART.FETCH, payload: { data } };
    };
    const viewShoppingCartSuccess = (data) => {
        return { type: SHOPPINGCART_TYPE.VIEW_SHOPPINGCART.SUCCESS, payload: { data } };
    };

    const addCartItem = (data) => {

        return { type: SHOPPINGCART_TYPE.ADD_CART_ITEM.FETCH, payload: { data } };
    };
    const addCartItemSuccess = (data) => {
        return { type: SHOPPINGCART_TYPE.ADD_CART_ITEM.SUCCESS, payload: { data } };
    };

    const editCartItem = (data) => {

        return { type: SHOPPINGCART_TYPE.EDIT_CART_ITEM.FETCH, payload: { data } };
    };
    const editCartItemSuccess = (data) => {
        return { type: SHOPPINGCART_TYPE.EDIT_CART_ITEM.SUCCESS, payload: { data } };
    };

    const deleteCartItem = (data) => {

        return { type: SHOPPINGCART_TYPE.DELETE_CART_ITEM.FETCH, payload: { data } };
    };
    const deleteCartItemSuccess = (data) => {
        return { type: SHOPPINGCART_TYPE.DELETE_CART_ITEM.SUCCESS, payload: { data } };
    };

    const cleanCartItem = (data) => {

        return { type: SHOPPINGCART_TYPE.CLEAN_SHOPPINGCART.FETCH, payload: { data } };
    };
    const cleanCartItemSuccess = (data) => {
        return { type: SHOPPINGCART_TYPE.CLEAN_SHOPPINGCART.SUCCESS, payload: { data } };
    };

    const countCartItem = (data) => {

        return { type: SHOPPINGCART_TYPE.COUNT_CART_ITEM.FETCH, payload: { data } };
    };
    const countCartItemSuccess = (data) => {
        return { type: SHOPPINGCART_TYPE.COUNT_CART_ITEM.SUCCESS, payload: { data } };
    };



    return {
        viewShoppingCart,
        viewShoppingCartSuccess,
        addCartItem,
        addCartItemSuccess,
        editCartItem,
        editCartItemSuccess,
        deleteCartItem,
        deleteCartItemSuccess,
        cleanCartItem,
        cleanCartItemSuccess,
        countCartItem,
        countCartItemSuccess

    };
};