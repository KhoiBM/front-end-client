import React, { useState } from 'react'
import config from 'src/environments/config';
import { MainBar } from '../../../components';
import { ShoppingCartContainer } from '../components';

const CartPage = () => {

    return (
        <>
            <MainBar>
                <ShoppingCartContainer />
            </MainBar>
        </>
    )
}

export default CartPage
