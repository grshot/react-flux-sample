"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ProductApi = require('../api/productApi');
var ActionTypes = require('../constants/actionTypes');

var ProductActions = {
    createProduct: function(product) {
        var newProduct = ProductApi.saveProduct(product);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_PRODUCT,
            product: newProduct
        });
    },
    updateProduct: function(product) {
        var updatedProduct = ProductApi.saveProduct(product);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_PRODUCT,
            product: updatedProduct
        });
    },
    deleteProduct: function(id) {
        ProductApi.deleteProduct(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_PRODUCT,
            id: id
        });
    }
};

module.exports = ProductActions;