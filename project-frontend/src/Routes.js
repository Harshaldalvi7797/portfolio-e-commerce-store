import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./core/Home"
import Signup from "./user/Signup"
import Signin from "./user/Signin"
import PrivateRoute from "./auth/helper/PrivateRoutes"
import AdminRoute from "./auth/helper/AdminRoutes";

import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import ManageCategories from "./admin/ManageCategories";
import AddCategory from "./admin/AddCategory";
import AddProduct from './admin/AddProduct'
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />
                <AdminRoute path="/admin/create/category" exact component={AddCategory} />
                <AdminRoute path="/admin/create/product" exact component={AddProduct} />
                <AdminRoute path="/admin/manage/category" exact component={ManageCategories} />
                <AdminRoute path="/admin/manage/products" exact component={ManageProducts} />
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />

            </Switch>
        </BrowserRouter>
    )
}
export default Routes;