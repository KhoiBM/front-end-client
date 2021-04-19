/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { ProductListContainer, CardLinkR, ProductCard, H2, P, Wrapper } from './ProductListElements'
import { Divider, Typography } from '@material-ui/core'
import { useFormat } from 'src/app/utils'
import { PaginationBar } from '../PaginationBar'
import { ProductPhotoCard } from '../ProductPhotoCard'


export const ProductList = (props) => {
    const { records, page, setPage, totalPage } = props

    useEffect(() => {
        // console.log(records)
        console.log("totalPage:" + totalPage)
    }, [records])

    return (
        <>
            <ProductListContainer>
                <Wrapper>

                    {records && records != null && records.length > 0 && records.map((record, index) =>
                        <>

                            <CardLinkR key={index} to={{
                                pathname: `/core/product_detail_page`,
                                // search: ``,
                                state: {
                                    data: {
                                        rawProductCode: record.rawProductCode,
                                        categoryCode: record.categoryCode,
                                        createdBy: record.createdBy
                                    }
                                }
                            }
                            }

                            >
                                <ProductCard>
                                    <ProductPhotoCard recordForPhotoCard={{
                                        rawProductCode: record.rawProductCode,
                                        categoryCode: record.categoryCode,
                                        createdBy: record.createdBy
                                    }} />
                                    <H2>{record.rawProductName}</H2>
                                    <Divider />
                                    <br />
                                    <P>
                                        <Typography variant="body2" style={{ color: "#01bf71" }}>{`${useFormat().formatMoney(record.unitPrice)} đ`}</Typography>
                                    </P>
                                </ProductCard>
                            </CardLinkR>

                        </>




                    )
                    }


                </Wrapper>
                <PaginationBar totalPage={totalPage} setPage={setPage} page={page} />

            </ProductListContainer>
        </>
    )
}
