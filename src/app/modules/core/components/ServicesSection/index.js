import React, { useEffect, useState } from 'react'
import { ServicesSectionContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesP, ServicesCardLinkR } from './ServicesSectionElements'
import { toast } from 'react-toastify'
import config from 'src/environments/config'
import { ProductServices } from 'src/app/services'
import { useFormat } from 'src/app/utils'
import { Typography, Divider } from '@material-ui/core'
import { ServicesIconContainer } from '../ServicesIconContainer'

export const ServicesSection = () => {

    const [records, setRecords] = useState([])

    useEffect(() => {
        loadInit()
    }, [])

    const loadInit = async () => {
        try {

            const response = await (await ProductServices.getAllService()).data

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

    return (
        <ServicesSectionContainer id='services'>
            <ServicesH1>Dịch vụ của chúng tôi</ServicesH1>
            <ServicesWrapper>

                {records && records != null && records.length > 0 && records.map((record, index) =>
                    record.serviceName == "Tạo của riêng bạn" ?
                        <>

                            <ServicesCardLinkR key={index} to={{
                                // pathname: `/core/product_list_page?serviceCode=${record.serviceCode}`,
                                pathname: `/core/create_your_own_page`,
                                // search: ``,
                                state: {}
                            }
                            }

                            >
                                <ServicesCard >
                                    {/* <ServicesIcon src={Icon3} /> */}
                                    <ServicesIconContainer recordForServicesIcon={{ serviceCode: record.serviceCode }} />
                                    <ServicesH2>{record.serviceName}</ServicesH2>
                                    <ServicesP>{record.description}</ServicesP>
                                    <Divider />
                                    <br />
                                    <ServicesP>
                                        <Typography variant="body2" style={{ color: "#01bf71" }}>Giá dịch vụ: {`${useFormat().formatMoney(record.servicePrice)} đ`}</Typography>

                                    </ServicesP>
                                </ServicesCard>
                            </ServicesCardLinkR>

                        </>
                        :
                        <>
                            <ServicesCardLinkR key={index} to={{
                                // pathname: `/core/product_list_page?serviceCode=${record.serviceCode}`,
                                pathname: `/core/product_list_page`,
                                // search: `serviceCode=${record.serviceCode}`,
                                state: {
                                    data: {
                                        serviceCode: record.serviceCode
                                    }
                                }
                            }
                            }

                            >
                                <ServicesCard >
                                    {/* <ServicesIcon src={Icon3} /> */}
                                    <ServicesIconContainer recordForServicesIcon={{ serviceCode: record.serviceCode }} />
                                    <ServicesH2>{record.serviceName}</ServicesH2>
                                    <ServicesP>{record.description}</ServicesP>
                                    <Divider />
                                    <br />
                                    <ServicesP>
                                        <Typography variant="body2" style={{ color: "#01bf71" }}>Giá dịch vụ: {`${useFormat().formatMoney(record.servicePrice)} đ`}</Typography>

                                    </ServicesP>
                                </ServicesCard>
                            </ServicesCardLinkR>

                        </>



                )
                }


            </ServicesWrapper>
        </ServicesSectionContainer >
    )
}


