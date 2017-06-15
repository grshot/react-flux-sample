"use strict";

var React = require('react');
var Input = require('../common/textInput');

var productForm = React.createClass({
    propTypes: {
        product: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
    render: function() {
        return (
            <form>
                <Input name="productName" label="Product Name" value={this.props.product.name} onChange={this.props.onChange} error={this.props.errors} />
                <input type="submit" value="Add" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = productForm;