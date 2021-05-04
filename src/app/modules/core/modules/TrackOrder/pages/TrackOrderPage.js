import React, { useEffect } from 'react'
import { OrderServices } from 'src/app/services';
import { makeStyles, Paper } from '@material-ui/core';
import { useSearchHandle, useFilterHandle, useLoadingEffect } from 'src/app/utils';
import { MainBar } from '../../../components';
import { TrackOrderTable } from '../components/TrackOrderTable';
import { FilterChipBar } from '../components';
import { CanActive, Loader } from 'src/app/components';
import config from 'src/environments/config';
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        width: "100%",
        // paddingTop: theme.spacing(6),
        // background: '#B6E2F3',
        // background: 'var(bg-secondary-color-main)',
        minHeight: "90%",
        height: "auto",
        position: "relative",
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
        transition: "all 0.2 ease -in -out",
        // border: "1px solid red",
        paddingTop: theme.spacing(5),

        '&:hover': {
            // transform: "scale(1.02)",
            transition: "all 0.2 ease -in -out",
            cursor: "pointer"
        }

    },
    actionContainer: {
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: theme.spacing(2)
        // background: 'red',
    },
    actionWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        // paddingRight: theme.spacing(6),
        // paddingLeft: theme.spacing(8),
        // marginRight: theme.spacing(8),
        // background: '#B6E2F3',

        width: "99%",

    }
}));

const TrackOrderPage = (props) => {
    const classes = useStyles();

    const { keywords, setKeywords, clickSearch, setClickSearch, searchAction, setSearchAction, handleKeywordsChange } = useSearchHandle()

    const fetchApi = OrderServices.getOrderStatusToFilter()

    const mapToFilter = (records) => {
        // console.log("mapToFilter")
        return records.map((val) => ({ ID: val, name: val }));
    }

    const { recordsSelect, setRecordsSelect, filterList, setFilterList, action, setAction, clickFilter, setClickFilter } = useFilterHandle(
        {
            fetchApi,
            mapToFilter
        }
    )

    // const { loading, setLoading, showLoader, hideLoader } = useLoadingEffect()
    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    return (
        <>
            <CanActive isRole={config.useRoleName.customer}>

                {<Loader loading={loading} />}

                <MainBar>
                    <Paper elevation={0} className={classes.mainContainer}>
                        <>

                            <div className={classes.actionContainer}>
                                <div className={classes.actionWrapper}>
                                    {/* <SearchBar keywords={keywords} setKeywords={setKeywords} searchAction={searchAction} setSearchAction={setSearchAction} clickSearch={clickSearch} setClickSearch={setClickSearch} handleKeywordsChange={handleKeywordsChange} /> */}
                                    <FilterChipBar inputLabel={"Bộ lọc"} recordsSelect={recordsSelect} setRecordsSelect={setRecordsSelect} filterList={filterList} setFilterList={setFilterList} setAction={setAction} setClickFilter={setClickFilter} />
                                </div>
                            </div>

                            {filterList && filterList != null && filterList.length > 0 && <TrackOrderTable
                                keywords={keywords} setSearchAction={setSearchAction} searchAction={searchAction} clickSearch={clickSearch} setClickSearch={setClickSearch} filterList={filterList} action={action} clickFilter={clickFilter} />
                            }
                        </>
                    </Paper>
                </MainBar>

            </CanActive>
        </>
    )
}

export default TrackOrderPage
