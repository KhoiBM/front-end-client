
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import config from 'src/environments/config'
import { makeStyles, InputLabel, FormControl, MenuItem, Select, Chip, Input, useTheme } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        // width: props => props.length ? `${(props.length * 2) + 15}vmax` : "15vmax",
        width: "15vmax",
        maxWidth: "15vmax",
        minWidth: "250px"

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

export const FilterRawProductBar = (props) => {

    const { recordsSelect, setRecordsSelect, filterList, setFilterList, inputLabel, setAction, setClickFilter } = props

    const theme = useTheme();

    const classes = useStyles({
        length: filterList.length
    });

    const [first, setFirst] = useState(true)

    const [filterSelectList, setFilterSelectList] = useState([])

    console.log("filterList: " + filterList)

    const handleFilterChange = (event) => {
        setClickFilter((prev) => !prev)
        setAction("filter")
        setFilterSelectList(event.target.value);
        setFilterList(event.target.value);

    }


    useEffect(() => {
        console.log("filterSelectList: " + JSON.stringify(filterSelectList))
    }, [filterSelectList])

    return (
        <>

            <FormControl className={classes.formControl} variant="outlined" >

                <InputLabel id="filter-chip-label">
                    {inputLabel}
                </InputLabel>
                <Select
                    labelId="filter-chip-label"
                    id="filter-chip"
                    value={filterSelectList}
                    onChange={handleFilterChange}
                    displayEmpty={true}
                    MenuProps={MenuProps}
                    labelWidth={50}
                    className={classes.selectContainer}
                >
                    {
                        recordsSelect && recordsSelect.map((val, index) => (<MenuItem value={val.ID} key={val.ID} style={getStyles(val.ID, recordsSelect, theme)}>{val.name}</MenuItem>))
                    }
                </Select>

            </FormControl>
        </>
    )
}
