import React from 'react'
import { MainBar } from '../../../components'
import { CreateCustomersRawProduct } from '../components'
import { Loader } from 'src/app/components'
import { useLoadingEffect } from 'src/app/utils'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'

const CreateYourOwnPage = () => {
    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            {<Loader loading={loading} />}

            <MainBar>
                <CreateCustomersRawProduct />
            </MainBar>
        </>
    )
}

export default CreateYourOwnPage
