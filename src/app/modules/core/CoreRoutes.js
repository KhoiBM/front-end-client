/* eslint-disable no-unused-vars */
import { useRouteMatch, Switch, Router, Route, Redirect } from "react-router-dom";
import React from 'react'
import ProfilePage from './pages/ProfilePage'
import { NoMatch } from "src/app/components";
import Homepage from "./pages/Homepage";
import CartPage from "./pages/CartPage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PersonalizePage from "./pages/PersonalizePage";
import CreateOrderPage from "./pages/CreateOrderPage";
import TrackOrderPage from "./pages/TrackOrderPage";
import SearchPage from "./pages/SearchPage";
import CreateYourOwnPage from "./pages/CreateYourOwnPage";
const CoreRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <>
            {/* <p>CoreRoutes</p> */}
            <Switch>
                <Route exact path={`${path}`} render={() => <Redirect to={`${path}/home_page`} />} />
                <Route path={`${path}/profile`} component={ProfilePage} />
                <Route path={`${path}/home_page`} component={Homepage} />
                <Route path={`${path}/cart_page`} component={CartPage} />
                <Route path={`${path}/product_list_page`} component={ProductListPage} />
                <Route path={`${path}/product_detail_page`} component={ProductDetailPage} />
                <Route path={`${path}/create_your_own_page`} component={CreateYourOwnPage} />
                <Route path={`${path}/personalize_page`} component={PersonalizePage} />
                <Route path={`${path}/create_order_page`} component={CreateOrderPage} />
                <Route path={`${path}/track_order_page`} component={TrackOrderPage} />
                <Route path={`${path}/search_page`} component={SearchPage} />

                <Route component={NoMatch} />
            </Switch>
        </>
    )
}

export default CoreRoutes

