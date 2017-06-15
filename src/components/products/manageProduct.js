"use strict";

var React = require('react');
var ProductForm = require('./productForm');
var ProductAction = require('../../actions/productActions');
var ProductStore = require('../../stores/productStore');
var Router = require('react-router');
var toastr = require('toastr');

var ManageProduct = React.createClass({
    statics: {
        willTransitionFrom: function(transition, component) {
            if(component.state.dirty && !confirm('Leaving without saving')) {
                transition.abort();
            }
        }
    },
    mixins: [
        Router.Navigation
    ],
    getInitialState: function() {
        return {
            product: { id: '', productName: '' },
            errors: {},
            dirty: false
        };
    },
    componentWillMount: function(){
        var productId = this.props.params.id; //from the path 'product:id'

        if(productId) {
            this.setState({product: ProductStore.getProductsById(productId)});
        }
    },
    setProductState: function(event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.product[field] = value;

        return this.setState({ product: this.state.product });
    },
    productFormIsValid: function() {
        var isValid = true;
        this.state.errors = {}; //clear any previous errors

        if(this.state.product.productName.length < 3) {
            this.state.errors = "Product Name should be at least characters";
            isValid = false;
        }

        this.setState({errors: this.state.errors});

        return isValid;
    },
    saveProduct: function(event) {
        event.preventDefault();

        if(!this.productFormIsValid()) {
            return;
        }

        if(this.state.product.id) {
            ProductAction.updateProduct(this.state.product);
        } else {
            ProductAction.createProduct(this.state.product);
        }

        this.setState({ dirty: false });
        toastr.success('Product saved');
        this.transitionTo('products');
    },
    render: function() {
        return (
            <div>
                <h1>Manage Product</h1>
                <ProductForm product={this.state.product} onChange={ this.setProductState } onSave={this.saveProduct} errors={this.state.errors} />
            </div>
        );
    }
});

module.exports = ManageProduct;