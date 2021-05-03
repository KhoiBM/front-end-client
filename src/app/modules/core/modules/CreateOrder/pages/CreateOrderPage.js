import React from 'react'
import { MainBar } from 'src/app/modules/core/components'
import { CreateOrderFormContainer } from '../components'
import { CanActive, Loader } from 'src/app/components'
import config from 'src/environments/config'
import { useLoadingEffect } from 'src/app/utils'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'


const CreateOrderPage = () => {
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()
    return (
        <>
            <CanActive isRole={config.useRoleName.customer}>

            </CanActive>
            {<Loader loading={loading} />}
            <MainBar>
                <CreateOrderFormContainer />
            </MainBar>

        </>
    )
}

export default CreateOrderPage
