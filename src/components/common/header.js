"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="app" className="navbar-brand">React - Flux demo app</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="products">Products</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;