"use strict";

var React = require('react');
var Link = require('react-router').Link;
var toastr = require('toastr');
var ProductActions = require('../../actions/productActions');

var ProductList = React.createClass({
    propTypes: {
        products: React.PropTypes.array.isRequired
    },
    deleteProduct: function(id, event) {
        event.preventDefault();
        ProductActions.deleteProduct(id);
        toastr.success('Product removed');
    },
    render: function() {
        var productRow = function(product) {
            return (
            <tr key={product.id}>
                <td><a href="#" onClick={this.deleteProduct.bind(this, product.id)}>Remove</a></td>
                <td>{product.id}</td>
                <td><Link to="manageProduct" params={{ id: product.id }}>{product.productName}</Link></td>
            </tr>
            );
        };
        return (
            <div>
            <table className="table">
                <thead>
                    <th></th>
                    <th>ID</th>
                    <th>Product Name</th>
                </thead>
                <tbody> 
                { this.props.products.map(productRow, this) }
                </tbody>
            </table>
            </div>
        );
    }
});

module.exports = ProductList;