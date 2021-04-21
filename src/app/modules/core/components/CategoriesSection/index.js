import React, { useEffect, useState } from 'react'
import { CategoriesSectionContainer, CategoriesH1, CategoriesWrapper, CategoriesCardLinkR, CategoriesCard, CategoriesH2, CategoriesP } from './CategoriesSectionElements'
import { toast } from 'react-toastify'
import config from 'src/environments/config'
import { useFormat } from 'src/app/utils'
import { Typography, Divider } from '@material-ui/core'
import { ProductServices } from 'src/app/services'
import { CategoriesIconContainer } from '../CategoriesIconContainer'
import { animateScroll as scroll } from 'react-scroll';
export const CategoriesSection = () => {

    const [records, setRecords] = useState([])

    useEffect(() => {
        loadInit()
    }, [])


    const loadInit = async () => {

        try {

            const response = await (await ProductServices.getAllCategory()).data

            // console.log("response: " + JSON.stringify(response))

            if (response && response != null) {

                if (response.result == config.useResultStatus.SUCCESS) {

                    loadData(response)

                    console.log("loadInit")

                } else {

                    toast.error(config.useMessage.resultFailure)

                }
            } else {

                throw new Error("Response is null or undefined")

            }

        } catch (err) {

            toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)

        }

    }


    const loadData = async (response) => {

        const records = response.info.records

        const totalPageResponse = response.info.totalPage

        if (records && records != null && records.length > 0) {

            setRecords(records)

        } else {

            setRecords([])

        }
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <CategoriesSectionContainer id='categories'>
            <CategoriesH1>Thể loại</CategoriesH1>
            <CategoriesWrapper>

                {records && records != null && records.length > 0 && records.map((record, index) =>
                    <CategoriesCardLinkR key={index} to={{
                        // pathname: `/core/product_list_page?categoryCode=${record.categoryCode}`,
                        pathname: `/core/product_list_page`,
                        search: `categoryCode=${record.categoryCode}`,
                        state: {
                            data: {
                                categoryCode: record.categoryCode
                            }
                        }
                    }

                    }

                    >
                        <CategoriesCard
                            onClick={() => {
                                scrollToTop()
                            }}>
                            <CategoriesIconContainer recordForCategoriesIcon={{ categoryCode: record.categoryCode }} />
                            <CategoriesH2>{record.serviceName}</CategoriesH2>
                            <CategoriesP>{record.description}</CategoriesP>
                            <Divider />
                        </CategoriesCard>
                    </CategoriesCardLinkR>

                )
                }


            </CategoriesWrapper>
        </CategoriesSectionContainer >
    )
}


