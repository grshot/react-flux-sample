"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');

var _products = [];

var ProductStore = assign({}, EventEmitter.prototype, {
   addChangeListener: function(callback) {
       this.on('change', callback);
   },
   removeChangeLister: function(callback) {
       this.removeListener('change', callback);
   },
   emitChange: function() {
       this.emit('change');
   },
   getAllProducts: function() {
       return _products;
   },
   getProductsById: function(id) {
       return _.find(_products, {id: id});
   } 
});

Dispatcher.register(function(action) {
    switch(action.actionType) {
        case ActionTypes.INITIALIZE :
            _products = action.initialData.products;
            ProductStore.emitChange();
            break;
        case ActionTypes.CREATE_PRODUCT :
             _products.push(action.product);
             ProductStore.emitChange();
             break;
        case ActionTypes.UPDATE_PRODUCT :
             var existingProduct = _.find(_products, { id: action.product.id });
             var existingProductIndex = _.indexOf(_products, existingProduct);
             _products.splice(existingProductIndex, 1, action.product);
             ProductStore.emitChange();
             break;
        case ActionTypes.DELETE_PRODUCT :
            _.remove(_products, function(product){
                return action.id === product.id;
            });
            ProductStore.emitChange();
            break;
        default :
    }
});

module.exports = ProductStore;