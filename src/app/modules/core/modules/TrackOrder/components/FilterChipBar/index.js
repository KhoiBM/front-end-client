/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import config from 'src/environments/config'
import { makeStyles, InputLabel, FormControl, MenuItem, Select, Chip, Input, useTheme } from '@material-ui/core'
import { useLoaderHandle } from 'src/app/utils/handles/useLoaderHandle';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        // width: props => props.length ? `${(props.length * 2) + 15}vmax` : "15vmax",
        width: "15vmax",
        maxWidth: "15vmax",
        minWidth: "250px",
        zIndex: "100"

    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
        background: "var( --tertiary-color-main)",
        color: "#fff"
    },
    selectContainer: {
        background: "#fff",
    }
}))

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200,
        },
    },
};

function getStyles(ID, recordsSelect, theme) {
    return {
        fontWeight:
            recordsSelect.indexOf(ID) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export const FilterChipBar = (props) => {

    const { loading, setLoading, showLoader, hideLoader } = useLoaderHandle()

    const { recordsSelect, setRecordsSelect, filterList, setFilterList, inputLabel, setAction, setClickFilter } = props

    const theme = useTheme();

    const classes = useStyles({
        length: filterList.length
    });

    const [first, setFirst] = useState(true)

    const [filterSelectList, setFilterSelectList] = useState([])

    // console.log("filterList: " + filterList)

    const handleFilterChange = (event) => {
        showLoader()
        setClickFilter((prev) => !prev)
        setAction("filter")
        // console.log("event.target.value : " + JSON.stringify(event.target.value))

        // setFilterSelectList(event.target.value.length > 0 ? event.target.value : recordsSelect && recordsSelect != null && recordsSelect.length > 0 ? [...recordsSelect.map((val) => (val.ID))] : []);
        // setFilterSelectList(event.target.value);

        // setFilterList(event.target.value.length > 0 ? event.target.value : recordsSelect && recordsSelect != null && recordsSelect.length > 0 ? recordsSelect.map((val) => (val.ID)) : []);





        // if (event.target.value.indexOf(0) != -1) {
        //     // console.log("0")
        //     setFilterSelectList([0]);
        //     setFilterList(recordsSelect && recordsSelect != null && recordsSelect.length > 0 ? recordsSelect.map((val) => (val.ID)) : []);
        // } else {
        setFilterSelectList(event.target.value.length > 0 ? event.target.value : []);
        setFilterList(event.target.value.length > 0 ? event.target.value : recordsSelect && recordsSelect != null && recordsSelect.length > 0 ? recordsSelect.map((val) => (val.ID)) : []);
        // }
        hideLoader()
    }


    useEffect(() => {
        // console.log("filterSelectList: " + JSON.stringify(filterSelectList))
    }, [filterSelectList])

    return (
        <>

            <FormControl className={classes.formControl} variant="outlined" >

                <InputLabel id="filter-chip-label">
                    {/* {inputLabel} */}
                </InputLabel>
                <Select
                    labelId="filter-chip-label"
                    id="filter-mutiple-chip"
                    multiple
                    value={filterSelectList}
                    onChange={handleFilterChange}
                    displayEmpty={true}
                    // displayEmpty={false}
                    renderValue={(selected) => {
                        // console.log("selected: " + JSON.stringify(selected))
                        // console.log("selectedlength: " + selected.length)
                        return (
                            <div className={classes.chips}>
                                {
                                    selected.indexOf(0) != -1
                                        // || selected[0] == 0
                                        || selected.length == 0
                                        || selected == recordsSelect
                                        ? (() => {
                                            const allFilterList = recordsSelect.map((val) => (val.ID))
                                            // console.log("filterAll: " + recordsSelect.map((val) => (val.ID)))
                                            return (
                                                < Chip key={allFilterList} label={"Tất cả"} className={classes.chip} />
                                            )
                                        })()
                                        : selected.map((value) => {
                                            const name = recordsSelect && recordsSelect.find((val) => val.ID == value).name
                                            const labelValue = name ? name : value
                                            // console.log(recordsSelect.find((val) => val.ID == value).name)
                                            return (
                                                < Chip key={value} label={labelValue} className={classes.chip} />
                                            )
                                        })


                                }
                            </div>
                        )
                    }}
                    MenuProps={MenuProps}
                    // labelWidth={50}
                    className={classes.selectContainer}
                >
                    <MenuItem value={0} key={0} style={{ display: "none" }} >{"Tất cả"}</MenuItem>
                    {
                        recordsSelect && recordsSelect.map((val, index) => (<MenuItem value={val.ID} key={val.ID} style={getStyles(val.ID, recordsSelect, theme)}>{val.name}</MenuItem>))
                    }
                </Select>

            </FormControl>
        </>
    )
}
