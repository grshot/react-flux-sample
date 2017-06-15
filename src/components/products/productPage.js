"use strict";

var React = require('react');
var ProductAction = require('../../actions/productActions');
var ProductStore = require('../../stores/productStore');
var ProductList = require('./productList');
var Link = require('react-router').Link;

var ProductPage = React.createClass({
    getInitialState: function(){
        return {
            products: ProductStore.getAllProducts()
        };
    },
    _onChange: function() {
        this.setState({ products: ProductStore.getAllProducts() });
    },
    componentWillMount: function() {
        ProductStore.addChangeListener(this._onChange);
    },
    //Clean up when this componenet is unmounted
    componentWillUnmount: function() {
        ProductStore.removeChangeLister(this._onChange);
    },
    render: function() {
        return (
            <div>
                <h1>Product List</h1>
                <Link to="addProduct" className="btn btn-default">Add Product</Link>
                <ProductList products={this.state.products} />
            </div>
        );
    }
});

module.exports = ProductPage;