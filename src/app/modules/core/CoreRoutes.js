/* eslint-disable no-unused-vars */
import { useRouteMatch, Switch, Router, Route, Redirect } from "react-router-dom";
import React from 'react'
import ProfilePage from './modules/Profile/pages/ProfilePage'
import { NoMatch } from "src/app/components";
import Homepage from "./modules/Homepage/pages/Homepage";
import CreateYourOwnPage from "./modules/Product/pages/CreateYourOwnPage";
import CreateOrderPage from "./modules/CreateOrder/pages/CreateOrderPage";
import TrackOrderPage from "./modules/TrackOrder/pages/TrackOrderPage";
import SearchPage from "./modules/Product/pages/SearchPage";
import ProductListPage from "./modules/Product/pages/ProductListPage";
import ProductDetailPage from "./modules/Product/pages/ProductDetailPage";
import CartPage from "./modules/Cart/pages/CartPage";
const CoreRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>CoreRoutes</p> */}
            <Switch>
                <Route exact path={`${path}`} render={() => <Redirect to={`${path}/home_page`} />} />
                <Route path={`${path}/profile_page`} component={ProfilePage} />
                <Route path={`${path}/home_page`} component={Homepage} />
                <Route path={`${path}/cart_page`} component={CartPage} />
                <Route path={`${path}/product_list_page`} component={ProductListPage} />
                <Route path={`${path}/product_detail_page`} component={ProductDetailPage} />
                <Route path={`${path}/create_your_own_page`} component={CreateYourOwnPage} />
                <Route path={`${path}/create_order_page`} component={CreateOrderPage} />
                <Route path={`${path}/track_order_page`} component={TrackOrderPage} />
                <Route path={`${path}/search_page`} component={SearchPage} />

                <Route component={NoMatch} />
            </Switch>
        </>
    )
}

export default CoreRoutes

