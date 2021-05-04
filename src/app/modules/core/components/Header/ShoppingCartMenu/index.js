import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { makeStyles, IconButton, Tooltip, Zoom, Menu, MenuItem, Badge } from '@material-ui/core';
import { toast } from 'react-toastify';
import config from 'src/environments/config';
import { ProductServices, CartServices } from 'src/app/services';
import { RiShoppingCartLine } from 'react-icons/ri';
import { animateScroll as scroll } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';

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

    const dispatch = useDispatch();

    const classes = useStyles({});

    const theme = useTheme()

    const [refresh, setRefresh] = useState(false)

    const [countBadge, setCountBadge] = useState(0)

    const { shoppingCart } = useSelector((state) => state.shoppingCartState)


    useEffect(() => {
        loadInit(shoppingCart)
        console.log("ShoppingCartMenushoppingCart:")
        console.table(shoppingCart)
    }, [refresh, shoppingCart])

    const loadInit = async (shoppingCart) => {

        loadCountBadge(shoppingCart)

    }

    const loadCountBadge = async (shoppingCart) => {
        try {
            if (shoppingCart && shoppingCart != null && shoppingCart.length > 0) {
                setCountBadge(shoppingCart.length)
            } else {
                setCountBadge(0)
            }
        } catch (err) {
            toast.error("Lỗi count cart item")
        }
    }

    const scrollToTop = () => {
        scroll.scrollToTop();
    }


    return (
        <>
            <Tooltip TransitionComponent={Zoom} placement="left" title="Giỏ hàng">
                <IconButton
                    onClick={
                        () => {
                            history.push(
                                {
                                    pathname: `/navigation`,
                                    search: ``,
                                    state: {
                                        data: {
                                            locationObject: {
                                                pathname: '/core/cart_page',
                                                search: ``,
                                                state: {
                                                    data: {}
                                                }
                                            }
                                        }
                                    }
                                })
                            scrollToTop()
                        }
                    }
                >
                    <Badge
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        badgeContent={countBadge}
                        className={classes.badge}
                        color="error">

                        <RiShoppingCartLine className={classes.icon} />
                    </Badge>

                </IconButton>
            </Tooltip>



        </>
    )
}
