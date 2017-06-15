"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Wooooops... Page Not Found!</h1>
                <Link to="app">Go Back to Home</Link>
            </div>
        );
    }
});

module.exports = NotFoundPage;