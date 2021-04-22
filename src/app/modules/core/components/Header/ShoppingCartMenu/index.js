import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { makeStyles, IconButton, Tooltip, Zoom, Menu, MenuItem, Badge } from '@material-ui/core';
import { toast } from 'react-toastify';
import config from 'src/environments/config';
import { ProductServices, CartServices } from 'src/app/services';
import { RiShoppingCartLine } from 'react-icons/ri';
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


export const ShoppingCartMenu = () => {
    const history = useHistory();


    const classes = useStyles({});

    const theme = useTheme()

    const [refresh, setRefresh] = useState(false)

    const [countBadge, setCountBadge] = useState(0)

    useEffect(() => {
        loadInit()

    }, [])

    useEffect(() => {
        loadInit()
    }, [refresh])

    const loadInit = async () => {

        // loadCountBadge()

    }

    // const loadCountBadge = async () => {

    //     try {
    //         const response = await (await CartServices.countCartItem()).data

    //         // console.log("response: " + response)

    //         if (response && response != null) {
    //             if (response.result == config.useResultStatus.SUCCESS) {
    //                 // console.log("countBadge: " + JSON.stringify(response.info.count))
    //                 const countBadge = response.info.count
    //                 setCountBadge(countBadge ? countBadge : 0)

    //             } else {
    //                 toast.error(config.useMessage.resultFailure)
    //             }
    //         } else {
    //             throw new Error("Response is null or undefined")
    //         }

    //     } catch (err) {
    //         toast.error(`${config.useMessage.fetchApiFailure} + ${err}`)
    //     }

    // }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }


    return (
        <>
            <Tooltip TransitionComponent={Zoom} placement="left" title="Giỏ hàng">
                <IconButton
                    onClick={
                        () => {
                            history.push('/core/cart_page')
                            scrollToTop()
                        }
                    }
                >
                    {/* <Badge
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        badgeContent={countBadge}
                        className={classes.badge}
                        color="error"> */}

                    <RiShoppingCartLine className={classes.icon} />
                    {/* </Badge> */}

                </IconButton>
            </Tooltip>



        </>
    )
}
