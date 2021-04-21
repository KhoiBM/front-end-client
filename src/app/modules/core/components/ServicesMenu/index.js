import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { RiAccountBoxLine } from 'react-icons/ri'
import { makeStyles, IconButton, Tooltip, Zoom, Menu, MenuItem } from '@material-ui/core';
import { AuthService, ProductServices } from 'src/app/services';
import { toast } from 'react-toastify';
import { AiOutlineProfile, AiOutlineLogout, AiOutlineFileSearch } from 'react-icons/ai';
import { NavRLinks, NavSLinks } from './ServicesMenuElements'
import config from 'src/environments/config';
import { animateScroll as scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({

    menuButton: {
        marginRight: 36
    },
    hide: {
        display: "none"
    },
    menu: {
        // background: "red",
        position: "relative",
        "& .MuiMenu-paper": {
            // background: "blue",
            position: "absolute !important",
            top: "70px !important",
            width: "auto",
            minWidth: "200px",
            height: "auto"
        }
    }
}));


export const ServicesMenu = () => {
    const history = useHistory();


    const classes = useStyles({});

    const theme = useTheme()


    const [anchorElMenu, setAnchorElMenu] = useState(null);


    const openMenu = Boolean(anchorElMenu);


    const handleMenu = (event) => {
        setAnchorElMenu(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorElMenu(null);
    };


    const [records, setRecords] = useState([])

    useEffect(() => {
        loadInit()
    }, [])

    const scrollToTop = () => {
        scroll.scrollToTop();
    }


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
        <>

            <NavSLinks to='services'
                smooth={true}
                duration={500} spy={true}
                exact={true}
                offset={-80}
                onClick={handleMenu}
            >
                Dịch vụ
                </NavSLinks>


            <Menu
                id="menu-appbar"
                anchorEl={anchorElMenu}
                // anchorOrigin={{
                //     vertical: 'bottom',
                //     horizontal: 'right',
                // }}
                keepMounted
                open={openMenu}
                onClose={handleCloseMenu}
                className={classes.menu}
            >
                {records && records != null && records.length > 0 && records.map((record, index) =>

                    <MenuItem
                        key={index}
                        onClick={() => {
                            handleCloseMenu();
                            history.push(
                                record.serviceName == "Tạo của riêng bạn"
                                    ? {
                                        pathname: `/core/create_your_own_page`,
                                        // search: ``,
                                        state: {}
                                    } :
                                    {
                                        // pathname: `/core/product_list_page?serviceCode=${record.serviceCode}`,
                                        pathname: `/core/product_list_page`,
                                        search: `serviceCode=${record.serviceCode}`,
                                        state: {
                                            data: {
                                                serviceCode: record.serviceCode
                                            }
                                        }
                                    }
                            )
                            scrollToTop()


                        }}>
                        <span style={{ marginRight: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}>

                        </span>
                        {record.serviceName}

                    </MenuItem>


                )
                }



            </Menu>

        </>
    )
}