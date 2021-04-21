import React from 'react'
import { MainBar } from 'src/app/modules/core/components'
import { CreateOrderFormContainer } from '../components'


const CreateOrderPage = () => {
    return (
        <>
            {/* <p>CreateOrderPage</p> */}
            <MainBar>
                <CreateOrderFormContainer />
            </MainBar>
        </>
    )
}

export default CreateOrderPage
