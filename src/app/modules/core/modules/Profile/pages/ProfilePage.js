import React, { useEffect } from 'react'
import { MainBar } from '../../../components'
import { Profile } from '../components'
import config from 'src/environments/config'
import { CanActive, Loader } from 'src/app/components'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle'
import { useLoadingEffect } from 'src/app/utils'
const ProfilePage = () => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()


    return (
        <>
            {/* <p>ProfilePage</p> */}
            <CanActive isRole={config.useRoleName.customer} />
            {<Loader loading={loading} />}

            <MainBar>
                <Profile />
            </MainBar>
        </>
    )
}

export default ProfilePage
