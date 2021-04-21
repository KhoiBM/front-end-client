/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import { TextField, makeStyles, InputAdornment, IconButton } from '@material-ui/core'
import { useForm, useSearchHandle, useScrollToTop } from 'src/app/utils'
import { MdSearch } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    searchBarWrapper: {
        width: "400px",
        height: "100%",
        position: "relative",
        // background: "red"
        // border: "1px solid red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

    },
    searchBarTextField: {
        width: "80%",
        height: "auto",
        // background: "blue",
        color: "#fff",
        '& .MuiInputBase-root': {
            border: "1px solid #fff",
            color: "#fff",
            height: "40px",

        },
        '&:placeholder': {
        }

    },
    iconSearchWrapper: {
        position: "absolute",
        top: 17,
        right: 40,

    }
}))


export const SearchBar = (props) => {
    const classes = useStyles();

    const { scrollToTop } = useScrollToTop()

    const history = useHistory()
    // const { keywords, setKeywords, setSearchAction, clickSearch, setClickSearch, handleKeywordsChange } = props

    const { keywords, setKeywords, clickSearch, setClickSearch, searchAction, setSearchAction, handleKeywordsChange } = useSearchHandle()

    useEffect(() => {
        // console.log("keywords: " + keywords)
    }, [keywords])

    return (
        <>
            <div className={classes.searchBarWrapper}>
                <TextField
                    variant='outlined'
                    // label="Tìm kiếm"
                    value={keywords}
                    name="keywords"
                    onChange={handleKeywordsChange}
                    className={classes.searchBarTextField}
                    placeholder="Tìm kiếm"
                />
                <IconButton className={classes.iconSearchWrapper} onClick={() => {


                    history.push(
                        {
                            pathname: `/core/search_page`,
                            search: `keywords=${keywords}`,
                            state: {
                                data: {
                                    keywords
                                }
                            }
                        }
                    )
                    scrollToTop()



                }}
                >
                    <MdSearch />
                </IconButton>
            </div>

        </>
    )
}
