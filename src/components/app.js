/*eslint-disable strict */ //we need some global vars

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('./common/header');
$ = jQuery = require('jquery');


var App = React.createClass({
    render: function () {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <RouteHandler />
                </div>
            </div>
        );

    }
});

module.exports = App;