"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ProductApi = require('../api/productApi');
var ActionTypes = require('../constants/actionTypes');

var InitializeActions = {
    initApp: function() {
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                products: ProductApi.getAllProducts()
            }
        });
    }
};

module.exports = InitializeActions;