import React, { useState } from 'react'
import { FooterBar, Navbar, MainBar, ShoppingCartContainer } from '../components';
import config from 'src/environments/config';

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
