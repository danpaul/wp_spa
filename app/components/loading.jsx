var BaseComponent = require('../lib/baseComponent');
var React = require('react');

module.exports = BaseComponent.createClass({
	render: function() {
		if( !this.props.loading ){ return null; }
		return <div>
			<div className="loader" />
		</div>;
	}
});