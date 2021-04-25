import React, { useState } from 'react'
import config from 'src/environments/config';
import { MainBar } from '../../../components';
import { ShoppingCartContainer } from '../components';
import { Loader } from 'src/app/components';
import { useLoadingEffect } from 'src/app/utils';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const CartPage = () => {
    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            {/* {<Loader loading={loading} />} */}

            <MainBar>
                <ShoppingCartContainer />
            </MainBar>
        </>
    )
}

export default CartPage
