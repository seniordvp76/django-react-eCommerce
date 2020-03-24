import React from "react";
import { Route, Switch } from "react-router-dom";
import Hoc from "./hoc/hoc";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import HomepageLayout from "./containers/Home";
import Dashboard from "./containers/admin/Dashboard";
// import PrivateRoute from "./containers/PrivateRoute";
import ProductList from "./containers/ProductList";
import OrderSummary from "./containers/OrderSummary";
import Checkout from './containers/Checkout'

const BaseRouter = () => (
  <Hoc>
    <Switch>
      <Route path="/products" component={ProductList} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/order-summary" component={OrderSummary} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/dashboard" component={Dashboard} />
      <Route exact path="/" component={HomepageLayout} />
    </Switch>
  </Hoc>
);

export default BaseRouter;
