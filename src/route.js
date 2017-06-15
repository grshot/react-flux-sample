"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="products" handler={require('./components/products/ProductPage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <Route name="addProduct" path="product" handler={require('./components/products/manageProduct')} />
        <Route name="manageProduct" path="product/:id" handler={require('./components/products/manageProduct')} />
        <NotFoundRoute handler={require('./components/404')} />
    </Route>
);

module.exports = routes;