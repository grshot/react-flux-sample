"use strict";

var React = require('react');

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
               <h1>Hola React!</h1>
               <p>A simple app demo using React Flux</p>
            </div>
        );
    }

});

module.exports = Home;