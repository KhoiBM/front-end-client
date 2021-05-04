import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { RiAccountBoxLine } from 'react-icons/ri'
import { makeStyles, IconButton, Tooltip, Zoom, Menu, MenuItem } from '@material-ui/core';
import { AuthService } from 'src/app/services';
import { toast } from 'react-toastify';
import { AiOutlineProfile, AiOutlineLogout, AiOutlineFileSearch } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({

    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none"
    },
    menuAccount: {
        zIndex: "1110  !important",
        // background: "red",
        position: "relative",
        "& .MuiMenu-paper": {
            // background: "blue",
            position: "absolute !important",
            top: "70px !important"
        }
    }
}));


export const AccountMenu = () => {
    const history = useHistory();


    const classes = useStyles({});

    const theme = useTheme()


    const [anchorElMenuAccount, setAnchorElMenuAccount] = useState(null);


    const openMenuAccount = Boolean(anchorElMenuAccount);


    const handleMenuAccount = (event) => {
        setAnchorElMenuAccount(event.currentTarget);
    };

    const handleCloseMenuAccount = () => {
        setAnchorElMenuAccount(null);
    };

    useEffect(() => {

    }, [])

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <div>
                <Tooltip TransitionComponent={Zoom} placement="left" title="Tài khoản">
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenuAccount}
                        color="inherit"
                    >
                        <RiAccountBoxLine className={classes.icon} />
                    </IconButton>
                </Tooltip>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElMenuAccount}
                    // anchorOrigin={{
                    //     vertical: 'bottom',
                    //     horizontal: 'right',
                    // }}
                    keepMounted
                    open={openMenuAccount}
                    onClose={handleCloseMenuAccount}
                    className={classes.menuAccount}
                >

                    <MenuItem onClick={() => {
                        handleCloseMenuAccount();
                        history.push(
                            {
                                pathname: `/navigation`,
                                search: ``,
                                state: {
                                    data: {
                                        locationObject: {
                                            pathname: `/core/profile_page`,
                                            search: ``,
                                            state: {
                                                data: {}
                                            }
                                        }
                                    }
                                }
                            }
                        )
                        scrollToTop()
                    }}><span style={{ marginRight: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}><AiOutlineProfile /></span>
    Hồ sơ của tôi
    </MenuItem>

                    <MenuItem onClick={() => {
                        handleCloseMenuAccount();
                        history.push({
                            pathname: `/navigation`,
                            search: ``,
                            state: {
                                data: {
                                    locationObject: {
                                        pathname: `/core/track_order_page`,
                                        search: ``,
                                        state: {
                                            data: {}
                                        }
                                    }
                                }
                            }
                        })
                        scrollToTop()
                    }}><span style={{ marginRight: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}><AiOutlineFileSearch /></span>
   Theo dõi đơn hàng
    </MenuItem>

                    <MenuItem onClick={() => {
                        handleCloseMenuAccount();
                        AuthService.signOut()
                        toast.success("Đăng xuất thành công")
                        history.push({
                            pathname: `/navigation`,
                            search: ``,
                            state: {
                                data: {
                                    locationObject: {
                                        pathname: `/auth/signin`,
                                        search: ``,
                                        state: {
                                            data: {}
                                        }
                                    }
                                }
                            }
                        })
                        scrollToTop()
                    }}>
                        <span style={{ marginRight: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}><AiOutlineLogout />
                        </span>Đăng xuất
    </MenuItem>
                </Menu>
            </div>

        </>
    )
}
